import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { resort } from "../data/resort";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value });
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(resort.fullName + " " + resort.address)}`;

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Booking inquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`);
    window.location.href = `mailto:${resort.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHeading eyebrow="Contact" title="Plan your stay with us" text="Send your preferred date and number of guests and we will get back to you." />
        <div className="contact">
          <div className="panel reveal">
            <h3>Visit us</h3>
            <p><strong>{resort.fullName}</strong><br />{resort.address}</p>
            <p><strong>Email</strong><br /><a href={`mailto:${resort.email}`}>{resort.email}</a></p>
            <a className="btn btn--outline" href={mapUrl} target="_blank" rel="noreferrer">Open in Google Maps</a>
          </div>
          <form className="panel reveal" onSubmit={onSubmit}>
            <h3>Send an inquiry</h3>
            <label>Name<input required value={form.name} onChange={set("name")} placeholder="Your name" /></label>
            <label>Email<input required type="email" value={form.email} onChange={set("email")} placeholder="you@example.com" /></label>
            <label>Message<textarea required rows="4" value={form.message} onChange={set("message")} placeholder="Date, number of guests, and any questions" /></label>
            <button className="btn" type="submit">Send message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
