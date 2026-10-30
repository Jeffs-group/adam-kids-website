import { z } from "zod";

export const enquirySchema = z.object({
  parentName: z
    .string()
    .min(2, "Please enter your full name (at least 2 characters)"),
  phone: z
    .string()
    .min(10, "Please enter a valid 10-digit phone number")
    .regex(/^[0-9+ -]{10,15}$/, "Please enter a valid phone number"),
  email: z
    .string()
    .email("Please provide a valid email address so we can confirm your visit"),
  childName: z
    .string()
    .min(1, "Please provide your child's name"),
  childAge: z
    .string()
    .min(1, "Please select your child's age range"),
  program: z
    .string()
    .min(1, "Please select a program of interest"),
  preferredDate: z
    .string()
    .optional(),
  message: z
    .string()
    .optional(),
  // Honeypot for spam bots (must remain empty)
  website_honeypot: z
    .string()
    .optional(),
});

export type EnquiryFormData = z.infer<typeof enquirySchema>;

