"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Users2,
  Umbrella,
  Stethoscope,
  Wallet,
  Smile,
  Sparkles,
  SearchCheck,
  FilePlus,
  ShieldCheck,
  Activity,
} from "lucide-react";

/* ---------------- STAT COUNTER ---------------- */
const StatCounter = ({ target, label }: { target: number; label: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = target;
    const duration = 2000;

    const timer = setInterval(() => {
      start += Math.ceil(end / 100);
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, duration / 100);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className="text-center">
      <div className="text-4xl font-black text-cyan-400 mb-1">{count}%</div>
      <div className="text-[10px] font-bold uppercase tracking-widest text-blue-200">
        {label}
      </div>
    </div>
  );
};

/* ---------------- MAIN PAGE ---------------- */
export default function EmployeeBenefitsPage() {
  const processSteps = [
    {
      id: "step-1",
      num: "01",
      title: "Demographic Audit",
      icon: <Users2 size={22} />,
      desc: "Analyzing workforce age and location to define a baseline.",
      image: "/employee/8.png",
    },
    {
      id: "step-2",
      num: "02",
      title: "Benefit Structuring",
      icon: <FilePlus size={22} />,
      desc: "Designing a competitive mix of health and wellness incentives.",
      image: "/employee/9.png",
    },
    {
      id: "step-3",
      num: "03",
      title: "Provider Sourcing",
      icon: <SearchCheck size={22} />,
      desc: "Negotiating with top-tier providers for premium rates.",
      image: "/employee/10.png",
    },
    {
      id: "step-4",
      num: "04",
      title: "Digital Enrollment",
      icon: <Sparkles size={22} />,
      desc: "Launching seamless, tech-enabled onboarding.",
      image: "/employee/11.png",
    },
    {
      id: "step-5",
      num: "05",
      title: "Engagement Support",
      icon: <ShieldCheck size={22} />,
      desc: "Providing 24/7 claims advocacy and optimization.",
      image: "/employee/12.png",
    },
  ];

  return (
    <main className="min-h-screen bg-white font-sans relative">
      {/* ---------------- HERO SECTION ---------------- */}
      <section className="relative pt-10 min-h-[85vh] flex items-center overflow-hidden bg-[#070B7F]">
        <div className="container mx-auto px-6 md:px-12 z-20 relative py-12 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-2xl text-white text-center lg:text-left"
          >
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
              <div className="w-5 h-5 bg-cyan-400 rounded-full flex items-center justify-center animate-pulse">
                <Activity size={12} className="text-[#070B7F]" />
              </div>
              <span className="uppercase tracking-[0.4em] text-[10px] font-bold text-blue-200">
                Workforce Intelligence
              </span>
            </div>

            <h1 className="text-5xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
              Employee Benefits <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-300">
                Insurance
              </span>
            </h1>

            <p className="text-sm text-blue-100/70 max-w-sm mx-auto lg:mx-0 leading-relaxed font-medium">
              Our tailored employee benefits packages are designed to support
              your workforce&apos;s well-being and financial security, fostering
              a loyal and productive team. From health to accident cover, we
              provide solutions that demonstrate your commitment to your
              employees.
            </p>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative z-30 w-full lg:w-auto"
          >
            <img
              src="/benefits.png"
              alt="Team"
              className="rounded-[2.5rem] lg:rounded-[4rem] shadow-2xl border-8 border-white/5 w-full max-w-md lg:max-w-none mx-auto transition-all duration-700"
            />
          </motion.div>
        </div>

        {/* HERO SHAPE */}
        <div
          className="absolute inset-0 bg-[#070B7F] z-10"
          style={{ clipPath: "polygon(0 0, 58% 0, 42% 100%, 0% 100%)" }}
        />
      </section>

      {/* ---------------- PILLARS ---------------- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-12 text-center mb-20">
          <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-blue-600 mb-4">
            The Pillars
          </h2>
          <p className="text-5xl font-black uppercase tracking-tighter text-[#070B7F]">
            Wellness Redefined
          </p>
        </div>

        <div className="container mx-auto px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Group Health Insurance",
              icon: <Stethoscope className="w-10 h-10 text-pink-500" />,
              desc: "Comprehensive medical coverage ensuring access to quality healthcare.",
            },
            {
              title: "Group Life Insurance",
              icon: <Wallet className="w-10 h-10 text-blue-500" />,
              desc: "Financial protection for employees’ families in unforeseen circumstances.",
            },
            {
              title: "Gratuity Insurance",
              icon: <Smile className="w-10 h-10 text-purple-500" />,
              desc: "Safeguards end-of-service benefits while meeting employer obligations.",
            },
            {
              title: "Group Personal Accident",
              icon: <Umbrella className="w-10 h-10 text-orange-500" />,
              desc: "24/7 accident coverage protecting your workforce.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100 text-center"
            >
              <div className="mb-8 p-5 bg-white rounded-3xl w-fit mx-auto shadow-md">
                {item.icon}
              </div>
              <h3 className="text-xl font-black uppercase mb-4 text-[#070B7F]">
                {item.title}
              </h3>
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------------- ROADMAP ---------------- */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="container mx-auto px-12 text-center mb-20">
            <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-blue-600 mb-4">
              The ROADMAP
            </h2>
            <p className="text-3xl font-black uppercase tracking-tighter text-[#070B7F]">
              Benefit Selection & Customization
            </p>
          </div>
          <div className="flex flex-col gap-24">
            {processSteps.map((step, i) => (
              <div
                key={step.id}
                className={`flex flex-col md:flex-row ${
                  i % 2 ? "md:flex-row-reverse" : ""
                } items-center gap-12`}
              >
                <div className="md:w-1/2 bg-white p-10 rounded-[3rem] shadow-xl">
                  <div className="flex justify-between mb-6">
                    <div className="p-4 bg-blue-50 rounded-2xl text-blue-600">
                      {step.icon}
                    </div>
                    <span className="text-5xl font-black text-blue-600">
                      {step.num}
                    </span>
                  </div>
                  <h3 className="text-3xl font-black text-[#070B7F] mb-4">
                    {step.title}
                  </h3>
                  <p className="text-xs font-bold uppercase text-slate-500">
                    {step.desc}
                  </p>
                </div>

                <div className="md:w-1/2">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="rounded-[2rem] shadow-xl"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
