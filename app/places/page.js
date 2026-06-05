"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CarFront,
  Phone,
  Sparkles,
  MapPin,
} from "lucide-react";

const cities = [
  { name: "Ariyalur", slug: "ariyalur-one-way-taxi", image: "/routes/Ariyalur.webp" },
  { name: "Chengalpattu", slug: "chengalpattu-one-way-taxi", image: "/routes/Chengalpattu.webp" },
  { name: "Chennai", slug: "chennai-one-way-taxi", image: "/routes/Chennai.webp" },
  { name: "Coimbatore", slug: "coimbatore-one-way-taxi", image: "/routes/Coimbatore.webp" },
  { name: "Cuddalore", slug: "cuddalore-one-way-taxi", image: "/routes/Cuddalore.jpg" },
  { name: "Dharmapuri", slug: "dharmapuri-one-way-taxi", image: "/routes/Dharmapuri.jpg" },
  { name: "Dindigul", slug: "dindigul-one-way-taxi", image: "/routes/Dindigul.jpg" },
  { name: "Erode", slug: "erode-one-way-taxi", image: "/routes/Erode.avif" },
  { name: "Kallakurichi", slug: "kallakurichi-one-way-taxi", image: "/routes/Kallakurichi.jpg" },
  { name: "Kanchipuram", slug: "kanchipuram-one-way-taxi", image: "/routes/Kanchipuram.jpg" },
  { name: "Kanyakumari", slug: "kanyakumari-one-way-taxi", image: "/routes/Kanyakumari.jpg" },
  { name: "Karur", slug: "karur-one-way-taxi", image: "/routes/Karur.jpg" },
  { name: "Krishnagiri", slug: "krishnagiri-one-way-taxi", image: "/routes/Krishnagiri.webp" },
  { name: "Madurai", slug: "madurai-one-way-taxi", image: "/routes/Madurai.jpg" },
  { name: "Mayiladuthurai", slug: "mayiladuthurai-one-way-taxi", image: "/routes/Mayiladuthurai.jpg" },
  { name: "Nagapattinam", slug: "nagapattinam-one-way-taxi", image: "/routes/Nagapattinam.png" },
  { name: "Namakkal", slug: "namakkal-one-way-taxi", image: "/routes/namakkal.jpg" },
  { name: "Nilgiris", slug: "nilgiris-one-way-taxi", image: "/routes/Nilgiris.jpg" },
  { name: "Perambalur", slug: "perambalur-one-way-taxi", image: "/routes/Perambalur.jpg" },
  { name: "Pudukkottai", slug: "pudukkottai-one-way-taxi", image: "/routes/Pudukkottai.jpg" },
  { name: "Rameswaram", slug: "rameswaram-one-way-taxi", image: "/routes/Rameswaram.webp" },
  { name: "Ranipet", slug: "ranipet-one-way-taxi", image: "/routes/Ranipet.webp" },
  { name: "Salem", slug: "salem-one-way-taxi", image: "/routes/Salem.jpg" },
  { name: "Sivaganga", slug: "sivaganga-one-way-taxi", image: "/routes/Sivaganga.jpg" },
  { name: "Tenkasi", slug: "tenkasi-one-way-taxi", image: "/routes/Tenkasi.jpg" },
  { name: "Thanjavur", slug: "thanjavur-one-way-taxi", image: "/routes/Thanjavur.jpg" },
  { name: "Theni", slug: "theni-one-way-taxi", image: "/routes/Theni.jpg" },
  { name: "Thoothukudi", slug: "thoothukudi-one-way-taxi", image: "/routes/Thoothukudi.jpg" },
  { name: "Tiruchirappalli", slug: "tiruchirappalli-one-way-taxi", image: "/routes/Tiruchirappalli.jpg" },
  { name: "Tirunelveli", slug: "tirunelveli-one-way-taxi", image: "/routes/Tirunelveli.jpg" },
  { name: "Tiruppur", slug: "tiruppur-one-way-taxi", image: "/routes/Tiruppur.jpg" },
  { name: "Tiruvallur", slug: "tiruvallur-one-way-taxi", image: "/routes/Tiruvallur.jpg" },
  { name: "Tiruvannamalai", slug: "tiruvannamalai-one-way-taxi", image: "/routes/Tiruvannamalai.jpg" },
  { name: "Tiruvarur", slug: "tiruvarur-one-way-taxi", image: "/routes/thiruvarur.jpg" },
  { name: "Vellore", slug: "vellore-one-way-taxi", image: "/routes/vellore-famous.jpg" },
  { name: "Viluppuram", slug: "viluppuram-one-way-taxi", image: "/routes/Viluppuram.jpg" },
  { name: "Virudhunagar", slug: "virudhunagar-one-way-taxi", image: "/routes/Virudhunagar.jpg" },
  { name: "Kumbakonam", slug: "kumbakonam-one-way-taxi", image: "/routes/Kumbakonam.jpg" },
  { name: "Bangalore", slug: "bangalore-one-way-taxi", image: "/routes/Bangalore.jpg" },
  { name: "Pondicherry", slug: "pondicherry-one-way-taxi", image: "/routes/Pondicherry.jpg" },
];

export default function Page() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,146,60,0.14),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(255,237,213,0.7),transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-medium text-green-600">
            <Sparkles size={14} /> Green tours and travels
          </span>

          <h1 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Trusted One Way & Round Trip Cab Services
          </h1>

          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            Experience smooth travel across Tamil Nadu, Bengaluru & Pondicherry with Green tours and travels. Enjoy safe, affordable, and on-time taxi rides with our professional chauffeurs.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/book-now"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-green-500 to-green-400 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-green-500/20"
            >
              Book Now <ArrowRight size={16} />
            </Link>
            <a
              href="tel:+919342991455"
              className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-green-50"
            >
              <Phone size={16} /> Call Now +91 93429 91455
            </a>
          </div>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {cities.map((city, index) => (
            <motion.article
              key={city.slug}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.02 }}
              className="group  rounded-[2rem] border border-green-100 bg-white shadow-[0_16px_50px_rgba(249,115,22,0.08)] transition hover:-translate-y-1 hover:shadow-[0_22px_70px_rgba(249,115,22,0.14)] p-2"
            >
              <div className="flex h-[360px] flex-col">
                <div className="relative h-[42%] min-h-36 overflow-hidden bg-gradient-to-br from-green-50 via-white to-green-50">
                  <Image
                    src={city.image}
                    alt={city.name}
                    fill
                    className="object-cover rounded-3xl transition duration-500 "
                    sizes="(max-width: 1024px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent rounded-3xl" />
                  <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-green-600 shadow-sm">
                    City Service
                  </div>
                </div>

                <div className="flex h-[58%] flex-col p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h2 className="text-lg font-semibold text-slate-950">
                        {city.name}
                      </h2>
                      <p className="mt-1 text-xs text-slate-500">
                        Book drop taxi service in {city.name}
                      </p>
                    </div>
                    <MapPin size={16} className="mt-1 text-green-500" />
                  </div>

                  <p className="mt-4 text-sm leading-6 text-slate-600">
                    Safe, affordable, and punctual taxi service for one way and round trip travel.
                  </p>

                  <div className="mt-auto flex gap-3 pt-4">
                    <Link
                      href={`https://wa.me/919677792455?text=${encodeURIComponent(
    "📅 Booking Inquiry\n" +
    "Please confirm availability & pricing"
  )}`}
  target="_blank"
  rel="noopener noreferrer"
                      className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-green-500 to-green-400 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-green-500/20"
                    >
                      Book Now <ArrowRight size={16} />
                    </Link>
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
          ))}
        </div>
      </div>
    </section>
  );
}