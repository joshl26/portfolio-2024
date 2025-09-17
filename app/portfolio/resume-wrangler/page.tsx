/* eslint-disable react/no-unescaped-entities */
import React from "react";
import ResumeWranglerSection from "@/app/ui/ResumeWranglerSection";
import Breadcrumb from "@/app/components/Breadcrumb/Breadcrumb";

// Enhanced metadata with better SEO (Resume Wrangler)
export const metadata = {
  title: "Resume Wrangler | Resume & Cover Letter Customization Tool",
  description:
    "Resume Wrangler is an innovative tool that helps job seekers generate tailored resumes and cover letters using intelligent matching algorithms and an intuitive UI.",
  keywords:
    "resume builder, cover letter generator, resume optimization, job application, career tools, Resume Wrangler",
  authors: [{ name: "Your Name" }], // replace with your name
  creator: "Your Name",
  publisher: "Your Name",
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
    url: "/portfolio/resume-wrangler/",
    title: "Resume Wrangler | Resume & Cover Letter Customization Tool",
    description:
      "Resume Wrangler helps job seekers create tailored, ATS-friendly resumes and cover letters with advanced customization and secure data handling.",
    siteName: "Your Site Name",
    images: [
      {
        url: "/og-resume-wrangler.jpg",
        width: 1200,
        height: 630,
        alt: "Resume Wrangler - Resume & Cover Letter Customization Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Resume Wrangler | Resume & Cover Letter Customization Tool",
    description:
      "Create tailored resumes and cover letters with Resume Wrangler — intelligent, secure, and easy to use.",
    images: ["/twitter-resume-wrangler.jpg"],
    creator: "@yourusername",
  },
  alternates: {
    canonical: "/portfolio/resume-wrangler/",
  },
  category: "Productivity",
};

const Page = () => {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Portfolio", url: "/portfolio/" },
    { name: "Resume Wrangler", url: "/portfolio/resume-wrangler/" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.06),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(245,158,11,0.06),transparent_50%)]" />

      <div className="relative z-10 max-w-screen-xl mx-auto px-6 xl:px-0 pt-8 pb-20">
        <Breadcrumb items={breadcrumbItems} />
        <header className="text-center max-w-3xl mx-auto mb-10">
          <h1 className="bg-gradient-to-r from-white via-amber-200 to-yellow-200 bg-clip-text text-transparent text-4xl md:text-5xl lg:text-6xl font-black mb-4">
            Resume Wrangler
          </h1>
          <p className="text-gray-300 text-lg md:text-xl">
            Intelligent resume and cover letter customization — tailored to job
            descriptions, optimized for ATS, and designed for a faster
            application workflow.
          </p>
        </header>

        <ResumeWranglerSection />
      </div>

      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Resume Wrangler",
            url: "/portfolio/resume-wrangler/",
            description:
              "Resume Wrangler helps users create tailored resumes and cover letters using intelligent matching algorithms and a user-friendly interface.",
            author: {
              "@type": "Person",
              name: "Your Name",
            },
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "/portfolio/resume-wrangler/",
            },
          }),
        }}
      />
    </main>
  );
};

export default Page;
