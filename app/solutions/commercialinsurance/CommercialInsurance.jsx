"use client";

import React from "react";
import Link from "next/link";
import {
  Building2,
  ShieldCheck,
  Truck,
  Briefcase,
  Sparkles,
  ArrowRight,
  Flame,
  Anchor,
  Wrench,
  Scale,
  HardHat,
  HeartPulse,
  Shield,
  Handshake,
  User,
  FileCheck,
  CreditCard,
  Clock,
  Lock,
  Users,
  TrendingUp,
  Award,
  Umbrella,
} from "lucide-react";
import { motion } from "framer-motion";

const CommercialInsuranceClient = () => {
  const services = [
    {
      title: "Property & Liability",
      desc: "Comprehensive protection for physical assets and third-party liabilities.",
      icon: <ShieldCheck className="w-10 h-10 text-blue-600" />,
    },
    {
      title: "Business Interruption",
      desc: "Revenue continuity coverage to protect cash flow during unexpected disruptions.",
      icon: <Building2 className="w-10 h-10 text-blue-600" />,
    },
    {
      title: "Cyber Risk",
      desc: "Protection against data breaches, cyber extortion, and digital operational threats.",
      icon: <Briefcase className="w-10 h-10 text-blue-600" />,
    },
  ];

  const products = [
    { title: "Fire & Property Insurance", icon: Flame },
    { title: "Marine Cargo & Hull", icon: Anchor },
    { title: "Engineering & Erection", icon: Wrench },
    { title: "Liability Insurance", icon: Scale },

    { title: "Workers Compensation", icon: HardHat },
    { title: "Group Health Insurance", icon: HeartPulse },
    { title: "Cyber Risk Insurance", icon: Shield },
    { title: "Trade Credit Insurance", icon: Handshake },

    { title: "Key Man Insurance", icon: User },
    { title: "Commercial Motor Fleet", icon: Truck },
    { title: "Surety Bond", icon: FileCheck },
    { title: "Credit Insurance", icon: CreditCard },

    { title: "Business Interruption", icon: Clock },
    { title: "Kidnap Ransom & Extortion", icon: Lock },
    { title: "Affinity Insurance Program", icon: Users },
    { title: "Parametric Insurance", icon: TrendingUp },

    { title: "Product Warranty & Guarantee", icon: Award },
    { title: "Group Term Life", icon: Umbrella },
    { title: "Group Gratuity Insurance", icon: CreditCard },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* HERO SECTION */}
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
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl text-white text-center lg:text-left"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 border border-blue-400/30 rounded-full bg-blue-500/10 text-blue-400 text-sm font-bold mb-6 backdrop-blur-md"
            >
              <Sparkles size={16} /> COMPREHENSIVE COMMERCIAL RISK SOLUTIONS
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
              Commercial{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Insurance
              </span>
            </h1>

            <p className="text-lg text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Protect your business assets, operations, and people with
              comprehensive commercial coverage designed for today&apos;s
              complex risk landscape. We understand that your enterprise faces
              unique challenges—from property damage and liability claims to
              business interruption and cyber threats.
            </p>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative z-30 w-full lg:w-auto"
          >
            <img
              src="/commercial.png"
              alt="Commercial Insurance"
              className="rounded-[2.5rem] md:rounded-[3rem] lg:rounded-[4rem] shadow-2xl border-8 border-white/5 w-full max-w-md lg:max-w-none mx-auto transition-all duration-700"
            />
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, index) => (
            <div
              key={index}
              className="group p-8 border border-slate-100 rounded-2xl hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                {item.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCTS GRID */}
      <section className="py-14 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black uppercase">
              Commercial Insurance Products
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto mt-4">
              Comprehensive protection solutions designed to safeguard every
              aspect of your enterprise operations.
            </p>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto mt-6 rounded-full" />
          </div>

          <div className="flex flex-wrap justify-center gap-5 md:gap-6">
            {products.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                className="group bg-white rounded-2xl p-7 border border-slate-200
      shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300
      w-full sm:w-[calc(50%-12px)] md:w-[calc(33.33%-16px)] lg:w-[calc(25%-18px)]"
              >
                <div
                  className="w-12 h-12 mb-5 bg-blue-50 text-blue-600 rounded-xl 
        flex items-center justify-center group-hover:bg-blue-600 
        group-hover:text-white transition"
                >
                  <item.icon size={22} />
                </div>

                <h3 className="text-slate-800 font-semibold leading-snug">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-10 px-6 border-t border-slate-50">
        <div className="max-w-4xl mx-auto bg-slate-900 rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <h2 className="text-3xl font-bold mb-6">
            Secure Your Business Today
          </h2>
          <p className="text-slate-400 mb-10">
            Our commercial insurance specialists work directly with leading
            underwriters to secure competitive terms whilst ensuring
            comprehensive protection. We analyse your specific exposures,
            negotiate favourable policy conditions, and provide ongoing risk
            management support to minimise vulnerabilities.
          </p>
          <Link href="/contact" className="inline-block">
            <button className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-blue-600 hover:text-white transition-all">
              Riquest Consultation
            </button>
          </Link>
          <div className="absolute top-0 left-0 -ml-20 -mt-20 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 -mr-20 -mb-20 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl"></div>
        </div>
      </section>
    </div>
  );
};

export default CommercialInsuranceClient;
