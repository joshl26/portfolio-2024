import "../globals.css";
import ContactSection from "../ui/ContactSection";
import "../ui/Portfolio.css";

export const metadata = {
  title: "Contact",
  description:
    "Feel free to reach out to me with any questions or work related queries.",
  alternates: {
    canonical: `/contact`,
  },
};

export default function Contact() {
  return (
    <main className="px-3">
      <section className="portfolio-section">
        <h1 className="portfolio-h1">CONTACT</h1>
      </section>
      <ContactSection />
    </main>
  );
}
