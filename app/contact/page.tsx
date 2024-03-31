"use client";

import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import CalendlyEmbed from "../ui/CalendlyEmbed";
import "../globals.css";
import "../ui/Portfolio.css";

const ContactSection = () => {
  const EMAIL_JS_SERVICEID: any = process.env.NEXT_PUBLIC_EMAIL_JS_SERVICEID;
  const EMAIL_JS_TEMPLATEID: any = process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATEID;
  const EMAIL_JS_PUBLIC_KEY: any = process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY;

  const [emailSent, setEmailSent] = useState(false);
  const [confirmReceipt, setConfirmReceipt] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const form: any = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();
    setEmailSent(true);

    emailjs
      .sendForm(
        EMAIL_JS_SERVICEID,
        EMAIL_JS_TEMPLATEID,
        form.current,
        EMAIL_JS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(form.current);

          console.log(result.text);
          setConfirmReceipt(true);
        },
        (error) => {
          console.log(error.text);
          setEmailError(error.text);
        }
      );
  };

  return (
    <section className="portfolio-main-section">
      <div className="interface-spacer-small"></div>
      <div className="portfolio-contact-container">
        <div>
          <div>
            <div>
              <div className="spacer"></div>
              <div style={{ textAlign: "center" }}>
                <div className="container">
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
                  {emailSent === false ? (
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
                              autoComplete="off"
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
                      {emailSent === false && confirmReceipt === false ? (
                        <button
                          className="round-button"
                          type="submit"
                          data-sitekey="reCAPTCHA_site_key"
                          data-callback="onSubmit"
                          data-action="submit"
                        >
                          Submit Message
                        </button>
                      ) : (
                        <p className="email-sent">
                          Message sent, awaiting confirmation...
                        </p>
                      )}
                      {emailSent === true && confirmReceipt === true ? (
                        <p className="email-confirmation">
                          Message received! <br />
                          Check your inbox to confirm.
                        </p>
                      ) : (
                        <p className="email-confirmation">{emailError}</p>
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
};

const Contact = () => {
  return (
    <main className="main-container">
      <section className="portfolio-section">
        <h1 className="portfolio-h1">CONTACT</h1>
      </section>
      <ContactSection />
    </main>
  );
};

export default Contact;
