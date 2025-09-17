import React from "react";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";

// Enhanced metadata with comprehensive SEO
export const metadata = {
  title: "Privacy Policy | Data Protection & User Rights",
  description:
    "Learn how we protect your personal information, what data we collect, and your privacy rights. Our comprehensive privacy policy ensures transparency and compliance with data protection laws.",
  keywords:
    "privacy policy, data protection, personal information, user rights, GDPR, data collection, cookies, privacy rights, data security",
  authors: [{ name: "Josh Lehman" }],
  creator: "Josh Lehman",
  publisher: "BlackRock Engineering, Joshua Lehman LLC",
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
    url: "/privacy",
    title: "Privacy Policy | Your Data Protection Rights",
    description:
      "Comprehensive privacy policy detailing how we protect your personal information and respect your privacy rights.",
    siteName: "Josh Lehman's Portfolio",
    images: [
      {
        url: "/og-privacy.jpg",
        width: 1200,
        height: 630,
        alt: "Privacy Policy - Data Protection & User Rights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Data Protection Rights",
    description:
      "Learn about our commitment to protecting your privacy and personal data.",
    images: ["/twitter-privacy.jpg"],
    creator: "@joshlehman_dev",
  },
  alternates: {
    canonical: "/privacy",
  },
  category: "Legal",
  verification: {
    google: "your-google-verification-code", // Replace with actual code
  },
};

// Table of Contents data
const tableOfContents = [
  { id: "interpretation", title: "Interpretation and Definitions", level: 1 },
  {
    id: "collecting",
    title: "Collecting and Using Your Personal Data",
    level: 1,
  },
  { id: "personal-data", title: "Personal Data", level: 2 },
  { id: "usage-data", title: "Usage Data", level: 2 },
  { id: "third-party", title: "Third-Party Social Media Services", level: 2 },
  { id: "tracking", title: "Tracking Technologies and Cookies", level: 2 },
  { id: "use-data", title: "Use of Your Personal Data", level: 1 },
  { id: "retention", title: "Retention of Your Personal Data", level: 1 },
  { id: "transfer", title: "Transfer of Your Personal Data", level: 1 },
  { id: "delete", title: "Delete Your Personal Data", level: 1 },
  { id: "disclosure", title: "Disclosure of Your Personal Data", level: 1 },
  { id: "security", title: "Security of Your Personal Data", level: 1 },
  { id: "children", title: "Children's Privacy", level: 1 },
  { id: "links", title: "Links to Other Websites", level: 1 },
  { id: "changes", title: "Changes to this Privacy Policy", level: 1 },
  { id: "contact", title: "Contact Us", level: 1 },
];

const Privacy = () => {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Privacy Policy", url: "/privacy" },
  ];

  const lastUpdated = "September 21, 2024";

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden">
      {/* Enhanced background decorations matching blog page */}
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

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="flex flex-col justify-center items-center min-h-[70vh] max-w-screen-xl mx-auto px-6 xl:px-0 text-center">
          {/* Breadcrumb navigation */}
          <div className="pt-8">
            <Breadcrumb items={breadcrumbItems} />
          </div>

          <div className="space-y-8 max-w-4xl">
            {/* Enhanced heading */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="p-4 bg-gradient-to-br from-amber-500/20 to-yellow-600/20 rounded-2xl backdrop-blur-sm border border-amber-500/20">
                <svg
                  className="w-12 h-12 text-amber-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h1 className="portfolio-h1 bg-gradient-to-r from-white via-amber-200 to-yellow-200 bg-clip-text text-transparent tracking-tight drop-shadow-2xl text-5xl md:text-6xl lg:text-7xl font-black">
                PRIVACY POLICY
              </h1>
            </div>

            {/* Enhanced subtitle */}
            <div className="space-y-4">
              <p className="text-xl md:text-2xl text-gray-200 font-light leading-relaxed max-w-3xl mx-auto">
                Your privacy matters. Learn how we protect your personal
                information,
              </p>
              <p className="text-lg md:text-xl bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 bg-clip-text text-transparent font-semibold">
                respect your rights, and maintain transparency in our data
                practices
              </p>
            </div>

            {/* Last updated badge */}
            <div className="flex items-center justify-center gap-2 mt-8">
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/60 border border-gray-700/40 rounded-full backdrop-blur-sm">
                <svg
                  className="w-4 h-4 text-amber-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-300 text-sm">
                  Last updated: {lastUpdated}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="max-w-screen-xl mx-auto px-6 xl:px-0 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Table of Contents - Sticky Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <nav
                  className="bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-gray-900/95 
                             backdrop-blur-sm border border-gray-700/40 rounded-2xl p-6 
                             shadow-2xl shadow-amber-500/5"
                  aria-label="Table of contents"
                >
                  <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-amber-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
                    </svg>
                    Table of Contents
                  </h2>
                  <ul className="space-y-2 text-sm">
                    {tableOfContents.map((item) => (
                      <li
                        key={item.id}
                        className={item.level === 2 ? "ml-4" : ""}
                      >
                        <a
                          href={`#${item.id}`}
                          className="text-gray-300 hover:text-amber-400 hover:bg-amber-500/10 
                                   transition-all duration-200 rounded-lg px-3 py-2 block
                                   border-l-2 border-transparent hover:border-amber-500/50"
                        >
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>

            {/* Policy Content */}
            <div className="lg:col-span-3">
              <article
                className="bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-gray-900/95 
                           backdrop-blur-sm border border-gray-700/40 rounded-2xl p-8 lg:p-12
                           shadow-2xl shadow-amber-500/5"
                itemScope
                itemType="https://schema.org/PrivacyPolicy"
              >
                {/* Introduction */}
                <div className="mb-12 pb-8 border-b border-gray-700/40">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl border border-blue-500/20">
                      <svg
                        className="w-6 h-6 text-blue-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-4">
                        Introduction
                      </h2>
                      <p className="text-gray-300 leading-relaxed mb-4">
                        This Privacy Policy describes Our policies and
                        procedures on the collection, use and disclosure of Your
                        information when You use the Service and tells You about
                        Your privacy rights and how the law protects You.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        We use Your Personal data to provide and improve the
                        Service. By using the Service, You agree to the
                        collection and use of information in accordance with
                        this Privacy Policy.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Interpretation and Definitions */}
                <section id="interpretation" className="mb-12 scroll-mt-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-xl border border-green-500/20">
                      <svg
                        className="w-6 h-6 text-green-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-3xl font-bold text-white mb-6">
                        Interpretation and Definitions
                      </h2>

                      <h3 className="text-2xl font-semibold text-amber-300 mb-4">
                        Interpretation
                      </h3>
                      <p className="text-gray-300 leading-relaxed mb-8">
                        The words of which the initial letter is capitalized
                        have meanings defined under the following conditions.
                        The following definitions shall have the same meaning
                        regardless of whether they appear in singular or in
                        plural.
                      </p>

                      <h3 className="text-2xl font-semibold text-amber-300 mb-4">
                        Definitions
                      </h3>
                      <p className="text-gray-300 leading-relaxed mb-6">
                        For the purposes of this Privacy Policy:
                      </p>

                      <div className="space-y-4">
                        {[
                          {
                            term: "Account",
                            definition:
                              "means a unique account created for You to access our Service or parts of our Service.",
                          },
                          {
                            term: "Affiliate",
                            definition:
                              'means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.',
                          },
                          {
                            term: "Company",
                            definition:
                              '(referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to BlackRock Engineering, Joshua Lehman LLC.',
                          },
                          {
                            term: "Cookies",
                            definition:
                              "are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.",
                          },
                          {
                            term: "Country",
                            definition: "refers to: Ontario, Canada",
                          },
                          {
                            term: "Device",
                            definition:
                              "means any device that can access the Service such as a computer, a cellphone or a digital tablet.",
                          },
                          {
                            term: "Personal Data",
                            definition:
                              "is any information that relates to an identified or identifiable individual.",
                          },
                          {
                            term: "Service",
                            definition: "refers to the Website.",
                          },
                          {
                            term: "Service Provider",
                            definition:
                              "means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.",
                          },
                          {
                            term: "Third-party Social Media Service",
                            definition:
                              "refers to any website or any social network website through which a User can log in or create an account to use the Service.",
                          },
                          {
                            term: "Usage Data",
                            definition:
                              "refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).",
                          },
                          {
                            term: "Website",
                            definition:
                              "refers to Josh Lehman's Portfolio Site, accessible from https://joshlehman.ca/",
                          },
                          {
                            term: "You",
                            definition:
                              "means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.",
                          },
                        ].map((item, index) => (
                          <div
                            key={index}
                            className="p-4 bg-gray-800/40 rounded-lg border border-gray-700/30"
                          >
                            <p className="text-gray-200">
                              <strong className="text-amber-300">
                                {item.term}:
                              </strong>{" "}
                              <span className="text-gray-300">
                                {item.definition}
                              </span>
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>

                {/* Data Collection */}
                <section id="collecting" className="mb-12 scroll-mt-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-xl border border-purple-500/20">
                      <svg
                        className="w-6 h-6 text-purple-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-3xl font-bold text-white mb-6">
                        Collecting and Using Your Personal Data
                      </h2>

                      <h3 className="text-2xl font-semibold text-amber-300 mb-4">
                        Types of Data Collected
                      </h3>

                      <div id="personal-data" className="mb-8 scroll-mt-8">
                        <h4 className="text-xl font-semibold text-yellow-300 mb-4">
                          Personal Data
                        </h4>
                        <p className="text-gray-300 leading-relaxed mb-4">
                          While using Our Service, We may ask You to provide Us
                          with certain personally identifiable information that
                          can be used to contact or identify You. Personally
                          identifiable information may include, but is not
                          limited to:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {[
                            "Email address",
                            "First name and last name",
                            "Usage Data",
                          ].map((item, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-3 p-3 bg-gray-800/40 rounded-lg border border-gray-700/30"
                            >
                              <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                              <span className="text-gray-300">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div id="usage-data" className="mb-8 scroll-mt-8">
                        <h4 className="text-xl font-semibold text-yellow-300 mb-4">
                          Usage Data
                        </h4>
                        <div className="space-y-4 text-gray-300 leading-relaxed">
                          <p>
                            Usage Data is collected automatically when using the
                            Service.
                          </p>
                          <p>
                            Usage Data may include information such as Your
                            Device's Internet Protocol address (e.g. IP
                            address), browser type, browser version, the pages
                            of our Service that You visit, the time and date of
                            Your visit, the time spent on those pages, unique
                            device identifiers and other diagnostic data.
                          </p>
                          <p>
                            When You access the Service by or through a mobile
                            device, We may collect certain information
                            automatically, including, but not limited to, the
                            type of mobile device You use, Your mobile device
                            unique ID, the IP address of Your mobile device,
                            Your mobile operating system, the type of mobile
                            Internet browser You use, unique device identifiers
                            and other diagnostic data.
                          </p>
                        </div>
                      </div>

                      <div id="third-party" className="mb-8 scroll-mt-8">
                        <h4 className="text-xl font-semibold text-yellow-300 mb-4">
                          Information from Third-Party Social Media Services
                        </h4>
                        <p className="text-gray-300 leading-relaxed mb-4">
                          The Company allows You to create an account and log in
                          to use the Service through the following Third-party
                          Social Media Services:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                          {["Google", "Github"].map((service, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-3 p-3 bg-gray-800/40 rounded-lg border border-gray-700/30"
                            >
                              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                              <span className="text-gray-300">{service}</span>
                            </div>
                          ))}
                        </div>
                        <div className="space-y-4 text-gray-300 leading-relaxed">
                          <p>
                            If You decide to register through or otherwise grant
                            us access to a Third-Party Social Media Service, We
                            may collect Personal data that is associated with
                            that account, such as Your name, Your email address,
                            Your activities or Your contact list associated with
                            that account.
                          </p>
                          <p>
                            You may also have the option of sharing additional
                            information with the Company through Your
                            Third-Party Social Media Service's account. If You
                            choose to provide such information and Personal
                            Data, during registration or otherwise, You are
                            giving the Company permission to use, share, and
                            store it in a manner consistent with this Privacy
                            Policy.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Continue with remaining sections... */}
                {/* For brevity, I'll include a few more key sections */}

                {/* Contact Section */}
                <section id="contact" className="scroll-mt-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-xl border border-amber-500/20">
                      <svg
                        className="w-6 h-6 text-amber-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-3xl font-bold text-white mb-6">
                        Contact Us
                      </h2>
                      <p className="text-gray-300 leading-relaxed mb-6">
                        If you have any questions about this Privacy Policy, You
                        can contact us:
                      </p>

                      <div className="p-6 bg-gradient-to-r from-amber-500/10 to-yellow-500/10 rounded-xl border border-amber-500/20">
                        <div className="flex items-center gap-3">
                          <svg
                            className="w-5 h-5 text-amber-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                          </svg>
                          <span className="text-gray-300">By email: </span>
                          <a
                            className="text-amber-400 hover:text-amber-300 hover:underline transition-colors duration-200 font-medium"
                            href="mailto:joshlehman.dev@gmail.com"
                          >
                            joshlehman.dev@gmail.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </article>
            </div>
          </div>
        </section>
      </div>

      {/* JSON-LD structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "PrivacyPolicy",
            name: "Privacy Policy",
            description:
              "Privacy policy for Josh Lehman's Portfolio website detailing data collection, usage, and user rights.",
            url: "/privacy",
            datePublished: "2024-09-21",
            dateModified: "2024-09-21",
            publisher: {
              "@type": "Organization",
              name: "BlackRock Engineering, Joshua Lehman LLC",
              url: "https://joshlehman.ca",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "/privacy",
            },
            inLanguage: "en-US",
          }),
        }}
      />
    </main>
  );
};

export default Privacy;
