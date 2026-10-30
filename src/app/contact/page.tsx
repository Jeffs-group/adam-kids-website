import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactHero from "@/components/sections/contact/ContactHero";
import ContactInfoCards from "@/components/sections/contact/ContactInfoCards";
import EnquiryFormSection from "@/components/sections/contact/EnquiryFormSection";
import CampusMapSection from "@/components/sections/contact/CampusMapSection";
import ContactFAQSection from "@/components/sections/contact/ContactFAQSection";
import CTABanner from "@/components/ui/CTABanner";
import { schoolContact } from "@/data/nav";

export const metadata: Metadata = {
  title: "Contact Us | Enquire for Admission",
  description:
    "Get in touch with Adam Kids International Montessori School in Shanthinagar, Bangalore. Book a campus visit, enquire about admissions, or chat with us.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        {/* 1. Contact Hero */}
        <ContactHero />

        {/* 2. 4 Info Cards Overlapping Wave */}
        <ContactInfoCards />

        {/* 3. Enquiry Form & Steps Panel */}
        <EnquiryFormSection />

        {/* 4. Google Maps Campus Location */}
        <CampusMapSection />

        {/* 5. Accessible FAQ Accordion */}
        <ContactFAQSection />

        {/* 6. Centered CTA Banner */}
        <CTABanner
          variant="centered"
          heading="Come see where little ones flourish"
          paragraph="We welcome parents to visit our classrooms during morning sessions to witness the Montessori environment in action."
          primaryButtonText="Call Us"
          primaryButtonHref={schoolContact.phoneHref}
          secondaryButtonText="Chat on WhatsApp"
          secondaryButtonHref={schoolContact.whatsappUrl}
        />
      </main>
      <Footer variant="full" />
    </>
  );
}

