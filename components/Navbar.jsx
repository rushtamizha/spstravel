"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  Sparkles,
  Briefcase,
  Layers3,
  ShieldCheck,
  ArrowRight,
  Code2,
  Globe,
  Star,
  Zap,
  Car,
  Torus,
} from "lucide-react";
import { BiHome } from "react-icons/bi";
import { LiaPlayCircleSolid } from "react-icons/lia";
import { MdOutlinePlace } from "react-icons/md";

const navItems = [
  { label: "Home", href: "/#", icon: BiHome, },
  { label: "Places", href: "/places", icon: MdOutlinePlace, },
  { label: "tariff", href: "/#tariff", icon: Car },
  { label: "Pondicherry Tour", href: "/pondicherry-local-tour", icon: Torus },
];

const fadeDown = {
  hidden: { opacity: 0, y: -12 },
  visible: { opacity: 1, y: 0 },
};

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const { scrollY } = useScroll();

  const logoScale = useTransform(scrollY, [0, 80], [1, 0.93]);
  const logoY = useTransform(scrollY, [0, 80], [0, -2]);
  const logoOpacity = useTransform(scrollY, [0, 80], [1, 0.9]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setActiveMenu(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-3 sm:px-4">
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={fadeDown}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mx-auto w-full max-w-7xl rounded-full border border-green-200 bg-white/90 shadow-[0_12px_40px_rgba(249,115,22,0.08)] backdrop-blur-xl"
      >
        <div className="rounded-full bg-gradient-to-r from-green-700 via-green-600 to-green-500 p-[1px]">
          <div className="rounded-full bg-white px-4 sm:px-5">
            <div className="flex h-16 items-center justify-between gap-3">
              <Link href="/" className="flex items-center gap-3 group">
                <motion.div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br  text-white shadow-lg">
                 <img src="/logo.jpg" alt="" className="object-cover h-full w-full rounded-full " />
                </motion.div>

                <div className="leading-tight">
                  <motion.div className="text-sm font-semibold  text-slate-900 uppercase">
                    Greens Tours & Travels
                  </motion.div>
                  <motion.div
                    style={{ opacity: logoOpacity }}
                    className="text-[11px] text-slate-500"
                  >
                    Travel Effortlessly Across Tamil Nadu
                  </motion.div>
                </div>
              </Link>

              <div className="hidden items-center gap-1 lg:flex">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const hasDropdown = Boolean(item.dropdown);

                  return (
                    <div
                      key={item.label}
                      className="relative"
                      onMouseEnter={() =>
                        hasDropdown && setActiveMenu(item.label)
                      }
                      onMouseLeave={() => setActiveMenu(null)}
                    >
                      <Link
                        href={item.href}
                        className="flex items-center gap-2 rounded-full px-4 py-2 text-sm text-slate-700 transition hover:bg-green-50 hover:text-green-600"
                      >
                        <Icon size={16} />
                        <span>{item.label}</span>
                        {hasDropdown && <ChevronDown size={14} />}
                      </Link>

                      <AnimatePresence>
                        {hasDropdown && activeMenu === item.label && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.96 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.96 }}
                            transition={{ duration: 0.18 }}
                            className="absolute left-0 top-full mt-3 w-72 overflow-hidden rounded-3xl border border-green-100 bg-white/95 p-2 shadow-2xl shadow-green-500/10 backdrop-blur-xl"
                          >
                            {item.dropdown.map((subItem) => {
                              const SubIcon = subItem.icon;

                              return (
                                <Link
                                  key={subItem.label}
                                  href={subItem.href}
                                  className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm text-slate-700 transition hover:bg-green-50 hover:text-slate-900"
                                >
                                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-green-50 text-green-500">
                                    <SubIcon size={16} />
                                  </span>
                                  <span className="font-medium">
                                    {subItem.label}
                                  </span>
                                </Link>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

              <div className="hidden items-center gap-3 lg:flex">
                <Link
                  href="/contact"
                  className="rounded-full border border-green-200 px-4 py-2 text-sm text-slate-700 transition hover:border-green-300 hover:bg-green-50 hover:text-green-600"
                >
                  Contact
                </Link>
                <Link
                  href="#start"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-green-700 to-green-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-green-500/20 transition hover:scale-[1.02]"
                >
                  Get Started
                  <ArrowRight
                    size={16}
                    className="transition group-hover:translate-x-0.5"
                  />
                </Link>
              </div>

              <button
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-green-200 text-slate-700 transition hover:bg-green-50 lg:hidden"
                onClick={() => setMobileOpen((v) => !v)}
                aria-label="Toggle mobile menu"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scaleY: 0.96 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: -10, scaleY: 0.96 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden"
          >
            <div className="mx-auto mt-3 max-w-7xl overflow-hidden rounded-3xl border border-green-100 bg-white/95 p-3 shadow-2xl shadow-green-500/10 backdrop-blur-xl">
              <div className="space-y-2">
                {navItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-green-100 bg-green-50/40"
                    >
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center justify-between px-4 py-3 text-slate-800"
                      >
                        <span className="flex items-center gap-3">
                          <Icon size={16} className="text-green-500" />
                          <span>{item.label}</span>
                        </span>
                        {item.dropdown ? (
                          <ChevronDown size={16} className="text-slate-400" />
                        ) : null}
                      </Link>

                      {item.dropdown && (
                        <div className="border-t border-green-100 px-2 pb-2">
                          {item.dropdown.map((subItem) => {
                            const SubIcon = subItem.icon;

                            return (
                              <Link
                                key={subItem.label}
                                href={subItem.href}
                                onClick={() => setMobileOpen(false)}
                                className="mt-2 flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-slate-600 transition hover:bg-green-50 hover:text-slate-900"
                              >
                                <SubIcon size={15} className="text-green-500" />
                                <span>{subItem.label}</span>
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="mt-3 grid grid-cols-2 gap-3">
                <Link
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-2xl border border-green-200 px-4 py-3 text-center text-sm text-slate-700"
                >
                  Contact
                </Link>
                <Link
                  href="#start"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-2xl bg-gradient-to-r from-green-500 to-green-400 px-4 py-3 text-center text-sm font-semibold text-white"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
