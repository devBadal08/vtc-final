"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Layers,
  Maximize,
  ShieldCheck,
  Droplets,
  ArrowRight,
  Hammer,
  CheckCircle2,
  Zap,
  Trees,
  HardHat,
  Flame,
  Settings,
  Truck,
  Leaf,
  BadgeX,
  ClipboardCheck,
} from "lucide-react";
import Link from "next/link";

export default function WoodLaminationPage() {
  const products = [
    {
      title: "Fire & Explosion Risk",
      Icon: Flame,
      desc: "Plastic extrusion heat, wood dust accumulation, chemical additives, and flammable materials create significant fire and explosion hazards throughout facilities.",
    },
    {
      title: "Machinery Breakdown",
      Icon: Settings,
      desc: "Injection molding machines, extrusion lines, CNC woodworking equipment, and drying kilns represent major capital investments vulnerable to mechanical failures.",
    },
    {
      title: "Supply Chain Disruption",
      Icon: Truck,
      desc: "Dependence on petroleum-based resins, recycled plastic feedstock, timber supplies, and chemical additives exposes operations to price volatility and availability issues.",
    },
    {
      title: "Environmental Liability",
      Icon: Leaf,
      desc: "Plastic waste management, microplastic concerns, VOC emissions from wood processing, and chemical handling create regulatory and reputational risks.",
    },
    {
      title: "Product Quality Issues",
      Icon: BadgeX,
      desc: "Defects in plastic components, wood warping, contamination, and structural failures can lead to customer claims, recalls, and contract disputes.",
    },
    {
      title: "Regulatory Compliance",
      Icon: ClipboardCheck,
      desc: "Extended producer responsibility, recycling targets, forest certification standards, and emissions regulations require ongoing compliance investments.",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100">
      {/* 1. HERO SECTION: The Core of Quality */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/wood.jpeg"
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
            Industrial Timber Solutions
          </span>
          <h1 className="text-3xl md:text-6xl font-black text-[#070B7F] mb-6 tracking-tighter uppercase leading-tight">
            Wood Industry
            <br />{" "}
            <span className="text-blue-600 italic">Insurance Solutions</span>
          </h1>
          <h3 className="text-xs md:text-xl font-light text-slate-600 mb-10 uppercase tracking-[0.3em]">
            The plastic and wood industries are undergoing significant
            transformation as they balance traditional manufacturing with
            sustainability imperatives.
          </h3>
        </motion.div>

        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 text-blue-600"
        ></motion.div>
      </section>

      {/* 3. PRODUCT CATEGORIES */}
      <section className="py-14 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-blue-950 mb-4 tracking-tight uppercase">
              Specialized Solutions
            </h2>
            <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {products.map((item, i) => {
              const Icon = item.Icon;
              return (
                <div
                  key={i}
                  className="group p-12 bg-slate-200 border border-slate-100 rounded-[2.5rem] hover:bg-white hover:border-blue-200 hover:shadow-2xl transition-all duration-500"
                >
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-8 transform group-hover:-translate-y-2 transition-transform shadow-lg shadow-blue-200">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-md leading-relaxed mb-8 font-bold">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. TECHNICAL ADHESION SECTION */}
      <section className="py-10 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="bg-slate-900 p-10 rounded-3xl shadow-2xl border border-slate-800">
              <h4 className="text-blue-400 font-bold uppercase text-xs tracking-widest mb-8">
                Bonding Analysis
              </h4>
              <div className="space-y-6">
                <div className="flex justify-between items-center text-white/50 text-md border-b border-white/5 pb-4">
                  <span>Adhesive Viscosity</span>
                  <span className="text-white uppercase">Optimal</span>
                </div>
                <div className="flex justify-between items-center text-white/50 text-md border-b border-white/5 pb-4">
                  <span>Curing Temperature</span>
                  <span className="text-white ">140°C</span>
                </div>
                <div className="flex justify-between items-center text-white/50 text-md">
                  <span>Shear Strength</span>
                  <span className="text-blue-400 font-bold tracking-widest">
                    PASSED
                  </span>
                </div>
              </div>
            </div>
            {/* Abstract Blue Glow */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-blue-500/10 rounded-full blur-3xl"></div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-5xl font-black text-slate-900 mb-8 tracking-tighter italic uppercase">
              Advanced <br />
              <span className="text-blue-600 not-italic">Lamination.</span>
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4 p-6 bg-white rounded-2xl border border-slate-200 group hover:border-blue-400 transition-colors">
                <ShieldCheck className="text-blue-600 shrink-0" size={32} />
                <div>
                  <h4 className="font-bold">Scratch & Wear Resistance</h4>
                  <p className="text-md text-slate-500 mt-1">
                    Diamond-infused top layers providing unparalleled protection
                    against daily abrasions.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-6 bg-white rounded-2xl border border-slate-200 group hover:border-blue-400 transition-colors">
                <Zap className="text-blue-600 shrink-0" size={32} />
                <div>
                  <h4 className="font-bold">Precision Calibration</h4>
                  <p className="text-md text-slate-500 mt-1">
                    Laser-guided thickness control ensuring absolute uniformity
                    across 10,000+ sheets.
                  </p>
                </div>
              </div>
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
