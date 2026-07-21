"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Package,
  Truck,
  Layers,
  ArrowRight,
  ShieldCheck,
  Flame,
  Settings,
  ShieldAlert,
  ClipboardCheck,
  LockKeyhole,
  CheckCircle2,
  Users,
  Wine,
  Compass,
  Utensils,
  Bed,
} from "lucide-react";
import Link from "next/link";

export default function PackagingPage() {
  const services = [
    {
      title: "Fire & Explosion Risk",
      Icon: Flame,
      desc: "Flammable materials, adhesives, inks, and high-speed machinery create serious fire hazards.",
    },
    {
      title: "Machinery Breakdown",
      Icon: Settings,
      desc: "Presses, die-cutting machines, and automated systems are prone to failures and downtime.",
    },
    {
      title: "Supply Chain Disruption",
      Icon: Truck,
      desc: "Dependence on raw material suppliers and logistics delays threaten delivery timelines.",
    },
    {
      title: "Product Contamination",
      Icon: ShieldAlert,
      desc: "Defective packaging may cause spoilage, contamination, recalls, and reputational damage.",
    },
    {
      title: "Regulatory Compliance",
      Icon: ClipboardCheck,
      desc: "Food-contact laws, recycling mandates, and labeling rules require constant adaptation.",
    },
    {
      title: "Intellectual Property",
      Icon: LockKeyhole,
      desc: "Designs and innovations need protection from counterfeiting and infringement.",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 overflow-x-hidden">
      {/* ---------------- HERO ---------------- */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/packaging.png"
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
            Material Engineering 4.0
          </span>
          <h1 className="text-3xl md:text-6xl font-black text-[#070B7F] mb-6 tracking-tighter uppercase leading-tight">
            Packaging Industry
            <br />{" "}
            <span className="text-blue-600 italic">Insurance Solutions</span>
          </h1>
          <h3 className="text-xs md:text-xl font-light text-slate-600 mb-10 uppercase tracking-[0.3em]">
            The packaging industry is essential to modern supply chains,
            ensuring product safety, shelf appeal, and logistics efficiency
            across food, pharmaceuticals, consumer goods, and e-commerce.
          </h3>
        </motion.div>

        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 text-blue-600"
        ></motion.div>
      </section>

      {/* ---------------- KEY THREATS ---------------- */}
      <section className="py-10 sm:py-16 lg:py-18 px-4 sm:px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-16 lg:mb-24">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-blue-900 mb-3">
              Key Threats
            </h2>
            <div className="h-1.5 sm:h-2 w-16 sm:w-24 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-10">
            {services.map((service, i) => {
              const Icon = service.Icon;
              return (
                <div
                  key={i}
                  className="group p-6 sm:p-10 bg-white border border-slate-200 
  rounded-2xl sm:rounded-[2.5rem] shadow-sm
  hover:shadow-2xl hover:-translate-y-2
  hover:border-blue-300 transition-all duration-300"
                >
                  <div
                    className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 text-blue-600 
  flex items-center justify-center rounded-xl sm:rounded-2xl mb-5 sm:mb-8
  shadow-sm group-hover:bg-blue-600 group-hover:text-white transition"
                  >
                    <Icon size={22} />
                  </div>

                  <h3 className="text-lg sm:text-2xl font-bold text-slate-900 mb-2">
                    {service.title}
                  </h3>

                  <p className="text-sm sm:text-lg text-slate-500 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- PROTECTION ---------------- */}
      <section className="py-10 sm:py-16 lg:py-18 bg-blue-50/50 px-4 sm:px-6 border-y border-blue-100">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 sm:gap-20 items-center">
          {/* LEFT CARD */}
          <div className="relative">
            <div className="bg-white p-4 sm:p-10 rounded-3xl sm:rounded-[4rem] shadow-xl border border-blue-100 relative z-10">
              <ShieldCheck size={42} className="text-blue-600 mb-4 sm:mb-8" />

              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-blue-900 mb-4 sm:mb-8 leading-tight">
                Comprehensive <br />
                <span className="text-blue-600 underline decoration-blue-200 underline-offset-4">
                  Protection
                </span>
              </h2>
            </div>

            {/* Decorative Ring (smaller & safe) */}
            <div className="hidden sm:block absolute -top-6 -right-6 w-40 h-40 border-[12px] border-blue-100 rounded-full"></div>
          </div>

          {/* RIGHT LIST */}
          <div>
            <div className="space-y-3 sm:space-y-4">
              {[
                "Property & Business Interruption",
                "Product Liability & Recall",
                "Environmental Impairment",
                "Marine & Transit",
                "Machinery Breakdown",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-3 sm:gap-4 items-center bg-white p-3 sm:p-5 rounded-xl sm:rounded-2xl border border-blue-100 shadow-sm"
                >
                  <CheckCircle2 size={18} className="text-blue-500" />
                  <p className="font-bold text-slate-700 text-sm sm:text-base">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
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
    </div>
  );
}
