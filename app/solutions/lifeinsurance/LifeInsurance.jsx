"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Heart,
  Umbrella,
  Banknote,
  Users,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

const LifeInsurance = () => {
  const containerRef = useRef(null);

  // Parallax Effect for the Hero
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const plans = [
    {
      title: "Term Life Insurance",
      desc: "Pure protection plans designed to secure income replacement and family needs over critical financial periods.",
      icon: <Umbrella className="w-10 h-10 text-blue-500" />,
      features: ["Pure Protection", "Tax Benefits", "High Sum Assured"],
    },
    {
      title: "Savings & Investment Plans",
      desc: "Long-term solutions combining protection with disciplined wealth creation and future planning.",
      icon: <Heart className="w-10 h-10 text-red-500" />,
      features: ["Lifetime Cover", "Cash Value", "Guaranteed Returns"],
    },
    {
      title: "Retirement & Legacy Planning",
      desc: "Structured cover to support retirement income and ensure a smooth transfer of wealth across generations.",
      icon: <Users className="w-10 h-10 text-purple-500" />,
      features: ["Wealth Creation", "Premium Waiver", "Fixed Milestones"],
    },
  ];

  return (
    <main
      ref={containerRef}
      className="min-h-screen bg-white overflow-x-hidden"
    >
      {/* 1. PREMIUM DARK HERO SECTION */}
      <section className="relative min-h-screen lg:min-h-[90vh] flex items-center overflow-hidden bg-[#0F172A] py-16 lg:py-0">
        <div className="container mx-auto px-6 md:px-12 z-20 relative flex flex-col lg:flex-row items-center justify-between gap-12 md:gap-16">
          {/* TEXT CONTENT */}
          <motion.div
            style={{ y, opacity }}
            className="w-full lg:w-1/2 text-white text-center lg:text-left"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 border border-blue-400/30 rounded-full bg-blue-500/10 text-blue-400 text-[10px] md:text-sm font-bold mb-6 backdrop-blur-md uppercase tracking-wider"
            >
              <Sparkles size={16} /> LIFETIME PROTECTION
            </motion.div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-8 tracking-tighter leading-[1] md:leading-[0.9] uppercase">
              Secure Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Family’s Future.
              </span>
            </h1>

            <p className="text-md md:text-xl text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              Secure your family&apos;s financial future with comprehensive life
              insurance coverage designed to protect those who matter most.
              Beyond basic death benefits, we structure sophisticated protection
              strategies incorporating income replacement, estate planning, and
              wealth preservation objectives.
            </p>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative z-30 w-full lg:w-1/2"
          >
            <div className="relative max-w-md md:max-w-lg lg:max-w-none mx-auto">
              <img
                src="/family.png"
                alt="Life Insurance"
                className="rounded-[2rem] md:rounded-[4rem] shadow-2xl border-4 md:border-8 border-white/5 w-full object-cover transition-all duration-700"
              />
            </div>
          </motion.div>
        </div>

        {/* Diagonal HERO SHAPE */}
        <div
          className="absolute inset-0 bg-[#020617] z-10 hidden lg:block"
          style={{
            clipPath: "polygon(0 0, 58% 0, 42% 100%, 0% 100%)",
          }}
        />
        <div className="absolute inset-0 bg-[#020617] z-10 lg:hidden opacity-90" />
      </section>

      {/* 2. PLANS GRID - FIXED OVERLAP ISSUE */}
      {/* Changed -mt to pt-20 to ensure cards stay below the hero content */}
      <section
        id="plans"
        className="relative z-20 bg-white pt-20 md:pt-28 px-6 pb-20"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="flex flex-col p-8 md:p-10 rounded-[2.5rem] border border-slate-400 bg-white shadow-xl shadow-slate-200/50 hover:shadow-blue-500/10 transition-all duration-300 h-full"
              >
                <div className="mb-6 bg-slate-50 w-fit p-4 rounded-2xl">
                  {plan.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-4 tracking-tight">
                  {plan.title}
                </h3>
                <p className="text-slate-500 text-md md:text-base mb-8 flex-grow leading-relaxed">
                  {plan.desc}
                </p>

                <ul className="space-y-3 mb-4">
                  {plan.features.map((feat, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-md md:text-md font-semibold text-slate-700"
                    >
                      <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />{" "}
                      {feat}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. EXPERT CLAIMS ADVOCACY */}
      <section className="py-10 md:py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tighter uppercase"
          >
            Thoughtful Life Protection
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-24 md:w-48 h-1.5 bg-blue-600 mx-auto mb-12 rounded-full origin-center"
          />

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-[#0F2A6B] text-white rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-20 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />

            <div className="relative z-10 space-y-8">
              <p className="text-base md:text-xl text-blue-100 leading-relaxed font-light">
                Life insurance is more than a policy. It is a promise of
                stability, income protection, and long-term security for your
                dependents in the event of unforeseen circumstances.
              </p>

              <p className="text-base md:text-xl text-blue-100 leading-relaxed font-light">
                We help individuals and families structure life cover that
                aligns with financial goals, liabilities, and future
                aspirations, while ensuring clarity, affordability, and
                certainty.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. PREMIUM CTA SECTION */}
      <section className="py-10 md:py-20 px-6">
        <div className="max-w-6xl mx-auto bg-slate-900 rounded-[3rem] md:rounded-[4rem] p-10 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-blue-600/20 rounded-full blur-[80px] md:blur-[120px] animate-pulse" />

          <h2 className="text-3xl md:text-6xl font-black mb-8 tracking-tighter uppercase leading-tight">
            Start Your <br className="md:hidden" /> Legacy Today
          </h2>
          <p className="text-blue-100 text-md md:text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Don&apos;t leave your family&apos;s future to chance. Consult with
            our expert advisors to find a life cover that truly protects.
          </p>
          <div className="relative z-10">
            <Link
              href="/contact"
              className="inline-block bg-white text-blue-600 px-8 md:px-14 py-4 md:py-6 rounded-2xl font-bold text-sm md:text-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-xl uppercase tracking-widest"
            >
              Consult an Expert
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LifeInsurance;
