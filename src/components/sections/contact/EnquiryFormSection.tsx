"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, CheckCircle2, MessageCircle, Phone, Loader2, ChevronDown } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import FormField, { inputBaseClasses } from "@/components/ui/FormField";
import { enquirySchema, type EnquiryFormData } from "@/lib/validations/enquiry";
import { schoolContact } from "@/data/nav";
import { standardTransition } from "@/lib/motion";

interface EnquiryFormSectionProps {
  initialProgram?: string;
}

export default function EnquiryFormSection({ initialProgram = "" }: EnquiryFormSectionProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EnquiryFormData>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      parentName: "",
      phone: "",
      email: "",
      childName: "",
      childAge: "",
      program: initialProgram || "",
      preferredDate: "",
      message: "",
      website_honeypot: "",
    },
  });

  const onSubmit = async (data: EnquiryFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const resJson = await response.json();

      if (!response.ok) {
        // Fallback directly to FormSubmit
        const fsRes = await fetch("https://formsubmit.co/ajax/agnes6970@gmail.com", {
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
            "Programme": data.program,
            "Preferred Date": data.preferredDate || "Not specified",
            "Message": data.message || "None",
          }),
        });

        if (!fsRes.ok) {
          throw new Error(resJson.error || "Failed to submit enquiry. Please try again.");
        }
      }

      setIsSuccess(true);
      reset();
    } catch (err: unknown) {
      if (err instanceof Error) {
        setSubmitError(err.message);
      } else {
        setSubmitError("An unexpected error occurred. Please call us directly.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 md:py-28 bg-[#FFFBF0]">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Form Card */}
          <div className="lg:col-span-8 rounded-[32px] p-8 sm:p-12 bg-white border border-brown-900/10 shadow-soft-lg">
            <SectionLabel className="mb-2">ENQUIRE FOR ADMISSION</SectionLabel>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-brown-900 leading-tight mb-3">
              Book a visit or ask us anything
            </h2>
            <p className="font-body text-base text-brown-900/75 mb-8">
              Fill out the form below and our admissions coordinator will reach out to confirm your visit and discuss your child&apos;s journey.
            </p>

            <AnimatePresence mode="wait">
              {isSuccess ? (
                /* Animated Success State */
                <motion.div
                  key="success-message"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={standardTransition}
                  className="rounded-[28px] p-8 sm:p-12 bg-sage/30 border border-sage text-center flex flex-col items-center justify-center my-6"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 150,
                      damping: 14,
                    }}
                    className="w-16 h-16 rounded-full bg-sage flex items-center justify-center text-brown-900 mb-5 shadow-soft"
                  >
                    <CheckCircle2 className="w-10 h-10 text-brown-900" />
                  </motion.div>

                  <h3 className="font-heading font-bold text-2xl sm:text-3xl text-brown-900 mb-2">
                    Thank you! We&apos;ll be in touch.
                  </h3>
                  <p className="font-body text-base text-brown-900/80 max-w-md mx-auto mb-6 leading-relaxed">
                    We have received your admission enquiry. A coordinator from our Shanthinagar campus will call you within one business day.
                  </p>

                  <button
                    type="button"
                    onClick={() => setIsSuccess(false)}
                    className="px-6 py-2.5 rounded-full bg-brown-900 text-cream font-body font-semibold text-sm hover:bg-brown-700 transition-colors cursor-pointer"
                  >
                    Submit another enquiry
                  </button>
                </motion.div>
              ) : (
                /* The Enquiry Form */
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-6"
                  noValidate
                >
                  {/* Honeypot field (hidden from real users) */}
                  <input
                    type="text"
                    {...register("website_honeypot")}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                  />

                  {/* Row 1: Parent Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField
                      label="Parent / Guardian Name"
                      name="parentName"
                      required
                      error={errors.parentName?.message}
                    >
                      <input
                        id="parentName"
                        type="text"
                        placeholder="e.g. Priya Sharma"
                        {...register("parentName")}
                        className={inputBaseClasses}
                      />
                    </FormField>

                    <FormField
                      label="Phone Number"
                      name="phone"
                      required
                      error={errors.phone?.message}
                    >
                      <input
                        id="phone"
                        type="tel"
                        placeholder="e.g. 98765 43210"
                        {...register("phone")}
                        className={inputBaseClasses}
                      />
                    </FormField>
                  </div>

                  {/* Row 2: Email & Child's Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField
                      label="Email Address"
                      name="email"
                      required
                      error={errors.email?.message}
                    >
                      <input
                        id="email"
                        type="email"
                        placeholder="e.g. priya@example.com"
                        {...register("email")}
                        className={inputBaseClasses}
                      />
                    </FormField>

                    <FormField
                      label="Child's Name"
                      name="childName"
                      required
                      error={errors.childName?.message}
                    >
                      <input
                        id="childName"
                        type="text"
                        placeholder="e.g. Aarav"
                        {...register("childName")}
                        className={inputBaseClasses}
                      />
                    </FormField>
                  </div>

                  {/* Row 3: Child's Age & Programme of Interest */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField
                      label="Child's Age"
                      name="childAge"
                      required
                      error={errors.childAge?.message}
                    >
                      <div className="relative group">
                        <select
                          id="childAge"
                          {...register("childAge")}
                          className="w-full px-4 py-3.5 pr-11 rounded-2xl bg-cream/50 hover:bg-cream/80 border border-brown-900/15 text-brown-900 font-semibold text-base focus:outline-none focus:ring-2 focus:ring-caramel focus:border-caramel focus:bg-white transition-all min-h-[50px] appearance-none cursor-pointer shadow-2xs"
                        >
                          <option value="" className="text-brown-900/60 bg-cream">Select age range</option>
                          <option value="Under 2 years" className="text-brown-900 bg-white py-2">Under 2 years</option>
                          <option value="2 - 3 years" className="text-brown-900 bg-white py-2">2 – 3 years (Toddler / Pre-School)</option>
                          <option value="3 - 4 years" className="text-brown-900 bg-white py-2">3 – 4 years (Nursery)</option>
                          <option value="4 - 5 years" className="text-brown-900 bg-white py-2">4 – 5 years (LKG)</option>
                          <option value="5 - 6 years" className="text-brown-900 bg-white py-2">5 – 6 years (UKG)</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3.5 text-caramel transition-transform group-hover:translate-y-0.5">
                          <ChevronDown className="w-5 h-5 stroke-[2.5]" />
                        </div>
                      </div>
                    </FormField>

                    <FormField
                      label="Programme of Interest"
                      name="program"
                      required
                      error={errors.program?.message}
                    >
                      <div className="relative group">
                        <select
                          id="program"
                          {...register("program")}
                          className="w-full px-4 py-3.5 pr-11 rounded-2xl bg-cream/50 hover:bg-cream/80 border border-brown-900/15 text-brown-900 font-semibold text-base focus:outline-none focus:ring-2 focus:ring-caramel focus:border-caramel focus:bg-white transition-all min-h-[50px] appearance-none cursor-pointer shadow-2xs"
                        >
                          <option value="" className="text-brown-900/60 bg-cream">Select programme</option>
                          <option value="Day Care" className="text-brown-900 bg-white py-2">Day Care (1.5 – 6 Years)</option>
                          <option value="Pre-School" className="text-brown-900 bg-white py-2">Pre-School (2 – 3 Years)</option>
                          <option value="Nursery" className="text-brown-900 bg-white py-2">Nursery (3 – 4 Years)</option>
                          <option value="LKG" className="text-brown-900 bg-white py-2">LKG (4 – 5 Years)</option>
                          <option value="UKG" className="text-brown-900 bg-white py-2">UKG (5 – 6 Years)</option>
                          <option value="Not sure yet" className="text-brown-900 bg-white py-2">Not sure yet (Guidance requested)</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3.5 text-caramel transition-transform group-hover:translate-y-0.5">
                          <ChevronDown className="w-5 h-5 stroke-[2.5]" />
                        </div>
                      </div>
                    </FormField>
                  </div>

                  {/* Row 4: Preferred Visit Date */}
                  <FormField
                    label="Preferred Campus Visit Date (Optional)"
                    name="preferredDate"
                    error={errors.preferredDate?.message}
                  >
                    <div className="relative">
                      <input
                        id="preferredDate"
                        type="date"
                        {...register("preferredDate")}
                        className={inputBaseClasses}
                      />
                    </div>
                  </FormField>

                  {/* Row 5: Message */}
                  <FormField
                    label="Questions or Notes for the Facilitators"
                    name="message"
                    error={errors.message?.message}
                  >
                    <textarea
                      id="message"
                      rows={3}
                      placeholder="Tell us about your child's interests or any specific questions you have..."
                      {...register("message")}
                      className={`${inputBaseClasses} min-h-[96px] resize-y`}
                    />
                  </FormField>

                  {/* Error banner if submission failed */}
                  {submitError && (
                    <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-sm font-semibold">
                      {submitError}
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full bg-gradient-to-r from-brown-700 to-brown-900 text-white font-body font-bold text-base shadow-soft hover:shadow-soft-lg hover:-translate-y-0.5 active:scale-97 transition-all cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Sending Enquiry...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Enquiry</span>
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </AnimatePresence>
          </div>

          {/* Right: "What happens next?" Dark-Brown Card */}
          <div className="lg:col-span-4 rounded-[32px] p-8 sm:p-10 bg-gradient-to-br from-brown-900 to-[#35180D] text-cream shadow-soft-xl border border-brown-700/50 flex flex-col justify-between">
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-butter mb-3 font-body">
                ADMISSION PROCESS
              </span>
              <h3 className="font-heading font-bold text-2xl sm:text-3xl text-cream mb-6">
                What happens next?
              </h3>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-caramel/25 border border-caramel text-butter font-heading font-bold flex items-center justify-center flex-shrink-0 text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-base text-cream mb-1">
                      Quick Call
                    </h4>
                    <p className="font-body text-xs sm:text-sm text-cream/75 leading-relaxed">
                      We call you within one working day to answer any immediate queries.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-caramel/25 border border-caramel text-butter font-heading font-bold flex items-center justify-center flex-shrink-0 text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-base text-cream mb-1">
                      Campus Walkthrough
                    </h4>
                    <p className="font-body text-xs sm:text-sm text-cream/75 leading-relaxed">
                      Visit our Shanthinagar campus with your child to meet our teachers and explore the prepared environments.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-caramel/25 border border-caramel text-butter font-heading font-bold flex items-center justify-center flex-shrink-0 text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-base text-cream mb-1">
                      Enrolment Guidance
                    </h4>
                    <p className="font-body text-xs sm:text-sm text-cream/75 leading-relaxed">
                      Complete registration paperwork and receive an introductory orientation package.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
              <a
                href={schoolContact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-full bg-[#25D366] hover:bg-[#20b858] text-white font-body font-bold text-sm text-center flex items-center justify-center gap-2 shadow-soft transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={schoolContact.phoneHref}
                className="w-full py-3.5 px-6 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-cream font-body font-semibold text-sm text-center flex items-center justify-center gap-2 transition-all"
              >
                <Phone className="w-4 h-4 text-caramel" />
                <span>Direct: {schoolContact.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
