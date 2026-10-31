import { NextResponse } from "next/server";
import { Resend } from "resend";
import { enquirySchema } from "@/lib/validations/enquiry";

const RECIPIENT_EMAIL = "agnes6970@gmail.com";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Re-validate payload with Zod schema
    const validationResult = enquirySchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        {
          error: "Validation failed",
          details: validationResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = validationResult.data;

    // Check honeypot field
    if (data.website_honeypot) {
      // Spam bot detected, return simulated success silently
      return NextResponse.json({ success: true, message: "Enquiry submitted" });
    }

    let formSubmitSuccess = false;

    // 1. Send via FormSubmit directly to agnes6970@gmail.com
    try {
      const formSubmitResponse = await fetch(`https://formsubmit.co/ajax/${RECIPIENT_EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `New Admission Enquiry: ${data.childName} (${data.program}) - Adam Kids`,
          _replyto: data.email,
          _template: "table",
          _captcha: "false",
          "Parent Name": data.parentName,
          "Phone Number": data.phone,
          "Email Address": data.email,
          "Child's Name": data.childName,
          "Child's Age": data.childAge,
          "Programme of Interest": data.program,
          "Preferred Visit Date": data.preferredDate || "Flexible / Not specified",
          "Parent's Message": data.message || "No additional message provided.",
          "Campus Location": "Shanthinagar, Bangalore",
          "School": "Adam Kids International Montessori School",
        }),
      });

      if (formSubmitResponse.ok) {
        formSubmitSuccess = true;
      }
    } catch (fsErr) {
      console.warn("FormSubmit fetch attempt error:", fsErr);
    }

    // 2. If RESEND_API_KEY is configured, also send beautifully styled HTML template in website theme
    const apiKey = process.env.RESEND_API_KEY;
    if (apiKey) {
      try {
        const resend = new Resend(apiKey);
        await resend.emails.send({
          from: "Adam Kids Admissions <onboarding@resend.dev>",
          to: [RECIPIENT_EMAIL],
          replyTo: data.email,
          subject: `🌟 New Admission Enquiry: ${data.childName} (${data.program}) - Adam Kids`,
          html: `
            <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #FFF8E7; border: 2px solid #EBDDA0; border-radius: 24px; overflow: hidden; box-shadow: 0 10px 25px rgba(78,39,23,0.08);">
              <!-- Header in website theme -->
              <div style="background: linear-gradient(135deg, #6B3418 0%, #4E2717 100%); padding: 32px 28px; text-align: center; color: #FFF8E7;">
                <h1 style="margin: 0 0 6px 0; font-size: 24px; font-weight: bold; letter-spacing: -0.5px; color: #FFF8E7;">Adam Kids International Montessori</h1>
                <p style="margin: 0; font-size: 13px; color: #EBDDA0; text-transform: uppercase; letter-spacing: 2px; font-weight: 600;">Shanthinagar, Bangalore • Admission Enquiry</p>
              </div>

              <!-- Main Content Body -->
              <div style="padding: 32px 28px;">
                <div style="background-color: #FFFFFF; border: 1px solid #E3B0A0; border-radius: 18px; padding: 22px; margin-bottom: 24px;">
                  <h2 style="margin: 0 0 14px 0; color: #4E2717; font-size: 18px;">Parent & Child Details</h2>
                  
                  <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                    <tr>
                      <td style="padding: 10px 0; border-bottom: 1px solid #FFF3D1; color: #6B3418; font-weight: 600; width: 40%;">Parent Name:</td>
                      <td style="padding: 10px 0; border-bottom: 1px solid #FFF3D1; color: #4E2717; font-weight: bold;">${data.parentName}</td>
                    </tr>
                    <tr>
                      <td style="padding: 10px 0; border-bottom: 1px solid #FFF3D1; color: #6B3418; font-weight: 600;">Phone Number:</td>
                      <td style="padding: 10px 0; border-bottom: 1px solid #FFF3D1; color: #4E2717;">
                        <a href="tel:${data.phone}" style="color: #B8814F; text-decoration: none; font-weight: bold;">${data.phone}</a>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 10px 0; border-bottom: 1px solid #FFF3D1; color: #6B3418; font-weight: 600;">Email Address:</td>
                      <td style="padding: 10px 0; border-bottom: 1px solid #FFF3D1; color: #4E2717;">
                        <a href="mailto:${data.email}" style="color: #B8814F; text-decoration: none;">${data.email}</a>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 10px 0; border-bottom: 1px solid #FFF3D1; color: #6B3418; font-weight: 600;">Child's Name:</td>
                      <td style="padding: 10px 0; border-bottom: 1px solid #FFF3D1; color: #4E2717; font-weight: bold;">${data.childName}</td>
                    </tr>
                    <tr>
                      <td style="padding: 10px 0; border-bottom: 1px solid #FFF3D1; color: #6B3418; font-weight: 600;">Child's Age:</td>
                      <td style="padding: 10px 0; border-bottom: 1px solid #FFF3D1; color: #4E2717;">${data.childAge}</td>
                    </tr>
                    <tr>
                      <td style="padding: 10px 0; border-bottom: 1px solid #FFF3D1; color: #6B3418; font-weight: 600;">Programme:</td>
                      <td style="padding: 10px 0; border-bottom: 1px solid #FFF3D1;">
                        <span style="display: inline-block; padding: 4px 12px; background-color: #EBDDA0; color: #4E2717; border-radius: 12px; font-weight: bold; font-size: 13px;">${data.program}</span>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 10px 0; border-bottom: 1px solid #FFF3D1; color: #6B3418; font-weight: 600;">Preferred Date:</td>
                      <td style="padding: 10px 0; border-bottom: 1px solid #FFF3D1; color: #4E2717;">${data.preferredDate || "Flexible / Not specified"}</td>
                    </tr>
                    <tr>
                      <td style="padding: 10px 0; color: #6B3418; font-weight: 600; vertical-align: top;">Message:</td>
                      <td style="padding: 10px 0; color: #4E2717; line-height: 1.5;">${data.message || "No additional message."}</td>
                    </tr>
                  </table>
                </div>

                <div style="text-align: center; font-size: 12px; color: #B8814F; padding-top: 12px;">
                  <p style="margin: 0 0 4px 0;">Adam Kids International Montessori School</p>
                  <p style="margin: 0; color: #6B3418;">Shanthinagar, Bangalore • Phone: +91 93532 42432</p>
                </div>
              </div>
            </div>
          `,
        });
      } catch (resendErr) {
        console.warn("Resend email attempt error:", resendErr);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Enquiry submitted successfully to agnes6970@gmail.com",
      deliveredViaFormSubmit: formSubmitSuccess,
    });
  } catch (error) {
    console.error("Enquiry API error:", error);
    return NextResponse.json(
      { error: "Internal Server Error processing enquiry" },
      { status: 500 }
    );
  }
}
