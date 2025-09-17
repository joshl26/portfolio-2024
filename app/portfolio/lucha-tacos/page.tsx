/* eslint-disable react/no-unescaped-entities */
import React from "react";
import LuchaTacosSection from "@/app/ui/LuchaTacosSection";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

// Enhanced metadata with better SEO
export const metadata = {
  title: "Lucha Tacos | Authentic Mexican Street Food",
  description:
    "Experience the bold flavors of Mexico with Lucha Tacos - authentic street food with a twist of excitement. Fresh ingredients, vibrant seasonings, and wrestling-inspired presentation.",
  keywords:
    "mexican food, tacos, street food, lucha libre, authentic mexican, fresh ingredients",
  authors: [{ name: "Your Name" }],
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
    url: "/portfolio/lucha-tacos/",
    title: "Lucha Tacos | Authentic Mexican Street Food",
    description:
      "Experience the bold flavors of Mexico with Lucha Tacos - authentic street food with a twist of excitement.",
    siteName: "Your Site Name",
    images: [
      {
        url: "/og-lucha-tacos.jpg",
        width: 1200,
        height: 630,
        alt: "Lucha Tacos - Authentic Mexican Street Food",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lucha Tacos | Authentic Mexican Street Food",
    description:
      "Experience the bold flavors of Mexico with Lucha Tacos - authentic street food with a twist of excitement.",
    images: ["/twitter-lucha-tacos.jpg"],
    creator: "@yourusername",
  },
  alternates: {
    canonical: "/portfolio/lucha-tacos/",
  },
  category: "Food & Beverage",
};

const Page = () => {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Portfolio", url: "/portfolio/" },
    { name: "Lucha Tacos", url: "/portfolio/lucha-tacos/" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden">
      {/* Enhanced background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(217,119,6,0.1),transparent_50%)]" />

      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-600/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="relative z-10 max-w-screen-xl mx-auto px-6 xl:px-0 pt-8">
        {/* Breadcrumb navigation */}
        <Breadcrumb items={breadcrumbItems} />

        <LuchaTacosSection />
      </div>

      {/* JSON-LD structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Lucha Tacos Project",
            description:
              "Authentic Mexican street food with a twist of excitement inspired by lucha libre culture",
            url: "/portfolio/lucha-tacos/",
            author: {
              "@type": "Person",
              name: "Your Name",
            },
            publisher: {
              "@type": "Person",
              name: "Your Name",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "/portfolio/lucha-tacos/",
            },
          }),
        }}
      />
    </main>
  );
};

export default Page;
