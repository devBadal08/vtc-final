"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Leaf,
  Wind,
  Sun,
  BatteryCharging,
  ShieldCheck,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

const GreenInsurance = () => {
  const containerRef = useRef(null);

  // Parallax Effect for the Hero
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const initiatives = [
    {
      title: "Renewable Energy Support",
      desc: "Specialized coverage for solar panels and wind turbines, ensuring complete protection for green energy assets.",
      icon: <Sun className="w-10 h-10 text-blue-600" />,
    },
    {
      title: "Eco-Friendly Property",
      desc: "Premiums for green-certified buildings and unique sustainable damage recovery solutions.",
      icon: <Leaf className="w-10 h-10 text-blue-600" />,
    },
  ];

  return (
    <main ref={containerRef} className="min-h-screen bg-white overflow-hidden">
      {/* 1. PREMIUM DARK HERO SECTION (Nature Accents) */}
      <section className="relative pt-10 min-h-[90vh] flex items-center overflow-hidden bg-[#0F172A]">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <motion.div
            animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]"
          />
          <motion.div
            animate={{ scale: [1, 1.3, 1], x: [0, -50, 0] }}
            transition={{ duration: 15, repeat: Infinity }}
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-600/10 rounded-full blur-[100px]"
          />
        </div>

        {/* Content Container */}
        <div className="container mx-auto px-6 md:px-10 lg:px-12 z-20 relative py-12 flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-16">
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
              <Wind size={16} /> ECO-CONSCIOUS PROTECTION
            </motion.div>

            <h1 className="text-1xl sm:text-1xl md:text-6xl lg:text-4xl font-black text-white mb-6 md:mb-8 tracking-tighter leading-[1] lg:leading-[0.95] uppercase">
              Specialised Insurance for Renewable Energy Projects and <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Green Infrastructure Assets.
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-3xl leading-relaxed mb-8 md:mb-10">
              Vestigo’s Green Insurance is designed for forward-thinking
              businesses. We provide superior coverage for assets that build a
              sustainable tomorrow.
            </p>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative z-30 w-full flex justify-center lg:justify-end"
          >
            <img
              src="/greenenergy.png"
              alt="Green Insurance"
              className="rounded-[2rem] md:rounded-[2.5rem] lg:rounded-[4rem] shadow-2xl border-8 border-white/5 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none transition-all duration-700"
            />
          </motion.div>
        </div>

        {/* Angled Shape */}
        <div
          className="absolute inset-0 bg-[#0F172A] z-10 hidden lg:block"
          style={{ clipPath: "polygon(0 0, 58% 0, 42% 100%, 0% 100%)" }}
        />
      </section>

      {/* 2. INITIATIVES GRID (Floating over Hero) */}
      <section id="initiatives" className="relative z-20 -mt-10 px-6 pb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          {initiatives.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="p-10 border border-slate-100 rounded-[2.5rem] bg-white shadow-xl shadow-slate-200/50 hover:shadow-blue-500/10 transition-all group"
            >
              <div className="bg-blue-50 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 tracking-tight">
                {item.title}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6 text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. SUSTAINABILITY TRUST SECTION */}
      <section className="bg-slate-50 py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter mb-6">
            Rewarding Sustainable Practices
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            We don’t just offer insurance; we incentivize the transition to
            green energy. Our framework rewards lower carbon emissions with
            enhanced benefits and competitive premiums.
          </p>
          <div className="w-16 h-1 bg-blue-600 mx-auto mt-8 rounded-full" />
        </div>
      </section>

      {/* 4. PREMIUM DARK CTA SECTION */}
      <section className="pb-32 px-6">
        <div className="max-w-6xl mx-auto bg-slate-900 rounded-[3.5rem] p-16 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px]" />

          <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tighter uppercase">
            Together for a <span className="text-blue-400">Greener</span>{" "}
            Tomorrow
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
            Join the network of sustainable businesses. Let’s modernize your
            risk management while protecting the environment.
          </p>

          <div className="flex flex-wrap justify-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all mb-12">
            <span className="text-white text-xl font-black tracking-tighter">
              ECO-CERTIFIED
            </span>
            <span className="text-white text-xl font-black tracking-tighter">
              SUSTAINABLE+
            </span>
            <span className="text-white text-xl font-black tracking-tighter">
              RENEWABLE FIRST
            </span>
          </div>

          <div className="relative z-10">
            <Link
              href="/contact"
              className="inline-block bg-blue-600 text-white px-12 py-5 rounded-2xl font-bold hover:bg-blue-500 transition-all shadow-xl"
            >
              Request Partnership
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default GreenInsurance;
