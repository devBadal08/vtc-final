"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { motion, useInView } from "framer-motion";
import { ShieldCheck, BarChart3, ArrowRight } from "lucide-react";

import Hero from "./components/Hero";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

/* ================= SERVICES ================= */

const SERVICES = [
  {
    id: "01",
    title: "Risk Assessment",
    desc: "Identify, analyze, and reduce financial risks before they impact your business growth.",
    img: "risk.png",
    href: "/solutions/audits-risk-assessment",
  },
  {
    id: "02",
    title: "Claims Management",
    desc: "Fast, transparent, and efficient claims handling with complete client confidence.",
    img: "claims.png",
    href: "/solutions/claimsmanagement",
  },
  {
    id: "03",
    title: "Employee Benefits",
    desc: "Custom benefit programs that improve retention and enhance workforce satisfaction.",
    img: "benefits.png",
    href: "/solutions/employee-benefits",
  },
  {
    id: "04",
    title: "Life Insurance",
    desc: "Protect your family and business with long-term financial security solutions.",
    img: "family.png",
    href: "/solutions/lifeinsurance",
  },
];

/* ================= INDUSTRIES ================= */

const INDUSTRIES = [
  {
    num: "01",
    title: "Automotive",
    text: "Insurance solutions for automotive businesses.",
    img: "automotive.png",
    href: "/industries/automobile",
  },
  {
    num: "02",
    title: "BFSI",
    text: "Banking, financial services and insurance advisory.",
    img: "bfsi.png",
    href: "/industries/bfsi",
  },
  {
    num: "03",
    title: "IT & Tech",
    text: "Protecting digital and technology businesses.",
    img: "it-tech.png",
    href: "/industries/it",
  },
  {
    num: "04",
    title: "Infrastructure",
    text: "Coverage for engineering and manufacturing firms.",
    img: "engineering.png",
    href: "/industries/engineering",
  },
  {
    num: "05",
    title: "Green Energy",
    text: "Risk solutions for renewable energy projects.",
    img: "green-energy.png",
    href: "/industries/greenenergy",
  },
  {
    num: "06",
    title: "Chemical & Pharma",
    text: "Insurance for chemical and pharmaceutical sectors.",
    img: "chemical-pharma.png",
    href: "/industries/chemical-pharmaceuticals",
  },
  {
    num: "07",
    title: "Hospitality",
    text: "Protecting hotels, resorts and restaurants.",
    img: "hospitality.png",
    href: "/industries/hospitality",
  },
  {
    num: "08",
    title: "SME & MSME",
    text: "Tailored solutions for small and medium enterprises.",
    img: "sme-msme.png",
    href: "/industries/sme-msme",
  },
];

export default function HomePage() {
  const [activeService, setActiveService] = useState(0);

  return (
    <main className={poppins.className}>
      {/* ================= HERO ================= */}
      <Hero />

      {/* ================= STATS ================= */}
      <section className="py-12 md:py-16 bg-white">
        {" "}
        {/* Desktop padding py-32 se py-24 kiya */}
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              Empowering Businesses Through <br />
              <span className="text-blue-600 underline underline-offset-8">
                Strategic Risk Advisory
              </span>
            </h2>

            <p className="text-base md:text-lg text-slate-600 mb-10">
              Vestigo Insurance Brokers empowers businesses with expert risk
              consulting, comprehensive inspections, and policy audits.
            </p>
          </div>

          {/* RIGHT */}
          <div className="space-y-6">
            <div className="p-8 md:p-10 bg-slate-900 rounded-3xl text-white relative overflow-hidden">
              <h3 className="text-xl md:text-2xl font-bold mb-4">
                Our Mission
              </h3>
              <p className="text-slate-300 text-sm md:text-base relative z-10">
                Safeguarding Your Future Growth. To transform the insurance
                experience for organizations by delivering intelligent,
                technology-driven solutions backed by expert advisory ensuring
                every business is boldly protected, confidently growing, and
                always assured.
              </p>
              <ShieldCheck className="absolute -bottom-6 -right-6 w-24 h-24 md:w-32 md:h-32 opacity-10" />
            </div>

            <div className="p-8 md:p-10 bg-[#0C0F7F] rounded-3xl text-white relative overflow-hidden">
              <h3 className="text-xl md:text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-blue-100 text-sm md:text-base relative z-10">
                Pioneering India&apos;s Risk Advisory Landscape. To be the
                trusted leader in Business Insurance, delivering cutting-edge,
                innovative & tech powered solutions that every business
                organization can scale with certainty, security & confidence.
              </p>
              <BarChart3 className="absolute -bottom-6 -right-6 w-24 h-24 md:w-32 md:h-32 opacity-10" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-6 md:py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10 md:text-left md:mb-10">
            <h2 className="text-blue-600 tracking-widest mb-2 font-semibold text-2xl">
              WHAT WE OFFER
            </h2>
          </div>

          {/* Changed from flex to grid: 1 column on mobile, 2 columns on medium+ screens */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {SERVICES.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="relative overflow-hidden rounded-3xl cursor-pointer shadow-lg w-full h-[300px] md:h-[400px]"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 md:bg-black/40"></div>

                <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-10 text-white">
                  <span className="text-blue-300 text-3xl md:text-5xl font-bold mb-3">
                    {item.id}
                  </span>
                  <h3 className="text-xl md:text-3xl font-bold mb-2">
                    {item.title}
                  </h3>
                  {/* Description is now always visible */}
                  <p className="text-sm md:text-base text-gray-100 max-w-md">
                    {item.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================= INDUSTRIES ================= */}
      <section className="py-10 md:py-20 bg-[#f0f9ff]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:gap-20 items-start">
            <div className="w-full lg:w-1/2 lg:sticky lg:top-32 self-start space-y-6 mb-12 lg:mb-0">
              <span className="text-sky-600 tracking-widest font-semibold uppercase text-sm">
                Industries We Serve
              </span>

              <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
                Safety Shields for <br /> Every Sector
              </h2>

              <p className="text-slate-600 max-w-md text-base">
                Tailored insurance strategies across diverse industries.
              </p>

              <div className="w-full rounded-3xl overflow-hidden shadow-lg border-4 border-white">
                <img
                  src="/ecosystem.jpeg"
                  alt="Business Ecosystem Illustration"
                  className="w-full h-auto object-cover rounded-2xl block scale-[1.01]"
                />
              </div>
            </div>

            <div className="w-full lg:w-1/2 space-y-6 md:space-y-10">
              {INDUSTRIES.map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  className="
                    flex flex-col md:flex-row gap-6
                    bg-sky-50 rounded-3xl shadow-md p-6 md:p-8
                    hover:bg-white hover:shadow-2xl transition-all border border-sky-100
                  "
                >
                  <div
                    className="
                    w-full md:w-32 lg:w-40
                    aspect-video md:aspect-square
                    rounded-2xl overflow-hidden bg-white
                  "
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <span className="text-sky-600 font-bold text-lg">
                      {item.num}
                    </span>

                    <h3 className="text-xl md:text-2xl font-bold mt-1 mb-2 text-slate-900">
                      {item.title}
                    </h3>

                    <p className="text-sm md:text-base text-slate-600 mb-4">
                      {item.text}
                    </p>

                    <span className="inline-flex items-center gap-2 text-sky-600 font-semibold text-sm md:text-base">
                      Learn More <ArrowRight size={16} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-10 md:py-20 px-6">
        <div className="max-w-7xl mx-auto bg-slate-900 rounded-[2rem] md:rounded-[4rem] p-10 md:p-24 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-10">
            Ready to secure your journey?
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-white text-slate-900 px-6 py-4 md:px-10 md:py-5 rounded-2xl font-bold hover:bg-sky-50 transition-colors text-sm md:text-base"
          >
            Contact Our Experts <ArrowRight />
          </Link>
        </div>
      </section>
    </main>
  );
}
