"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Clock3, MapPin, Phone, Sparkles } from "lucide-react";

const ROUTES = [
  {
    from: "Chennai",
    to: "Pondicherry",
    distance: "166 KM",
    duration: "3-4 Hours",
    images: ["/routes/Pondicherry.jpg"],
    description:
      "Ideal for Sedans & SUVs — Perfect coastal ride via ECR. Great for couples, small families, or tourists. Scenic beaches, Mahabalipuram stopover.",
  },
  {
    from: "Chennai",
    to: "Madurai",
    distance: "456 KM",
    duration: "7-8 Hours",
    images: ["/routes/Madurai.jpg"],
    description:
      "Best suited for SUVs, Innova Crysta, and Tempo Travellers — Comfortable long-haul travel for families or groups. Smooth highways, heritage pitstops.",
  },
  {
    from: "Chennai",
    to: "Bangalore",
    distance: "347 KM",
    duration: "6-7 Hours",
    images: ["/routes/Bangalore.jpg"],
    description:
      "Sedans for solo/couple travel, Innova or Urbania for business trips. Great highway ride with Vellore & Krishnagiri views. AC comfort recommended.",
  },
  {
    from: "Chennai",
    to: "Coimbatore",
    distance: "508 KM",
    duration: "6 Hours",
    images: ["/routes/Coimbatore.webp"],
    description:
      "Best for Innova Crysta, Urbania, and Tempo (12-16 seaters). Designed for business teams, families, and group tours. Recliner seating enhances experience.",
  },
  {
    from: "Chennai",
    to: "Tiruchirappalli",
    distance: "332 KM",
    duration: "5-6 Hours",
    images: ["/routes/Tiruchirappalli-4.jpg"],
    description:
      "Sedans & SUVs for smaller groups; Innova Crysta for comfortable temple tours. Smooth national highways with countryside views.",
  },
  {
    from: "Chennai",
    to: "Kumbakonam",
    distance: "283 KM",
    duration: "5-6 Hours",
    images: ["/routes/Kumbakonam.jpg"],
    description:
      "Recommended vehicles: SUVs & Innova Crysta. Ideal for temple circuits. Groups can opt for 12-seater Tempo for heritage tours.",
  },
  {
    from: "Pondicherry",
    to: "Bangalore",
    distance: "317 KM",
    duration: "6-7 Hours",
    images: ["/routes/Pondicherry.jpg"],
    description:
      "Sedans & SUVs fit for small groups, Urbania or Tempo for larger families. Spiritual detours via Thiruvannamalai make it a divine ride.",
  },
  {
    from: "Pondicherry",
    to: "Coimbatore",
    distance: "378 KM",
    duration: "7-8 Hours",
    images: ["/routes/Coimbatore.webp"],
    description:
      "Urbania (16-Seater) and Tempo (12-Seater) are great for long family/group travel. Includes cultural detours like Trichy, Thanjavur.",
  },
  {
    from: "Pondicherry",
    to: "Tiruchirappalli",
    distance: "202 KM",
    duration: "3-4 Hours",
    images: ["/routes/Tiruchirappalli-4.jpg"],
    description:
      "Sedans & SUVs are ideal for short spiritual tours. Small groups can enjoy smooth travel with ample luggage space.",
  },
  {
    from: "Pondicherry",
    to: "Madurai",
    distance: "327 KM",
    duration: "5-6 Hours",
    images: ["/routes/Madurai.jpg"],
    description:
      "Tempo Traveller & Innova Crysta are recommended for families. Chettinad route offers heritage food and temple stops.",
  },
  {
    from: "Pondicherry",
    to: "Kanyakumari",
    distance: "577 KM",
    duration: "9-10 Hours",
    images: ["/routes/Kanyakumari.jpg"],
    description:
      "SUVs and Innova Crysta perfect for coastal stretch. 12–18 Seater vehicles good for pilgrim or student groups. Scenic southern views.",
  },
  {
    from: "Pondicherry",
    to: "Rameswaram",
    distance: "418 KM",
    duration: "7-8 Hours",
    images: ["/routes/Rameswaram.webp"],
    description:
      "Long-distance ride suited for Urbania or Tempo. Best for family or group temple visits with luggage. Reclining seats improve comfort.",
  },
];

export default function RoutesSection() {
  return (
    <section
      id="routes"
      className="relative overflow-hidden bg-white py-20 sm:py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,146,60,0.14),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(255,237,213,0.7),transparent_30%)] hidden" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-medium text-green-600">
            <Sparkles size={14} /> Popular Routes
          </span>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Explore top travel routes between major destinations.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Scenic views, cultural highlights, and the right vehicle options for
            every journey.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {ROUTES.map((route) => (
            <RouteCard key={`${route.from}-${route.to}`} route={route} />
          ))}
        </div>
      </div>
    </section>
  );
}

function RouteCard({ route }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!route.images?.length) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % route.images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [route.images]);

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
      className="group overflow-hidden rounded-[2rem] border border-green-100 bg-white shadow-[0_16px_50px_rgba(249,115,22,0.08)] transition hover:-translate-y-1 hover:shadow-[0_22px_70px_rgba(249,115,22,0.14)]"
    >
      <div className="flex h-[540px] flex-col">
        <div className="relative h-[42%] min-h-56 overflow-hidden bg-gradient-to-br from-green-50 via-white to-green-50">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={route.images[index]}
                alt={`${route.from} to ${route.to}`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-950/10 to-transparent" />

          <div className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-green-600 shadow-sm">
            Scenic Route
          </div>

          <div className="absolute bottom-5 left-5 right-5">
            <div className="text-sm text-white/80">Top Travel Route</div>
            <h3 className="mt-1 text-2xl font-semibold text-white">
              {route.from} → {route.to}
            </h3>
          </div>
        </div>

        <div className="flex h-[58%] flex-col p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                Distance
              </p>
              <div className="mt-1 text-2xl font-semibold text-slate-950">
                {route.distance}
              </div>
            </div>
            <div className="rounded-full border border-green-200 bg-green-50 px-3 py-1 text-xs font-semibold text-green-600">
              {route.duration}
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            <Tag text="Scenic Views" />
            <Tag text="Comfort Ride" />
            <Tag text="Best Routes" />
          </div>

          <p className="mt-4 text-sm leading-7 text-slate-600">
            {route.description}
          </p>

          <div className="mt-auto flex gap-3 pt-5">
            <a
              href={`https://wa.me/919677792455?text=${encodeURIComponent(
                "📅 Booking Inquiry\n" +
                  `From: ${route.from}\n` +
                  `To: ${route.to}\n` +
                  "Please confirm availability & pricing",
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-green-500 to-green-400 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-green-500/20"
            >
              Book Now <ArrowRight size={16} />
            </a>
            <a
              href="tel:+919342991455"
              className="flex h-12 w-12 items-center justify-center rounded-2xl border border-green-200 text-green-600 transition hover:bg-green-50"
            >
              <Phone size={16} />
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function Tag({ text }) {
  return (
    <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-600">
      {text}
    </span>
  );
}
