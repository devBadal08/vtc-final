"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Factory,
  Settings,
  ArrowRight,
  Flame,
  Leaf,
  Truck,
  ShieldAlert,
  ClipboardCheck,
  LockKeyhole,
  Waves,
  Ship,
  ShieldCheck,
  BadgeX,
} from "lucide-react";
import Link from "next/link";

export default function PaperMillPage() {
  const processes = [
    {
      title: "Fire & Explosion Risk",
      Icon: Flame,
      desc: "Flammable materials, adhesives, inks, and high-speed machinery create significant fire hazards.",
    },
    {
      title: "Machinery Breakdown",
      Icon: Settings,
      desc: "Presses, pulping equipment, and automated systems are prone to failures and downtime.",
    },
    {
      title: "Supply Chain Disruption",
      Icon: Truck,
      desc: "Dependence on raw material suppliers and logistics challenges threatens delivery timelines.",
    },
    {
      title: "Environmental Liability",
      Icon: Leaf,
      desc: "Pollution, emissions, spills, and waste management issues expose mills to penalties and cleanup costs.",
    },
    {
      title: "Quality Control Failures",
      Icon: BadgeX,
      desc: "Defects in paper grades and contamination may lead to rejected shipments and disputes.",
    },
    {
      title: "Intellectual Property",
      Icon: LockKeyhole,
      desc: "Innovative designs and proprietary processes require protection from infringement and theft.",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
      {/* ---------------- HERO ---------------- */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/papermills.png"
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
            Industrial Excellence
          </span>
          <h1 className="text-3xl md:text-6xl font-black text-[#070B7F] mb-6 tracking-tighter uppercase leading-tight">
            Paper Mills
            <br />{" "}
            <span className="text-blue-600 italic">Industry Solutions</span>
          </h1>
          <h3 className="text-xs md:text-xl font-light text-slate-600 mb-10 uppercase tracking-[0.3em]">
            Paper mill manufacturers play a critical role in the circular
            economy, producing materials for packaging, construction, furniture,
            and consumer goods. Sustainability mandates, water and energy
            reduction targets, and regulatory compliance add operational
            complexity.
          </h3>
        </motion.div>

        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 text-blue-600"
        ></motion.div>
      </section>

      {/* ---------------- KEY THREATS ---------------- */}
      <section className="py-10 sm:py-16 px-4 sm:px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 sm:mb-16 gap-4">
            <div className="max-w-xl text-center md:text-left">
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 mb-2 uppercase">
                Key Threats
              </h2>
              <p className="text-slate-500 text-sm sm:text-base">
                Advanced pulping technologies and sustainability mandates
                reshape operations while introducing new exposures.
              </p>
            </div>

            <div className="hidden md:block h-px flex-1 bg-slate-200 mb-2 mx-12"></div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-10">
            {processes.map((proc, i) => {
              const Icon = proc.Icon;
              return (
                <div
                  key={i}
                  className="p-5 sm:p-10 bg-white rounded-2xl sm:rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition"
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-50 text-blue-600 flex items-center justify-center rounded-xl sm:rounded-2xl mb-4 sm:mb-8">
                    <Icon size={22} />
                  </div>

                  <h3 className="text-lg sm:text-2xl font-bold text-slate-900 mb-2 sm:mb-4">
                    {proc.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
                    {proc.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- PROTECTION ---------------- */}
      <section className="py-10 sm:py-16 bg-white px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* FIXED: removed whitespace-nowrap */}
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-6 sm:mb-12 leading-tight">
            Comprehensive{" "}
            <span className="text-blue-600 italic underline decoration-blue-100 decoration-4 sm:decoration-8 underline-offset-4">
              Protection
            </span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {[
              { icon: Waves, title: "Property & Business Interruption" },
              { icon: ShieldCheck, title: "Product Liability & Recall" },
              { icon: Leaf, title: "Environmental Impairment" },
              { icon: Ship, title: "Marine & Transit" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="flex items-center gap-3 sm:gap-4 p-4 sm:p-6 bg-slate-50 rounded-xl sm:rounded-2xl border border-slate-200 hover:border-blue-400 transition"
                >
                  <div className="bg-blue-600 text-white p-2.5 sm:p-3 rounded-lg sm:rounded-xl shadow">
                    <Icon size={18} />
                  </div>
                  <h4 className="font-bold text-sm sm:text-lg text-left">
                    {item.title}
                  </h4>
                </div>
              );
            })}
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
