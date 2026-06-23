"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ShieldCheck,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Globe,
  Building2,
  UserCheck,
  PieChart,
  Target,
} from "lucide-react";
import Link from "next/link";

const CreditInsurancePage = () => {
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
      title: "Domestic Trade Credit",
      desc: "Covers non-payment by Indian buyers due to insolvency or default beyond agreed credit terms.",
      icon: <Building2 className="w-10 h-10 text-indigo-500" />,
    },
    {
      title: "Export Credit",
      desc: "Protects exporters against commercial and political risk from overseas buyers.",
      icon: <Globe className="w-10 h-10 text-indigo-500" />,
    },
    {
      title: "Single Buyer Cover",
      desc: "Focused protection against default of one named high-value customer.",
      icon: <UserCheck className="w-10 h-10 text-indigo-500" />,
    },
    {
      title: "Whole Turnover Policy",
      desc: "Covers your entire debtor portfolio against buyer default across all customers.",
      icon: <PieChart className="w-10 h-10 text-indigo-500" />,
    },
    {
      title: "Key Account Protection",
      desc: "Tailored cover for your top 5 to 10 accounts specifically.",
      icon: <Target className="w-10 h-10 text-indigo-500" />,
    },
  ];

  const Card = ({ item }) => (
    <motion.div
      whileHover={{ y: -10 }}
      className="p-10 rounded-[3rem] border border-blue-400 bg-white shadow-2xl shadow-slate-900/10 hover:border-blue-200 transition-all flex flex-col h-full"
    >
      <div className="bg-blue-50 w-20 h-20 rounded-2xl flex items-center justify-center mb-8">
        {item.icon}
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>

      <p className="text-slate-600 text-sm flex-grow">{item.desc}</p>

      <div className="mt-8 pt-6 border-t flex items-center gap-2 text-blue-600 font-bold text-xs uppercase">
        <CheckCircle size={16} /> Secured Coverage
      </div>
    </motion.div>
  );

  return (
    <main ref={containerRef} className="min-h-screen bg-white overflow-hidden">
      {/* 1. PREMIUM DARK HERO SECTION */}
      <section className="relative pt-16 pb-16 lg:min-h-[90vh] flex items-center overflow-hidden bg-[#0F172A]">
        {/* Animated Background Blobs */}
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

        {/* Hero Content */}
        <div className="container mx-auto px-6 lg:px-12 z-20 relative py-12 flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-16">
          <motion.div
            style={{ y, opacity }}
            className="max-w-2xl text-white text-center lg:text-left"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 border border-blue-400/30 rounded-full bg-blue-500/10 text-blue-400 text-sm font-bold mb-5 backdrop-blur-md"
            >
              <Sparkles size={16} /> RISK PROTECTION
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-8xl font-black text-white mb-6 tracking-tighter leading-[1.05] lg:leading-[0.95] uppercase">
              Credit <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
                Insurance.
              </span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-6">
              Protect Your Receivables. Sell With Confidence.
            </p>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative z-30 w-full flex justify-center lg:w-auto"
          >
            <img
              src="/credit-insurance.png"
              alt="Credit Insurance"
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

      {/* 2. VALUE PROPOSITION SECTION (Added content here) */}
      <section className="py-24 px-6 bg-white relative z-20">
        <div className="max-w-5xl mx-auto relative">
          <div className="bg-slate-50 border-l-4 border-blue-600 p-8 md:p-12 rounded-r-3xl shadow-sm relative overflow-hidden">
            {/* Decorative Background Icon */}
            <ShieldCheck className="absolute -right-4 -top-4 w-24 h-24 text-blue-100 rotate-12" />

            <div className="relative z-10">
              <h3 className="text-blue-600 font-bold text-sm uppercase tracking-[0.2em] mb-4">
                Strategic Asset Protection
              </h3>
              <p className="text-xl md:text-3xl text-slate-800 leading-snug font-semibold tracking-tight">
                &quot;Credit insurance protects your business against{" "}
                <span className="text-blue-600">buyer non-payment</span> —
                whether due to insolvency, protracted default, or political
                risk.&quot;
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <p className="text-slate-600 text-lg md:border-l md:pl-6 border-slate-200">
                  It secures your debtor book and stabilises cash flow, and
                  allows you to extend credit and grow sales without carrying
                  unmanaged exposure.
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
            <div className="w-32 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
          </div>

          <div className="max-w-7xl mx-auto">
            {/* TOP 3 CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.slice(0, 3).map((item, i) => (
                <Card key={i} item={item} />
              ))}
            </div>

            {/* BOTTOM 2 CARDS (CENTERED) */}
            <div className="flex justify-center gap-8 mt-8 flex-wrap">
              {products.slice(3).map((item, i) => (
                <div className="w-full md:w-[48%] lg:w-[30%]" key={i}>
                  <Card item={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHO NEEDS THIS SECTION */}
      <section className="py-24 px-6 bg-slate-300">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter mb-8">
            Who Needs This?
          </h2>
          <p className="text-lg text-slate-600 leading-loose">
            Manufacturers, exporters, chemical traders, pharma companies, FMCG
            distributors, and any business operating on open credit terms with
            buyers in India or internationally.
          </p>
        </div>
      </section>

      {/* 5. PREMIUM CTA SECTION */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto bg-slate-900 rounded-[3.5rem] p-12 lg:p-20 text-center text-white relative overflow-hidden shadow-2xl">
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[100px]" />

          <ShieldCheck className="w-16 h-16 text-blue-400 mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl font-black mb-6 relative z-10 tracking-tighter uppercase">
            Consult With Risk Specialists
          </h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto relative z-10">
            Get expert guidance on credit insurance. Close your security gaps
            today.
          </p>

          <div className="relative z-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold hover:bg-blue-500 transition-all shadow-xl hover:shadow-blue-500/20"
            >
              Speak to a Specialist <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CreditInsurancePage;
