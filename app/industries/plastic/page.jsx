"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Zap,
  Recycle,
  ShieldCheck,
  ArrowRight,
  Layers,
  Settings,
  Thermometer,
  FlaskConical,
  Box,
  Info,
  Truck,
  Leaf,
  BadgeX,
  LockKeyhole,
  Flame,
  Waves,
  Ship,
} from "lucide-react";
import Link from "next/link";

export default function PlasticIndustryPage() {
  const sectors = [
    {
      title: "Fire & Explosion Risk",
      Icon: Flame, // 🔥 fire, explosion, flammable hazard
      desc: "Flammable materials, chemical adhesives, printing inks, and high-speed machinery create significant fire hazards that can devastate production facilities.",
    },
    {
      title: "Machinery Breakdown",
      Icon: Settings, // ⚙️ machines, mechanical failure
      desc: "Printing presses, die-cutting machines, filling lines, and automated packaging systems are prone to mechanical failures causing production delays and revenue loss.",
    },
    {
      title: "Supply Chain Disruption",
      Icon: Truck, // 🚚 logistics, transport, delivery
      desc: "Dependence on paper, plastic resin, aluminum, and glass suppliers, combined with logistics challenges, threatens timely delivery and customer commitments.",
    },
    {
      title: "Environmental Liability",
      Icon: Leaf, // 🌱 environment, sustainability, environmental risk
      desc: "Water pollution, air emissions, chemical spills, and waste management issues expose businesses to regulatory penalties, cleanup costs, and reputational damage.",
    },
    {
      title: "Quality Control Failures",
      Icon: BadgeX, // ❌ failed quality, defects, rejection
      desc: "Defects in paper grades, laminate bonding failures, and contamination can lead to customer complaints, rejected shipments, and contract disputes.",
    },
    {
      title: "Intellectual Property",
      Icon: LockKeyhole, // 🔐 protection, IP security
      desc: "Proprietary designs, printing techniques, and innovative packaging solutions require protection from counterfeiting, patent infringement, and trade secret theft.",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* 1. HERO SECTION: Synthetic Excellence */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/plastic.jpeg"
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
            Innovating for a Sustainable Tomorrow
          </span>
          <h1 className="text-3xl md:text-6xl font-black text-[#070B7F] mb-6 tracking-tighter uppercase leading-tight">
            Plastic Industry
            <br />{" "}
            <span className="text-blue-600 italic">Insurance Solutions</span>
          </h1>
          <h3 className="text-xs md:text-xl font-light text-slate-600 mb-10 uppercase tracking-[0.3em]">
            Advanced extrusion technologies, precision woodworking machinery,
            and automated production systems are driving efficiency, but raw
            material price volatility, regulatory pressures, and fire risks
            remain critical challenges.
          </h3>
        </motion.div>

        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 text-blue-600"
        ></motion.div>
      </section>

      {/* 3. INDUSTRY VERTICALS */}
      <section className="py-14 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-slate-800 mb-4 tracking-tight uppercase">
              Material Segments
            </h2>
            <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {sectors.map((sector, i) => {
              const Icon = sector.Icon;
              return (
                <div
                  key={i}
                  className="group p-10 bg-sky-100 border border-slate-100 rounded-3xl hover:bg-white hover:shadow-2xl hover:border-blue-100 transition-all duration-500"
                >
                  <div className="w-14 h-14 bg-white text-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">
                    {sector.title}
                  </h3>
                  <p className="text-slate-500 text-md leading-relaxed mb-8">
                    {sector.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. PROCESS MONITORING SECTION */}
      <section className="mb-5 bg-white overflow-hidden flex items-center justify-center">
        <div className="max-w-4xl mx-auto text-center">
          {/* HEADING */}
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-6 sm:mb-12 leading-tight">
            Comprehensive{" "}
            <span className="text-blue-600 italic underline decoration-blue-100 decoration-4 sm:decoration-8 underline-offset-4">
              Protection
            </span>
          </h2>

          {/* GRID CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl">
            {/* Card 1 */}
            <div className="flex items-center gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-200 hover:border-blue-400 transition">
              <div className="bg-blue-600 text-white p-3 rounded-xl shadow-lg shadow-blue-200">
                <Waves size={24} />
              </div>
              <h4 className="font-bold text-lg text-left">
                Property & Business Interruption
              </h4>
            </div>

            {/* Card 2 */}
            <div className="flex items-center gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-200 hover:border-blue-400 transition">
              <div className="bg-blue-600 text-white p-3 rounded-xl shadow-lg shadow-blue-200">
                <ShieldCheck size={24} />
              </div>
              <h4 className="font-bold text-lg text-left">
                Product Liability & Recall
              </h4>
            </div>

            {/* Card 3 */}
            <div className="flex items-center gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-200 hover:border-blue-400 transition">
              <div className="bg-blue-600 text-white p-3 rounded-xl shadow-lg shadow-blue-200">
                <Leaf size={24} />
              </div>
              <h4 className="font-bold text-lg text-left">
                Environmental Impairment
              </h4>
            </div>

            {/* Card 4 */}
            <div className="flex items-center gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-200 hover:border-blue-400 transition">
              <div className="bg-blue-600 text-white p-3 rounded-xl shadow-lg shadow-blue-200">
                <Ship size={24} />
              </div>
              <h4 className="font-bold text-lg text-left">Marine & Transit</h4>
            </div>

            {/* Card 5 – Full Width */}
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
