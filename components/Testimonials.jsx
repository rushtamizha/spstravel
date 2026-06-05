"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import Image from "next/image";
import { Quote, Star } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Arjun Kumar",
    role: "Family Trip to Pondicherry",
    image: "/testimonials/creator1.jpg",
    text: "Very smooth booking and polite driver. The cab was clean, on time, and the WhatsApp confirmation was instant.",
    rating: 5,
  },
  {
    name: "Meena R",
    role: "Temple Tour to Madurai",
    image: "/testimonials/creator2.jpg",
    text: "Excellent service for our family trip. The Innova was comfortable for long travel and the support was very responsive.",
    rating: 5,
  },
  {
    name: "Suresh V",
    role: "Business Ride to Bangalore",
    image: "/testimonials/creator3.jpg",
    text: "Professional service, smooth highway ride, and premium vehicle options. Booking process was very easy.",
    rating: 5,
  },
  {
    name: "Priya S",
    role: "Group Tour to Kanyakumari",
    image: "/testimonials/creator4.jpg",
    text: "We traveled as a group and the Tempo Traveller was perfect. Clean vehicle, comfortable seats, and great coordination.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden bg-white py-20 sm:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,146,60,0.14),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(255,237,213,0.7),transparent_30%)] hidden" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-medium text-green-600">
            <Quote size={14} /> Testimonials
          </span>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            What our travelers say.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Real feedback from happy customers who booked premium travel rides with us.
          </p>
        </div>

        <div className="mt-12">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1280: { slidesPerView: 3 },
            }}
            className="!pb-12"
          >
            {TESTIMONIALS.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="h-full rounded-[2rem] border border-green-100 bg-white p-6  transition hover:-translate-y-1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="relative h-14 w-14 overflow-hidden rounded-full border border-green-100 bg-green-50">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-slate-950">
                          {item.name}
                        </h3>
                        <p className="text-sm text-slate-500">{item.role}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 text-green-400">
                      {Array.from({ length: item.rating }).map((_, i) => (
                        <Star key={i} size={14} fill="currentColor" />
                      ))}
                    </div>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-slate-600">
                    {item.text}
                  </p>

                  <div className="mt-6 rounded-2xl bg-green-50/60 px-4 py-3 text-xs font-medium text-green-600">
                    Verified booking feedback
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}