"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Mail,
  MapPin,
  Phone,
  Send,
  Sparkles,
  MessageCircle,
} from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const whatsappMessage = encodeURIComponent(
    `Hello, I want to contact you.\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nSubject: ${form.subject}\nMessage: ${form.message}`
  );

  const whatsappUrl = `https://wa.me/919342991455?text=${whatsappMessage}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="relative overflow-hidden bg-white py-30 sm:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,146,60,0.14),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(255,237,213,0.7),transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-medium text-green-600">
            <Sparkles size={14} /> Contact Us
          </span>
          <h1 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Get in touch for bookings and travel support.
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Send your trip details, ask for pricing, or request a custom route. We usually reply quickly on WhatsApp.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="rounded-[2rem] border border-green-100 bg-slate-950 p-8 text-white shadow-[0_18px_60px_rgba(15,23,42,0.25)]"
          >
            <h2 className="text-2xl font-semibold">Travel support</h2>
            <p className="mt-3 text-sm leading-7 text-white/70">
              Reach out for one-way trips, round trips, airport transfers, group tours, and route planning.
            </p>

            <div className="mt-8 space-y-4">
              <ContactItem icon={Phone} label="Phone" value="+91 9677792455" href="tel:+919342991455" />
              <ContactItem icon={Mail} label="Email" value="bookings@greentravel.com" href="mailto:bookings@greentravel.com" />
              <ContactItem icon={MapPin} label="Location" value="Chennai, Tamil Nadu" href="#" />
            </div>

            <a
              href="https://wa.me/919342991455"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-green-500 to-green-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-green-500/20"
            >
              <MessageCircle size={16} /> Chat on WhatsApp
            </a>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="rounded-[2rem] border border-green-100 bg-white p-6 shadow-[0_16px_50px_rgba(249,115,22,0.08)] sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Input label="Name" name="name" value={form.name} onChange={handleChange} placeholder="Your name" />
              <Input label="Phone" name="phone" value={form.phone} onChange={handleChange} placeholder="Mobile number" />
              <Input label="Email" name="email" value={form.email} onChange={handleChange} placeholder="Email address" />
              <Input label="Subject" name="subject" value={form.subject} onChange={handleChange} placeholder="Trip enquiry" />
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="6"
                placeholder="Tell us your route, date, and cab needs..."
                className="w-full rounded-2xl border border-green-100 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-green-300 focus:ring-4 focus:ring-green-100"
              />
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                type="submit"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-green-500 to-green-400 px-5 py-4 text-sm font-semibold text-white shadow-lg shadow-green-500/20"
              >
                Send on WhatsApp <Send size={16} />
              </button>

              <a
                href="tel:+919342991455"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-green-200 bg-white px-5 py-4 text-sm font-semibold text-slate-700 transition hover:bg-green-50"
              >
                <Phone size={16} /> Call Now
              </a>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Input({ label, ...props }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-slate-700">{label}</span>
      <input
        {...props}
        className="w-full rounded-2xl border border-green-100 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-green-300 focus:ring-4 focus:ring-green-100"
      />
    </label>
  );
}

function ContactItem({ icon: Icon, label, value, href }) {
  return (
    <a
      href={href}
      className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 transition hover:bg-white/10"
    >
      <div className="mt-0.5 rounded-xl bg-green-500/15 p-2 text-green-300">
        <Icon size={16} />
      </div>
      <div>
        <div className="text-xs uppercase tracking-[0.2em] text-white/45">
          {label}
        </div>
        <div className="mt-1 text-sm font-medium text-white">{value}</div>
      </div>
    </a>
  );
}