"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ShieldCheck,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Gavel,
  FileCheck,
  HandCoins,
} from "lucide-react";
import Link from "next/link";

const SuretyBondPage = () => {
  const containerRef = useRef(null);

  // Parallax and Fade effects for Hero
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const products = [
    {
      title: "Bid Bond",
      desc: "Assures project owners your bid is genuine and you will honour the contract if selected.",
      icon: <Gavel className="w-10 h-10 text-indigo-500" />,
    },
    {
      title: "Performance Bond",
      desc: "Guarantees project completion as per agreed terms, timelines, and specifications.",
      icon: <FileCheck className="w-10 h-10 text-indigo-500" />,
    },
    {
      title: "Advance Payment Bond",
      desc: "Protects the project owner when advance payment is released before work begins.",
      icon: <HandCoins className="w-10 h-10 text-indigo-500" />,
    },
  ];

  return (
    <main ref={containerRef} className="min-h-screen bg-white overflow-hidden">
      {/* 1. PREMIUM DARK HERO SECTION */}
      <section className="relative pt-16 pb-16 lg:min-h-[90vh] flex items-center overflow-hidden bg-[#0F172A]">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 z-0">
          <motion.div
            animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[100px]"
          />
          <motion.div
            animate={{ scale: [1, 1.3, 1], x: [0, -50, 0] }}
            transition={{ duration: 15, repeat: Infinity }}
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/20 rounded-full blur-[100px]"
          />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-6 lg:px-12 z-20 relative py-12 flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-16">
          <motion.div
            style={{ y, opacity }}
            className="max-w-2xl text-white text-center lg:text-left"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 border border-indigo-400/30 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-bold mb-5 backdrop-blur-md"
            >
              <Sparkles size={16} /> FINANCIAL SECURITY
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-8xl font-black text-white mb-6 tracking-tighter leading-[1.05] lg:leading-[0.95] uppercase">
              Surety <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-300">
                Bonds.
              </span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-6">
              Guarantee Your Commitments. Protect Your Contracts.
            </p>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative z-30 w-full flex justify-center lg:w-auto"
          >
            <img
              src="/surety.jpeg"
              alt="Surety Bonds"
              className="rounded-3xl lg:rounded-[4rem] shadow-2xl border-8 border-white/5 w-full max-w-xs sm:max-w-sm lg:max-w-md mx-auto transition-all duration-700 hover:rotate-1"
            />
          </motion.div>
        </div>

        {/* Geometric Shape Background (Desktop) */}
        <div
          className="absolute inset-0 bg-[#0F172A] z-10 hidden lg:block"
          style={{ clipPath: "polygon(0 0, 62% 0, 48% 100%, 0% 100%)" }}
        />
      </section>

      {/* 2. VALUE PROPOSITION SECTION (Added missing content here) */}
      <section className="py-24 px-6 bg-white relative z-20">
        <div className="max-w-6xl mx-auto px-6 py-12 bg-indigo-50/50 rounded-[3rem] border border-indigo-300">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter mb-4">
                What is a <br />
                Surety Bond?
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                It is a professional three-party guarantee between your
                business, the party requiring assurance, and a licensed insurer.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center">
                  <CheckCircle className="text-green-500 w-6 h-6" />
                </div>
                <p className="text-slate-700 font-medium">
                  Replaces blocked bank guarantees.
                </p>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center">
                  <CheckCircle className="text-green-500 w-6 h-6" />
                </div>
                <p className="text-slate-700 font-medium">
                  Frees up significant working capital for growth.
                </p>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center">
                  <CheckCircle className="text-green-500 w-6 h-6" />
                </div>
                <p className="text-slate-700 font-medium">
                  Boosts counterparty financial confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PRODUCTS GRID (Floating Cards) */}
      <section className="relative z-20 px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">
              Products We Place
            </h2>
            <div className="w-35 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="p-10 rounded-[3rem] border border-blue-400 bg-white shadow-2xl shadow-slate-900/10 hover:border-blue-200 transition-all flex flex-col h-full"
              >
                <div className="bg-indigo-50 w-20 h-20 rounded-2xl flex items-center justify-center mb-8">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm flex-grow">
                  {item.desc}
                </p>
                <div className="mt-8 pt-6 border-t border-slate-50 flex items-center gap-2 text-indigo-600 font-bold text-xs uppercase tracking-widest">
                  <CheckCircle size={16} /> Verified Placement
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PREMIUM CTA SECTION */}
      <section className="pb-32 px-6">
        <div className="max-w-5xl mx-auto bg-slate-900 rounded-[3.5rem] p-12 lg:p-20 text-center text-white relative overflow-hidden shadow-2xl">
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/20 rounded-full blur-[100px]" />

          <ShieldCheck className="w-16 h-16 text-indigo-400 mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl font-black mb-6 relative z-10 tracking-tighter uppercase">
            Speak to a Risk Specialist
          </h2>
          <p className="text-indigo-100 text-lg mb-10 max-w-2xl mx-auto relative z-10">
            Get expert guidance on structuring your surety bond solutions and
            unlock your working capital today.
          </p>

          <div className="relative z-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-indigo-600 text-white px-10 py-5 rounded-2xl font-bold hover:bg-indigo-500 transition-all shadow-xl hover:shadow-indigo-500/20"
            >
              Contact Now <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SuretyBondPage;
