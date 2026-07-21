"use client";
import React from "react";
import { motion } from "framer-motion"; // Install: npm install framer-motion
import {
  DraftingCompass,
  Cpu,
  Layers,
  HardHat,
  ArrowRight,
  Ruler,
  ShieldCheck,
  Settings,
  PenTool,
  ChevronRight,
  Zap,
  AlertTriangle,
  ShieldAlert,
} from "lucide-react";
import Link from "next/link";
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const EngineeringSuite = () => {
  const modules = [
    {
      title: "Design Automation",
      desc: "CAD aur BIM workflows ko automate karein taaki engineering cycle time 40% tak kam ho sake.",
      icon: <DraftingCompass className="w-8 h-8" />,
      tag: "Efficiency",
    },
    {
      title: "Structural Integrity",
      desc: "Real-time stress analysis aur structural health monitoring system for mega-projects.",
      icon: <ShieldCheck className="w-8 h-8" />,
      tag: "Reliability",
    },
    {
      title: "PLM Integration",
      desc: "Concept se lekar commissioning tak, Product Lifecycle Management ko digital environment mein manage karein.",
      icon: <Layers className="w-8 h-8" />,
      tag: "Lifecycle",
    },
    {
      title: "Smart Field Assets",
      desc: "IoT-enabled sensors jo field machinery aur on-site performance ka live data deliver karte hain.",
      icon: <Settings className="w-8 h-8" />,
      tag: "Operational",
    },
  ];

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

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      {/* 1. HERO SECTION - High Impact */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/engineering.png"
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
            Industry 4.0 Standard
          </span>
          <h1 className="text-3xl md:text-6xl font-black text-[#070B7F] mb-6 tracking-tighter uppercase leading-tight">
            Building Tomorrow’s
            <br /> <span className="text-blue-600 italic">Infrastructure</span>
          </h1>
          <h3 className="text-xs md:text-xl font-light text-slate-600 mb-10 uppercase tracking-[0.3em]">
            Mega infrastructure boom - highways, bridges, tunnels, metro rail
            networks, hydroelectric plants, smart cities, green buildings,
            PropTech revolution, and sustainable construction practices
            transforming how we build nations.
          </h3>
        </motion.div>

        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 text-blue-600"
        ></motion.div>
      </section>

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

      {/* 3. CORE MODULES - Modern Grid */}
      <section className="py-14 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-black text-slate-900 mb-4">
              Construction & Infrastructure Risks
            </h2>
            <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full"></div>

            <div className="mt-14"></div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { transition: { staggerChildren: 0.08 } },
              }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
            >
              {[
                {
                  title: "Contractor’s All Risk",
                  desc: "Structural collapse, equipment damage, third-party injury, and construction defects.",
                  image: "/engineering/e1.jpeg",
                },
                {
                  title: "Professional Indemnity",
                  desc: "Design errors, engineering failures, specification mistakes, and project management negligence.",
                  image: "/engineering/e2.jpeg",
                },
                {
                  title: "Delay in Start-Up",
                  desc: "Weather disruptions, contractor default, supply chain failures, and permit delays.",
                  image: "/engineering/e3.jpeg",
                },
                {
                  title: "Structural Warranty",
                  desc: "Post-completion defects, foundation failures, envelope issues, and latent defects.",
                  image: "/engineering/e4.jpeg",
                },
                {
                  title: "Environmental Liability",
                  desc: "Soil contamination, hazardous materials, pollution incidents, and remediation costs.",
                  image: "/engineering/e5.jpeg",
                },
                {
                  title: "Surety Bonds",
                  desc: "Performance bonds, payment bonds, bid bonds, and contract completion guarantees.",
                  image: "/engineering/e6.jpeg",
                },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 220, damping: 18 }}
                  className="bg-white rounded-2xl overflow-hidden
                        border border-[#1C2A7D]/10
                        shadow-[0_12px_35px_rgba(28,42,125,0.15)]
                        hover:shadow-[0_28px_60px_rgba(28,42,125,0.3)]
                        transition"
                >
                  {/* IMAGE */}
                  <div className="relative w-full">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-auto object-contain"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-[#1C2A7D] mb-3">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {/* ACCENT BAR */}
                  <div className="h-1 w-full bg-[#1C2A7D]" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. ECOSYSTEM - High Tech Visualization */}
      <section className="py-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 flex justify-center">
          {/* The "Control Panel" Card */}
          <div className="bg-[#0f172a] rounded-[3rem] p-8 shadow-3xl border border-slate-800 relative overflow-hidden group text-center">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>

            <div className="flex items-center justify-center relative z-10 text-xl text-blue-400 mt-10 mb-10">
              Complete protection including Contractor&apos;s All Risk,
              Professional Indemnity, Delay in Start-Up, Structural Warranty,
              Environmental Liability, Surety Bonds, and Equipment Breakdown
              coverage for roads, bridges, dams, power plants, and real estate
              projects.
            </div>
          </div>
        </div>
      </section>

      {/* 5. FOOTER CTA */}
      <section className="py-10 px-6 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-500/5 blur-[120px] rounded-full"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-black mb-10 text-slate-900 tracking-tighter italic">
            Build Bold. <br />
            Build with Vestigo.
          </h2>
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

export default EngineeringSuite;
