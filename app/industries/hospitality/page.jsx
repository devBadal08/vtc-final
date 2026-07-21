"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Utensils,
  Bed,
  Star,
  ArrowRight,
  Calendar,
  ShieldCheck,
  Compass,
  Users,
  Wine,
} from "lucide-react";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const BlueHospitalityPage = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 overflow-x-hidden">
      {/* ---------------- HERO ---------------- */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/hospitality.png"
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
            Redefining Guest Experiences
          </span>
          <h1 className="text-3xl md:text-6xl font-black text-[#070B7F] mb-6 tracking-tighter uppercase leading-tight">
            Hospitality & Tourism
            <br />{" "}
            <span className="text-blue-600 italic">Insurance Solutions</span>
          </h1>
          <h3 className="text-xs md:text-xl font-light text-slate-600 mb-10 uppercase tracking-[0.3em]">
            Post-pandemic recovery surge, experiential travel boom, boutique
            hospitality growth, technology-enabled service, sustainability
            focus, and wellness tourism driving transformation.
          </h3>
        </motion.div>

        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 text-blue-600"
        ></motion.div>
      </section>

      {/* ---------------- RISKS ---------------- */}
      <section className="py-10 sm:py-14 px-4 sm:px-6 bg-[#FCFDFF]">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 sm:mb-16 gap-4 text-center md:text-left">
            <div className="max-w-xl">
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-2 sm:mb-4">
                Hospitality <span className="text-blue-600">Sector Risks</span>
              </h2>
              <p className="text-slate-500 text-sm sm:text-lg">
                Bespoke hospitality solutions for every vertical.
              </p>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-8">
            {[
              {
                icon: <Bed className="w-7 h-7" />,
                title: "Property Damage",
                desc: "Fire, natural disasters, equipment breakdown",
              },
              {
                icon: <Utensils className="w-7 h-7" />,
                title: "Guest Liability",
                desc: "Slip and fall, food poisoning, injury claims",
              },
              {
                icon: <Compass className="w-7 h-7" />,
                title: "Business Interruption",
                desc: "Seasonal disruptions, cancellations",
              },
              {
                icon: <ShieldCheck className="w-7 h-7" />,
                title: "Cyber & Data",
                desc: "Guest data breaches, booking failures",
              },
              {
                icon: <Wine className="w-7 h-7" />,
                title: "Liquor Liability",
                desc: "Over-service incidents, intoxication claims",
              },
              {
                icon: <Users className="w-7 h-7" />,
                title: "Employee Practices",
                desc: "Staff injuries, employment disputes",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-5 sm:p-8 rounded-2xl sm:rounded-[2.5rem] bg-white border border-slate-200 shadow-sm hover:shadow-lg transition"
              >
                <div className="mb-3 sm:mb-5 text-blue-600">{item.icon}</div>

                <h3 className="text-lg sm:text-xl font-black text-blue-900 mb-1 sm:mb-3">
                  {item.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- COVERAGE ---------------- */}
      <div className="text-center mt-8 sm:mt-10 mb-5 sm:mb-4 px-4">
        <h2 className="text-2xl sm:text-4xl font-black text-slate-900 mb-3">
          Complete Hospitality Coverage
        </h2>
        <div className="h-1.5 w-16 sm:w-20 bg-blue-600 mx-auto rounded-full" />
      </div>

      <section className="py-14 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6">
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
                  title: "Property & Business Interruption",
                  image: "/hospitality/h1.jpeg",
                },
                {
                  title: "General & Product Liability",
                  image: "/hospitality/h2.jpeg",
                },
                {
                  title: "Cyber & Data Protection",
                  image: "/hospitality/h3.jpeg",
                },
                { title: "Liquor Liability", image: "/hospitality/h4.jpeg" },
                {
                  title: "Workers Compensation",
                  image: "/hospitality/h5.jpeg",
                },
                { title: "Equipment Breakdown", image: "/hospitality/h6.jpeg" },
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

export default BlueHospitalityPage;
