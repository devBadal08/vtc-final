"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Scale,
  ShieldCheck,
  Award,
  Users,
  FileCheck,
  Building2,
  MapPin,
  Mail,
  ChevronRight,
  Sparkles,
  Copy,
  Check,
  ArrowRight,
  Lock,
  Eye,
  Gavel,
  ShieldAlert,
  AlertTriangle,
  UserCheck,
  RefreshCw,
  FileText,
  MessageSquare,
  Gift,
  HeartHandshake,
  CheckCircle2,
  Ban,
  Clock,
  ExternalLink,
} from "lucide-react";
import Image from "next/image";

// ==========================================
// CORPORATE DETAILS & 14 ETHICS CLAUSES
// ==========================================

const corporateDetails = {
  companyName: "Vestigo Insurance Brokers Pvt. Ltd.",
  irdaiRegNo: "1131",
  category: "Direct Broker (General & Life)",
  validity: "15 January 2026 to 14 January 2029",
  cin: "U66220GJ2025PTC166605",
  address:
    "SF 201, Status Complex, Opp. Amrapali Complex, Pani Tanki Road, Karelibaug, Vadodara - 390018, Gujarat, India",
  website: "www.vestigoinsurance.com",
  email: "enquiry@vestigoinsurance.com",
  effectiveDate: "20 July 2026",
};

const ethicsClauses = [
  {
    id: "purpose",
    num: "01",
    title: "Purpose and Commitment",
    icon: <Award size={20} />,
    summary:
      "Insurance is built on trust, utmost good faith and responsible advice. Vestigo is committed to conducting business ethically, professionally and in the best interests of clients, while respecting insurers, regulators, employees, partners and the wider community. This Policy states the standards expected of Vestigo’s directors, employees, trainees, consultants, authorised representatives and business partners.",
  },
  {
    id: "core-principles",
    num: "02",
    title: "Core Ethical Principles",
    icon: <Scale size={20} />,
    summary: "",
    points: [
      "Client interest and fair treatment: understand the client’s needs, communicate fairly and avoid conduct that places commission, personal benefit or convenience ahead of lawful client interests.",
      "Integrity and utmost good faith: be honest, truthful and complete in dealings and do not conceal, falsify, manipulate or knowingly misrepresent material information.",
      "Competence, care and diligence: perform duties with appropriate knowledge, preparation, skill, documentation and attention; seek specialist support where required.",
      "Clarity and transparency: explain material assumptions, limitations, terms, exclusions, deductibles, warranties, duties and conflicts in a manner appropriate to the engagement.",
      "Accountability and ownership: take responsibility for advice, commitments, records, errors and corrective action.",
      "Confidentiality and privacy: protect client, insurer, employee and business information and use it only for authorised purposes.",
      "Regulatory respect: comply with applicable law, IRDAI requirements, the broker code of conduct and lawful directions of competent authorities.",
      "Respectful conduct: maintain dignity, fairness, inclusion and professionalism and do not tolerate harassment, intimidation, retaliation or discrimination.",
    ],
  },
  {
    id: "responsible-advice",
    num: "03",
    title: "Responsible Insurance Advice and Distribution",
    icon: <HeartHandshake size={20} />,
    summary:
      "Vestigo prohibits mis-selling and misleading conduct. No person acting for Vestigo may:",
    points: [
      "Make false, exaggerated, unsubstantiated or guaranteed claims about coverage, claim payment, insurer performance, premium savings or returns.",
      "Suppress material facts, exclusions, deductibles, warranties, waiting periods, co-payments, limits or conditions that should reasonably be brought to the client’s attention.",
      "Fabricate quotations, comparisons, declarations, inspections, claims, KYC information or supporting documents.",
      "Recommend a product solely because it produces a higher remuneration or personal benefit.",
      "Sign, alter or submit a client document without authority.",
      "Collect premium or client money into a personal, employee or unauthorised account.",
      "Offer an unlawful rebate, inducement, kickback or benefit.",
      "Interfere improperly with an insurer, surveyor, third-party administrator, hospital, repairer, regulator or claim investigation.",
    ],
    desc: "Where information is uncertain or incomplete, the limitation must be disclosed and reasonable steps taken to verify it. Policy documents issued by the insurer govern the contract of insurance.",
  },
  {
    id: "conflicts-of-interest",
    num: "04",
    title: "Conflicts of Interest",
    icon: <Eye size={20} />,
    summary:
      "Actual, potential or perceived conflicts must be disclosed promptly and managed fairly. Personnel must not use a Vestigo opportunity, client relationship, insurer relationship, confidential information or position for undisclosed personal benefit. Outside employment, financial interests, family relationships, referral arrangements and gifts that could influence or appear to influence judgment must be declared through the applicable internal process.",
  },
  {
    id: "anti-bribery",
    num: "05",
    title: "Gifts, Hospitality, Bribery & Improper Advantages",
    icon: <Gift size={20} />,
    summary:
      "Vestigo has zero tolerance for bribery, facilitation payments, kickbacks, secret commissions and improper advantages. Cash and cash-equivalent gifts must not be offered or accepted. Modest and lawful hospitality or customary gifts may be accepted only where they are reasonable, infrequent, transparent, do not influence a decision and comply with internal approval requirements. Any demand or suspicion of bribery must be reported immediately.",
  },
  {
    id: "data-security",
    num: "06",
    title: "Confidentiality, Data and Information Security",
    icon: <Lock size={20} />,
    summary:
      "Confidential information may be accessed and used only for authorised duties. It must not be disclosed to family, friends, competitors, unauthorised colleagues or external persons. Personal email, unapproved messaging, personal cloud storage, removable media or unauthorised software must not be used for confidential information where prohibited. Suspected loss, leakage, phishing, credential compromise or unauthorised access must be reported immediately.",
  },
  {
    id: "accurate-records",
    num: "07",
    title: "Accurate Records & Regulatory Cooperation",
    icon: <FileCheck size={20} />,
    summary:
      "Business, financial, policy, claim, client, attendance, expense and compliance records must be accurate, complete, timely and capable of audit. No person may create a false record, backdate a document improperly, delete material evidence, conceal an error or obstruct an audit, inspection or investigation. Vestigo will cooperate lawfully and transparently with IRDAI, insurers, authorities, auditors and other competent bodies.",
  },
  {
    id: "fair-competition",
    num: "08",
    title: "Fair Competition and External Communications",
    icon: <Building2 size={20} />,
    summary:
      "Vestigo competes on service, knowledge, innovation and trust. Personnel must not obtain competitor information unlawfully, make defamatory statements, misuse confidential market information or enter anti-competitive arrangements. Public statements, advertisements, website content, social-media posts and media interactions concerning Vestigo or client matters must be accurate, authorised and compliant with confidentiality and regulatory requirements.",
  },
  {
    id: "respectful-workplace",
    num: "09",
    title: "Respectful Workplace and Professional Behaviour",
    icon: <Users size={20} />,
    summary:
      "Vestigo expects a workplace free from harassment, bullying, threats, discrimination, retaliation, substance misuse and violence. Professional disagreements must be addressed respectfully. Managers have a heightened duty to prevent misuse of authority, protect persons who raise concerns in good faith and act consistently.",
  },
  {
    id: "speak-up",
    num: "10",
    title: "Speak-Up and Reporting Concerns",
    icon: <MessageSquare size={20} />,
    summary:
      "A person may report suspected fraud, bribery, regulatory breach, mis-selling, conflict, data misuse, harassment, financial irregularity, document falsification, retaliation or other unethical conduct to enquiry@vestigoinsurance.com with the subject “Confidential Ethics Concern”. Reports should provide facts, dates, persons involved and available supporting material. Anonymous reports may be considered where sufficient information is provided, although anonymity may limit investigation or feedback.",
  },
  {
    id: "anti-retaliation",
    num: "11",
    title: "Confidentiality and Protection Against Retaliation",
    icon: <ShieldCheck size={20} />,
    summary:
      "Vestigo will handle a good-faith report as confidentially as reasonably possible, consistent with a fair investigation, legal obligations and the rights of persons involved. Retaliation against a person who raises a genuine concern, seeks guidance, preserves evidence or assists an investigation is prohibited. A deliberately false or malicious allegation, evidence fabrication or obstruction may itself result in action.",
  },
  {
    id: "investigation",
    num: "12",
    title: "Investigation and Consequences",
    icon: <Gavel size={20} />,
    summary:
      "Concerns will be assessed objectively and may be investigated internally or with professional advisers. Persons involved are expected to cooperate and preserve relevant evidence. Findings may lead to corrective action, training, control improvement, disciplinary action, termination of employment or contract, recovery of loss, insurer or regulatory notification, or referral to law-enforcement. Action will be proportionate to the evidence and applicable law.",
  },
  {
    id: "guidance-external",
    num: "13",
    title: "Guidance and External Rights",
    icon: <ExternalLink size={20} />,
    summary:
      "A person who is uncertain about an ethical issue should seek guidance before acting. This Policy does not prevent any person from approaching IRDAI, a lawful authority, ombudsman, court, tribunal or law-enforcement agency or from exercising a protected legal right. It does not create a contractual guarantee of any particular outcome or override applicable law or employment terms.",
  },
  {
    id: "policy-review",
    num: "14",
    title: "Policy Review",
    icon: <RefreshCw size={20} />,
    summary:
      "Vestigo may revise this Policy to reflect legal, regulatory, governance or operational changes. The current website version will state its effective or last-updated date.",
  },
];

export default function CodeOfEthicsPage() {
  const [activeTab, setActiveTab] = useState("purpose");
  const [copied, setCopied] = useState(false);
  const indexContainerRef = useRef(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(corporateDetails.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTab(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0,
      },
    );

    ethicsClauses.forEach((clause) => {
      const element = document.getElementById(clause.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const activeLink = document.getElementById(`nav-${activeTab}`);
    const container = indexContainerRef.current;

    if (activeLink && container) {
      const offsetTop = activeLink.offsetTop;
      container.scrollTo({
        top: offsetTop - 40,
        behavior: "smooth",
      });
    }
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-900 selection:bg-blue-500 selection:text-white">
      {/* ================= 1. HERO SECTION ================= */}
      <section className="relative bg-[#020617] text-white pt-12 pb-20 lg:pt-16 lg:pb-28 overflow-hidden">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        {/* Glow Spheres */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5"
            >
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 shadow-2xl">
                <Image
                  src="/policy/code-of-ethics.jpeg"
                  alt="AML Policy"
                  width={700}
                  height={700}
                  priority
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>

            {/* HERO TEXT */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-6 backdrop-blur-md">
                <Sparkles size={14} className="animate-pulse" />
                Integrity & Client Care | Effective:{" "}
                {corporateDetails.effectiveDate}
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight mb-6">
                Code of Ethics & <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300">
                  Speak-Up Policy
                </span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl font-normal">
                Standards of integrity, client care and responsible conduct for{" "}
                <strong className="text-white font-semibold">
                  {corporateDetails.companyName}
                </strong>
              </p>

              {/* STATS / LICENSE BADGES */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-4 flex items-center gap-3.5">
                  <div className="p-2.5 rounded-xl bg-blue-500/20 text-blue-400">
                    <ShieldCheck size={22} />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 font-medium block uppercase tracking-wider">
                      IRDAI Registration
                    </span>
                    <span className="text-sm font-bold text-white">
                      No. {corporateDetails.irdaiRegNo} (
                      {corporateDetails.category})
                    </span>
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-4 flex items-center gap-3.5">
                  <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400">
                    <Clock size={22} />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 font-medium block uppercase tracking-wider">
                      Registration Validity
                    </span>
                    <span className="text-sm font-bold text-white">
                      {corporateDetails.validity}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= 2. CORPORATE IDENTIFICATION BANNER ================= */}
      <section className="relative z-20 -mt-8 px-6 max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200/90 shadow-xl grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl shrink-0">
              <Building2 size={24} />
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                Corporate Identity
              </p>
              <p className="text-sm font-bold text-slate-800 mt-0.5">
                CIN: {corporateDetails.cin}
              </p>
              <p className="text-xs text-slate-500">
                {corporateDetails.companyName}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl shrink-0">
              <MapPin size={24} />
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                Registered Office
              </p>
              <p className="text-xs font-semibold text-slate-700 mt-0.5 leading-snug">
                {corporateDetails.address}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl shrink-0">
              <Mail size={24} />
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                Ethics & Speak-Up Desk
              </p>
              <p className="text-sm font-bold text-blue-600 mt-0.5">
                {corporateDetails.email}
              </p>
              <p className="text-xs text-slate-500">
                {corporateDetails.website}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 3. MAIN CONTENT LAYOUT (STICKY NAV + CLAUSES) ================= */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* LEFT: STICKY NAVIGATION INDEX */}
          <aside className="hidden lg:block lg:col-span-4 sticky top-8 space-y-4">
            <div className="bg-white border border-slate-200/90 rounded-3xl p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-4 px-2 text-slate-800 font-bold text-sm">
                <FileText size={18} className="text-blue-600" />
                Ethics Index (Clauses 01–14)
              </div>
              <div className="space-y-1 max-h-[70vh] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-slate-200">
                {ethicsClauses.map((clause) => (
                  <a
                    key={clause.id}
                    href={`#${clause.id}`}
                    onClick={() => setActiveTab(clause.id)}
                    className={`flex items-center justify-between text-xs font-medium px-3.5 py-2.5 rounded-xl transition-all ${
                      activeTab === clause.id
                        ? "bg-blue-600 text-white font-semibold shadow-md shadow-blue-500/20"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                    }`}
                  >
                    <span className="truncate pr-2">
                      <strong className="mr-2 opacity-80">{clause.num}.</strong>
                      {clause.title}
                    </span>
                    <ChevronRight size={14} className="shrink-0 opacity-60" />
                  </a>
                ))}
              </div>
            </div>
          </aside>

          {/* RIGHT: CLAUSES CONTENT CONTAINER */}
          <main className="lg:col-span-8 space-y-8">
            {ethicsClauses.map((clause, index) => {
              const isEven = index % 2 === 1;

              return (
                <motion.div
                  key={clause.id}
                  id={clause.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4 }}
                  className={`scroll-mt-8 p-6 sm:p-8 rounded-[28px] transition-all ${
                    isEven
                      ? "bg-gradient-to-br from-blue-50/60 via-indigo-50/20 to-white border border-blue-200/80 shadow-md"
                      : "bg-white border border-slate-200/90 shadow-sm"
                  }`}
                >
                  {/* CARD HEADER */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 ${
                        isEven
                          ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                          : "bg-blue-50 text-blue-600 border border-blue-100"
                      }`}
                    >
                      {clause.icon}
                    </div>

                    <span
                      className={`text-[11px] font-black uppercase tracking-widest px-3 py-1 rounded-full border ${
                        isEven
                          ? "bg-blue-100 text-blue-800 border-blue-200"
                          : "bg-slate-100 text-slate-500 border-slate-200"
                      }`}
                    >
                      Clause {clause.num}
                    </span>
                  </div>

                  {/* TITLE */}
                  <h3
                    className={`text-xl font-black mb-3 tracking-tight ${
                      isEven ? "text-[#031154]" : "text-slate-900"
                    }`}
                  >
                    {clause.num}. {clause.title}
                  </h3>

                  {/* SUMMARY */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-4 text-left sm:text-justify">
                    {clause.summary}
                  </p>

                  {/* BULLET POINTS IF AVAILABLE */}
                  {clause.points && (
                    <div className="mt-5 pt-4 border-t border-slate-200/60">
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                        Key Policy Pillars:
                      </p>
                      <div className="grid grid-cols-1 gap-2.5">
                        {clause.points.map((pt, i) => (
                          <div
                            key={i}
                            className={`flex items-start gap-3 p-3 rounded-xl text-xs font-medium border ${
                              isEven
                                ? "bg-white/90 border-blue-100 text-slate-800"
                                : "bg-slate-50 border-slate-100 text-slate-700"
                            }`}
                          >
                            <div
                              className={`w-1.5 h-1.5 rounded-full shrink-0 mt-1.5 ${
                                isEven ? "bg-blue-600" : "bg-blue-500"
                              }`}
                            />
                            <span className="leading-relaxed">{pt}</span>
                          </div>
                        ))}
                        {clause.desc && (
                          <div className="mt-5 rounded-xl border border-blue-200 bg-blue-50 p-4">
                            <p className="text-sm text-slate-700 leading-relaxed text-justify">
                              {clause.desc}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </main>
        </div>
      </section>

      {/* ================= 4. CONFIDENTIAL SPEAK-UP BANNER ================= */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-br from-slate-900 via-[#031154] to-slate-900 rounded-[36px] p-8 md:p-14 text-white shadow-2xl flex flex-col lg:flex-row justify-between items-center gap-10">
            <div className="space-y-4 max-w-2xl">
              <h3 className="text-2xl sm:text-4xl font-black leading-tight">
                Report an Ethical Concern
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                If you observe mis-selling, bribery, document falsification,
                conflict of interest, or unethical conduct, report it
                confidentially to our designated ethics team.
              </p>

              <div className="space-y-2 text-xs text-blue-200/80 border-l-2 border-blue-500/50 pl-4 pt-2">
                <p>
                  • Include{" "}
                  <strong>&quot;Confidential Ethics Concern&quot;</strong> in
                  the email subject line.
                </p>
                <p>
                  • State facts, dates, individuals involved, and attach
                  available documentation.
                </p>
                <p>
                  • Protected against retaliation under our zero-tolerance
                  Speak-Up Policy.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3.5 w-full sm:w-auto shrink-0">
              <a
                href={`mailto:${corporateDetails.email}?subject=Confidential%20Ethics%20Concern`}
                className="flex items-center gap-4 bg-white text-slate-900 p-4 sm:p-5 rounded-2xl font-bold shadow-lg hover:bg-slate-100 transition-all"
              >
                <Mail className="text-blue-600" size={24} />
                <div>
                  <span className="block text-[10px] uppercase text-slate-400 font-black tracking-wider">
                    Ethics Officer Email
                  </span>
                  <span className="text-sm sm:text-base text-[#031154]">
                    {corporateDetails.email}
                  </span>
                </div>
              </a>

              <Link href="/contact" className="w-full">
                <button className="w-full bg-blue-600 hover:bg-blue-500 text-white py-4 px-6 rounded-2xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors">
                  Contact Compliance Desk <ArrowRight size={16} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 5. STATUTORY FOOTER ================= */}
      <footer className="py-8 bg-slate-100 text-center border-t border-slate-200 px-6">
        <p className="text-slate-500 text-[11px] font-bold uppercase tracking-widest max-w-4xl mx-auto leading-relaxed">
          Insurance is a subject matter of solicitation |{" "}
          {corporateDetails.companyName} | IRDAI Regn. No:{" "}
          {corporateDetails.irdaiRegNo} ({corporateDetails.category}) | CIN:{" "}
          {corporateDetails.cin}
        </p>
      </footer>
    </div>
  );
}
