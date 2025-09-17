// app/page.tsx (Server Component)
import Home from "./components/Home/Home"; // Adjust path to your Home component
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Full-Stack Software Developer",
  description:
    "Experienced full-stack software developer specializing in React, Next.js, and modern web technologies. Creating pragmatic and thoughtful digital solutions since 2018.",
  keywords: [
    "full stack developer",
    "software engineer",
    "React developer",
    "Next.js developer",
    "JavaScript developer",
    "TypeScript developer",
    "web development",
    "portfolio",
  ],
  authors: [{ name: "Joshua Lehman" }],
  creator: "Joshua Lehman",
  publisher: "Joshua Lehman",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://joshlehman.ca",
    title: "Portfolio | Full-Stack Software Developer",
    description:
      "Experienced full-stack software developer specializing in React, Next.js, and modern web technologies.",
    siteName: "Joshua Lehman - Portfolio",
    images: [
      {
        url: "https://joshlehman.ca/og-image.png",
        width: 1200,
        height: 630,
        alt: "Full-Stack Software Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Full-Stack Software Developer",
    description:
      "Experienced full-stack software developer specializing in React, Next.js, and modern web technologies.",
    creator: "@yourhandle",
    images: ["https://joshlehman.ca/og-image.jpg"],
  },
  alternates: {
    canonical: "https://joshlehman.ca",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

// Generate structured data for enhanced SEO
function generateStructuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://joshlehman.ca/#person",
        name: "Joshua Lehman",
        jobTitle: "Full-Stack Software Developer",
        description:
          "Experienced full-stack software developer specializing in React, Next.js, and modern web technologies. Creating pragmatic and thoughtful digital solutions since 2018.",
        url: "https://joshlehman.ca",
        image: {
          "@type": "ImageObject",
          url: "https://joshlehman.ca/profile-image.jpg",
          width: 400,
          height: 400,
        },
        sameAs: [
          "https://linkedin.com/in/yourprofile",
          "https://github.com/joshl26",
        ],
        worksFor: {
          "@type": "Organization",
          name: "Freelance Software Developer",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://joshlehman.ca/#website",
        url: "https://joshlehman.ca",
        name: "Joshua Lehman - Portfolio",
        description:
          "Portfolio website showcasing full-stack software development projects and expertise",
        publisher: {
          "@id": "https://joshlehman.ca/#person",
        },
      },
    ],
  };
}

// Optimize for static generation and improve first load JS
export const dynamic = "force-static";
export const revalidate = 3600; // Revalidate at most once per hour

export default function Page() {
  const structuredData = generateStructuredData();

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        suppressHydrationWarning
      />

      {/* Your Home component */}
      <Home />
    </>
  );
}
