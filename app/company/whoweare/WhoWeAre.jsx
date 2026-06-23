"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Target,
  Eye,
  ShieldCheck,
  Zap,
  Headphones,
  Trophy,
  Users,
  ChevronRight,
  BarChart3,
  Sparkles,
  Building2,
  Globe,
  ArrowRight,
  Handshake,
  Search,
  Settings,
  Glasses,
  ClipboardCheck,
  Megaphone,
  ClipboardList,
  PhoneCall,
  FileText,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function CompanyOverview() {
  const containerRef = useRef(null);

  // Parallax Effect for Hero Content
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 250]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Stats Data with Image Paths
  const stats = [
    {
      label: "Proven Success",
      description: "Award-winning services trusted by top corporations",
      image: "/04.png",
    },
    {
      label: "Client-Centric",
      description: "Tailored solutions and dedicated support.",
      image: "/p.png",
    },
    {
      label: "Asset Guard",
      description: "Insurance protection for physical and financial assets.",
      image: "/02.png",
    },
  ];

  return (
    <main ref={containerRef} className="bg-white overflow-hidden font-sans">
      {/* 1. HERO SECTION (Dark Premium Theme Restored) */}
      <section className="relative w-full flex items-center justify-center overflow-hidden">
        {/* 1. Removed fixed height on mobile (h-[85vh]) 
          2. Added 'aspect-auto' to let the image define the space
        */}
        <div className="relative z-0 w-full h-auto">
          <img
            src="/who.jpeg"
            alt="About Us Background"
            /* 'w-full h-auto' ensures the image scales perfectly 
         to the width of the phone without cutting anything.
      */
            className="w-full h-auto md:h-[85vh] md:object-cover brightness-[0.9]"
          />

          {/* Overlay: ensures it stays pinned to the image area */}
          <div className="absolute  bg-slate-950/40 backdrop-blur-[10px]" />
        </div>
      </section>

      {/* 2. STATS/FEATURES GRID (Specific Sky Blue Cards) */}
      <section className="relative z-20 -mt-5 md:-mt-10 px-6 mb-10 md:mb-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-[#F0F9FF] p-8 md:p-12 rounded-[2.5rem] md:rounded-[3rem] shadow-[0_15px_40px_rgba(0,0,0,0.05)] border border-sky-100 flex flex-col items-center text-center group hover:bg-white hover:-translate-y-4 transition-all duration-500"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 relative mb-6 transition-transform group-hover:scale-110 duration-500">
                <Image
                  src={stat.image}
                  alt={stat.label}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100px, 150px"
                />
              </div>

              <h3 className="text-lg md:text-xl font-black text-slate-900 mb-4 uppercase tracking-tighter">
                {stat.label}
              </h3>
              <p className="text-xs md:text-sm font-semibold text-slate-500 leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-blue-600 font-black tracking-[0.25em] uppercase text-xs">
              Who We Are
            </span>

            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-4 mb-6 leading-tight">
              Beyond Traditional <br />
              <span className="text-blue-600">Insurance Broking</span>
            </h2>

            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Vestigo was founded on a simple but powerful conviction: insurance
              should work when it is needed most. We combine deep industry
              expertise, risk intelligence and strong insurer relationships to
              design coverage that truly protects our clients.
            </p>

            <p className="text-lg text-slate-600 leading-relaxed">
              Our approach focuses on understanding each organization’s risk
              environment before structuring a strategic protection program that
              ensures confidence and long-term stability.
            </p>
          </div>

          <div className="bg-sky-50 border border-sky-100 rounded-[2.5rem] p-10">
            <p className="text-lg text-slate-600 leading-relaxed">
              <b>At Vestigo,</b> a policy is not the end product.{" "}
              <b>Peace of mind is.</b> That means we stand beside our clients
              not just at inception, but throughout the policy lifecycle — and
              especially at the critical moment of a claim, where our advocacy
              makes the real difference.
            </p>
            <h4 className="font-black text-slate-900 text-xl mb-4 mt-6">
              Our Core Promise
            </h4>
            <ul className="space-y-4 text-slate-600">
              <li>✔ Understand Risk in Depth</li>
              <li>✔ Structure Protection Strategically</li>
              <li>✔ Advocate Fiercely at Claims</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. WHY US SECTION (Sky Blue Accents on Icons) */}
      <section className="py-20 md:py-5 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-blue-600 font-black tracking-[0.2em] uppercase text-xs">
              OUR IMPACT
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 mt-4 leading-none uppercase tracking-tighter">
              Trust Built <br />{" "}
              <span className="text-blue-600 italic font-serif lowercase">
                on Performance
              </span>
            </h2>
            <p className="text-base md:text-lg text-slate-600 mb-10 leading-relaxed max-w-lg">
              Numbers tell a story. At Vestigo, our performance metrics reflect
              our commitment to delivering measurable value — in coverage
              quality, client satisfaction, and claims outcomes.
            </p>
            <Link
              href="/company/whyus"
              className="inline-flex items-center gap-3 font-black text-xs md:text-sm uppercase tracking-widest text-slate-900 group"
            >
              Explore Our Values{" "}
              <ChevronRight className="group-hover:translate-x-2 transition-transform text-blue-600" />
            </Link>
          </motion.div>

          <div className="grid grid-rows-1 gap-3 md:gap-4">
            {[
              {
                stat: "16+ Years",
                title: "Advisory Experience",
                color: "bg-sky-100 text-sky-600",
              },
              {
                stat: "500+",
                title: "Businesses Protected",
                color: "bg-sky-100 text-sky-600",
              },
              {
                stat: "25+",
                title: "Insurer Partners",
                color: "bg-sky-100 text-sky-600",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-3 md:p-5 rounded-[1rem] md:rounded-[2.5rem] bg-slate-100 border border-slate-200 hover:bg-white hover:shadow-2xl transition-all duration-300"
              >
                <div
                  className={`text-3xl md:text-5xl font-black text-blue-600 text-center mb-3 `}
                >
                  {item.stat}
                </div>

                <h4 className="text-md font-bold text-slate-900 text-center mb-3">
                  {item.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MISSION & VISION (Original Dark Premium) */}
      <section className="py-20 md:py-24 bg-[#0F172A] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/5 blur-[120px] rounded-full" />
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          <div className="p-8 md:p-14 rounded-[2.5rem] md:rounded-[4rem] bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition-colors">
            <div className="flex items-center gap-4 mb-6">
              <Target className="text-blue-400" size={40} />
              <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter">
                Our Mission
              </h3>
            </div>
            <p className="text-slate-400 text-base md:text-lg leading-relaxed font-medium">
              Safeguarding Your Future Growth. To transform the insurance
              experience for organizations by delivering intelligent,
              technology-driven solutions backed by expert advisory ensuring
              every business is boldly protected, confidently growing, and
              always assured. We provide actionable risk insights that empower
              organizations to proactively mitigate exposures, converting
              potential challenges into opportunities for sustained growth and
              long-term profitability.
            </p>

            <ShieldCheck className="absolute -bottom-3 -right-6 w-24 h-24 md:w-50 md:h-50 opacity-10" />
          </div>
          <div className="p-8 md:p-14 rounded-[2.5rem] md:rounded-[4rem] bg-[#0C0F7F] shadow-3xl shadow-blue-900/50 hover:bg-blue-500 transition-colors">
            <div className="flex items-center gap-4 mb-6">
              <Eye className="text-white" size={40} />
              <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter">
                Our Vision
              </h3>
            </div>
            <p className="text-blue-50 text-base md:text-lg leading-relaxed font-medium">
              Pioneering India&apos;s Risk Advisory Landscape. To be the trusted
              leader in Business Insurance, delivering cutting-edge, innovative
              & tech powered solutions that every business organization can
              scale with certainty, security & confidence. We are committed to
              setting new industry benchmarks through continuous innovation,
              deep expertise, and an unwavering commitment to our clients
              success and lasting resilience.
            </p>
            <BarChart3 className="absolute -bottom-3 ml-82 mb-23 w-24 h-24 md:w-50 md:h-50 opacity-10" />
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="py-14 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase">
              Our Philosophy
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto mt-4">
              Insurance is not just about policies. It is about safeguarding
              enterprises, securing livelihoods, and building long-term
              resilience.
            </p>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto mt-6 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Risk Intelligence",
                desc: "We analyse operational, financial, regulatory and reputational risk to identify exposures early.",
                icon: Glasses,
              },
              {
                title: "Insurer Relationships",
                desc: "Access to leading insurers ensures superior coverage terms and strong claims support.",
                icon: Handshake,
              },
              {
                title: "Regulatory Alignment",
                desc: "All advisory aligns with IRDAI regulations and global insurance best practices.",
                icon: ClipboardCheck,
              },
              {
                title: "Claims Advocacy",
                desc: "We act as your advocate during claims ensuring fair and timely settlements.",
                icon: Megaphone,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="group bg-white border border-sky-100 rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-sky-100 opacity-0 group-hover:opacity-100 transition" />

                <div className="relative">
                  <div className="w-12 h-12 mb-5 rounded-xl bg-sky-100 flex items-center justify-center text-blue-600">
                    <item.icon size={22} />
                  </div>

                  <h3 className="font-black text-lg text-slate-900 mb-3">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-md leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-6 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 uppercase mb-4">
              Our Process
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto mt-4">
              A structured engagement model designed to protect your business
              through every stage of risk management.
            </p>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto mt-6 rounded-full" />
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                title: "Risk Discovery",
                icon: Search,
              },
              {
                title: "Coverage Engineering",
                icon: Settings,
              },
              {
                title: "Market Placement",
                icon: Handshake,
              },
              {
                title: "Ongoing Advocacy",
                icon: ShieldCheck,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-sky-50 border border-sky-100 rounded-[2rem] p-8 text-center hover:shadow-lg transition"
              >
                <div className="w-14 h-14 mx-auto mb-6 bg-white border border-sky-100 rounded-xl flex items-center justify-center text-blue-600">
                  <item.icon size={28} />
                </div>

                <h3 className="font-black text-slate-900">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GET STARTED */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 uppercase mb-4">
              Let&apos;s Build Your Risk Programme
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto mt-4">
              Whether you are reviewing coverage or launching a new venture,
              Vestigo provides strategic risk advisory designed for your
              business.
            </p>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto mt-6 rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Risk Audit",
                desc: "Comprehensive review of your insurance programme to identify gaps and optimisation opportunities.",
                icon: ClipboardList,
              },
              {
                title: "Advisory Consultation",
                desc: "Discuss sector-specific risks directly with a Vestigo advisor.",
                icon: PhoneCall,
              },
              {
                title: "Bespoke Proposal",
                desc: "Receive a customised insurance programme aligned to your exposures.",
                icon: FileText,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="group bg-white border border-sky-100 rounded-[2.5rem] p-10 hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-sky-100 opacity-0 group-hover:opacity-100 transition" />

                <div className="relative">
                  <div className="w-14 h-14 mb-6 rounded-2xl bg-sky-100 flex items-center justify-center text-blue-600">
                    <item.icon size={26} />
                  </div>

                  <h3 className="font-black text-xl text-slate-900 mb-4">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-md leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA SECTION (Original Dark Gradient) */}
      <section className="py-20 md:py-10 px-6">
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-blue-700 to-indigo-900 rounded-[3rem] md:rounded-[5rem] p-10 md:p-20 text-center text-white relative overflow-hidden shadow-3xl">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
          <h2 className="text-4xl md:text-7xl font-black mb-8 relative z-10 tracking-tighter uppercase leading-tight md:leading-none">
            Ready to <span className="text-cyan-400">Fortify</span> <br /> Your
            Business?
          </h2>
          <p className="text-sm md:text-lg text-blue-100 mb-12 max-w-2xl mx-auto relative z-10 font-medium">
            Discover why over 500+ Business Protected rely on Vestigo for
            strategic risk management and global insurance solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-6 relative z-10">
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-white text-blue-700 px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-sm shadow-2xl hover:bg-blue-50 transition-all"
            >
              Consult a Specialist
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
