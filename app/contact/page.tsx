// app/contact/page.tsx
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import ContactSection from "../ui/ContactSection";

// Enhanced metadata with SEO best practices
export const metadata = {
  title: "Contact | Blackrock Design - Get in Touch",
  description:
    "Reach out for collaborations, inquiries, or to schedule a meeting. I'm available for full-stack development, embedded systems, and industrial IoT projects.",
  keywords: [
    "contact",
    "full stack developer",
    "mechanical engineer",
    "consultation",
    "project inquiry",
    "calendly",
    "email",
  ],
  authors: [{ name: "Blackrock Design" }],
  creator: "Blackrock Design",
  publisher: "Blackrock Design",
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
  alternates: {
    canonical: "/contact/",
  },
  openGraph: {
    title: "Contact | Blackrock Design",
    description:
      "Get in touch for software development, engineering projects, or consultations.",
    type: "website",
    locale: "en_US",
    siteName: "Blackrock Design",
    url: "/contact/",
  },
  twitter: {
    card: "summary",
    title: "Contact | Blackrock Design",
    description:
      "Reach out for collaborations, inquiries, or to schedule a meeting.",
  },
};

export default function Contact() {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Contact", url: "/contact/" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="hidden lg:block absolute -top-24 -left-24 w-80 h-80 rounded-full bg-amber-600/6 blur-3xl transform rotate-45" />
        <div className="hidden lg:block absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-amber-400/6 blur-3xl transform -rotate-12" />
      </div>

      <div className="relative z-10 max-w-screen-xl mx-auto px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <div className="pt-4">
          <Breadcrumb items={breadcrumbItems} />
        </div>

        {/* Hero */}
        <section className="flex flex-col items-center text-center min-h-[40vh] justify-center py-10">
          <h1
            className="portfolio-h1 bg-gradient-to-r from-white via-amber-200 to-yellow-200 
                        bg-clip-text text-transparent mb-8 tracking-tight
                        drop-shadow-2xl text-6xl md:text-7xl lg:text-8xl font-black"
          >
            CONTACT
          </h1>

          <div className="mt-4 w-24 h-1 rounded-full bg-gradient-to-r from-amber-300 to-yellow-500" />

          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl">
            Have a project in mind or want to discuss engineering solutions?
            Reach out via email or schedule a meeting.
          </p>
        </section>

        {/* Contact Section */}
        <ContactSection />
      </div>

      {/* JSON-LD for ContactPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact — Blackrock Design",
            description:
              "Get in touch for software development, engineering projects, or consultations.",
            url: "/contact/",
          }),
        }}
      />
    </main>
  );
}
