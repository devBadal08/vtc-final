"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Target,
  Eye,
  TrendingUp,
  ShieldCheck,
  Zap,
  Trophy,
  Users,
  Building2,
  Globe,
  ArrowRight,
  Handshake,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

/* ================= DATA ================= */
const partners = [
  { src: "/p1.jpeg" },
  { src: "/p2.jpeg" },
  { src: "/p3.jpeg" },
  { src: "/p4.png" },
  { src: "/p5.png" },
  { src: "/p6.jpeg" },
  { src: "/p7.png" },
  { src: "/p8.png" },
];

const team = [
  { name: "Senior Risk Advisor", role: "15+ Years Experience" },
  { name: "Claims Specialist", role: "Complex Claims Handling" },
  { name: "Policy Auditor", role: "Cost Optimisation Expert" },
  { name: "Client Partner", role: "Relationship & Strategy" },
];

export default function CompanyOverview() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  const stats = [
    { label: "Years Experience", value: "15+", icon: <Trophy size={20} /> },
    { label: "Business Protected", value: "500+", icon: <Users size={20} /> },
    { label: "Expert Advisors", value: "50+", icon: <Building2 size={20} /> },
  ];
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    fetch("https://admin.vestigoinsurance.com/api/partners")
      .then((res) => res.json())
      .then((data) => setPartners(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <main ref={containerRef} className="bg-white overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="relative min-h-[85vh] bg-[#040a26] overflow-hidden">
        {/* ================= VIDEO ================= */}
        <div className="absolute top-0 left-0 w-full h-[45vh] md:h-full md:w-1/2 md:left-auto md:right-0 z-0">
          <video
            className="w-full h-full object-cover"
            src="/Hero1.mp4"
            autoPlay
            loop
            muted
            playsInline
          />

          {/* Desktop fade */}
          <div className="hidden md:block absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#020617] to-transparent" />
        </div>

        {/* ================= CONTENT ================= */}
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 min-h-[85vh] px-6">
          {/* LEFT TEXT */}
          <div className="flex items-end md:items-center pt-[45vh] md:pt-0">
            <motion.div
              style={{ y, opacity }}
              className="max-w-xl pb-12 md:pb-0"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-blue-400/30 bg-blue-500/10 text-blue-400 text-xs font-bold">
                <Sparkles size={14} />
                SECURING YOUR FUTURE
              </div>

              <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
                Building{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  Resilience
                </span>
                <br />
                Through Risk Intelligence
              </h1>

              <p className="text-sm sm:text-lg text-slate-300 leading-relaxed mb-8">
                Advisory shaped by insight. Protection guided by foresight.
              </p>
            </motion.div>
          </div>

          {/* RIGHT EMPTY COLUMN (FOR VIDEO SPACE) */}
          <div className="hidden md:block" />
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="relative z-20 -mt-10 sm:-mt-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 justify-items-center">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`
                w-full max-w-[220px]
                bg-[#F0F9FF] p-5 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem]
                shadow-sm border border-blue-100 flex flex-col items-center text-center
                hover:-translate-y-1 transition-all hover:bg-white hover:shadow-lg
                ${i === 2 ? "col-span-2 justify-self-center md:col-span-1" : ""}
              `}
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white flex items-center justify-center text-blue-600 mb-3 shadow-sm">
                {stat.icon}
              </div>
              <div className="text-2xl sm:text-4xl font-black text-slate-900">
                {stat.value}
              </div>
              <div className="text-[9px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-16 md:py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">
              Why Choose Vestigo
            </span>

            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-3 mb-6 leading-tight">
              Strategic Risk Consulting <br className="hidden md:block" />
              <span className="text-blue-600">That Actually Protects.</span>
            </h2>

            <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-8">
              Insurance alone doesn’t prevent losses —{" "}
              <strong>risk intelligence does.</strong>
              Vestigo helps organizations identify, reduce, and control risks
              before they turn into financial losses.
            </p>

            <ul className="space-y-4 text-slate-700 text-base md:text-lg">
              <li className="flex gap-3">
                <ShieldCheck className="text-blue-600 shrink-0 mt-1" />
                Proactive risk mapping to avoid financial losses
              </li>
              <li className="flex gap-3">
                <TrendingUp className="text-blue-600 shrink-0 mt-1" />
                30% average reduction in claims frequency
              </li>
              <li className="flex gap-3">
                <Target className="text-blue-600 shrink-0 mt-1" />
                Business continuity and operational assurance
              </li>
              <li className="flex gap-3">
                <Zap className="text-blue-600 shrink-0 mt-1" />
                Optimised coverage via expert policy audits
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {[
              {
                title: "Risk Identification",
                icon: <Eye />,
                desc: "Uncover hidden operational vulnerabilities",
              },
              {
                title: "Risk Control",
                icon: <ShieldCheck />,
                desc: "Implement loss-prevention strategies",
              },
              {
                title: "Claims Advocacy",
                icon: <Handshake />,
                desc: "Expert-led, fair claim settlements",
              },
              {
                title: "Cost Optimisation",
                icon: <TrendingUp />,
                desc: "Save 10–20% via policy audits",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#E0F2FE] p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] border border-blue-100 hover:shadow-xl hover:-translate-y-1 transition-all hover:bg-white"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white text-blue-600 flex items-center justify-center mb-4 shadow-sm">
                  {item.icon}
                </div>
                <h4 className="font-bold text-lg text-slate-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= OUR TEAM ================= */}
      <section className="py-16 md:py-10 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 md:mb-12">
            Our Expert Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {team.map((member, i) => (
              <div
                key={i}
                className="p-6 sm:p-8 bg-[#F0F9FF] rounded-[2rem] sm:rounded-[2.5rem] border border-blue-50 hover:bg-white hover:shadow-lg transition-all"
              >
                <Users className="mx-auto text-blue-600 mb-4" />
                <h4 className="font-bold text-slate-900">{member.name}</h4>
                <p className="text-xs sm:text-sm text-slate-500 mt-2">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= OUR PARTNERS (STATIC GRID) ================= */}
      <section className="py-16 md:py-15 px-6 bg-[#F5F9FF]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-3xl md:text-4xl font-black text-slate-900 mb-10 md:mb-16">
            Trusted by Leading Organizations
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
            {partners.map((partner, i) => (
              <div
                key={partner.id ?? i}
                className="flex flex-col items-center group"
              >
                <div className="bg-white h-[90px] sm:h-[110px] w-full max-w-[220px] rounded-2xl border border-blue-100 shadow-sm flex items-center justify-center p-4 sm:p-6 group-hover:shadow-md transition-shadow">
                  <img
                    src={`https://admin.vestigoinsurance.com/storage/${partner.logo}`}
                    alt={partner.name}
                    className="max-h-full max-w-full object-contain"
                    loading="lazy"
                  />
                </div>

                <span className="mt-3 sm:mt-4 text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-widest text-center">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-16 md:py-10 px-6 bg-white">
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-blue-600 to-indigo-800 rounded-[2.5rem] sm:rounded-[4rem] p-10 sm:p-20 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[120px] -mr-40 -mt-40" />
          <h2 className="text-3xl sm:text-6xl font-black mb-6 sm:mb-8 leading-tight">
            Let’s Build Resilience <br className="hidden sm:block" /> Together
          </h2>
          <p className="text-blue-100 text-base sm:text-xl mb-8 sm:mb-12 max-w-2xl mx-auto font-medium">
            Discover why 500+ Business Protected trust Vestigo for risk
            protection and long-term business continuity.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 sm:px-12 sm:py-5 rounded-2xl font-bold text-base sm:text-lg hover:scale-105 transition-transform shadow-xl"
            >
              Talk to Experts
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
