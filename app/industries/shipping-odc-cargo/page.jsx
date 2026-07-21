"use client";
import React from "react";
import {
  Ship,
  Anchor,
  Truck,
  Box,
  ArrowRight,
  Maximize,
  ShieldCheck,
  Globe,
  Compass,
  Gauge,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function ShippingODCPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* 1. HERO SECTION: The Global Fleet */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/shipping.jpeg"
            className="w-full h-full object-cover opacity-20"
            alt="Hero Background"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6"
        >
          <span className="bg-blue-600 text-white px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block shadow-lg">
            Maritime Infrastructure Expansion
          </span>
          <h1 className="text-3xl md:text-6xl font-black text-[#070B7F] mb-6 tracking-tighter uppercase leading-tight">
            Powering Global
            <br /> <span className="text-blue-600 italic">Trade & Energy</span>
          </h1>
          <h3 className="text-xs md:text-xl font-light text-slate-600 mb-10 uppercase tracking-[0.3em]">
            Global trade growth driving mega-port development, offshore
            renewable energy boom, deep-sea exploration, automated port
            operations, green shipping initiatives, and offshore wind farm
            installations transforming maritime and energy sectors.
          </h3>
        </motion.div>

        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 text-blue-600"
        ></motion.div>
      </section>
      {/* Heading */}
      <div className="text-center mb-10 mt-5">
        <h2 className="text-4xl font-black text-slate-900 mb-4">
          Marine & Offshore Risks
        </h2>
        <div className="h-1.5 w-55 bg-blue-600 mx-auto rounded-full"></div>
      </div>
      {/* 3. CARGO VERTICALS */}
      <section className="bg-[#F7F8FC] py-10">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl font-black text-slate-900 mb-10"
          ></motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {[
              {
                title: "Port Operators Liability",
                desc: "Coverage for cargo handling damage, vessel collisions, stevedore injuries, and liabilities arising from terminal and port operations.",
                image: "/shipping/s1.jpeg",
              },
              {
                title: "Offshore Energy Risks",
                desc: "Protection against offshore platform damage, blowouts, equipment failure, and environmental incidents in oil, gas, and wind projects.",
                image: "/shipping/s2.jpeg",
              },
              {
                title: "Marine Cargo Insurance",
                desc: "Insurance for goods in transit covering loading and unloading damage, theft, weather-related losses, and transit risks.",
                image: "/shipping/s3.jpeg",
              },
              {
                title: "Marine Pollution Liability",
                desc: "Coverage for oil spills, environmental cleanup costs, regulatory penalties, and ecological damage caused by marine operations.",
                image: "/shipping/s4.jpeg",
              },
              {
                title: "Offshore Construction Risks",
                desc: "Protection for offshore installation projects against weather delays, subsea operation risks, vessel damage, and construction losses.",
                image: "/shipping/s5.jpeg",
              },
              {
                title: "Loss of Hire",
                desc: "Financial protection against revenue loss due to vessel downtime, port closures, accidents, or operational disruptions.",
                image: "/shipping/s6.jpeg",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-md hover:shadow-xl transition"
              >
                {/* ✅ Image Top */}
                <div className="w-full h-[320px] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="
                     w-full h-full
                     object-cover
                     transition-transform duration-500
                     group-hover:scale-100
                   "
                  />
                </div>

                {/* ✅ Text Bottom */}
                <div className="p-5 text-center">
                  <h3 className="text-xl font-semibold text-[#1C2A7D]">
                    {item.title}
                  </h3>
                  <p className="text-lg text-slate-600 mt-2">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* 5. CTA - DARK PREMIUM FINISH */}
      <section className="py-14 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="max-w-5xl mx-auto bg-slate-950 rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] -mr-48 -mt-48" />
          <div className="relative z-10">
            <ShieldCheck size={64} className="text-blue-400 mx-auto mb-10" />
            <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase italic tracking-tighter">
              Secure Your <br /> Industrial Future
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-blue-600/50 hover:bg-white/20 text-white border border-white/30 px-12 py-5 rounded-2xl font-bold text-xl transition-all backdrop-blur-md">
                <Link href="/contact" className="flex items-center gap-2">
                  Talk to Experts
                  <ArrowRight size={20} />
                </Link>
              </button>
            </div>
          </div>
        </motion.div>
      </section>
      {/* 4. ODC TECHNICAL SPEC SECTION */}
    </div>
  );
}
