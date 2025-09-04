"use client";

import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import CalendlyEmbed from "../ui/CalendlyEmbed";

export default function ContactSection() {
  const EMAIL_JS_SERVICEID = process.env.NEXT_PUBLIC_EMAIL_JS_SERVICEID;
  const EMAIL_JS_TEMPLATEID = process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATEID;
  const EMAIL_JS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY;

  const [emailSent, setEmailSent] = useState(false);
  const [confirmReceipt, setConfirmReceipt] = useState(false);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const form = useRef<HTMLFormElement>(null);

  // Initialize EmailJS once when component mounts
  useEffect(() => {
    if (EMAIL_JS_PUBLIC_KEY) {
      emailjs.init(EMAIL_JS_PUBLIC_KEY);
    }
  }, [EMAIL_JS_PUBLIC_KEY]);

  // Auto-reset form after successful submission
  useEffect(() => {
    if (confirmReceipt) {
      const timer = setTimeout(() => {
        resetForm();
      }, 5000); // Reset after 5 seconds

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
      setEmailError(error.text || "Failed to send message. Please try again.");
      setEmailSent(false); // Allow retry
    } finally {
      setIsLoading(false);
    }
  };

  // Don't render if environment variables are missing
  if (!EMAIL_JS_SERVICEID || !EMAIL_JS_TEMPLATEID || !EMAIL_JS_PUBLIC_KEY) {
    console.error("EmailJS environment variables are missing");
    return (
      <section className="portfolio-main-section max-w-screen-xl w-full m-auto">
        <div className="portfolio-contact-container">
          <p>
            Contact form is temporarily unavailable. Please contact directly via
            email.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="portfolio-main-section max-w-screen-xl w-full m-auto">
      <div className="portfolio-contact-container">
        <div>
          <div>
            <div>
              <div className="spacer"></div>
              <div className="flex flex-row">
                <div className="flex flex-col m-auto">
                  <h1 className="contact-header">Schedule with Calendly</h1>
                  <div className="spacer"></div>
                  <CalendlyEmbed url="https://calendly.com/joshlehman-dev/30-min-coffee-chat-with-josh" />
                </div>
              </div>
            </div>
            <div className="spacer"></div>
            <div className="align-center">
              <div className="interface-spacer-small"></div>
              <h2 className="contact-title">Send message via Email:</h2>
              <div className="spacer-small"></div>
            </div>
            <div style={{ display: "flex" }}>
              <form
                style={{ margin: "auto" }}
                ref={form}
                id="contact-form"
                onSubmit={sendEmail}
              >
                <div className="form-container">
                  {!emailSent ? (
                    <>
                      <div>
                        <div>
                          <label htmlFor="name" className="interface-label">
                            Name
                          </label>
                        </div>
                        <div>
                          <div>
                            <input
                              placeholder="Full name"
                              autoComplete="given-name"
                              required
                              type="text"
                              name="name"
                              id="name"
                              className="input"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="interface-spacer-xsmall"></div>
                      <div>
                        <div>
                          <label htmlFor="email" className="interface-label">
                            Email
                          </label>
                        </div>
                        <div>
                          <div>
                            <input
                              placeholder="Email address"
                              autoComplete="email"
                              required
                              type="email"
                              name="email"
                              id="email"
                              className="input"
                            />
                          </div>
                        </div>
                        <div className="interface-spacer-xsmall"></div>
                      </div>
                      <div>
                        <div className="interface-spacer-xsmall"></div>
                        <div>
                          <label htmlFor="message" className="interface-label">
                            Message
                          </label>
                        </div>
                        <div>
                          <div>
                            <textarea
                              placeholder="Type message"
                              required
                              name="message"
                              id="message"
                              className="contact-text-area"
                            />
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div>
                        <div>
                          <label htmlFor="name" className="interface-label">
                            Name
                          </label>
                        </div>
                        <div>
                          <input
                            disabled
                            type="text"
                            name="name"
                            id="name"
                            className="input"
                          />
                        </div>
                      </div>
                      <div>
                        <div>
                          <label htmlFor="email" className="interface-label">
                            Email
                          </label>
                        </div>
                        <div>
                          <input
                            disabled
                            type="email"
                            name="email"
                            id="email"
                            className="input"
                          />
                        </div>
                      </div>
                      <div>
                        <div>
                          <label htmlFor="message" className="interface-label">
                            Message
                          </label>
                        </div>
                        <div>
                          <textarea
                            disabled
                            name="message"
                            id="message"
                            className="contact-text-area"
                          />
                        </div>
                      </div>
                    </>
                  )}
                  <div className="spacer-small"></div>
                  <div>
                    <div className="submit-btn-col">
                      {!emailSent && !confirmReceipt ? (
                        <button
                          className="round-button"
                          type="submit"
                          disabled={isLoading}
                        >
                          {isLoading ? "Sending..." : "Submit Message"}
                        </button>
                      ) : confirmReceipt ? (
                        <div>
                          <p className="email-confirmation">
                            Message received! <br />
                            Check your inbox to confirm.
                          </p>
                          <button
                            type="button"
                            className="round-button"
                            onClick={resetForm}
                            style={{ marginTop: "10px" }}
                          >
                            Send Another Message
                          </button>
                        </div>
                      ) : (
                        <p className="email-sent">
                          Message sent, awaiting confirmation...
                        </p>
                      )}

                      {emailError && (
                        <div>
                          <p className="email-error" style={{ color: "red" }}>
                            {emailError}
                          </p>
                          <button
                            type="button"
                            className="round-button"
                            onClick={resetForm}
                            style={{ marginTop: "10px" }}
                          >
                            Try Again
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="spacer"></div>
        </div>
      </div>
    </section>
  );
}
