"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Facebook,
  Instagram,
  MapPin,
  Phone,
  Sparkles,
  Mail,
  MessageCircle,
  CarFront,
} from "lucide-react";
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Fleets", href: "#fleets" },
  { label: "Popular Routes", href: "#routes" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const services = [
  { label: "One Way Trips", href: "#book" },
  { label: "Round Trips", href: "#book" },
  { label: "Airport Transfer", href: "#book" },
  { label: "Temple Tours", href: "#routes" },
  { label: "Group Travel", href: "#fleets" },
];

const socials = [
  { label: "Instagram", href: "https://instagram.com", icon: BsInstagram },
  { label: "Facebook", href: "https://facebook.com", icon: BsFacebook },
  { label: "WhatsApp", href: "https://wa.me/919342991455", icon: BsWhatsapp },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,146,60,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(251,146,60,0.1),transparent_30%)] hidden" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br  shadow-lg shadow-green-500/20">
                 <img src="/logo.jpg" alt="" className="object-cover h-full w-full rounded-full " />
              </div>
              <div>
                <h3 className="text-lg font-semibold tracking-wide">Greens Tours & Travels</h3>
                <p className="text-sm text-white/60">Travel Effortlessly Across Tamil Nadu</p>
              </div>
            </div>

            <p className="mt-5 max-w-md text-sm leading-7 text-white/70">
              Comfortable rides, fast WhatsApp booking, clean vehicles, and reliable travel support for city rides, long routes, and group trips.
            </p>

            <div className="mt-6 space-y-3 text-sm text-white/75">
              <a href="tel:+919342991455" className="flex items-center gap-3 transition hover:text-green-300">
                <Phone size={16} className="text-green-400" />
                +91 93429 91455
              </a>
              <a href="mailto:bookings@greentravel.com" className="flex items-center gap-3 transition hover:text-green-300">
                <Mail size={16} className="text-green-400" />
                bookings@greentravel.com
              </a>
              <div className="flex items-start gap-3 text-white/75">
                <MapPin size={16} className="mt-0.5 text-green-400" />
                <span>Chennai, Tamil Nadu, India</span>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://wa.me/919342991455"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-green-500 to-green-400 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-green-500/20"
              >
                Book on WhatsApp <ArrowUpRight size={16} />
              </a>
              <Link
                href="#book"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                View Booking <CarFront size={16} />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.22em] text-green-300">
              Quick Links
            </h4>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-white/70 transition hover:text-green-300">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.22em] text-green-300">
              Services
            </h4>
            <ul className="mt-5 space-y-3">
              {services.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-white/70 transition hover:text-green-300">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.22em] text-green-300">
              Social
            </h4>
            <div className="mt-5 space-y-3">
              {socials.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/75 transition hover:border-green-400/30 hover:bg-green-500/10 hover:text-white"
                  >
                    <Icon size={16} className="text-green-300" />
                    {item.label}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-white/55">
              © {currentYear} greenTravel. All rights reserved.
            </p>
            <p className="text-sm text-white/55">
              Premium travel booking with reliable service and smooth rides.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}