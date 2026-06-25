"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import {
  Target,
  Eye,
  TrendingUp,
  ShieldCheck,
  Zap,
  Headphones,
  Trophy,
  Users,
  ChevronRight,
  Sparkles,
  Building2,
  Globe,
  ArrowRight,
  Handshake,
} from "lucide-react";
import Link from "next/link";

export default function CompanyOverview() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const claims = [
    {
      title: "Mega Risk Policy: Turbine Breakdown",
      desc: "Successfully processed a turbine breakdown claim of INR 6 Cr under a comprehensive mega risk policy.",
    },
    {
      title: "IAR Policy: Explosion & Business Interruption",
      desc: "Managed an explosion claim with INR 50 Cr material damage and INR 25 Cr business interruption under an Industrial All Risk (IAR) policy.",
    },
    {
      title: "Crime Policy: Payment Related Fraud",
      desc: "Resolved a payment-related fraud claim of INR 3 Cr, providing crucial protection under a Crime Policy.",
    },
    {
      title: "Contractors All Risk: Flood Damage",
      desc: "Handled a road damage claim of INR 1.25 Cr due to severe flooding under a Contractors All Risk (CAR) Policy.",
    },
    {
      title: "Marine Insurance: Forwarding Charges",
      desc: "Successfully secured a forwarding charges claim of INR 1 Cr under marine insurance due to a shipping line’s bankruptcy.",
    },
    {
      title: "Product Recall: Contamination Issue",
      desc: "Managed a product recall claim worth INR 3 Cr triggered by contamination found in a cargo of psyllium husk.",
    },
  ];

  return (
    <main ref={containerRef} className="bg-white overflow-hidden">
      <section className="relative w-full flex items-center justify-center overflow-hidden">
        {/* 1. Removed fixed height on mobile (h-[85vh]) 
    2. Added 'aspect-auto' to let the image define the space
  */}
        <div className="relative z-0 w-full h-auto">
          <Image
            src="/WHY.png"
            alt="About Us Background"
            width={1920}
            height={1080}
            priority
            className="w-full h-auto md:h-[85vh] md:object-cover brightness-[0.9]"
          />

          {/* Overlay: ensures it stays pinned to the image area */}
          <div className="absolute  bg-slate-950/40 backdrop-blur-[10px]" />
        </div>
      </section>{" "}
      {/* ================= PREMIUM DARK HERO SECTION (MATCHED STYLE) ================= */}
      {/* 3. WHY US SECTION (UNCHANGED CONTENT) */}
      <section className="py-10 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 mt-2 leading-tight text-left">
              Strategic Risk
              <span className="italic font-serif text-blue-600">
                {" "}
                Advisory Partnership
              </span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed text-left">
              Our role extends beyond policy placement. We operate as a
              strategic risk advisory partner, investing deeply in understanding
              your business operations, exposure points, and growth priorities.
              This enables us to structure insurance programmes that are
              thoughtfully designed, policy-accurate, and prepared to perform
              when it matters most.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {[
              {
                title: "Risk Assessment",
                icon: <Zap />,
                color: "bg-amber-100 text-amber-600",
              },
              {
                title: "Coverage Structuring",
                icon: <Headphones />,
                color: "bg-blue-100 text-blue-600",
              },
              {
                title: "Claims Advisory",
                icon: <ShieldCheck />,
                color: "bg-emerald-100 text-emerald-600",
              },
              {
                title: "Loss Mitigation",
                icon: <Trophy />,
                color: "bg-purple-100 text-purple-600",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-lg transition-all"
              >
                <div
                  className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center mb-4`}
                >
                  {item.icon}
                </div>
                <h4 className="font-bold text-slate-900">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ================= CLAIMS EXPERTISE ================= */}
      <section className="py-14 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 mt-2 leading-tight text-left">
              Proven Expertise:
              <span className="italic font-serif text-blue-600">
                {" "}
                Major Claims Managed
              </span>
            </h2>

            <p className="text-slate-600 text-lg max-w-4xl mx-auto leading-relaxed">
              Our partners possess extensive experience navigating complex claim
              scenarios, ensuring effective resolution and minimal disruption
              for our clients. Here are some significant claims successfully
              managed.
            </p>
          </div>

          <div className="space-y-6">
            {claims.map((claim, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all"
              >
                {/* Number */}
                <div className="w-16 flex-shrink-0 bg-slate-100 text-slate-600 font-bold text-lg flex items-center justify-center">
                  {i + 1}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h4 className="font-semibold text-lg text-blue-900 mb-1">
                    {claim.title}
                  </h4>

                  <p className="text-slate-600 text-md leading-relaxed">
                    {claim.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* 5. TEAM & PARTNERS PREVIEW */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 items-stretch gap-8">
            <div className="group bg-white p-12 rounded-[3rem] border border-slate-200 hover:border-blue-300 transition-all shadow-sm flex flex-col items-center">
              <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-3xl flex items-center justify-center mb-6">
                <Users size={40} />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                Our Specialists
              </h3>
              <p className="text-slate-500 mb-8 text-lg text-center leading-relaxed flex-grow">
                Meet the minds behind your security. Our advisors bring decades
                of combined expertise to your doorstep.
              </p>
              <Link
                href="/company/ourteam"
                className="inline-flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-600 transition-colors"
              >
                Meet the Team <ChevronRight size={18} />
              </Link>
            </div>

            <div className="group bg-white p-6 md:p-12 rounded-[2rem] md:rounded-[3rem] border border-slate-200 hover:border-emerald-300 transition-all shadow-sm flex flex-col items-center text-center">
              {/* Icon - Scaled down slightly for mobile */}
              <div className="w-20 h-20 md:w-20 md:h-20 bg-emerald-50 text-emerald-600 rounded-2xl md:rounded-3xl flex items-center justify-center mb-6 shrink-0">
                <Handshake className="w-8 h-8 md:w-10 md:h-10" />
              </div>

              {/* Title - Responsive font size */}
              <h3 className="text-3xl md:text-3xl font-bold text-slate-900 mb-4 leading-tight">
                Strategic Alliances
              </h3>

              {/* Paragraph - Responsive font size and better line height */}
              <p className="text-slate-500 mb-8 text-lg md:text-lg leading-relaxed flex-grow">
                We work with global industry leaders and underwriters to provide
                the most robust coverage possible.
              </p>

              {/* Link - Full width on very small screens, inline on larger */}
              <Link
                href="/company/ourpartners"
                className="inline-flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-600 transition-colors"
              >
                Our Partners <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* 6. FINAL CTA HUB */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[4rem] p-16 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[100px] rounded-full" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6 relative z-10">
            Start Your Journey With Us
          </h2>
          <p className="text-blue-100 text-lg mb-12 max-w-2xl mx-auto relative z-10">
            Explore the different facets of our company and see why 500+
            Business Protected trust Vestigo for their security.
          </p>
          <div className="flex flex-wrap justify-center gap-6 relative z-10">
            <Link
              href="/company/whoweare"
              className="bg-white text-blue-600 px-10 py-4 rounded-2xl font-bold shadow-xl hover:bg-blue-50 transition-all"
            >
              Who We Are
            </Link>
            <Link
              href="/contact"
              className="bg-blue-900/30 backdrop-blur-md border border-white/20 text-white px-10 py-4 rounded-2xl font-bold hover:bg-white/10 transition-all"
            >
              Contact Specialists
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
