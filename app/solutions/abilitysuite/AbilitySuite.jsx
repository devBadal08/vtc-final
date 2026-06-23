"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Cpu,
  Globe,
  Zap,
  BarChart3,
  Lock,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Flame,
  Truck,
  ShieldAlert,
  Users,
  Briefcase,
  Settings,
  Scale,
  Network,
  Building2,
  Shield,
  AlertTriangle,
} from "lucide-react";
import Link from "next/link";

const AbilitySuite = () => {
  const containerRef = useRef(null);

  // Parallax Effect for the Hero
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const modules = [
    {
      title: "Core Engine",
      desc: "A powerful central system designed to automate your business operations and core insurance logic.",
      icon: <Cpu className="w-10 h-10 text-blue-500" />,
      tag: "Risk Intelligence",
    },
    {
      title: "Global Connectivity",
      desc: "Seamlessly connect with global partners and legacy platforms via our production-ready API stack.",
      icon: <Globe className="w-10 h-10 text-blue-500" />,
      tag: "Coverage Engineering",
    },
    {
      title: "Real-time Analytics",
      desc: "Drive growth with advanced data-driven insights through our integrated live reporting dashboards.",
      icon: <BarChart3 className="w-10 h-10 text-blue-500" />,
      tag: "Claims Advocacy",
    },
    {
      title: "Enterprise Security",
      desc: "Bank-grade encryption and multi-layer data protection to safeguard your most sensitive information.",
      icon: <Lock className="w-10 h-10 text-blue-500" />,
      tag: "IRDAI Compliant",
    },
  ];

  const risks = [
    {
      title: "Fire & Property Damage",
      desc: "Asset loss from fire, flood, or structural damage can halt operations and erode balance sheets overnight.",
      icon: Flame,
    },
    {
      title: "Supply Chain Disruption",
      desc: "Global dependencies expose businesses to delays, shortages, and cost escalations across the value chain.",
      icon: Truck,
    },
    {
      title: "Cyber Threats",
      desc: "Data breaches, ransomware, and digital fraud represent the fastest-growing category of enterprise risk.",
      icon: ShieldAlert,
    },
    {
      title: "Legal Liabilities",
      desc: "Third-party claims, product liability, and contractual disputes can result in significant financial and reputational harm.",
      icon: Scale,
    },
    {
      title: "Employee Risks",
      desc: "Workplace injuries, health emergencies, and personnel-related liabilities require structured coverage solutions.",
      icon: Users,
    },
    {
      title: "Management Risks",
      desc: "Directors and officers face growing exposure to regulatory scrutiny, shareholder actions, and governance failures.",
      icon: Briefcase,
    },
  ];

  const architecture = [
    { title: "Cyber Risk Insurance", icon: Shield },
    { title: "Employee Protection Covers", icon: Users },
    { title: "Liability Insurance", icon: Scale },
    { title: "Marine Cargo Insurance", icon: Truck },
    { title: "Business Interruption Protection", icon: Zap },
    { title: "Industrial All Risk Insurance", icon: Building2 },
  ];

  const claimFramework = [
    { title: "Incident Occurs", icon: AlertTriangle },
    { title: "Claim Documentation", icon: Briefcase },
    { title: "Insurer Coordination", icon: Users },
    { title: "Policy Interpretation", icon: Scale },
    { title: "Settlement Support", icon: Building2 },
  ];

  const digitalPlatform = [
    {
      title: "Insurance Portfolio Visibility",
      desc: "A consolidated view of all active policies, renewal timelines, coverage limits, and premium schedules — accessible to risk officers at any time.",
      icon: Shield,
    },
    {
      title: "Risk Analytics",
      desc: "Dynamic dashboards quantify exposure levels, benchmark against industry peers, and highlight coverage gaps requiring immediate attention.",
      icon: BarChart3,
    },
    {
      title: "Policy Management",
      desc: "Digitised policy documents, endorsements, and exclusion summaries — enabling faster decision-making and eliminating documentation ambiguity.",
      icon: Lock,
    },
    {
      title: "Claim Tracking",
      desc: "Real-time status updates on active claims, milestone tracking, and settlement progress reporting — ensuring full transparency throughout the claims lifecycle.",
      icon: Network,
    },
  ];

  return (
    <main ref={containerRef} className="min-h-screen bg-white overflow-hidden">
      {/* 1. PREMIUM DARK HERO SECTION (Matched to Company/Solutions) */}
      <section className="relative pt-10 min-h-[90vh] flex items-center overflow-hidden bg-[#0F172A]">
        {/* Background Effects */}
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

        <div className="container mx-auto px-6 md:px-10 lg:px-12 z-20 relative py-12 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">
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
              <Zap size={16} /> IRDAI Licensed Direct Insurance Broker
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-white mb-6 lg:mb-8 tracking-tighter leading-[1] lg:leading-[0.95]">
              Vestigo <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Ability Suite.
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8 lg:mb-10">
              Helping businesses identify risks, structure protection, and
              defend claims through a comprehensive risk intelligence framework.
            </p>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative z-30 w-full flex justify-center"
          >
            <img
              src="/ability.jpeg"
              alt="Surety Bonds"
              className="rounded-4xl lg:rounded-[4rem] shadow-2xl border-8 border-white/5 w-full max-w-xs sm:max-w-sm lg:max-w-2xl mx-auto transition-all duration-700"
            />
          </motion.div>
        </div>

        {/* HERO SHAPE */}
        <div
          className="absolute inset-0 bg-[#0F172A] z-10 hidden lg:block"
          style={{ clipPath: "polygon(0 0, 58% 0, 42% 100%, 0% 100%)" }}
        />
      </section>

      {/* 2. MODULE GRID (Floating over Hero) */}
      <section className="relative z-20 -mt-10 px-6 pb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {modules.map((m, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="group p-8 rounded-[2.5rem] border border-slate-100 bg-white shadow-2xl shadow-slate-900/10 hover:border-blue-200 transition-all duration-300"
            >
              <div className="mb-6 w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                {m.icon}
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-500 mb-2 block">
                {m.tag}
              </span>
              <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">
                {m.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. RISK EXPOSURE SECTION */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
              Businesses Today Face Complex Risk Exposures
            </h2>

            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Operational, financial, and liability risks can disrupt years of
              business growth if not managed proactively. In an interconnected
              economy, a single unforeseen event can cascade into
              enterprise-wide disruption.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {risks.map((risk, i) => {
              const Icon = risk.icon;

              return (
                <motion.div
                  key={i}
                  whileHover={{ y: -8 }}
                  className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-xl transition-all"
                >
                  <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                    <Icon size={26} />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {risk.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {risk.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. PROTECTION FRAMEWORK */}
      <section className="py-14 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT CONTENT */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 font-semibold text-sm">
              Vestigo Framework
            </div>

            <h2 className="text-5xl md:text-6xl font-black text-slate-900 leading-tight">
              A Structured Framework
              <span className="text-blue-600"> for Business Protection</span>
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed">
              Vestigo integrates risk intelligence, insurance structuring, and
              claims advocacy into a single protection ecosystem designed not as
              a product catalogue but as a strategic management framework
              aligned with how modern enterprises operate.
            </p>

            <p className="text-lg text-slate-600 leading-relaxed">
              Each pillar is interconnected. Intelligence informs architecture,
              architecture enables claims response, and the lifecycle ensures
              continuous adaptation as businesses scale and risk profiles
              evolve.
            </p>

            {/* Pillar Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4 text-blue-600" />
                </div>
                <span className="text-sm font-semibold text-slate-700">
                  Risk Intelligence
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                  <Building2 className="w-4 h-4 text-blue-600" />
                </div>
                <span className="text-sm font-semibold text-slate-700">
                  Insurance Architecture
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                  <Scale className="w-4 h-4 text-blue-600" />
                </div>
                <span className="text-sm font-semibold text-slate-700">
                  Claim Defense
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                  <Network className="w-4 h-4 text-blue-600" />
                </div>
                <span className="text-sm font-semibold text-slate-700">
                  Risk Lifecycle
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center">
            <img
              src="/ability1.png"
              alt="Business Protection Framework"
              className="rounded-[2.5rem] shadow-2xl border border-slate-200 
        w-full max-w-xl lg:max-w-2xl"
            />

            {/* Glow effect */}
            <div className="absolute -bottom-12 -right-12 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>
          </div>
        </div>
      </section>

      {/* 3. ARCHITECTURE SECTION */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto flex flex-col lg:row items-center gap-20">
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-4 mb-2 leading-tight">
              Vestigo Risk Intelligence Engine
            </h2>
            <p className="text-3xl font-black text-blue-600 leading-relaxed mb-4">
              Identifying Hidden Business Risks
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Structured risk analysis enables businesses to identify
              vulnerabilities and prepare for uncertainties before they
              materialise into losses. The Vestigo Risk Intelligence Engine™
              applies a systematic diagnostic methodology across all major
              exposure categories — translating complex operational realities
              into actionable risk intelligence for decision-makers.
            </p>

            <div className="grid grid-cols-1 gap-4">
              {risks.map((risk, idx) => {
                const Icon = risk.icon;

                return (
                  <div
                    key={idx}
                    className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-200 shadow-sm"
                  >
                    <div className="bg-blue-600 p-2 rounded-full">
                      <Icon className="text-white w-4 h-4" />
                    </div>

                    <span className="text-slate-700 font-bold text-sm uppercase tracking-wide">
                      {risk.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* INSURANCE ARCHITECTURE MODEL */}
      <section className="py-14 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
              Vestigo Insurance Architecture Model™
            </h2>

            <p className="text-2xl font-bold text-blue-600 mb-6">
              Structuring Insurance That Truly Protects
            </p>

            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Strategically structured insurance ensures that coverage responds
              effectively during claims. Most enterprises carry policies that
              are either misaligned with their actual risk profile or
              inadequately coordinated across coverage layers. Vestigo&apos;s
              Insurance Architecture Model™ constructs a coherent, interlocking
              protection framework — eliminating gaps and overlaps.
            </p>

            <p className="text-lg text-slate-600 max-w-3xl mx-auto mt-4 leading-relaxed"></p>
          </div>

          <div className="space-y-6">
            {architecture.map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={`flex items-center gap-6 bg-slate-100 border border-slate-200 
            rounded-xl px-8 py-6 shadow-sm
            ml-${i * 6}`}
                >
                  <div className="w-14 h-14 bg-white border border-slate-200 rounded-lg flex items-center justify-center">
                    <Icon className="text-slate-700 w-6 h-6" />
                  </div>

                  <div className="flex-1 border-b border-slate-300 pb-2">
                    <h3 className="text-xl font-semibold text-slate-700">
                      {item.title}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CLAIM DEFENSE FRAMEWORK */}
      <section className="py-28 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 max-w-4xl mx-auto">
            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
              Vestigo Claim Defense Framework™
            </h2>

            <p className="text-2xl font-bold text-blue-600 mb-8">
              Strong Claim Advocacy When Loss Occurs
            </p>

            {/* Highlight Card */}
            <div className="bg-white border border-slate-200 shadow-lg rounded-2xl p-8 md:p-10">
              <div className="flex justify-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-blue-600" />
                </div>
              </div>

              <p className="text-lg text-slate-600 leading-relaxed">
                Vestigo supports clients through structured documentation and
                expert claim representation. A policy’s true value is only
                realised at the moment of a claim — and that is precisely when
                most businesses discover their vulnerabilities.
              </p>
            </div>
          </div>

          {/* PROCESS FLOW */}
          <div className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-8">
            {claimFramework.map((step, i) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15 }}
                  className="flex items-center"
                >
                  {/* Circle */}
                  <div className="flex flex-col items-center text-center">
                    <div
                      className="w-28 h-28 rounded-full border-[6px] border-green-600
              flex items-center justify-center bg-white shadow-lg"
                    >
                      <Icon className="w-8 h-8 text-slate-700" />
                    </div>

                    <p className="mt-4 font-semibold text-slate-700 text-sm w-32">
                      {step.title}
                    </p>
                  </div>

                  {/* Arrow */}
                  {i !== claimFramework.length - 1 && (
                    <div className="hidden lg:block w-12 h-1 bg-green-600 mx-4"></div>
                  )}
                </motion.div>
              );
            })}
          </div>

          <div className="max-w-4xl mx-auto mt-20">
            <div className="bg-white border border-slate-200 rounded-2xl shadow-lg p-8 md:p-10 text-center">
              <div className="flex justify-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Scale className="w-6 h-6 text-blue-600" />
                </div>
              </div>

              <p className="text-lg text-slate-600 leading-relaxed">
                From the moment an incident occurs to the final settlement,
                Vestigo acts as a structured intermediary — managing
                documentation, coordinating with surveyors, interpreting policy
                language, and negotiating on your behalf to ensure fair and
                expedient resolution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DIGITAL RISK PLATFORM */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
              Vestigo Digital Risk Platform™
            </h2>

            <p className="text-2xl font-bold text-blue-600 mb-6">
              Technology-Enabled Risk Visibility
            </p>

            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Technology enhances transparency and decision-making for risk
              protection. The Vestigo Digital Risk Platform™ provides enterprise
              clients with a unified view of their entire insurance portfolio,
              real-time risk analytics, and claim tracking — bringing the
              discipline of data-driven management to corporate risk governance.
            </p>
          </div>

          {/* PLATFORM FEATURES */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {digitalPlatform.map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15 }}
                  whileHover={{ y: -8 }}
                  className="bg-slate-50 p-8 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-xl transition-all"
                >
                  <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                    <Icon size={26} />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-3">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. FINAL CTA SECTION (Premium Dark Style) */}
      <section className="pb-32 px-6">
        <div className="max-w-6xl mx-auto bg-slate-900 rounded-[3.5rem] p-16 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[100px]" />
          <h2 className="text-4xl md:text-5xl font-black mb-6 relative z-10 tracking-tighter uppercase">
            Empower Your Global Team
          </h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto relative z-10">
            Vestigo structures your complete risk protection — from discovery to
            claims resolution. Speak to a specialist today.
          </p>
          <div className="relative z-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-blue-600 text-white px-12 py-5 rounded-2xl font-bold hover:bg-blue-500 transition-all shadow-xl"
            >
              Get Started <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AbilitySuite;
