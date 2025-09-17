/* eslint-disable react/no-unescaped-entities */
import { getGuestbookEntries } from "@/app/db/queries";
import { SignIn, SignOut } from "./buttons";
import { Suspense } from "react";
import Form from "./form";
import { options } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";

// Enhanced metadata with better SEO
export const metadata = {
  title: "Guestbook | Interactive Visitor Messages",
  description:
    "Sign my interactive guestbook and leave your message. Connect with other visitors through this shared digital space.",
  keywords:
    "guestbook, visitor messages, interactive, digital guestbook, community",
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
    url: "/guestbook/",
    title: "Guestbook | Interactive Visitor Messages",
    description:
      "Sign my interactive guestbook and leave your message. Connect with other visitors through this shared digital space.",
    siteName: "Your Site Name",
    images: [
      {
        url: "/og-guestbook.jpg",
        width: 1200,
        height: 630,
        alt: "Interactive Guestbook - Leave Your Message",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Guestbook | Interactive Visitor Messages",
    description:
      "Sign my interactive guestbook and leave your message. Connect with other visitors through this shared digital space.",
    images: ["/twitter-guestbook.jpg"],
    creator: "@yourusername",
  },
  alternates: {
    canonical: "/guestbook/",
  },
  category: "Community",
};

export default async function GuestbookPage() {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Guestbook", url: "/guestbook/" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.06),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(245,158,11,0.06),transparent_50%)]" />

      <div className="relative z-10 max-w-screen-xl mx-auto px-6 xl:px-0 pt-8 pb-20">
        <Breadcrumb items={breadcrumbItems} />

        <section className="text-center mb-16">
          <h1 className="bg-gradient-to-r from-white via-amber-200 to-yellow-200 bg-clip-text text-transparent text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            GUESTBOOK
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Leave your mark in this interactive digital space. Connect with
            other visitors through shared messages.
          </p>
        </section>

        <section className="w-full min-h-[70vh] flex items-center justify-center">
          <div className="w-full max-w-2xl bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-gray-900/95 backdrop-blur-sm shadow-2xl shadow-indigo-500/5 border border-gray-700/40 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Sign My Interactive Guestbook
            </h2>
            <div className="space-y-8">
              <Suspense
                fallback={
                  <div className="animate-pulse bg-gray-800 h-32 rounded-lg" />
                }
              >
                <GuestbookForm />
              </Suspense>

              <div className="border-t border-gray-700/50 pt-8">
                <h3 className="text-xl font-semibold text-white mb-6">
                  Recent Messages
                </h3>
                <Suspense
                  fallback={
                    <div className="animate-pulse space-y-4">
                      <div className="h-4 bg-gray-800 rounded"></div>
                      <div className="h-4 bg-gray-800 rounded"></div>
                    </div>
                  }
                >
                  <GuestbookEntries />
                </Suspense>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Guestbook",
            description:
              "Interactive guestbook where visitors can leave messages and connect with others",
            url: "/guestbook/",
            author: {
              "@type": "Person",
              name: "Your Name",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "/guestbook/",
            },
          }),
        }}
      />
    </main>
  );
}

async function GuestbookForm() {
  const session = await getServerSession(options);

  return (
    <div className="space-y-6">
      {session?.user ? (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-gray-300">
              Signed in as{" "}
              <span className="text-amber-400 font-medium">
                {session.user.name}
              </span>
            </p>
            <SignOut />
          </div>
          <Form />
        </div>
      ) : (
        <div className="text-center py-8">
          <p className="text-gray-300 mb-6">
            Please sign in to leave a message in the guestbook
          </p>
          <SignIn />
        </div>
      )}
    </div>
  );
}

async function GuestbookEntries() {
  let entries = await getGuestbookEntries();

  if (entries.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500 italic">
          No messages yet. Be the first to sign!
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4 max-h-96 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
      {entries.map((entry: any) => (
        <div
          key={entry.id}
          className="p-4 bg-gray-800/50 rounded-lg border border-gray-700/30 hover:border-amber-500/30 transition-colors duration-200"
        >
          <div className="flex justify-between items-start mb-2">
            <span className="text-amber-400 font-medium">
              {entry.created_by}
            </span>
            <span className="text-xs text-gray-500">
              {new Date(entry.created_at).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>
          <p className="text-gray-300 break-words">{entry.body}</p>
        </div>
      ))}
    </div>
  );
}
