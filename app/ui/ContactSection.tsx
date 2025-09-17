// ui/ContactSection.tsx
"use client";

import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import CalendlyEmbed from "./CalendlyEmbed";

export default function ContactSection() {
  const EMAIL_JS_SERVICEID = process.env.NEXT_PUBLIC_EMAIL_JS_SERVICEID;
  const EMAIL_JS_TEMPLATEID = process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATEID;
  const EMAIL_JS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY;

  const [emailSent, setEmailSent] = useState(false);
  const [confirmReceipt, setConfirmReceipt] = useState(false);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const form = useRef<HTMLFormElement>(null);

  // Initialize EmailJS once
  useEffect(() => {
    if (EMAIL_JS_PUBLIC_KEY) {
      emailjs.init(EMAIL_JS_PUBLIC_KEY);
    }
  }, [EMAIL_JS_PUBLIC_KEY]);

  // Auto-reset form after success
  useEffect(() => {
    if (confirmReceipt) {
      const timer = setTimeout(() => {
        resetForm();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [confirmReceipt]);

  const resetForm = () => {
    setEmailSent(false);
    setConfirmReceipt(false);
    setEmailError(null);
    setIsLoading(false);
    if (form.current) {
      form.current.reset();
    }
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      isLoading ||
      !form.current ||
      !EMAIL_JS_SERVICEID ||
      !EMAIL_JS_TEMPLATEID
    ) {
      return;
    }

    setIsLoading(true);
    setEmailSent(true);
    setEmailError(null);

    try {
      const result = await emailjs.sendForm(
        EMAIL_JS_SERVICEID,
        EMAIL_JS_TEMPLATEID,
        form.current
      );
      console.log("Email sent successfully:", result.text);
      setConfirmReceipt(true);
    } catch (error: any) {
      console.error("Email sending failed:", error);
      setEmailError(
        error.text || "Failed to send message. Please try again later."
      );
      setEmailSent(false);
    } finally {
      setIsLoading(false);
    }
  };

  // Fallback if env vars missing
  if (!EMAIL_JS_SERVICEID || !EMAIL_JS_TEMPLATEID || !EMAIL_JS_PUBLIC_KEY) {
    console.error("EmailJS environment variables are missing");
    return (
      <section className="py-12 max-w-4xl mx-auto text-center">
        <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8">
          <p className="text-gray-300">
            Contact form is temporarily unavailable. Please reach out directly
            via email.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Calendly */}
        <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/70 border border-gray-700/40 rounded-2xl p-8 shadow-xl">
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-500 mb-6">
            Schedule a Meeting
          </h2>
          <CalendlyEmbed url="https://calendly.com/joshlehman-dev/30-min-coffee-chat-with-josh" />
        </div>

        {/* Email Form */}
        <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/70 border border-gray-700/40 rounded-2xl p-8 shadow-xl">
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-500 mb-6">
            Send a Message
          </h2>

          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Name
              </label>
              <input
                placeholder="Full name"
                autoComplete="name"
                required
                type="text"
                name="name"
                id="name"
                disabled={emailSent}
                className="w-full px-4 py-3 bg-gray-800/60 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Email
              </label>
              <input
                placeholder="Email address"
                autoComplete="email"
                required
                type="email"
                name="email"
                id="email"
                disabled={emailSent}
                className="w-full px-4 py-3 bg-gray-800/60 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Message
              </label>
              <textarea
                placeholder="Type your message"
                required
                name="message"
                id="message"
                rows={5}
                disabled={emailSent}
                className="w-full px-4 py-3 bg-gray-800/60 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
              />
            </div>

            <div>
              {!emailSent && !confirmReceipt ? (
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 px-6 bg-gradient-to-r from-amber-500 to-yellow-500 text-gray-900 font-semibold rounded-lg shadow-md hover:opacity-90 transition-opacity disabled:opacity-70"
                >
                  {isLoading ? "Sending..." : "Send Message"}
                </button>
              ) : confirmReceipt ? (
                <div className="text-center py-4">
                  <p className="text-green-400 font-medium">
                    Message received! Check your inbox to confirm.
                  </p>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="mt-4 py-2 px-5 bg-gray-700 text-gray-200 rounded-lg hover:bg-gray-600 transition"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <p className="text-amber-400 text-center py-2">
                  Message sent, awaiting confirmation...
                </p>
              )}

              {emailError && (
                <div className="mt-4 text-center">
                  <p className="text-red-400">{emailError}</p>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="mt-2 py-2 px-5 bg-gray-700 text-gray-200 rounded-lg hover:bg-gray-600 transition"
                  >
                    Try Again
                  </button>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
