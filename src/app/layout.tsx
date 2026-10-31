import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.adamkidsindia.com"),
  title: {
    default: "Adam Kids International Montessori School | Shanthinagar, Bangalore",
    template: "%s | Adam Kids International Montessori School",
  },
  description:
    "An inviting Montessori school in Shanthinagar, Bangalore where children learn, explore, create, and grow — at their own pace, in a space made just for them.",
  keywords: [
    "Montessori School",
    "Bangalore Pre-school",
    "Shanthinagar Kindergarten",
    "Early Childhood Education",
    "Day Care Bangalore",
    "Playgroup Bangalore",
    "Adam Kids",
  ],
  authors: [{ name: "Adam Kids International Montessori School" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.adamkidsindia.com",
    siteName: "Adam Kids International Montessori School",
    title: "Adam Kids International Montessori School | Shanthinagar, Bangalore",
    description:
      "Little hands, big discoveries. An authentic Montessori learning environment fostering curiosity, independence, and care in Shanthinagar, Bangalore.",
    images: [
      {
        url: "/images/hero-kids.png",
        width: 1200,
        height: 630,
        alt: "Adam Kids International Montessori School",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32" },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

const schoolJsonLd = {
  "@context": "https://schema.org",
  "@type": "School",
  "name": "Adam Kids International Montessori School",
  "alternateName": "Adam Kids",
  "description":
    "An inviting Montessori school in Shanthinagar, Bangalore where children learn, explore, create, and grow at their own pace.",
  "url": "https://www.adamkidsindia.com",
  "telephone": "+91 93532 42432",
  "email": "hello@adamkidsindia.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Shanthinagar",
    "addressLocality": "Bangalore",
    "addressRegion": "Karnataka",
    "postalCode": "560027",
    "addressCountry": "IN",
  },
  "openingHours": "Mo-Fr 09:00-13:00",
  "priceRange": "$$",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schoolJsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-screen bg-cream text-brown-900 font-body antialiased flex flex-col selection:bg-caramel selection:text-white"
      >
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
