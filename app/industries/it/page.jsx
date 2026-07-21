"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Cpu,
  Code2,
  Cloud,
  ShieldCheck,
  ShieldAlert,
  Terminal,
  Laptop,
  ArrowRight,
  Zap,
  Globe,
  Database,
  Clock,
  Scale,
  FileWarning,
  ChevronDown,
  Lock,
  Building2,
  Users,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function ITFieldPage() {
  const itSectors = [
    {
      name: "Cyber Attacks",
      Icon: ShieldAlert,
      desc: "Ransomware, phishing, malware, and advanced persistent threats pose severe operational, financial, and reputational risks.",
    },
    {
      name: "Data Breach",
      Icon: Database,
      desc: "Unauthorized access, data leaks, and privacy violations can trigger regulatory penalties and client litigation..",
    },
    {
      name: "System Downtime",
      Icon: Clock,
      desc: "Outages of critical systems, cloud services, or data centres disrupt operations and client delivery commitments.",
    },
    {
      name: "Professional Liability",
      Icon: FileWarning,
      desc: "Errors, omissions, or service failures can result in contractual disputes and claims from clients.",
    },
    {
      name: "Regulatory Exposure",
      Icon: Scale,
      desc: "Compliance with evolving Indian and global data protection laws requires constant oversight and risk management.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-cyan-100 overflow-x-hidden">
      {/* 1. HERO SECTION: The Digital Frontier */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/it-tech.png"
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
            IT Expert
          </span>
          <h1 className="text-3xl md:text-6xl font-black text-[#070B7F] mb-6 tracking-tighter uppercase leading-tight">
            Navigating Risk in India’s
            <br />{" "}
            <span className="text-blue-600 italic">IT & Technology Sector</span>
          </h1>
          <h3 className="text-sm md:text-2xl font-light text-slate-600 mb-10 uppercase tracking-[0.1em] md:tracking-[0.3em] max-w-4xl mx-auto">
            India’s IT and technology sector is a global powerhouse,
            contributing significantly to GDP and employing millions.
          </h3>
        </motion.div>

        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 text-blue-600"
        >
          <ChevronDown size={40} />
        </motion.div>
      </section>

      {/* 3. IT VERTICALS: Key Risks Section */}
      <section className="py-16 md:py-24 px-5 sm:px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:mb-20 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tighter uppercase leading-tight">
              Key Risks & Hazards Facing Indian Tech Companies
            </h2>
            <div className="h-1 w-16 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {/* First Row → Handles all sectors responsively */}
            {itSectors.map((sector, i) => {
              const Icon = sector.Icon;
              return (
                <div
                  key={i}
                  className={`group p-8 md:p-10 bg-white border-l-4 border-blue-600 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full ${
                    i >= 3 ? "lg:translate-x-1/2" : ""
                  } ${i === 4 ? "lg:ml-10" : ""}`}
                  // Note: The translate logic above centers the last 2 items on Desktop
                >
                  <div className="w-14 h-14 bg-slate-950 text-cyan-400 flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors shrink-0">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                    {sector.name}
                  </h3>
                  <p className="text-slate-500 text-sm md:text-md leading-relaxed mb-4 font-sans">
                    {sector.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= INSURANCE FRAMEWORK ================= */}
      <section className="relative z-20 py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:mb-20 text-center">
            <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-4 tracking-tighter uppercase leading-tight">
              Comprehensive Insurance Protection Framework
            </h2>
            <div className="h-1.5 w-24 md:w-32 bg-blue-600 rounded-full mx-auto"></div>
          </div>

          {/* Flex Layout - Centers items correctly on all screens */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {[
              {
                title: "Cyber Risk Insurance",
                desc: "Protection against data breaches, cyber attacks, recovery costs, legal fees, and reputational damage.",
                icon: <ShieldAlert size={24} />,
                tag: "CYBER",
              },
              {
                title: "Professional Indemnity",
                desc: "Covers claims arising from professional errors, omissions, or negligence in services rendered. Essential for IT firms providing advisory or software development services.",
                icon: <Scale size={24} />,
                tag: "LIABILITY",
              },
              {
                title: "Crime & Fidelity",
                desc: "Guards against financial losses due to employee fraud, theft, or other dishonest acts. Protects company assets from internal and external criminal activities.",
                icon: <Lock size={24} />,
                tag: "FRAUD",
              },
              {
                title: "Property & Business Interruption",
                desc: "Coverage for physical offices, data centres, critical equipment, and revenue loss following property damage or operational disruption events.",
                icon: <Building2 size={24} />,
                tag: "PROPERTY",
              },
              {
                title: "Employee-Related Covers",
                desc: "Group health insurance, personal accident coverage, workmen's compensation, and statutory protection for your workforce across locations.",
                icon: <Users size={24} />,
                tag: "WORKFORCE",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="group p-8 rounded-xl border border-slate-200 bg-white hover:border-blue-600/50 hover:shadow-2xl transition-all duration-500 relative overflow-hidden w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)] flex flex-col"
              >
                {/* Icon Box */}
                <div className="mb-6 p-3 rounded-lg bg-blue-50 inline-block text-blue-600 w-fit">
                  {item.icon}
                </div>

                {/* Small Blue Tag */}
                <p className="text-[10px] md:text-[11px] font-bold text-blue-600 uppercase mb-2 tracking-widest">
                  {item.tag}
                </p>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-bold mb-3 tracking-tight">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-slate-500 text-sm md:text-md leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* NOTE Section */}
          <div className="mt-12 md:mt-16 bg-[#0F172A] border-l-4 border-blue-600 px-6 py-6 md:py-8 text-white font-medium rounded-r-lg shadow-xl text-sm md:text-base leading-relaxed">
            Protecting your technology business requires more than standard
            policies — it demands specialist insurance solutions designed for
            the digital age and India&apos;s unique regulatory landscape.
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
