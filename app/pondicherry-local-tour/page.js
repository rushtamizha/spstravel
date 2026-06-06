"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Bath,
  BusFront,
  Clock3,
  Compass,
  MapPin,
  Phone,
  Sparkles,
  SunMedium,
  Waves,
  Landmark,
  Flower2,
  Mountain,
  ShieldCheck,
  XCircle,
} from "lucide-react";

const highlights = [
  {
    icon: Waves,
    title: "Promenade Beach",
    text: "Enjoy the calm sea breeze as you stroll along Pondicherry's famous seaside stretch. Perfect for photography and sunset views, lined with historical monuments and colonial architecture.",
  },
  {
    icon: Compass,
    title: "Auroville & Matrimandir",
    text: "Visit the world-renowned township of Auroville, dedicated to human unity and spiritual living. The golden Matrimandir stands as a symbol of peace and meditation.",
  },
  {
    icon: Landmark,
    title: "Sri Aurobindo Ashram",
    text: "Experience tranquility at the spiritual heart of Pondicherry, founded by Sri Aurobindo and The Mother. A serene retreat for meditation and reflection.",
  },
  {
    icon: SunMedium,
    title: "Paradise Beach",
    text: "A pristine island-like beach accessible by boat from Chunnambar. Golden sands, turquoise waters, and palm groves make it a must-visit for relaxation.",
  },
  {
    icon: Mountain,
    title: "French Colony (White Town)",
    text: "Walk through picturesque lanes lined with pastel-colored colonial villas, art galleries, and chic cafés. A photographer’s dream with French legacy charm.",
  },
  {
    icon: Flower2,
    title: "Botanical Garden",
    text: "End the day surrounded by lush greenery, rare plants, and charming fountains. Built during the French era, it offers a refreshing escape within the city.",
  },
];

const inclusions = [
  "AC vehicle for local sightseeing",
  "Professional driver & guide (English/Hindi/Tamil speaking)",
  "Pick-up & drop from hotel within city limits",
  "Parking, tolls, and permits",
];

const exclusions = [
  "Entry fees at attractions",
  "Meals and personal expenses",
  "Boat charges to Paradise Beach",
];

export default function Page() {
  return (
    <section className="relative overflow-hidden bg-white py-30 sm:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,146,60,0.14),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(255,237,213,0.72),transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-medium text-green-600">
            <Sparkles size={14} /> Pondicherry Local Sightseeing Package
          </span>

          <h1 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Where French Heritage Meets Indian Culture
          </h1>

          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            Discover the charm of Pondicherry, a serene coastal town where French heritage meets Indian culture. This curated local sightseeing package covers the city’s most iconic landmarks — from tranquil beaches and spiritual centers to lush gardens and colonial streets.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <div className="rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-semibold text-green-600">
              <Clock3 size={14} className="mr-2 inline" />
              Full Day Tour (8 Hours)
            </div>
            <a
              href="tel:+919342991455"
              className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-green-50"
            >
              <Phone size={16} /> Call Us +91 9677792455
            </a>
            <Link
              href="https://wa.me/919342991455"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-green-500 to-green-400 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-green-500/20"
            >
              Book Now <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
            className="rounded-[2rem] border border-green-100 bg-white p-6 shadow-[0_16px_50px_rgba(249,115,22,0.08)] sm:p-8"
          >
            <h2 className="text-2xl font-semibold text-slate-950">Overview</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Explore the best of Pondicherry in one comfortable day with a curated itinerary designed for relaxation, history, and scenic beauty. Perfect for families, couples, groups, and culture lovers.
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-green-100 bg-green-50/40 p-5 transition hover:-translate-y-0.5 hover:bg-green-50"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-green-500 shadow-sm">
                        <Icon size={18} />
                      </div>
                      <h3 className="text-base font-semibold text-slate-950">
                        {item.title}
                      </h3>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45 }}
              className="rounded-[2rem] border border-green-100 bg-slate-950 p-6 text-white shadow-[0_16px_50px_rgba(15,23,42,0.18)] sm:p-8"
            >
              <h2 className="text-2xl font-semibold">Package Details</h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <InfoBox label="Duration" value="8 Hours" />
                <InfoBox label="Tour Type" value="Local Sightseeing" />
                <InfoBox label="Starting Price" value="₹1,999 / person" />
                <InfoBox label="Rates" value="May vary by group size" />
              </div>

              <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm font-semibold text-green-300">Ideal For</p>
                <p className="mt-2 text-sm leading-7 text-white/75">
                  Travelers seeking a blend of relaxation, history, and beauty with easy city movement and curated stops.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45 }}
              className="rounded-[2rem] border border-green-100 bg-white p-6 shadow-[0_16px_50px_rgba(249,115,22,0.08)] sm:p-8"
            >
              <h2 className="text-xl font-semibold text-slate-950">Inclusions</h2>
              <div className="mt-4 space-y-3">
                {inclusions.map((item) => (
                  <Row key={item} icon={ShieldCheck} text={item} tone="text-emerald-500" />
                ))}
              </div>

              <h2 className="mt-8 text-xl font-semibold text-slate-950">Exclusions</h2>
              <div className="mt-4 space-y-3">
                {exclusions.map((item) => (
                  <Row key={item} icon={XCircle} text={item} tone="text-rose-500" />
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="mt-8 rounded-[2rem] border border-green-100 bg-green-50/50 p-6 text-center shadow-[0_16px_50px_rgba(249,115,22,0.08)] sm:p-8"
        >
          <h2 className="text-2xl font-semibold text-slate-950">Starting Price</h2>
          <div className="mt-3 text-4xl font-bold text-green-600">₹1,999</div>
          <p className="mt-1 text-sm text-slate-500">per person</p>
          <p className="mt-3 text-sm text-slate-600">
            Rates may vary based on group size and season.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href="tel:+919342991455"
              className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-green-50"
            >
              <Phone size={16} /> Call Us +91 9677792455
            </a>
            <Link
              href="https://wa.me/919342991455"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-green-500 to-green-400 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-green-500/20"
            >
              Book Now <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function InfoBox({ label, value }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
      <p className="text-xs uppercase tracking-[0.2em] text-white/45">{label}</p>
      <p className="mt-2 text-sm font-semibold text-white">{value}</p>
    </div>
  );
}

function Row({ icon: Icon, text, tone }) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-green-100 bg-green-50/40 px-4 py-3">
      <Icon size={18} className={`mt-0.5 ${tone}`} />
      <p className="text-sm leading-6 text-slate-700">{text}</p>
    </div>
  );
}