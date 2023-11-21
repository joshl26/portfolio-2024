"use client";

import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import TopicRadio from "../ui/TopicRadio";
import CalendlyEmbed from "../ui/CalendlyEmbed";

const EMAIL_JS_SERVICEID = "service_45dcwgn";
const EMAIL_JS_TEMPLATEID = "template_n48n2mb";
const EMAIL_JS_PUBLIC_KEY = "87SpQ-1mR0MN2Rug9";

const ContactSection = () => {
  const [emailSent, setEmailSent] = useState(false);
  const [confirmReceipt, setConfirmReceipt] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [topic, setTopic] = useState("Comment");

  const onTopicChanged = (e: any) => {
    setTopic(e.target.innerHTML);
    console.log(topic);
  };

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
              <div>
                <div>
                  <div></div>
                  <div style={{ textAlign: "center" }}>
                    <div className="container">
                      <h1>Schedule an Appointment</h1>
                      <CalendlyEmbed url="https://calendly.com/joshlehman-dev/30-min-coffee-chat-with-josh" />
                    </div>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
            <div className="interface-spacer-small"></div>
            <div>
              <div className="interface-spacer-small"></div>
              <h3>Send a message via Email:</h3>
            </div>
            <form ref={form} id="contact-form" onSubmit={sendEmail}>
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
                  <div>
                    <label htmlFor="topic" className="interface-label">
                      Choose a Topic
                    </label>
                  </div>
                  <div>
                    {/* <TopicRadio
                      colorMode={correctedColorMode}
                      onTopicChanged={onTopicChanged}
                    /> */}
                  </div>
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
                </>
              ) : (
                <>
                  <div>
                    <label htmlFor="name" className="interface-label">
                      Name
                    </label>
                    <input
                      disabled
                      type="text"
                      name="name"
                      id="name"
                      className=""
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="interface-label">
                      Email
                    </label>
                    <input
                      disabled
                      type="email"
                      name="email"
                      id="email"
                      className=""
                    />
                  </div>
                  <div>
                    <label htmlFor="topic" className="interface-label">
                      Topic
                    </label>
                    {/* <TopicRadio disabled={true} /> */}
                  </div>
                  <div>
                    <label htmlFor="message" className="interface-label">
                      Message
                    </label>
                    <textarea
                      disabled
                      name="message"
                      id="message"
                      className="contact-text-area"
                    />
                  </div>
                </>
              )}
              <div className="interface-spacer-small"></div>
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
            </form>
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
