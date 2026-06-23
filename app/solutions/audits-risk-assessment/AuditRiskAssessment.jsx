"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import {
  Search,
  AlertTriangle,
  BarChart3,
  Wrench,
  ShieldCheck,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function IndustryRiskPage() {
  const containerRef = useRef(null);

  // Parallax Effect for the Hero
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const processSteps = [
    {
      num: "01",
      title: "Industry Analysis",
      icon: <Search size={22} />,
      desc: "Studying sector dependencies and regulations.",
      ghostImg: "/steps/analysis-ghost.png",
    },
    {
      num: "02",
      title: "Risk Identification",
      icon: <AlertTriangle size={22} />,
      desc: "Spotting operational and cyber threats.",
      ghostImg: "/steps/risk-ghost.png",
    },
    {
      num: "03",
      title: "Risk Evaluation",
      icon: <BarChart3 size={22} />,
      desc: "Classifying financial and legal impacts.",
      ghostImg: "/steps/f.png",
    },
    {
      num: "04",
      title: "Risk Reduction",
      icon: <Wrench size={22} />,
      desc: "Implementing tech-driven safety controls.",
      ghostImg: "/steps/reduction-ghost.png",
    },
    {
      num: "05",
      title: "Protection Mapping",
      icon: <ShieldCheck size={22} />,
      desc: "Optimizing insurance and financial coverage.",
      ghostImg: "/steps/protection-ghost.png",
    },
  ];

  return (
    <main ref={containerRef} className="min-h-screen bg-white overflow-hidden">
      {/* 1. PREMIUM DARK HERO SECTION (Matched to Company/Solutions) */}
      <section className="relative pt-10 min-h-[80vh] flex items-center overflow-hidden bg-[#0F172A]">
        {/* Background Shape */}
        <div
          className="absolute inset-0 bg-[#0F172A] z-10"
          style={{ clipPath: "polygon(0 0, 60% 0, 40% 100%, 0% 100%)" }}
        />

        {/* Animated Background Glow */}
        <div className="absolute inset-0 z-0">
          <motion.div
            animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]"
          />
          <motion.div
            animate={{ scale: [1, 1.3, 1], x: [0, -50, 0] }}
            transition={{ duration: 15, repeat: Infinity }}
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-600/20 rounded-full blur-[100px]"
          />
        </div>

        {/* Content Container */}
        <div className="container mx-auto px-6 md:px-12 relative z-20 py-12 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 md:gap-16">
          {/* TEXT */}
          <motion.div
            style={{ y, opacity }}
            className="max-w-2xl text-white text-center lg:text-left"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 border border-blue-400/30 rounded-full bg-blue-500/10 text-blue-400 text-sm font-bold mb-6 backdrop-blur-md"
            >
              <Sparkles size={16} /> FAST & TRANSPARENT
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
              Audit &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Risk Assessment.
              </span>
            </h1>

            <p className="text-lg text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Effective insurance begins long before a claim occurs. Our risk
              management consultants conduct thorough exposure analyses,
              identifying vulnerabilities across your operations, supply chain,
              and workforce.
            </p>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative z-30 w-full lg:w-auto"
          >
            <img
              src="/risk_hero.jpeg"
              alt="Risk Assessment"
              className="rounded-[2.5rem] md:rounded-[3rem] lg:rounded-[4rem] shadow-2xl border-8 border-white/5 w-full max-w-md lg:max-w-none mx-auto transition-all duration-700"
            />
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 md:py-24">
        {/* BACKGROUND */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#EEF4FF] via-white to-[#0F172A]" />

        <div className="container mx-auto px-4 sm:px-6 relative">
          {/* DESKTOP TIMELINE */}
          <div className="absolute hidden md:block left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-600 via-cyan-400 to-transparent -translate-x-1/2" />

          <div className="flex flex-col gap-20 md:gap-24">
            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col items-center gap-10 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* LEFT SECTION */}
                <div className="w-full md:w-[45%] flex flex-col items-center">
                  {/* MOBILE NUMBER – TOP CENTER WITH GAP */}
                  <div className="md:hidden mb-6 relative">
                    <div className="w-14 h-14 bg-[#070B7F] rounded-2xl flex items-center justify-center text-white font-black shadow-xl">
                      {step.num}
                    </div>
                    <div className="absolute inset-0 bg-cyan-400/30 rounded-full blur-xl -z-10" />
                  </div>

                  {/* CARD */}
                  <div className="bg-white w-full p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] shadow-xl border border-slate-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-blue-600 bg-blue-50 p-3 rounded-2xl">
                        {step.icon}
                      </div>
                      <h3 className="text-xl md:text-2xl font-black uppercase text-[#070B7F]">
                        {step.title}
                      </h3>
                    </div>

                    {/* DESKTOP NUMBER */}
                    <span className="hidden md:block absolute top-8 right-10 text-4xl font-black text-slate-100">
                      {step.num}
                    </span>

                    <p className="text-sm text-slate-500 font-semibold leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  {/* MOBILE IMAGE */}
                  <div className="md:hidden mt-6 w-full">
                    <div className="bg-white rounded-[1.75rem] overflow-hidden shadow-lg border border-slate-100">
                      <img
                        src={step.ghostImg}
                        alt={step.title}
                        className="w-full h-[180px] object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* DESKTOP CENTER NODE */}
                <div className="hidden md:flex flex-col items-center">
                  <div className="relative">
                    <div className="w-16 h-16 bg-[#070B7F] rounded-[1.25rem] flex items-center justify-center text-white shadow-xl border-4 border-white z-10">
                      <span className="text-lg font-black">{step.num}</span>
                    </div>
                    <div className="absolute inset-0 bg-cyan-400/30 rounded-full blur-xl -z-10" />
                  </div>
                </div>

                {/* DESKTOP IMAGE */}
                <div className="hidden md:block w-[45%]">
                  <div
                    className={`flex ${
                      i % 2 === 0 ? "justify-start" : "justify-end"
                    } px-16`}
                  >
                    <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100">
                      <img
                        src={step.ghostImg}
                        alt={step.title}
                        className="w-[280px] h-[200px] object-cover"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
