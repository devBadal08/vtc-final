"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FileText,
  ShieldCheck,
  Clock,
  Mail,
  Building2,
  MapPin,
  ChevronRight,
  Sparkles,
  Copy,
  Check,
  ArrowRight,
  Scale,
  Users,
  HelpCircle,
  FileSearch,
  MessageSquare,
  AlertCircle,
  ExternalLink,
  PhoneCall,
  UserCheck,
  RefreshCw,
  Shield,
  Layers,
  Send,
  Building,
} from "lucide-react";
import Image from "next/image";

// ==========================================
// CORPORATE DETAILS & 12 POLICY CLAUSES
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

const grievanceClauses = [
  {
    id: "commitment",
    num: "01",
    title: "Our Commitment",
    icon: <ShieldCheck size={20} />,
    summary:
      "Vestigo is committed to treating clients, policyholders, insured persons, claimants and other stakeholders fairly. We aim to listen carefully, investigate objectively, communicate clearly and resolve grievances within the timeline applicable to an insurance broker. Raising a grievance will not result in unfair treatment or retaliation.",
  },
  {
    id: "what-is-a-grievance",
    num: "02",
    title: "What is a Grievance?",
    icon: <HelpCircle size={20} />,
    summary:
      "A grievance is an expression of dissatisfaction concerning Vestigo’s insurance-broking service, conduct, advice, communication, data handling, policy servicing, premium facilitation, claim assistance or failure to perform an expected service, where a response or corrective action is sought. Routine inquiries for documents or updates are treated as standard service requests unless service failure is alleged.",
  },
  {
    id: "who-may-complain",
    num: "03",
    title: "Who May Complain",
    icon: <Users size={20} />,
    summary:
      "A grievance may be raised by a client, policyholder, insured person, claimant, nominee, beneficiary, authorised representative, corporate client or group policy administrator. Where a complaint is made on behalf of another person, Vestigo may request evidence of identity and authority to protect confidentiality.",
  },
  {
    id: "how-to-lodge",
    num: "04",
    title: "How to Lodge a Grievance",
    icon: <Send size={20} />,
    summary:
      "The email subject should preferably state “Grievance”. A complainant should provide, as applicable:",
    points: [
      "Full name and contact details.",
      "Policy, proposal, quotation, claim or reference number.",
      "Name of the insurer and corporate or group policyholder, if relevant.",
      "A clear description of the issue, relevant dates and persons involved.",
      "Supporting documents or communications.",
      "The resolution or corrective action requested.",
    ],
    desc: (
      <>
        Please write to:
        <br />
        Grievance Redressal Officer <br />
        Vestigo Insurance Brokers Pvt. Ltd. <br />
        SF 201, Status Complex, Opp. Amrapali Complex, Pani Tanki Road,
        Karelibaug, Vadodara - 390018, Gujarat, India
        <br />
        Email: enquiry@vestigoinsurance.com
        <br />A grievance may also be delivered physically at the registered and
        corporate office. No fee is charged for lodging or processing a
        grievance.
      </>
    ),
  },
  {
    id: "timeline",
    num: "05",
    title: "Acknowledgement & Resolution Timeline",
    icon: <Clock size={20} />,
    summary: (
      <>
        Vestigo aims to acknowledge a grievance promptly, ordinarily within two
        working days of receipt. The grievance will be recorded, assigned a
        reference and reviewed by personnel who are reasonably independent of
        the subject matter where practicable.
        <br />
        <br />
        Vestigo will endeavour to provide a reasoned final response and redress
        the grievance within fourteen calendar days of receipt, in accordance
        with the timeline applicable to insurance brokers. If information
        essential to the investigation is missing, we may request it promptly.
        Dependence on an insurer, surveyor, third-party administrator or another
        external party will be communicated transparently, but will not be used
        to close the grievance without an appropriate response on Vestigo’s role
        and the available next steps.
      </>
    ),
  },
  {
    id: "handling-procedure",
    num: "06",
    title: "How We Handle Grievances",
    icon: <FileSearch size={20} />,
    summary: "Vestigo will:",
    points: [
      "Review relevant records, communications, instructions and applicable policy or service documents.",
      "Provide the complainant a fair opportunity to explain the concern and submit supporting material",
      "Maintain confidentiality and restrict information to persons who need it for resolution, legal compliance or escalation",
      "Identify corrective, preventive, service, training or disciplinary action where appropriate",
      "Communicate the outcome, reasons and available escalation channels",
      "Maintain grievance records for monitoring, audit and regulatory purposes.",
    ],
  },
  {
    id: "insurer-matters",
    num: "07",
    title: "Matters Involving an Insurer or Other Service Provider",
    icon: <Building size={20} />,
    summary:
      "Vestigo is an insurance broker and does not underwrite risk, issue the insurance contract, determine underwriting acceptance, or independently decide insurer claim liability. Where the grievance concerns an insurer’s underwriting, policy issuance, claim decision, third-party administrator or other insurer-appointed service, Vestigo will provide reasonable assistance and coordination within its role. The complainant may also approach the concerned insurer’s Grievance Redressal Officer directly.",
  },
  {
    id: "internal-escalation",
    num: "08",
    title: "Internal Escalation",
    icon: <Layers size={20} />,
    summary:
      "If the complainant is dissatisfied with Vestigo’s response, a request for internal review may be sent to enquiry@vestigoinsurance.com with the subject “Escalation - Grievance Reference [number]”. The request should explain why the response is considered incomplete or unsatisfactory. The matter will be reviewed at an appropriate senior level, including the Principal Officer or a designated senior function where relevant.",
  },
  {
    id: "external-escalation",
    num: "09",
    title: "External Escalation Channels",
    icon: <ExternalLink size={20} />,
    summary:
      "Nothing in this Policy restricts a complainant’s statutory remedies. Depending on the nature of the grievance and eligibility, the following channels may be available:",
    points: [
      "IRDAI Bima Bharosa: a policyholder may register and track an insurance grievance through the Bima Bharosa portal at https://bimabharosa.irdai.gov.in",
      "IRDAI Grievance Call Centre: toll-free numbers 155255 or 1800 425 4732",
      "IRDAI email: complaints@irdai.gov.in",
      "IRDAI postal address: Consumer Affairs Department - Grievance Redressal Cell, Insurance Regulatory and Development Authority of India, Sy. No. 115/1, Financial District, Nanakramguda, Gachibowli, Hyderabad - 500032.",
      "Insurance Ombudsman: an eligible complainant may approach the appropriate Insurance Ombudsman under the Insurance Ombudsman Rules, 2017, as amended, after following the prescribed process. Information and online facilities are available at www.cioins.co.in.",
    ],
    desc: "The jurisdiction, monetary limits, limitation periods and eligibility rules of each external forum apply independently. Corporate entities should verify whether they fall within the class of complainants eligible for the Insurance Ombudsman.",
  },
  {
    id: "privacy-and-records",
    num: "10",
    title: "Privacy and Records",
    icon: <Shield size={20} />,
    summary:
      "Personal data submitted with a grievance will be used for investigation, response, compliance, audit, fraud prevention and legal purposes and will be handled in accordance with Vestigo’s Privacy Policy. Grievance information may be shared with an insurer, reinsurer, third-party administrator, surveyor, service provider, regulator, ombudsman, authority or adviser where reasonably necessary and legally permitted.",
  },
  {
    id: "abusive-communications",
    num: "11",
    title: "Abusive, Fraudulent or Repetitive Communications",
    icon: <AlertCircle size={20} />,
    summary:
      "Vestigo will engage respectfully with complainants and expects the same from all participants. We may channel communications through a designated point, restrict abusive contact, or close a repetitive complaint after giving a reasoned response where no new material is provided. This will not prevent reporting of genuine misconduct or exercise of legal rights. Threats, impersonation, forged material, extortion, unlawful access or violence may be reported to appropriate authorities.",
  },
  {
    id: "policy-review",
    num: "12",
    title: "Policy Review",
    icon: <RefreshCw size={20} />,
    summary:
      "This Policy may be updated to reflect changes in law, IRDAI requirements, escalation mechanisms or Vestigo’s operations. The version published on the website will state its effective or last-updated date.",
  },
];

export default function GrievancePolicyPage() {
  const [activeTab, setActiveTab] = useState("commitment");
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

    grievanceClauses.forEach((clause) => {
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
                  src="/policy/grievance.jpeg"
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
                Fairness & Transparency | Effective:{" "}
                {corporateDetails.effectiveDate}
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight mb-6">
                Grievance Redressal <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300">
                  Governance Framework
                </span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl font-normal">
                Official grievance redressal policy for{" "}
                <strong className="text-white font-semibold">
                  {corporateDetails.companyName}
                </strong>{" "}
                ensuring Fair, transparent and timely resolution of policyholder
                and client concerns.
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
                      15 January 2026 to 14 January 2029
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
                Grievance Cell Office
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
                Direct Grievance Desk
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
                Policy Index (Clauses 01–12)
              </div>
              <div className="space-y-1 max-h-[70vh] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-slate-200">
                {grievanceClauses.map((clause) => (
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
            {grievanceClauses.map((clause, index) => {
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
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {clause.summary}
                  </p>

                  {/* BULLET POINTS IF AVAILABLE */}
                  {clause.points && (
                    <div className="mt-5 pt-4 border-t border-slate-200/60">
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                        Key Framework Specifications:
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

      {/* ================= 5. DIRECT REDRESSAL DESK BANNER ================= */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-br from-slate-900 via-[#031154] to-slate-900 rounded-[36px] p-8 md:p-14 text-white shadow-2xl flex flex-col lg:flex-row justify-between items-center gap-10">
            <div className="space-y-4 max-w-2xl">
              <h3 className="text-2xl sm:text-4xl font-black leading-tight">
                Grievance Redressal Officer
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Contact our Grievance Redressal Officer for formal concerns
                regarding insurance advisory, servicing, or claims support.
              </p>

              <div className="space-y-2 text-xs text-blue-200/80 border-l-2 border-blue-500/50 pl-4 pt-2">
                <p>
                  • State <strong>&quot;Grievance&quot;</strong> in the email
                  subject line.
                </p>
                <p>• Include policy, proposal, or claim reference details.</p>
                <p>• Official responses are issued within 14 calendar days.</p>
              </div>
            </div>

            <div className="flex flex-col gap-3.5 w-full sm:w-auto shrink-0">
              <a
                href={`mailto:${corporateDetails.email}?subject=Grievance`}
                className="flex items-center gap-4 bg-white text-slate-900 p-4 sm:p-5 rounded-2xl font-bold shadow-lg hover:bg-slate-100 transition-all"
              >
                <Mail className="text-blue-600" size={24} />
                <div>
                  <span className="block text-[10px] uppercase text-slate-400 font-black tracking-wider">
                    Grievance Officer Email
                  </span>
                  <span className="text-sm sm:text-base text-[#031154]">
                    {corporateDetails.email}
                  </span>
                </div>
              </a>

              <Link href="/contact" className="w-full">
                <button className="w-full bg-blue-600 hover:bg-blue-500 text-white py-4 px-6 rounded-2xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors">
                  Contact Compliance Team <ArrowRight size={16} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 6. STATUTORY FOOTER ================= */}
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
