"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Scissors,
  Layers,
  Recycle,
  Wind,
  ArrowRight,
  Settings,
  CheckCircle2,
  ShieldCheck,
  Flame,
  Truck,
  ShieldAlert,
  PauseCircle,
  Leaf,
  Users,
  Zap,
  Factory,
  Waves,
  Ship,
} from "lucide-react";
import Link from "next/link";

export default function TextileIndustryPage() {
  const categories = [
    {
      title: "Fire & Property Damage",
      Icon: Flame,
      desc: "Fabric combustibility, machinery fires, warehouse blazes, and inventory losses impacting manufacturing facilities.",
    },
    {
      title: "Supply Chain Disruption",
      Icon: Truck,
      desc: "Raw material shortages, shipping delays, and vendor failures affecting production continuity and delivery timelines.",
    },
    {
      title: "Product Liability",
      Icon: ShieldAlert,
      desc: "Fabric defects, chemical reactions, safety standard violations, and product recalls impacting brand trust.",
    },
    {
      title: "Business Interruption",
      Icon: PauseCircle,
      desc: "Production stoppages, seasonal demand fluctuations, and order cancellations leading to revenue loss.",
    },
    {
      title: "Environmental Compliance",
      Icon: Leaf,
      desc: "Dye discharge, water pollution, waste handling, and adherence to chemical and environmental regulations.",
    },
    {
      title: "Labour & Employment",
      Icon: Users,
      desc: "Worker safety, factory conditions, compliance audits, and wage or employment-related disputes.",
    },
  ];
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* 1. HERO SECTION: The Fabric of Innovation */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/texttile.jpeg"
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
            Weaving Sustainable Fashion
          </span>
          <h1 className="text-3xl md:text-6xl font-black text-[#070B7F] mb-6 tracking-tighter uppercase leading-tight">
            Textile
            <br />{" "}
            <span className="text-blue-600 italic">Insurance Solutions</span>
          </h1>
          <h3 className="text-xs md:text-xl font-light text-slate-600 mb-10 uppercase tracking-[0.3em]">
            Fast fashion evolution, sustainable materials innovation, automation
            in manufacturing, direct-to-consumer models, circular economy
            adoption, and ethical sourcing reshaping global textile industry.
          </h3>
        </motion.div>

        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 text-blue-600"
        ></motion.div>
      </section>

      {/* 3. PRODUCT SEGMENTS */}
      <section className="py-14 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-slate-800 mb-4 tracking-tight uppercase">
              Specialized Verticals
            </h2>
            <div className="h-1.5 w-50 bg-sky-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {categories.map((item, i) => {
              const Icon = item.Icon;
              return (
                <div
                  key={i}
                  className="group p-12 bg-white border border-slate-100 rounded-2xl hover:border-indigo-200 hover:shadow-2xl transition-all duration-500"
                >
                  <div className="w-14 h-14 bg-sky-100 text-sky-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-4 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-md leading-relaxed mb-8">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. PRODUCTION FLOW SECTION */}
      <section className="mb-5 bg-white overflow-hidden flex items-center justify-center">
        <div className="w-full flex flex-col items-center text-center">
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
