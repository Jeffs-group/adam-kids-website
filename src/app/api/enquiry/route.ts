import { NextResponse } from "next/server";
import { Resend } from "resend";
import { enquirySchema } from "@/lib/validations/enquiry";

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

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.ENQUIRY_TO_EMAIL || "admissions@adamkidsindia.com";

    if (!apiKey) {
      console.log(
        "[Adam Kids Enquiry Dev Mode] Resend API key not set. Enquiry payload:",
        {
          parentName: data.parentName,
          phone: data.phone,
          email: data.email,
          childName: data.childName,
          childAge: data.childAge,
          program: data.program,
          preferredDate: data.preferredDate || "Not specified",
          message: data.message || "None",
          receivedAt: new Date().toISOString(),
        }
      );

      return NextResponse.json({
        success: true,
        message: "Enquiry successfully received in development mode.",
      });
    }

    // Send email using Resend
    const resend = new Resend(apiKey);
    const emailResult = await resend.emails.send({
      from: "Adam Kids Admissions <onboarding@resend.dev>",
      to: [toEmail],
      replyTo: data.email,
      subject: `New Admission Enquiry: ${data.childName} (${data.program})`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #EBDDA0; border-radius: 12px; background-color: #FFF8E7;">
          <h2 style="color: #4E2717; margin-bottom: 16px;">New Admission Enquiry</h2>
          <p style="color: #6B3418; font-size: 14px;">A parent has requested information via the Adam Kids website.</p>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold; color: #4E2717;">Parent Name:</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">${data.parentName}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold; color: #4E2717;">Phone:</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">${data.phone}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold; color: #4E2717;">Email:</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">${data.email}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold; color: #4E2717;">Child's Name:</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">${data.childName}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold; color: #4E2717;">Child's Age:</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">${data.childAge}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold; color: #4E2717;">Programme of Interest:</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>${data.program}</strong></td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold; color: #4E2717;">Preferred Visit Date:</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">${data.preferredDate || "Flexible / Not selected"}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold; color: #4E2717;">Message:</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">${data.message || "No additional message."}</td>
            </tr>
          </table>

          <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #EBDDA0; font-size: 12px; color: #B8814F; text-align: center;">
            Adam Kids International Montessori School • Shanthinagar, Bangalore
          </div>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      data: emailResult,
      message: "Enquiry sent successfully",
    });
  } catch (error) {
    console.error("Enquiry API error:", error);
    return NextResponse.json(
      { error: "Internal Server Error processing enquiry" },
      { status: 500 }
    );
  }
}

