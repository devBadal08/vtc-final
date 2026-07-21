"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  ShieldCheck,
  Users,
  Briefcase,
  ArrowRight,
  HandCoins,
  BarChart4,
  Globe2,
  Layers,
  Rocket,
  CheckCircle2,
  FileText,
  Award,
  BadgeCheck,
  Target,
  Shield,
} from "lucide-react";
import Link from "next/link";

export default function MSMEPage() {
  const supportSectors = [
    {
      title: "Package Policies",
      Icon: Layers,
      desc: "Bundled coverage solutions combining property, liability, and business interruption at competitive premiums designed for operational efficiency.",
    },
    {
      title: "Professional Indemnity",
      Icon: ShieldCheck,
      desc: "Protect against claims arising from professional advice, errors, or omissions with tailored coverage for service-based businesses.",
    },
    {
      title: "Trade Credit Insurance",
      Icon: FileText,
      desc: "Safeguard your cash flow against customer payment defaults and insolvency risks in challenging economic conditions.",
    },
    {
      title: "Key Person Cover",
      Icon: Users,
      desc: "Financial protection if critical team members become unable to work, ensuring business continuity during unexpected challenges.",
    },
  ];

  const risks = [
    {
      icon: TrendingUp,
      title: "Fire & Property Damage",
      desc: "Factory fires, machinery breakdowns, and natural catastrophes can destroy physical assets and halt operations overnight — erasing years of capital investment in hours.",
    },
    {
      icon: BarChart4,
      title: "Business Interruption",
      desc: "Loss of production or operations due to insured events leads to loss of profit and mounting fixed expenses, threatening long-term viability even after recovery.",
    },
    {
      icon: Globe2,
      title: "Supply Chain Disruption",
      desc: "Cargo losses, transit damages, and logistics disruptions impact raw material availability and finished goods movement.",
    },
    {
      icon: Users,
      title: "Employee-Related Risks",
      desc: "Accidents, injuries, or health emergencies affecting your workforce reduce productivity and expose businesses to liability.",
    },
    {
      icon: Briefcase,
      title: "Liability & Legal Risks",
      desc: "Product liability, public liability, and third-party damages can result in significant financial exposure.",
    },
    {
      icon: ShieldCheck,
      title: "Cyber & Data Risks",
      desc: "Cyber attacks, ransomware, and data breaches are rising rapidly across India's digitising SME sector.",
    },
    {
      icon: Rocket,
      title: "Management & Governance Risks",
      desc: "Decisions made by directors and senior management can expose them to legal claims and regulatory scrutiny.",
    },
  ];

  const frameworks = [
    {
      icon: TrendingUp,
      title: "Fire & Property Risk",
      solution: "Industrial All Risk Insurance",
      desc: "Comprehensive cover for buildings, plant, machinery, and stock against fire, explosion, natural perils, and accidental damage ensuring rapid reinstatement and operational continuity.",
    },
    {
      icon: BarChart4,
      title: "Business Disruption",
      solution: "Business Interruption Insurance",
      desc: "Covers loss of gross profit and ongoing fixed expenses during the indemnity period following an insured event, bridging the financial gap until full recovery.",
    },
    {
      icon: Globe2,
      title: "Supply Chain Risk",
      solution: "Marine Cargo Insurance",
      desc: "Protects raw materials and finished products in transit across all transport modes, covering loss, damage, or theft from origin to destination.",
    },
    {
      icon: Users,
      title: "Employee Risk",
      solution: "Group Health & Personal Accident Insurance",
      desc: "Provides healthcare and accident protection for employees while fulfilling statutory obligations and strengthening workforce confidence.",
    },
    {
      icon: Briefcase,
      title: "Legal Liability",
      solution: "Public & Product Liability Insurance",
      desc: "Covers legal defence costs and compensation claims arising from third-party bodily injury or property damage caused by business operations.",
    },
    {
      icon: ShieldCheck,
      title: "Cyber Threat",
      solution: "Cyber Risk Insurance",
      desc: "Responds to ransomware attacks, data breaches, and cyber incidents covering recovery costs, regulatory fines, and digital business interruption.",
    },
    {
      icon: Rocket,
      title: "Management Liability",
      solution: "Directors & Officers Liability Insurance",
      desc: "Protects personal assets of directors and senior executives against claims alleging wrongful acts in their managerial roles.",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* 1. HERO SECTION: Empowering Growth */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/sme-msme.png"
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
            Vestigo Insurance Brokers Pvt. Ltd. | IRDAI Licensed Direct Broker |
            Licence No. 1131
          </span>
          <h1 className="text-3xl md:text-6xl font-black text-[#070B7F] mb-6 tracking-tighter uppercase leading-tight">
            SME & MSME
            <br />{" "}
            <span className="text-blue-600 italic">Insurance Solution</span>
          </h1>
          <h3 className="text-xs md:text-xl font-light text-slate-600 mb-10 uppercase tracking-[0.3em]">
            Small and medium enterprises form the backbone of our economy, yet
            often face disproportionate insurance challenges. We specialise in
            delivering cost-effective, comprehensive coverage that scales with
            your business ambitions.
          </h3>
        </motion.div>

        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 text-blue-600"
        ></motion.div>
      </section>

      {/* MSME RISK FRAMEWORK INTRO */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-4xl font-black text-blue-900 mb-6 tracking-tight">
              Every Growing Business Carries Hidden Risks
            </h2>

            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              From fire accidents to supply chain disruptions and liability
              exposures, SMEs and MSMEs face risks that can disrupt years of
              hard-earned growth. The right insurance structure transforms
              uncertainty into resilience — converting unpredictable exposure
              into a managed, strategic advantage.
            </p>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-blue-900 mb-3">
                Our Mandate
              </h3>

              <p className="text-slate-600 leading-relaxed">
                Vestigo Insurance Brokers is an IRDAI Licensed Direct Insurance
                Broker (General & Life), dedicated to designing risk protection
                frameworks that safeguard Indian businesses at every stage of
                growth.
              </p>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="bg-white border border-slate-200 rounded-3xl p-10 shadow-lg">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">
              Who This Is For
            </h3>

            <p className="text-slate-600 leading-relaxed mb-6">
              This framework is designed specifically for SME and MSME business
              owners, directors, and decision-makers who understand that
              proactive risk management is not a cost — it is a competitive
              advantage.
            </p>

            <div className="space-y-4">
              {[
                "Business Owners & Founders",
                "Company Directors & Decision Makers",
                "Growing Enterprises Scaling Operations",
                "SMEs Seeking Structured Risk Protection",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="text-blue-600 mt-1" size={18} />
                  <p className="text-slate-600 text-md">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MAJOR RISK EXPOSURES */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-blue-900 mb-4 tracking-tight">
              Major Risk Exposures Facing SMEs & MSMEs
            </h2>

            <p className="text-slate-600 max-w-3xl mx-auto leading-relaxed text-lg">
              Indian SMEs and MSMEs operate in a complex, high-velocity
              environment. These risk domains can undermine business continuity
              and financial stability without adequate protection.
            </p>
          </div>

          {/* FIRST 6 CARDS */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {risks.slice(0, 6).map((risk, i) => {
              const Icon = risk.icon;

              return (
                <motion.div
                  key={i}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all"
                >
                  <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon size={26} />
                  </div>

                  <h3 className="text-xl font-bold text-blue-900 mb-3">
                    {risk.title}
                  </h3>

                  <p className="text-slate-600 text-md leading-relaxed">
                    {risk.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* LAST CARD CENTERED */}
          <div className="flex justify-center mt-10">
            {risks.slice(6).map((risk, i) => {
              const Icon = risk.icon;

              return (
                <motion.div
                  key={i}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all max-w-md w-full"
                >
                  <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon size={26} />
                  </div>

                  <h3 className="text-xl font-bold text-blue-900 mb-3">
                    {risk.title}
                  </h3>

                  <p className="text-slate-600 text-md leading-relaxed">
                    {risk.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROTECTION FRAMEWORK */}
      <section className="py-14 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-blue-900 mb-4">
              Risk Shield Architecture
            </h2>

            <p className="text-slate-600 max-w-3xl mx-auto text-lg leading-relaxed">
              Every identified risk exposure maps directly to a tailored
              insurance solution. Vestigo&apos;s protection framework is
              designed as an interlocking architecture ensuring no critical
              vulnerability remains unprotected.
            </p>
          </div>

          {/* FIRST 6 CARDS */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {frameworks.slice(0, 6).map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={i}
                  whileHover={{ y: -8 }}
                  className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all"
                >
                  <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                    <Icon size={26} />
                  </div>

                  <h3 className="text-lg font-bold text-blue-900 mb-1">
                    {item.title}
                  </h3>

                  <p className="text-blue-600 text-md font-semibold mb-3">
                    {item.solution}
                  </p>

                  <p className="text-slate-600 text-md leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* LAST CARD CENTER */}
          <div className="flex justify-center mt-10">
            {frameworks.slice(6).map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={i}
                  whileHover={{ y: -8 }}
                  className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all max-w-md w-full"
                >
                  <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                    <Icon size={26} />
                  </div>

                  <h3 className="text-lg font-bold text-blue-900 mb-1">
                    {item.title}
                  </h3>

                  <p className="text-blue-600 text-md font-semibold mb-3">
                    {item.solution}
                  </p>

                  <p className="text-slate-600 text-md leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* STRATEGIC RISK PARTNER */}
      <section className="py-14 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          {/* LEFT SIDE */}
          <div>
            <h2 className="text-4xl font-black text-blue-900 mb-6">
              Your Strategic Risk Protection Partner
            </h2>

            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Vestigo Insurance Brokers is not simply a policy vendor. As an
              IRDAI Licensed Direct Insurance Broker for both General and Life
              insurance, we act as your dedicated risk adviser — analysing your
              specific business exposures, designing a bespoke protection
              framework, and managing claims with the rigour and objectivity
              that only an independent broker can provide.
            </p>

            <p className="text-slate-600 text-lg leading-relaxed">
              Our approach is rooted in the disciplines of enterprise risk
              management, enabling Indian SMEs and MSMEs to compete, expand, and
              operate with the same level of strategic protection typically
              reserved for large corporates.
            </p>
          </div>

          {/* RIGHT SIDE INFO CARDS */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <Award className="text-blue-600 mb-3" />
              <h4 className="font-bold text-blue-900">IRDAI Licensed</h4>
              <p className="text-md text-slate-600">
                Direct Broker — General & Life
              </p>
              <p className="text-md text-slate-500">Licence No. 1131</p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <Shield className="text-blue-600 mb-3" />
              <h4 className="font-bold text-blue-900">Regulated & Compliant</h4>
              <p className="text-md text-slate-600">
                Operates under IRDAI regulatory framework
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <Users className="text-blue-600 mb-3" />
              <h4 className="font-bold text-blue-900">SME Focused</h4>
              <p className="text-md text-slate-600">
                Built specifically for Indian SMEs and MSMEs
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <Target className="text-blue-600 mb-3" />
              <h4 className="font-bold text-blue-900">
                Bespoke Risk Frameworks
              </h4>
              <p className="text-md text-slate-600">
                Tailored protection strategies for each business
              </p>
            </div>
          </div>
        </div>

        {/* COMMITMENT SECTION */}
        <div className="max-w-5xl mx-auto mt-20">
          <h3 className="text-2xl font-bold text-blue-900 mb-8 text-center">
            Our Commitment to You
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Independent, unbiased risk advice — your interest, not the insurer's",
              "End-to-end policy design tailored to your sector and scale",
              "Transparent claims advocacy and management support",
              "Periodic risk reviews as your business grows and evolves",
              "Access to the broadest market of IRDAI-approved insurers",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-slate-50 border border-slate-200 rounded-xl p-4"
              >
                <CheckCircle2 className="text-blue-600 mt-1" size={18} />
                <p className="text-slate-700 text-md">{item}</p>
              </div>
            ))}
          </div>

          {/* QUOTE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 p-1 bg-gradient-to-r from-sky-400 via-blue-500 to-sky-400 rounded-[2rem] shadow-2xl shadow-sky-200"
          >
            <div className="bg-white p-12 rounded-[1.9rem] flex flex-col md:flex-row items-center gap-8">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-sky-600 text-5xl font-serif">“</span>
              </div>
              <p className="italic text-slate-800 text-2xl md:text-3xl font-medium leading-tight text-center md:text-left">
                The right insurance structure transforms uncertainty into
                resilience.
              </p>
            </div>
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
}
