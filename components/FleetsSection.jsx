"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BusFront,
  CalendarDays,
  CarFront,
  CarTaxiFront,
  Clock3,
  MapPin,
  Phone,
  ShipWheel,
  Sparkles,
  X,
} from "lucide-react";

const FLEETS = [
  {
    id: "sedan",
    name: "Sedan",
    priceOneWay: "₹14/km",
    priceRoundTrip: "₹13/km",
    capacity: "4 passengers",
    luggage: "3 bags",
    driverBeta: "₹400",
    note: "Toll Gate, State Permit, Hill Station, Parking - Charges Extra.",
    icon: CarFront,
    image: "/cars/sedan.webp",
    trip: "oneway",
  },
  {
    id: "suv",
    name: "SUV",
    priceOneWay: "₹19/km",
    priceRoundTrip: "₹18/km",
    capacity: "5+ passengers",
    luggage: "4 bags",
    driverBeta: "₹400",
    note: "Toll Gate, State Permit, Hill Station, Parking - Charges Extra.",
    icon: CarTaxiFront,
    image: "/cars/suv.webp",
    trip: "oneway",
  },
  {
    id: "innova",
    name: "Innova Crysta",
    priceOneWay: "₹23/km",
    priceRoundTrip: "₹22/km",
    capacity: "6+ passengers",
    luggage: "5 bags",
    driverBeta: "₹400",
    note: "Toll Gate, State Permit, Hill Station, Parking - Charges Extra.",
    icon: CarTaxiFront,
    image: "/cars/innova.webp",
    trip: "oneway",
  },
  {
    id: "van12",
    name: "12-Seater Van",
    priceOneWay: "—",
    priceRoundTrip: "₹23/km",
    capacity: "12 passengers",
    luggage: "6+ bags",
    driverBeta: "₹800",
    note: "Toll Gate, State Permit, Hill Station, Parking - Charges Extra.",
    icon: BusFront,
    image: "/cars/tempo.jpg",
    trip: "roundtrip",
  },
  {
    id: "urbania",
    name: "Urbania (16-Seater)",
    priceOneWay: "—",
    priceRoundTrip: "₹35/km",
    capacity: "16 passengers",
    luggage: "8+ bags",
    driverBeta: "₹1000",
    note: "Toll Gate, State Permit, Hill Station, Parking - Charges Extra.",
    icon: BusFront,
    image: "/cars/16-seater-urbania.webp",
    trip: "roundtrip",
  },
  {
    id: "bus18",
    name: "18-Seater Bus",
    priceOneWay: "—",
    priceRoundTrip: "₹27/km",
    capacity: "17 passengers",
    luggage: "10+ bags",
    driverBeta: "₹800",
    note: "Toll Gate, State Permit, Hill Station, Parking - Charges Extra.",
    icon: ShipWheel,
    image: "cars/18-seater-mini-bus.jpg",
    trip: "roundtrip",
  },
];

const TIME_SLOTS = [
  "12:00 AM", "01:00 AM", "02:00 AM", "03:00 AM", "04:00 AM", "05:00 AM",
  "06:00 AM", "07:00 AM", "08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM",
  "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM",
  "06:00 PM", "07:00 PM", "08:00 PM", "09:00 PM", "10:00 PM", "11:00 PM"
];

export default function FleetsSection() {
  const [open, setOpen] = useState(false);
  const [selectedCab, setSelectedCab] = useState(FLEETS[0].id);
  const [tripType, setTripType] = useState("oneway");
  const [form, setForm] = useState({
    name: "",
    contact: "",
    from: "",
    to: "",
    date: "",
    time: "",
  });

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const selectedFleet = FLEETS.find((f) => f.id === selectedCab) || FLEETS[0];

  const whatsappUrl = useMemo(() => {
    const cab = selectedFleet?.name || "Cab";
    const message = `New travel booking:%0ACab: ${cab}%0ATrip Type: ${tripType}%0AName: ${form.name}%0AContact: ${form.contact}%0AFrom: ${form.from}%0ATo: ${form.to}%0ADate: ${form.date}%0ATime: ${form.time}`;
    return `https://wa.me/919342991455?text=${message}`;
  }, [form, selectedFleet, tripType]);

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const openBooking = (cabId) => {
    const cab = FLEETS.find((f) => f.id === cabId);
    setSelectedCab(cabId);
    setTripType(cab?.trip || "oneway");
    setOpen(true);
  };

  return (
    <section id="tariff" className="relative overflow-hidden bg-white py-20 sm:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,146,60,0.14),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(255,237,213,0.7),transparent_30%)] hidden" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-medium text-green-600">
            <Sparkles size={14} /> Affordable & Comfortable Rides
          </span>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Choose the perfect vehicle for your trip.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Pick from sedans, SUVs, premium vans, and buses tailored for one-way or round-trip travel, with extra charges clearly noted.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {FLEETS.map((fleet, index) => {
            const Icon = fleet.icon;
            return (
             <motion.article
  key={fleet.id}
  initial={{ opacity: 0, y: 18 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.45, delay: index * 0.05 }}
  className="group flex h-[600px] flex-col overflow-hidden rounded-[2rem] border border-green-100 bg-white shadow-[0_16px_50px_rgba(249,115,22,0.08)] transition hover:-translate-y-1 hover:shadow-[0_22px_70px_rgba(249,115,22,0.14)]"
>
  {/* Image Section */}
  <div className="relative flex h-1/2 items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 via-white to-green-50">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,146,60,0.18),transparent_40%)]" />

    <div className="absolute z-5 left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-green-600 shadow-sm">
      {fleet.trip === "oneway" ? "One Way Trip" : "Round Trip"}
    </div>

    <div className="absolute z-5 right-5 top-5 text-right">
      <p className="text-xs uppercase tracking-[0.2em] text-white">
        Starting from
      </p>
      <p className="mt-1 text-2xl font-semibold text-white">
        {fleet.priceOneWay !== "—"
          ? fleet.priceOneWay
          : fleet.priceRoundTrip}
      </p>
    </div>

    <div className="relative  h-full w-full">
      <img
        src={fleet.image}
        alt={fleet.name}
        fill
        sizes="100vw"
        className="object-contain  drop-shadow-2xl transition duration-500 group-hover:scale-105"
      />
    </div>
  </div>

  {/* Content Section */}
  <div className="flex flex-1 flex-col justify-between p-5">
    <div>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-2xl font-semibold text-slate-950">
            {fleet.name}
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            One Way {fleet.priceOneWay} • Round Trip{" "}
            {fleet.priceRoundTrip}
          </p>
        </div>

        <div className="rounded-full border border-green-200 bg-green-50 px-3 py-1 text-xs font-semibold text-green-600">
          {fleet.trip === "oneway" ? "One Way" : "Round Trip"}
        </div>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
        <div className="rounded-2xl border border-green-100 bg-green-50/40 p-3">
          <div className="text-slate-500">Capacity</div>
          <div className="mt-1 font-semibold text-slate-950">
            {fleet.capacity}
          </div>
        </div>

        <div className="rounded-2xl border border-green-100 bg-green-50/40 p-3">
          <div className="text-slate-500">Luggage</div>
          <div className="mt-1 font-semibold text-slate-950">
            {fleet.luggage}
          </div>
        </div>

        <div className="rounded-2xl border border-green-100 bg-green-50/40 p-3">
          <div className="text-slate-500">Driver Beta</div>
          <div className="mt-1 font-semibold text-slate-950">
            {fleet.driverBeta}
          </div>
        </div>

        <div className="rounded-2xl border border-green-100 bg-green-50/40 p-3">
          <div className="text-slate-500">Category</div>
          <div className="mt-1 flex items-center gap-2 font-semibold text-slate-950">
            <Icon size={15} className="text-green-500" />
            {fleet.name}
          </div>
        </div>
      </div>

      <p className="mt-4 text-xs leading-6 text-slate-500">
        {fleet.note}
      </p>
    </div>

    <div className="mt-5 flex gap-3">
      <button
        type="button"
        onClick={() => openBooking(fleet.id)}
        className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-green-500 to-green-400 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-green-500/20 transition hover:scale-[1.02]"
      >
        Book Now
        <ArrowRight size={16} />
      </button>

      <a
        href="tel:+919342991455"
        className="flex h-12 w-12 items-center justify-center rounded-2xl border border-green-200 text-green-600 transition hover:bg-green-50"
      >
        <Phone size={16} />
      </a>
    </div>
  </div>
</motion.article>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-end justify-center bg-slate-950/50 px-3 py-4 backdrop-blur-sm sm:items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.98 }}
              transition={{ duration: 0.22 }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[92svh] w-full max-w-4xl overflow-y-auto rounded-[2rem] border border-green-100 bg-white shadow-[0_30px_120px_rgba(0,0,0,0.2)]"
            >
              <div className="sticky top-0 z-10 flex items-center justify-between border-b border-green-100 bg-white/95 px-5 py-4 backdrop-blur">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-green-500">
                    Booking Form
                  </p>
                  <h3 className="text-lg font-semibold text-slate-950">
                    {selectedFleet.name} — {tripType === "oneway" ? "One Way" : "Round Trip"}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-green-200 text-slate-700 transition hover:bg-green-50"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
                <div className="border-b border-green-100 bg-gradient-to-br from-green-50 via-white to-white p-6 lg:border-b-0 lg:border-r">
                  <div className="rounded-[1.75rem] border border-green-100 bg-white p-5 shadow-sm">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-xl font-semibold text-slate-950">{selectedFleet.name}</h4>
                        <p className="text-sm text-slate-500">
                          {tripType === "oneway" ? "One Way Trip" : "Round Trip"}
                        </p>
                      </div>
                      <div className="relative h-24 w-40">
                        <Image
                          src={selectedFleet.image}
                          alt={selectedFleet.name}
                          fill
                          className="object-cover rounded-3xl"
                          sizes="160px"
                        />
                      </div>
                    </div>

                    <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                      <MiniStat label="One Way" value={selectedFleet.priceOneWay} />
                      <MiniStat label="Round Trip" value={selectedFleet.priceRoundTrip} />
                      <MiniStat label="Capacity" value={selectedFleet.capacity} />
                      <MiniStat label="Luggage" value={selectedFleet.luggage} />
                      <MiniStat label="Driver Beta" value={selectedFleet.driverBeta} />
                      <MiniStat label="Call" value="+91 93429 91455" />
                    </div>

                    <p className="mt-5 text-sm leading-6 text-slate-600">{selectedFleet.note}</p>
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <div className="grid grid-cols-2 gap-2 rounded-2xl bg-green-50 p-1">
                    {[
                      { id: "oneway", label: "One Way" },
                      { id: "roundtrip", label: "Round Trip" },
                    ].map((t) => (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => setTripType(t.id)}
                        className={`rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                          tripType === t.id
                            ? "bg-white text-green-600 shadow-sm"
                            : "text-slate-500"
                        }`}
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>

                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    <Input icon={Sparkles} label="Name" name="name" value={form.name} onChange={handleChange} placeholder="Your full name" />
                    <Input icon={Phone} label="Contact Number" name="contact" value={form.contact} onChange={handleChange} placeholder="10-digit mobile number" />
                    <Input icon={MapPin} label="From Location" name="from" value={form.from} onChange={handleChange} placeholder="Pickup location" />
                    <Input icon={MapPin} label="Drop Location" name="to" value={form.to} onChange={handleChange} placeholder="Drop location" />
                    <Input icon={CalendarDays} label="Pick Date" name="date" type="date" value={form.date} onChange={handleChange} />
                    <SelectField icon={Clock3} label="Pick Time" name="time" value={form.time} onChange={handleChange} options={TIME_SLOTS} />
                  </div>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-green-500 to-green-400 px-5 py-4 text-sm font-semibold text-white shadow-lg shadow-green-500/20"
                  >
                    Send to WhatsApp <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function Input({ icon: Icon, label, ...props }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-slate-700">{label}</span>
      <div className="flex items-center gap-3 rounded-2xl border border-green-100 bg-white px-4 py-3 shadow-sm focus-within:border-green-300 focus-within:ring-4 focus-within:ring-green-100">
        <Icon size={16} className="text-green-500" />
        <input {...props} className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400" />
      </div>
    </label>
  );
}

function SelectField({ icon: Icon, label, options, ...props }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-slate-700">{label}</span>
      <div className="flex items-center gap-3 rounded-2xl border border-green-100 bg-white px-4 py-3 shadow-sm focus-within:border-green-300 focus-within:ring-4 focus-within:ring-green-100">
        <Icon size={16} className="text-green-500" />
        <select {...props} className="w-full appearance-none bg-transparent text-sm text-slate-900 outline-none">
          <option value="">Select time</option>
          {options.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
      </div>
    </label>
  );
}

function MiniStat({ label, value }) {
  return (
    <div className="rounded-2xl border border-green-100 bg-green-50/40 p-3">
      <div className="text-xs text-slate-500">{label}</div>
      <div className="mt-1 text-sm font-semibold text-slate-950">{value}</div>
    </div>
  );
}