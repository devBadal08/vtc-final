"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ClipboardCheck,
  ShieldCheck,
  Clock,
  BarChart3,
  Sparkles,
  ArrowRight,
  Zap,
} from "lucide-react";
import Link from "next/link";

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

const ClaimsManagement = () => {
  const containerRef = useRef(null);

  // Parallax Effect for the Hero
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const features = [
    {
      title: "End-to-End Claims Handling",
      desc: "Complete oversight from first notice of loss through final settlement and recovery.",
      icon: <ClipboardCheck className="w-8 h-8" />,
    },
    {
      title: "Insurer Negotiation",
      desc: "Strategic engagement with insurers, adjusters, and third parties to secure fair outcomes.",
      icon: <ShieldCheck className="w-8 h-8" />,
    },
    {
      title: "Complex & Disputed Claims",
      desc: "Proven expertise in multi-party, high-value, and contested claims scenarios.",
      icon: <Clock className="w-8 h-8" />,
    },
  ];

  return (
    <main ref={containerRef} className="min-h-screen bg-white overflow-hidden">
      {/* 1. PREMIUM DARK HERO SECTION (Matched to Company/Solutions) */}
      <section className="relative pt-10 min-h-[85vh] flex items-center overflow-hidden bg-[#0F172A]">
        {/* Background Glow Effects */}
        <div className="absolute inset-0 z-0">
          <motion.div
            animate={{ scale: [1, 1.2, 1], x: [0, 40, 0] }}
            transition={{ duration: 12, repeat: Infinity }}
            className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]"
          />
          <motion.div
            animate={{ scale: [1, 1.3, 1], x: [0, -40, 0] }}
            transition={{ duration: 16, repeat: Infinity }}
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/20 rounded-full blur-[120px]"
          />
        </div>

        <div className="container mx-auto px-6 md:px-12 z-20 relative py-12 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">
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
              Claims{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Management.
              </span>
            </h1>

            <p className="text-lg text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Reimagine your claims experience with Vestigo. We deliver
              high-speed, error-free processing through automated digital
              workflows.
            </p>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative z-30 w-full lg:w-auto"
          >
            <img
              src="/claims_hero.jpeg"
              alt="Claims"
              className="rounded-[2.5rem] lg:rounded-[4rem] shadow-2xl border-8 border-white/5 w-full max-w-md lg:max-w-none mx-auto transition-all duration-700"
            />
          </motion.div>
        </div>

        {/* DIAGONAL HERO SHAPE */}
        <div
          className="absolute inset-0 bg-[#020617] z-10"
          style={{ clipPath: "polygon(0 0, 58% 0, 42% 100%, 0% 100%)" }}
        />
      </section>

      {/* 2. EXPERT CLAIMS ADVOCACY */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tighter"
          >
            Expert Claims Advocacy
          </motion.h2>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-32 h-1 bg-blue-600 mx-auto mb-12 rounded-full origin-center"
          />

          {/* Content Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-[#0F2A6B] text-white rounded-[2.5rem] p-10 md:p-14 shadow-xl"
          >
            <p className="text-lg text-blue-100 leading-relaxed mb-6">
              When incidents occur, our claims specialists act as your dedicated
              advocates. We manage the entire claims lifecycle, from initial
              notification to documentation, negotiation, and settlement.
            </p>

            <p className="text-lg text-blue-100 leading-relaxed">
              Our team understands insurer processes and settlement benchmarks,
              ensuring claims move efficiently while maximising recoveries. We
              challenge unfair denials, manage complex claims, and protect your
              commercial interests at every stage.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. FEATURES GRID (Professional English Refinement) */}
      <section className="py-5 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">
            Service Capabilities
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 border border-slate-100 rounded-[2rem] shadow-xl shadow-slate-200/50 hover:shadow-blue-500/10 transition-all bg-white"
            >
              <div className="mb-6 w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {f.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. CALL TO ACTION (Premium Dark Style) */}
      <section className="pb-16 px-6">
        <div className="max-w-6xl mx-auto bg-slate-900 rounded-[3.5rem] p-16 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[100px]" />
          <h2 className="text-4xl md:text-5xl font-black mb-6 relative z-10 tracking-tighter uppercase">
            Optimize Your Claims Process
          </h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto relative z-10">
            Consult with our experts today to integrate Vestigo’s smart claims
            engine into your business operations.
          </p>
          <div className="relative z-10">
            <Link
              href="/contact"
              className="inline-block bg-white text-blue-600 px-12 py-5 rounded-2xl font-bold hover:shadow-2xl hover:scale-105 transition-all shadow-xl"
            >
              Contact Us Now
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ClaimsManagement;
