"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ShieldCheck,
  Car,
  Lock,
  AlertTriangle,
  Zap,
  Anchor,
  UserCheck,
  ChevronDown,
  Info,
  ShieldAlert,
  Settings,
  ArrowRight,
} from "lucide-react";

const AutomobileInsurancePage = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const threats = [
    {
      title: "Production Disruption",
      desc: "Fire, machinery breakdown, assembly line failures, and equipment malfunctions can halt operations, leading to significant financial losses and reputational damage.",

      image: "/key/1.jpeg",
    },
    {
      title: "Supply Chain Vulnerability",
      desc: "Component shortages, logistics delays, and over-reliance on single vendors expose businesses to significant risks, impacting production schedules and market delivery.",

      image: "/key/2.jpeg",
    },
    {
      title: "Product Liability",
      desc: "Defects in vehicles or engineered components, unexpected safety failures, and product recall costs pose major financial and legal challenges.",

      image: "/key/3.jpeg",
    },
    {
      title: "Cyber & Technology",
      desc: "The increasing connectivity of vehicles and manufacturing systems introduces new vulnerabilities, including data breaches, intellectual property theft, and operational cyberattacks.",

      image: "/key/4.jpeg",
    },
    {
      title: "Environmental Compliance",
      desc: "Evolving emissions regulations, complex waste management challenges, and potential pollution liabilities demand strict adherence and robust risk management.",

      image: "/key/5.jpeg",
    },
    {
      title: "Intellectual Property",
      desc: "Protecting innovative designs, manufacturing processes, and proprietary technologies from theft, patent infringement, and trade secret breaches is paramount.",

      image: "/key/6.jpeg",
    },
  ];

  const protections = [
    {
      title: "Property & Business Interruption",
      icon: <ShieldCheck size={28} />,
      image: "/auto/auto11.png",
    },
    {
      title: "Product Liability & Recall",
      icon: <Car size={28} />,
      image: "/auto/auto22.png",
    },
    {
      title: "Professional Indemnity",
      icon: <UserCheck size={28} />,
      image: "/auto/auto33.png",
    },
    {
      title: "Cyber Insurance",
      icon: <Lock size={28} />,
      image: "/auto/auto44.png",
    },
    {
      title: "Marine & Transit",
      icon: <Anchor size={28} />,
      image: "/auto/auto55.png",
    },
  ];

  return (
    <div className="relative w-full bg-[#f0f9ff] text-slate-900 font-sans">
      {/* 1. HERO SECTION WITH IMAGE PARALLAX BACKGROUND */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/automotive.png"
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
            Engineering Excellence
          </span>
          <h1 className="text-3xl md:text-6xl font-black text-[#070B7F] mb-6 tracking-tighter uppercase leading-tight">
            Automobile & Engineering <br />{" "}
            <span className="text-blue-600 italic">Insurance</span> Solutions
          </h1>
          <h2 className="text-2xl md:text-3xl font-light text-slate-600 mb-10 uppercase tracking-[0.3em]">
            Driving Into an Electric Future
          </h2>
        </motion.div>

        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 text-blue-600"
        >
          <ChevronDown size={40} />
        </motion.div>
      </section>

      {/* 2. INDUSTRY TRANSFORMATION - GLASS CARD INTRO */}
      <section className="py-5 px-3 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
            className="bg-white/70 backdrop-blur-xl p-4 md:p-16 rounded-[2rem] shadow-xl border border-white/50 flex flex-col md:flex-row items-center gap-10"
          >
            <div className="md:w-1/2 rounded-3xl overflow-hidden shadow-2xl">
              <img src="/auto/car.png" alt="Electric Car Charging" />
            </div>
            <div className="md:w-1/2">
              <div className="flex items-center gap-3 text-blue-600 mb-6">
                <Settings size={32} />
                <h3 className="text-2xl font-bold uppercase tracking-wider">
                  The Transformation
                </h3>
              </div>
              <p className="text-md md:text-lg text-slate-900 leading-relaxed font-medium text-left md:text-justify">
                The automobile and engineering sectors are undergoing{" "}
                <span className="text-blue-600 font-black underline decoration-sky-400">
                  unprecedented transformation
                </span>
                , fueled by the rapid rise of electric vehicles, the advent of
                autonomous driving technology, and the integration of Industry
                4.0 manufacturing processes. Global supply chains are being
                re-engineered, while stringent sustainability mandates reshape
                every aspect of design, production, and distribution.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. KEY THREATS - ENHANCED IMAGE GRID */}
      <section className="py-14 px-6 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 flex items-center gap-4">
            <ShieldAlert size={40} className="text-[#070B7F]" />
            <h3 className="text-4xl md:text-5xl font-black text-slate-950 uppercase italic tracking-tighter">
              Key Threats
            </h3>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {threats.map((threat, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-white rounded-[2rem] overflow-hidden shadow-xl border border-slate-100 group transition-all h-full flex flex-col"
              >
                <div className="h-52 overflow-hidden relative">
                  <img
                    src={threat.image}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    alt={threat.title}
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md p-2 rounded-xl shadow-md">
                    <AlertTriangle className="text-amber-500" size={24} />
                  </div>
                </div>
                <div className="p-8 flex-grow">
                  <h4 className="text-2xl font-bold text-slate-950 mb-4 group-hover:text-blue-600 transition-colors uppercase tracking-tight">
                    {threat.title}
                  </h4>
                  <p className="text-slate-600 font-medium leading-relaxed">
                    {threat.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. COMPREHENSIVE PROTECTION - PREMIUM GRID WITH IMAGE OVERLAYS */}
      <section className="py-10 px-6 bg-[#e0f2fe] relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex justify-between items-end mb-16">
            <div>
              <Zap className="text-blue-600 mb-4" size={48} />
              <h3 className="text-4xl md:text-5xl font-black text-slate-950 uppercase italic tracking-tighter">
                Comprehensive Protection
              </h3>
            </div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6"
          >
            {protections.map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="relative bg-white rounded-3xl overflow-hidden shadow-2xl h-80 group cursor-pointer"
              >
                <img
                  src={item.image}
                  className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                  alt={item.title}
                />
                <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                  <div className="bg-blue-600 p-4 rounded-2xl self-start shadow-lg">
                    {React.cloneElement(item.icon, { className: "text-white" })}
                  </div>
                  <span className="text-xl font-black text-slate-950 leading-tight uppercase tracking-tighter">
                    {item.title}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
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
};

export default AutomobileInsurancePage;
