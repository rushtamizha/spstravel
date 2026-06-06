// "use client";

// import { useEffect, useMemo, useState } from "react";
// import Link from "next/link";
// import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
// import {
//   Menu,
//   X,
//   ChevronDown,
//   Sparkles,
//   CarFront,
//   CarTaxiFront,
//   BusFront,
//   ShipWheel,
//   ArrowRight,
//   Phone,
//   Clock3,
//   MapPin,
//   CalendarDays,
// } from "lucide-react";

// const CABS = [
//   { id: "sedan", name: "Sedan", car: CarFront, image: "/cars/sedan.webp", price: "₹15/km" },
//   { id: "suv", name: "Innova", car: CarTaxiFront, image: "/cars/innova.webp", onewayPrice: "₹20/km" },
//   { id: "tempo", name: "Tempo Traveller", car: BusFront, image: "/cars/tempo.jpg", price: "₹25/km" },
//   { id: "luxury", name: "Urbania", car: ShipWheel, image: "/cars/16-seater-urbania.webp", price: "₹37/km" },
// ];

// const TIME_SLOTS = [
//   "12:00 AM", "01:00 AM", "02:00 AM", "03:00 AM", "04:00 AM", "05:00 AM",
//   "06:00 AM", "07:00 AM", "08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM",
//   "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM",
//   "06:00 PM", "07:00 PM", "08:00 PM", "09:00 PM", "10:00 PM", "11:00 PM"
// ];

// const fadeUp = {
//   hidden: { opacity: 0, y: 18 },
//   visible: { opacity: 1, y: 0 },
// };

// const fadeDown = {
//   hidden: { opacity: 0, y: -12 },
//   visible: { opacity: 1, y: 0 },
// };

// export default function Hero() {
//   const [tripType, setTripType] = useState("oneway");
//   const [selectedCab, setSelectedCab] = useState(CABS[0].id);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [form, setForm] = useState({
//     name: "",
//     contact: "",
//     from: "",
//     to: "",
//     date: "",
//     time: "",
//   });

//   const { scrollY } = useScroll();
//   const logoScale = useTransform(scrollY, [0, 120], [1, 0.94]);
//   const logoY = useTransform(scrollY, [0, 120], [0, -3]);
//   const logoOpacity = useTransform(scrollY, [0, 120], [1, 0.88]);

//   useEffect(() => {
//     const onKeyDown = (e) => {
//       if (e.key === "Escape") setMobileOpen(false);
//     };
//     window.addEventListener("keydown", onKeyDown);
//     return () => window.removeEventListener("keydown", onKeyDown);
//   }, []);

//   const whatsappUrl = useMemo(() => {
//     const cab = CABS.find((c) => c.id === selectedCab)?.name || "Cab";
//     const msg = `New travel booking:%0ATrip Type: ${tripType}%0AName: ${form.name}%0AContact: ${form.contact}%0AFrom: ${form.from}%0ATo: ${form.to}%0ADate: ${form.date}%0ATime: ${form.time}%0ACab: ${cab}`;
//     return `https://wa.me/919999999999?text=${msg}`;
//   }, [tripType, form, selectedCab]);

//   const navItems = [
//     { label: "Routes", href: "#routes", icon: MapPin },
//     { label: "Fleets", href: "#fleets", icon: CarFront },
//     { label: "Support", href: "#support", icon: Phone },
//   ];

//   const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

//   return (
//     <section className="relative overflow-hidden bg-gradient-to-b from-white via-green-50 to-white">
//       <div className="absolute inset-0 bg-gradient-to-r from-emerald-700/10  " />
//       <div className={`absolute inset-x-0 top-0 h-full `} >
//         <img src="/routes/Thanjavur.jpg" className="object-cover h-full w-full opacity-20" alt="" />
//       </div>

//       <header className="fixed hidden top-4 left-0 right-0 z-50 px-3 sm:px-4">
//         <motion.nav
//           initial="hidden"
//           animate="visible"
//           variants={fadeDown}
//           transition={{ duration: 0.5, ease: "easeOut" }}
//           className="mx-auto w-full max-w-7xl rounded-full border border-green-200 bg-white/90 shadow-[0_12px_40px_rgba(249,115,22,0.08)] backdrop-blur-xl"
//         >
//           <div className="rounded-full bg-gradient-to-r from-green-400 via-green-500 to-green-400 p-[1px]">
//             <div className="rounded-full bg-white px-4 sm:px-5">
//               <div className="flex h-16 items-center justify-between gap-3">
//                 <Link href="#home" className="flex items-center gap-3 group">
//                   <motion.div
//                     style={{ scale: logoScale, y: logoY, opacity: logoOpacity }}
//                     className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-green-400 text-white shadow-lg"
//                   >
                 
//                   </motion.div>

//                   <div className="leading-tight">
//                     <motion.div
//                       style={{ scale: logoScale, y: logoY, opacity: logoOpacity }}
//                       className="text-sm font-semibold tracking-[0.22em] text-slate-900 uppercase"
//                     >
//                       Green Tours & Travels
//                     </motion.div>
//                     <motion.div
//                       style={{ opacity: logoOpacity }}
//                       className="text-[11px] text-slate-500"
//                     >
//                       Premium Cab Booking
//                     </motion.div>
//                   </div>
//                 </Link>

//                 <div className="hidden items-center gap-1 lg:flex">
//                   {navItems.map((item) => {
//                     const Icon = item.icon;
//                     return (
//                       <Link
//                         key={item.label}
//                         href={item.href}
//                         className="flex items-center gap-2 rounded-full px-4 py-2 text-sm text-slate-700 transition hover:bg-green-50 hover:text-green-600"
//                       >
//                         <Icon size={16} />
//                         <span>{item.label}</span>
//                       </Link>
//                     );
//                   })}
//                 </div>

//                 <div className="hidden items-center gap-3 lg:flex">
//                   <Link
//                     href="#contact"
//                     className="rounded-full border border-green-200 px-4 py-2 text-sm text-slate-700 transition hover:border-green-300 hover:bg-green-50 hover:text-green-600"
//                   >
//                     Contact
//                   </Link>
//                   <Link
//                     href="#book"
//                     className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-green-500 to-green-400 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-green-500/20 transition hover:scale-[1.02]"
//                   >
//                     Book Now
//                     <ArrowRight size={16} className="transition group-hover:translate-x-0.5" />
//                   </Link>
//                 </div>

//                 <button
//                   type="button"
//                   className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-green-200 text-slate-700 transition hover:bg-green-50 lg:hidden"
//                   onClick={() => setMobileOpen((v) => !v)}
//                   aria-label="Toggle mobile menu"
//                 >
//                   {mobileOpen ? <X size={20} /> : <Menu size={20} />}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </motion.nav>

//         <AnimatePresence>
//           {mobileOpen && (
//             <motion.div
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -10 }}
//               transition={{ duration: 0.2 }}
//               className="lg:hidden"
//             >
//               <div className="mx-auto mt-3 max-w-7xl overflow-hidden rounded-3xl border border-green-100 bg-white/95 p-3 shadow-2xl shadow-green-500/10 backdrop-blur-xl">
//                 <div className="space-y-2">
//                   {navItems.map((item) => {
//                     const Icon = item.icon;
//                     return (
//                       <Link
//                         key={item.label}
//                         href={item.href}
//                         onClick={() => setMobileOpen(false)}
//                         className="flex items-center gap-3 rounded-2xl border border-green-100 bg-green-50/40 px-4 py-3 text-slate-800"
//                       >
//                         <Icon size={16} className="text-green-500" />
//                         {item.label}
//                       </Link>
//                     );
//                   })}
//                 </div>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </header>

//       <div
//         id="home"
//         className="relative mx-auto grid min-h-[100svh] max-w-7xl items-center gap-10 px-4 pb-16 pt-28 lg:grid-cols-[1.05fr_0.95fr] lg:px-6"
//       >
//         <motion.div
//           initial="hidden"
//           animate="visible"
//           variants={fadeUp}
//           transition={{ duration: 0.6 }}
//           className="relative z-10 max-w-2xl"
//         >
//           <span className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-white/80 px-4 py-2 text-sm text-green-600 shadow-sm backdrop-blur">
//             <Clock3 size={14} /> 24/7 travel bookings with instant WhatsApp confirmation
//           </span>

//           <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
//             Luxury rides, smooth bookings, and fast WhatsApp support.
//           </h1>

//           <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
//             Book one-way or round-trip cabs with a clean premium interface, animated travel visuals, and a fast booking form built for conversion.
//           </p>

//           <div className="mt-8 flex flex-wrap gap-3">
//             <Link
//               href="#book"
//               className="rounded-full bg-gradient-to-r from-green-500 to-green-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-green-500/20"
//             >
//              Book Cab : +919677792455
//             </Link>
//             <Link
//               href="#fleets"
//               className="rounded-full border border-green-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hidden"
//             >
//               View Cabs
//             </Link>
//             <Link
//               href="#contact"
//               className="rounded-full border border-green-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hidden"
//             >
//               Contact Us
//             </Link>
//           </div>

//           <div className="mt-10 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3 hidden">
//             {["Instant WhatsApp lead", "Premium travel UI", "Responsive mobile drawer"].map((item) => (
//               <div
//                 key={item}
//                 className="rounded-3xl border border-green-100 bg-white/80 p-4 text-sm text-slate-600 shadow-sm"
//               >
//                 {item}
//               </div>
//             ))}
//           </div>
//         </motion.div>

//         <motion.div
//           id="book"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, delay: 0.1 }}
//           className="relative z-10"
//         >
//           <div className="rounded-[2rem] border border-green-100 bg-white/95 p-4 shadow-[0_24px_80px_rgba(249,115,22,0.12)] backdrop-blur-xl sm:p-6">
//             <div className="flex items-center justify-between gap-3">
//               <div>
//                 <h2 className="text-xl font-semibold text-slate-900">Book your ride</h2>
//                 <p className="text-sm text-slate-500">Fill details and send directly to WhatsApp.</p>
//               </div>
//               <div className="rounded-full bg-green-50 px-3 py-2 text-xs font-semibold text-green-600">
//                 Travel booking
//               </div>
//             </div>

//             <div className="mt-5 grid grid-cols-2 gap-2 rounded-2xl bg-green-50 p-1">
//               {[
//                 { id: "oneway", label: "One Way" },
//                 { id: "roundtrip", label: "Round Trip" },
//               ].map((t) => (
//                 <button
//                   key={t.id}
//                   type="button"
//                   onClick={() => setTripType(t.id)}
//                   className={`rounded-2xl px-4 py-3 text-sm font-semibold transition ${
//                     tripType === t.id
//                       ? "bg-white text-green-600 shadow-sm"
//                       : "text-slate-500"
//                   }`}
//                 >
//                   {t.label}
//                 </button>
//               ))}
//             </div>

//             <div className="mt-5 grid gap-4 sm:grid-cols-2">
//               <Input
//                 icon={Sparkles}
//                 label="Name"
//                 name="name"
//                 value={form.name}
//                 onChange={handleChange}
//                 placeholder="Your full name"
//               />
//               <Input
//                 icon={Phone}
//                 label="Contact Number"
//                 name="contact"
//                 value={form.contact}
//                 onChange={handleChange}
//                 placeholder="10-digit mobile number"
//               />
//               <Input
//                 icon={MapPin}
//                 label="From Location"
//                 name="from"
//                 value={form.from}
//                 onChange={handleChange}
//                 placeholder="Pickup location"
//               />
//               <Input
//                 icon={MapPin}
//                 label="Drop Location"
//                 name="to"
//                 value={form.to}
//                 onChange={handleChange}
//                 placeholder="Drop location"
//               />
//               <Input
//                 icon={CalendarDays}
//                 label="Pick Date"
//                 name="date"
//                 type="date"
//                 value={form.date}
//                 onChange={handleChange}
//               />
//               <SelectField
//                 icon={Clock3}
//                 label="Pick Time"
//                 name="time"
//                 value={form.time}
//                 onChange={handleChange}
//                 options={TIME_SLOTS}
//               />
//             </div>

//             <div className="mt-5">
//               <p className="mb-3 text-sm font-semibold text-slate-700">Select cab</p>
//               <div className="grid gap-3 sm:grid-cols-2">
//                 {CABS.map((cab) => {
//                   const CabIcon = cab.car;
//                   const active = selectedCab === cab.id;
//                   return (
//                     <button
//                       key={cab.id}
//                       type="button"
//                       onClick={() => setSelectedCab(cab.id)}
//                       className={`flex items-center justify-between rounded-2xl border p-4 text-left transition ${
//                         active
//                           ? "border-green-300 bg-green-50 shadow-sm"
//                           : "border-green-100 bg-white hover:bg-green-50/60"
//                       }`}
//                     >
//                       <div className="flex items-center gap-3">
//                         <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-2xl shadow-sm ">
//                           <img src={cab.image} className="h-full w-full object-cover rounded-full" alt="" />
//                         </div>
//                         <div>
//                           <div className="text-sm font-semibold text-slate-900">{cab.name}</div>
//                           <div className="text-xs text-slate-500">{cab.price}</div>
//                         </div>
//                       </div>
//                       <CabIcon size={18} className="text-green-500" />
//                     </button>
//                   );
//                 })}
//               </div>
//             </div>

//             <a
//               href={whatsappUrl}
//               target="_blank"
//               rel="noreferrer"
//               className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-green-500 to-green-400 px-5 py-4 text-sm font-semibold text-white shadow-lg shadow-green-500/20"
//             >
//               Send to WhatsApp <ArrowRight size={16} />
//             </a>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// function Input({ icon: Icon, label, ...props }) {
//   return (
//     <label className="block">
//       <span className="mb-2 block text-sm font-medium text-slate-700">{label}</span>
//       <div className="flex items-center gap-3 rounded-2xl border border-green-100 bg-white px-4 py-3 shadow-sm focus-within:border-green-300 focus-within:ring-4 focus-within:ring-green-100">
//         <Icon size={16} className="text-green-500" />
//         <input
//           {...props}
//           className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
//         />
//       </div>
//     </label>
//   );
// }

// function SelectField({ icon: Icon, label, options, ...props }) {
//   return (
//     <label className="block">
//       <span className="mb-2 block text-sm font-medium text-slate-700">{label}</span>
//       <div className="flex items-center gap-3 rounded-2xl border border-green-100 bg-white px-4 py-3 shadow-sm focus-within:border-green-300 focus-within:ring-4 focus-within:ring-green-100">
//         <Icon size={16} className="text-green-500" />
//         <select
//           {...props}
//           className="w-full appearance-none bg-transparent text-sm text-slate-900 outline-none"
//         >
//           <option value="">Select time</option>
//           {options.map((o) => (
//             <option key={o} value={o}>
//               {o}
//             </option>
//           ))}
//         </select>
//       </div>
//     </label>
//   );
// }
"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  Sparkles,
  CarFront,
  CarTaxiFront,
  BusFront,
  ShipWheel,
  ArrowRight,
  Phone,
  Clock3,
  MapPin,
  CalendarDays,
  AlertCircle,
} from "lucide-react";


const FLEETS = [
  {
    id: "sedan",
    name: "Sedan",
    priceOneWay: "₹15/km",
    priceRoundTrip: "₹14/km",
    capacity: "4 passengers",
    luggage: "3 bags",
    driverBeta: "₹500",
    note: "Toll Gate, State Permit, Hill Station, Parking - Charges Extra.",
    icon: CarFront,
    image: "/cars/sedan.webp",
    trip: "oneway",
  },
  {
    id: "innova",
    name: "Innova",
    priceOneWay: "₹20/km",
    priceRoundTrip: "₹19/km",
    capacity: "5+ passengers",
    luggage: "4 bags",
    driverBeta: "₹500",
    note: "Toll Gate, State Permit, Hill Station, Parking - Charges Extra.",
    icon: CarTaxiFront,
    image: "/cars/innova.jpg",
    trip: "oneway",
  },
  {
    id: "innova-crysta",
    name: "Innova Crysta",
    priceOneWay: "₹23/km",
    priceRoundTrip: "₹21/km",
    capacity: "6+ passengers",
    luggage: "5 bags",
    driverBeta: "₹600",
    note: "Toll Gate, State Permit, Hill Station, Parking - Charges Extra.",
    icon: CarTaxiFront,
    image: "/cars/innova.webp",
    trip: "oneway",
  },
  {
    id: "tempo",
    name: "12-Seater Tempo",
    priceOneWay: null,
    priceRoundTrip: "₹25/km",
    capacity: "12 passengers",
    luggage: "6+ bags",
    driverBeta: "₹1000",
    note: "Toll Gate, State Permit, Hill Station, Parking - Charges Extra.",
    icon: BusFront,
    image: "/cars/tempo.jpg",
    trip: "roundtrip",
  },
  {
    id: "urbania",
    name: "Urbania (16-Seater)",
    priceOneWay: null,
    priceRoundTrip: "₹38/km",
    capacity: "16 passengers",
    luggage: "8+ bags",
    driverBeta: "₹1000",
    note: "Toll Gate, State Permit, Hill Station, Parking - Charges Extra.",
    icon: BusFront,
    image: "/cars/16-seater-urbania.webp",
    trip: "roundtrip",
  },
  {
    id: "tempo18",
    name: "18-Seater Tempo",
    priceOneWay: null,
    priceRoundTrip: "₹40/km",
    capacity: "17 passengers",
    luggage: "10+ bags",
    driverBeta: "₹1000",
    note: "Toll Gate, State Permit, Hill Station, Parking - Charges Extra.",
    icon: ShipWheel,
    image: "/cars/tempo.jpg",
    trip: "roundtrip",
  },
];


const TIME_SLOTS = [
  "12:00 AM", "01:00 AM", "02:00 AM", "03:00 AM", "04:00 AM", "05:00 AM",
  "06:00 AM", "07:00 AM", "08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM",
  "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM",
  "06:00 PM", "07:00 PM", "08:00 PM", "09:00 PM", "10:00 PM", "11:00 PM"
];


const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};


const fadeDown = {
  hidden: { opacity: 0, y: -12 },
  visible: { opacity: 1, y: 0 },
};


export default function Hero() {
  const [tripType, setTripType] = useState("oneway");
  const [selectedCab, setSelectedCab] = useState("sedan");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    contact: "",
    from: "",
    to: "",
    date: "",
    time: "",
  });


  const { scrollY } = useScroll();
  const logoScale = useTransform(scrollY, [0, 120], [1, 0.94]);
  const logoY = useTransform(scrollY, [0, 120], [0, -3]);
  const logoOpacity = useTransform(scrollY, [0, 120], [1, 0.88]);


  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);


  // FIXED: Filter cabs based on trip type
  const availableCabs = useMemo(() => {
    return FLEETS.filter((cab) => {
      // If trip is roundtrip, show ALL cabs
      if (tripType === "roundtrip") return true;
      // If trip is oneway, show only cabs that support one-way
      return cab.priceOneWay !== null;
    });
  }, [tripType]);


  // FIXED: Auto-switch cab only when switching to oneway with invalid selection
  useEffect(() => {
    if (tripType === "oneway") {
      const currentCab = FLEETS.find((c) => c.id === selectedCab);
      if (currentCab?.priceOneWay === null) {
        const firstOneWayCab = FLEETS.find((c) => c.priceOneWay !== null);
        if (firstOneWayCab) setSelectedCab(firstOneWayCab.id);
      }
    }
  }, [tripType, selectedCab]);


  const whatsappUrl = useMemo(() => {
    const cab = FLEETS.find((c) => c.id === selectedCab);
    const cabName = cab?.name || "Cab";
    const price = tripType === "oneway" ? cab?.priceOneWay : cab?.priceRoundTrip;
    const msg = `New travel booking:%0ATrip Type: ${tripType === "oneway" ? "One Way" : "Round Trip"}%0AName: ${form.name}%0AContact: ${form.contact}%0AFrom: ${form.from}%0ATo: ${form.to}%0ADate: ${form.date}%0ATime: ${form.time}%0ACab: ${cabName}%0APrice: ${price || "Contact for pricing"}`;
    return `https://wa.me/919677792455?text=${msg}`;
  }, [tripType, form, selectedCab]);


  const navItems = [
    { label: "Routes", href: "#routes", icon: MapPin },
    { label: "Fleets", href: "#fleets", icon: CarFront },
    { label: "Support", href: "#support", icon: Phone },
  ];


  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));


  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-green-50 to-white">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-700/10" />
      <div className={`absolute inset-x-0 top-0 h-full`}>
        <img src="/routes/Thanjavur.jpg" className="object-cover h-full w-full opacity-20" alt="" />
      </div>


      <header className="fixed hidden top-4 left-0 right-0 z-50 px-3 sm:px-4">
        <motion.nav
          initial="hidden"
          animate="visible"
          variants={fadeDown}
          transition={{ duration: 0.5, ease: "easeOut" }}>
          {/* ... header content remains the same ... */}
        </motion.nav>


        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden">
              {/* ... mobile menu remains the same ... */}
            </motion.div>
          )}
        </AnimatePresence>
      </header>


      <div
        id="home"
        className="relative mx-auto grid min-h-[100svh] max-w-7xl items-center gap-10 px-4 pb-16 pt-28 lg:grid-cols-[1.05fr_0.95fr] lg:px-6">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-white/80 px-4 py-2 text-sm text-green-600 shadow-sm backdrop-blur">
            <Clock3 size={14} /> 24/7 travel bookings with instant WhatsApp confirmation
          </span>

          <h1 className="mt-6 text-2xl  md:text-4xl font-semibold tracking-tight text-emerald-800 uppercase">
            Luxury rides, smooth bookings
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-black sm:text-lg">
            Book one-way or round-trip cabs with a clean premium interface, animated travel visuals, and a fast booking form built for conversion.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="#book"
              className="rounded-full bg-gradient-to-r from-green-500 to-green-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-green-500/20">
              Book Cab : +919677792455
            </Link>
          </div>
        </motion.div>


        <motion.div
          id="book"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative z-10">
          <div className="rounded-[2rem] border border-green-100 bg-white/95 p-4 shadow-[0_24px_80px_rgba(249,115,22,0.12)] backdrop-blur-xl sm:p-6">
            <div className="flex items-center justify-between gap-3">
              <div>
                <h2 className="text-xl font-semibold text-slate-900">Book your ride</h2>
                <p className="text-sm text-slate-500">Fill details and send directly to WhatsApp.</p>
              </div>
              <div className="rounded-full bg-green-50 px-3 py-2 text-xs font-semibold text-green-600">
                Travel booking
              </div>
            </div>


              <div className="mt-5 grid grid-cols-2 gap-2 rounded-2xl bg-green-50 p-1">
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
                  }`}>
                  {t.label}
                </button>
              ))}
            </div>


            {tripType === "roundtrip" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-3 flex items-start gap-2 rounded-xl bg-amber-50 border border-amber-200 p-3">
                <AlertCircle size={16} className="text-amber-600 mt-0.5" />
                <p className="text-xs text-amber-700">
                  <strong>Note:</strong> One-way available: Sedan, Innova, Innova Crysta. Round-trip only: 12/18-Seater Tempo, Urbania.
                </p>
              </motion.div>
            )}


            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <Input
                icon={Sparkles}
                label="Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your full name" />
              <Input
                icon={Phone}
                label="Contact Number"
                name="contact"
                value={form.contact}
                onChange={handleChange}
                placeholder="10-digit mobile number" />
              <Input
                icon={MapPin}
                label="From Location"
                name="from"
                value={form.from}
                onChange={handleChange}
                placeholder="Pickup location" />
              <Input
                icon={MapPin}
                label="Drop Location"
                name="to"
                value={form.to}
                onChange={handleChange}
                placeholder="Drop location" />
              <Input
                icon={CalendarDays}
                label="Pick Date"
                name="date"
                type="date"
                value={form.date}
                onChange={handleChange} />
              <SelectField
                icon={Clock3}
                label="Pick Time"
                name="time"
                value={form.time}
                onChange={handleChange}
                options={TIME_SLOTS} />
            </div>


            <div className="mt-5">
              <p className="mb-3 text-sm font-semibold text-slate-700">Select cab</p>
              <div className="grid gap-3 sm:grid-cols-2">
                {availableCabs.map((cab) => {
                  const CabIcon = cab.icon;
                  const active = selectedCab === cab.id;
                  const roundTripOnly = cab.priceOneWay === null;
                  
                  return (
                    <button
                      key={cab.id}
                      type="button"
                      onClick={() => setSelectedCab(cab.id)}
                      className={`flex items-center justify-between rounded-2xl border p-4 text-left transition ${
                        active
                          ? "border-green-300 bg-green-50 shadow-sm"
                          : "border-green-100 bg-white hover:bg-green-50/60"
                      }`}>
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm overflow-hidden">
                          <img src={cab.image} className="h-full w-full object-cover" alt="" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-slate-900">{cab.name}</div>
                          <div className="text-xs text-slate-500">
                            {tripType === "oneway" ? cab.priceOneWay : cab.priceRoundTrip}
                          </div>
                          <div className="text-[10px] text-slate-400 mt-0.5">
                            {cab.capacity} • {cab.luggage}
                          </div>
                          {roundTripOnly && (
                            <div className="text-[10px] text-amber-600 mt-0.5">
                              ⚠️ Round Trip Only
                            </div>
                          )}
                        </div>
                      </div>
                      <CabIcon size={18} className="text-green-500" />
                    </button>
                  );
                })}
              </div>
            </div>

           <p className="text-xs m-2 p-1 text-center rounded-2xl text-amber-700 bg-amber-500/10">Toll Gate, State Permit, Hill Station, Parking - Charges Extra.</p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-green-500 to-green-400 px-5 py-4 text-sm font-semibold text-white shadow-lg shadow-green-500/20">
              Send to WhatsApp <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


function Input({ icon: Icon, label, ...props }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-slate-700">{label}</span>
      <div className="flex items-center gap-3 rounded-2xl border border-green-100 bg-white px-4 py-3 shadow-sm focus-within:border-green-300 focus-within:ring-4 focus-within:ring-green-100">
        <Icon size={16} className="text-green-500" />
        <input
          {...props}
          className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400" />
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
        <select
          {...props}
          className="w-full appearance-none bg-transparent text-sm text-slate-900 outline-none">
          <option value="">Select time</option>
          {options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </div>
    </label>
  );
}