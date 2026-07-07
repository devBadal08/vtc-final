"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ShieldCheck,
  RefreshCw,
  Lock,
  Zap,
  ArrowRight,
  Smartphone,
  Building,
  Activity,
  PieChart,
  Sparkles,
  ShieldAlert,
  FileWarning,
  Users,
  Fingerprint,
  PauseCircle,
  ClipboardCheck,
  Shield,
  FileText,
} from "lucide-react";
import Link from "next/link";

const BfsisSuite = () => {
  const containerRef = useRef(null);

  // Parallax Effect Logic
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const modules = [
    {
      title: "Cyber & Data Breaches",
      desc: "Ransomware attacks, data theft, system compromises, and regulatory fines impacting digital and core banking environments.",
      icon: <ShieldAlert className="w-10 h-10 text-blue-600" />,
      tag: "Cyber Risk",
    },
    {
      title: "Professional Indemnity",
      desc: "Advisory errors, mis-selling incidents, and compliance failures leading to client claims and financial liabilities.",
      icon: <FileWarning className="w-10 h-10 text-blue-600" />,
      tag: "Advisory Risk",
    },
    {
      title: "Directors & Officers",
      desc: "Management decisions, shareholder disputes, and regulatory actions exposing leadership to personal liability.",
      icon: <Users className="w-10 h-10 text-blue-600" />,
      tag: "Management Risk",
    },
    {
      title: "Crime & Fidelity",
      desc: "Employee fraud, funds transfer fraud, and social engineering attacks causing direct financial losses.",
      icon: <Fingerprint className="w-10 h-10 text-blue-600" />,
      tag: "Financial Crime",
    },
    {
      title: "Business Interruption",
      desc: "System downtime, branch closures, and operational disruptions affecting service continuity and revenue.",
      icon: <PauseCircle className="w-10 h-10 text-blue-600" />,
      tag: "Operational Risk",
    },
    {
      title: "Regulatory & Compliance",
      desc: "Penalties, license revocation risks, and legal proceedings arising from regulatory non-compliance.",
      icon: <ClipboardCheck className="w-10 h-10 text-blue-600" />,
      tag: "Compliance",
    },
  ];

  return (
    <main
      ref={containerRef}
      className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden"
    >
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/bfsi.png"
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
          <span className="bg-blue-600 text-white px-5 py-2 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6 inline-block shadow-lg">
            Digital Transformation of Finance
          </span>
          <h1 className="text-3xl md:text-6xl font-black text-[#070B7F] mb-6 tracking-tighter uppercase leading-tight">
            Banking - Financial Services
            <br />{" "}
            <span className="text-blue-600 italic">& Insurance Solutions</span>
          </h1>
          <h3 className="text-sm md:text-xl font-light text-slate-600 mb-10 uppercase tracking-[0.1em] md:tracking-[0.3em] max-w-4xl mx-auto">
            Digital banking revolution, fintech disruption, regulatory
            evolution, open banking APIs, blockchain integration, and customer
            experience innovation reshaping financial services globally.
          </h3>
        </motion.div>
      </section>

      {/* 2. BFSI MODULES GRID */}
      <section className="relative z-20 -mt-24 py-10 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tighter uppercase">
              Core Financial Modules
            </h2>
            <div className="h-1.5 w-20 bg-blue-600 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((m, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="group p-8 rounded-xl border border-slate-200 bg-white hover:border-blue-600/30 hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
              >
                <div className="mb-8 p-3 rounded-lg bg-blue-50 inline-block text-blue-600">
                  {m.icon}
                </div>
                <p className="text-[11px] font-bold text-blue-600 uppercase mb-2 tracking-widest">
                  {m.tag}
                </p>
                <h3 className="text-xl font-bold mb-3 tracking-tight">
                  {m.title}
                </h3>
                <p className="text-slate-500 text-sm md:text-md leading-relaxed">
                  {m.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. INTEGRATED ECOSYSTEM SECTION - FIXED FOR ALIGNMENT AND MOBILE */}
      <section className="w-full bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-black mb-16 text-center text-slate-900 tracking-tighter uppercase leading-tight">
            Financial Institution{" "}
            <span className="text-blue-600">Protection</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-5xl mx-auto">
            {/* Card 1 */}
            <div className="flex flex-row items-center gap-5 p-2 transition-transform hover:translate-x-2">
              <div className="bg-blue-100 p-4 rounded-2xl shrink-0">
                <Shield className="text-blue-600 w-6 h-6 md:w-7 md:h-7" />
              </div>
              <h4 className="font-bold text-lg md:text-xl text-slate-800 leading-tight">
                Cyber Liability & Data Breach
              </h4>
            </div>

            {/* Card 2 */}
            <div className="flex flex-row items-center gap-5 p-2 transition-transform hover:translate-x-2">
              <div className="bg-blue-100 p-4 rounded-2xl shrink-0">
                <FileText className="text-blue-600 w-6 h-6 md:w-7 md:h-7" />
              </div>
              <h4 className="font-bold text-lg md:text-xl text-slate-800 leading-tight">
                Professional Indemnity
              </h4>
            </div>

            {/* Card 3 */}
            <div className="flex flex-row items-center gap-5 p-2 transition-transform hover:translate-x-2">
              <div className="bg-blue-100 p-4 rounded-2xl shrink-0">
                <Users className="text-blue-600 w-6 h-6 md:w-7 md:h-7" />
              </div>
              <h4 className="font-bold text-lg md:text-xl text-slate-800 leading-tight">
                Directors & Officers Liability
              </h4>
            </div>

            {/* Card 4 */}
            <div className="flex flex-row items-center gap-5 p-2 transition-transform hover:translate-x-2">
              <div className="bg-blue-100 p-4 rounded-2xl shrink-0">
                <Fingerprint className="text-blue-600 w-6 h-6 md:w-7 md:h-7" />
              </div>
              <h4 className="font-bold text-lg md:text-xl text-slate-800 leading-tight">
                Bankers Blanket Bond
              </h4>
            </div>

            {/* Card 5 – Centered on Desktop, Full width on Mobile */}
            <div className="flex flex-row items-center gap-5 p-2 md:col-span-2 md:justify-center transition-transform hover:translate-y-[-4px]">
              <div className="bg-blue-100 p-4 rounded-2xl shrink-0">
                <PauseCircle className="text-blue-600 w-6 h-6 md:w-7 md:h-7" />
              </div>
              <h4 className="font-bold text-lg md:text-xl text-slate-800 leading-tight">
                Business Interruption
              </h4>
            </div>
          </div>
        </div>
      </section>

      {/* 5. BFSI FOOTER CTA */}
      <section className="py-20 px-6 bg-slate-950 text-white text-center border-t border-blue-600/30">
        <h2 className="text-3xl md:text-5xl font-black mb-6 italic tracking-tighter uppercase leading-tight">
          Secure Your Digital Evolution
        </h2>
        <p className="text-slate-400 mb-10 max-w-xl mx-auto text-sm md:text-lg leading-relaxed">
          Transform your financial institution with industry-leading technology
          and military-grade security protocols.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 md:px-12 py-4 md:py-5 rounded-2xl font-bold transition-all uppercase tracking-widest text-xs md:text-sm shadow-lg hover:scale-105 active:scale-95"
        >
          Request Consultation
          <ArrowRight size={20} />
        </Link>
      </section>
    </main>
  );
};

export default BfsisSuite;
