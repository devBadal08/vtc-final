"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShieldAlert,
  Search,
  Mail,
  Scale,
  FileCheck,
  Fingerprint,
  Eye,
  AlertTriangle,
  Gavel,
  ShieldCheck,
  ChevronRight,
  Sparkles,
  Building2,
  MapPin,
  Clock,
  UserCheck,
  Globe,
  Lock,
  Database,
  FileText,
  AlertOctagon,
  RefreshCw,
  Copy,
  Check,
  ArrowRight,
  Shield,
  Layers,
  Ban,
  PhoneCall,
} from "lucide-react";
import Image from "next/image";

// ==========================================
// CORPORATE DETAILS & 16 POLICY CLAUSES
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

const amlClauses = [
  {
    id: "purpose",
    num: "01",
    title: "Purpose and Zero-Tolerance Commitment",
    icon: <ShieldCheck size={20} />,
    summary:
      "Vestigo is committed to preventing its services, personnel, systems and relationships from being used for money laundering, terrorist financing, proliferation financing, sanctions evasion, premium diversion, insurance fraud, bribery or other financial crime. Vestigo will not knowingly facilitate unlawful funds, fictitious insurance, false claims, identity misuse or concealment of beneficial ownership.",
  },
  {
    id: "framework",
    num: "02",
    title: "Legal and Regulatory Framework",
    icon: <Scale size={20} />,
    summary:
      "This Policy is informed by applicable Indian law and regulatory requirements, including the Prevention of Money-laundering Act, 2002 and rules made under it, the Unlawful Activities (Prevention) Act, 1967, applicable sanctions and counter-proliferation requirements, IRDAI anti-money laundering and counter-terrorist financing guidelines and amendments, IRDAI’s insurance fraud monitoring framework, the Insurance Regulatory and Development Authority of India (Insurance Brokers) Regulations, 2018, and other binding directions as amended from time to time.",
  },
  {
    id: "role",
    num: "03",
    title: "Role of Vestigo and Insurers",
    icon: <Building2 size={20} />,
    summary: (
      <>
        Insurers are reporting entities for insurer-side obligations under the
        applicable AML/CFT framework and are responsible for their statutory
        customer-due-diligence, monitoring and reporting decisions. As a
        regulated insurance broker, Vestigo supports lawful KYC, identity,
        authority, beneficial-ownership, sanctions, source-of-funds and
        fraud-prevention processes; transmits relevant information to insurers;
        maintains required records; and complies with obligations that apply
        directly to Vestigo.
        <br />
        <br />
        Vestigo’s controls do not replace an insurer’s underwriting, KYC,
        transaction-monitoring, suspicious-transaction reporting or
        claim-investigation responsibilities. Vestigo will cooperate with the
        insurer and competent authorities and may apply stricter controls where
        risk, contract or law requires.
      </>
    ),
  },
  {
    id: "risk-approach",
    num: "04",
    title: "Risk-Based Approach",
    icon: <Eye size={20} />,
    summary:
      "Vestigo applies a proportionate and risk-based approach considering customer, beneficial owner, business activity, insurance product, premium, payment method, geography, distribution channel, ownership structure, transaction pattern, claim circumstances, and sanctions exposure. Higher-risk cases require enhanced information, senior review, or refusal of the relationship.",
  },
  {
    id: "kyc-beneficial-ownership",
    num: "05",
    title: "Customer Identification, Authority and Beneficial Ownership",
    icon: <Fingerprint size={20} />,
    summary:
      "Before or during an insurance transaction, Vestigo may obtain and verify information necessary to establish:",
    points: [
      "The identity and address of the proposer, policyholder, insured, payer, claimant or authorised representative.",
      "The legal existence, registration, ownership and control of an organisation.",
      "The authority of a person acting on behalf of another person or entity.",
      "The natural person or persons who ultimately own or control an entity or arrangement, where applicable.",
      "The purpose and expected nature of the insurance relationship.",
      "The legitimacy and consistency of premium, refund, claim and banking information.",
      "Any additional information requested by the insurer or required by law.",
    ],
    desc: "Vestigo will not knowingly proceed on the basis of an anonymous, fictitious, materially misleading or unauthorised identity. Documents and information must be genuine, current and complete. Material changes in ownership, control, authority, address, business or risk must be disclosed promptly.",
  },
  {
    id: "sanctions-pep",
    num: "06",
    title: "Sanctions, Politically Exposed Persons and High-Risk Relationships",
    icon: <Globe size={20} />,
    summary:
      "Where required by law, insurer requirements or risk assessment, Vestigo may screen persons, entities, beneficial owners, vessels, locations, countries or transactions against applicable sanctions, terrorist-designation, adverse-information or politically exposed person sources. A match or heightened risk does not automatically establish wrongdoing, but may require verification, enhanced due diligence, insurer referral, senior approval, delay, restriction or refusal.",
  },
  {
    id: "payment-integrity",
    num: "07",
    title: "Premium, Refund and Claim Payment Integrity",
    icon: <Lock size={20} />,
    summary: (
      <>
        Premiums should be paid only through lawful and authorised channels in
        accordance with insurer instructions. No client should transfer premium,
        refund, claim proceeds or other insurance money to a personal account of
        a director, employee, representative or third party unless the insurer
        has lawfully authorised the arrangement in writing and it is permitted
        by regulation.
        <br />
        <br />
        Vestigo may seek clarification or documents concerning third-party
        payments, cash, multiple instruments, unusual refunds, changes in
        beneficiary or bank account, overpayment, rapid cancellation,
        premium-source inconsistency or payment from an unrelated person. Refund
        and claim proceeds should ordinarily be directed to the legitimate
        policyholder, insured, claimant or other person entitled under the
        policy and law.
      </>
    ),
  },
  {
    id: "red-flags",
    num: "08",
    title: "Red Flags",
    icon: <AlertTriangle size={20} />,
    summary: "Examples that may require additional review include:",
    points: [
      "Inconsistent, forged, altered, incomplete or unverifiable identity, KYC, financial, medical, policy or claim documents.",
      "Unexplained use of nominees, intermediaries, shell entities, complex ownership or unrelated third-party payers.",
      "Reluctance to disclose the beneficial owner, source of funds, business purpose or authority.",
      "Premium or coverage that appears materially inconsistent with the customer’s known business, income, assets or risk.",
      "Frequent purchase and cancellation, unusual overpayment, refund requests to a different account or rapid movement of funds.",
      "Sanctions, terrorist-financing, proliferation-financing or high-risk jurisdiction concerns.",
      "Collusion, staged loss, inflated invoice, duplicate claim, false hospitalization, fabricated asset or employee, identity theft or impersonation.",
      "Premium diversion, fake policy, unauthorised collection, phishing, account substitution or manipulation of bank details.",
      "Pressure to omit information, bypass insurer controls, backdate records, split transactions or avoid documentation.",
      "Conduct, transaction or claim circumstances that have no reasonable economic, insurance or lawful purpose.",
    ],
    desc: "Red flags are indicators requiring assessment and do not by themselves establish guilt.",
  },
  {
    id: "escalation-reporting",
    num: "09",
    title: "Internal Escalation, Reporting and No Tipping-Off",
    icon: <AlertOctagon size={20} />,
    summary: (
      <>
        Personnel must promptly and confidentially escalate suspicious activity,
        document irregularity, sanctions concern, premium diversion or fraud
        through Vestigo’s designated internal channel. They must not warn a
        person that a matter is under review, that a report may be made, or that
        an authority or insurer is investigating, where doing so is prohibited
        or could prejudice the process.
        <br />
        <br />
        Vestigo may share information with the relevant insurer, reinsurer,
        bank, service provider, IRDAI, FIU-IND, police, CERT-In, court or other
        competent authority where required or permitted. Where a statutory
        report is directly required from Vestigo, it will be made through the
        prescribed channel. Insurer-side suspicious-transaction reporting
        remains the insurer’s responsibility where the insurer is the reporting
        entity.
      </>
    ),
  },
  {
    id: "anti-fraud-controls",
    num: "10",
    title: "Anti-Fraud Controls",
    icon: <ShieldAlert size={20} />,
    summary:
      "Vestigo maintains a zero-tolerance approach to proposal, policy, premium, claims, procurement, accounting, employee, intermediary, cyber and identity fraud. Controls may include document verification, maker-checker review, segregation of duties, approved payment channels, bank-detail verification, access controls, audit trails, exception review, training, conflict disclosure, vendor due diligence, incident investigation and cooperation with insurers and authorities.",
  },
  {
    id: "refusal-restriction",
    num: "11",
    title: "Refusal, Restriction or Termination",
    icon: <Ban size={20} />,
    summary:
      "Vestigo may decline, pause, restrict or terminate an enquiry, transaction or relationship where information is not provided, identity or authority cannot be established, a sanctions or legal prohibition applies, the purpose appears unlawful, the risk is outside Vestigo’s acceptance or capability, or continuing would expose Vestigo, a client, insurer or stakeholder to unacceptable legal, regulatory, ethical or reputational risk. Vestigo may be unable to disclose detailed reasons where confidentiality, reporting or law-enforcement requirements apply.",
  },
  {
    id: "record-keeping",
    num: "12",
    title: "Record Keeping and Confidentiality",
    icon: <Database size={20} />,
    summary:
      "KYC, due-diligence, instruction, transaction, communication, policy, claim, red-flag and investigation records will be maintained securely for at least the period applicable to insurance brokers and for any longer period required by AML/CFT law, insurer arrangement, litigation, investigation or regulatory direction. Access is limited to authorised persons. Financial-crime information is confidential and must not be disclosed except for an authorised or legally permitted purpose.",
  },
  {
    id: "training-monitoring",
    num: "13",
    title: "Training, Monitoring and Review",
    icon: <UserCheck size={20} />,
    summary:
      "Relevant personnel will receive risk-appropriate training on KYC, beneficial ownership, sanctions, red flags, premium integrity, claims fraud, cyber-enabled fraud, escalation and confidentiality. Vestigo may monitor compliance through reviews, audit, exception analysis and management reporting and will improve controls based on law, regulation, incidents and emerging risk.",
  },
  {
    id: "client-responsibilities",
    num: "14",
    title: "Cooperation and Client Responsibilities",
    icon: <Layers size={20} />,
    summary:
      "Clients and representatives must provide accurate, complete and timely information; disclose the true proposer, insured, beneficial owner, payer and beneficiary; use authorised payment channels; and promptly report suspected fraud, phishing, fake policies or premium diversion. Vestigo will cooperate with insurers and lawful authorities, while respecting applicable privacy, confidentiality and procedural rights.",
  },
  {
    id: "reporting-concern",
    num: "15",
    title: "Reporting a Concern",
    icon: <Mail size={20} />,
    summary:
      "A suspected AML/CFT, sanctions, premium-diversion or insurance-fraud concern may be reported to enquiry@vestigoinsurance.com with the subject “Confidential AML/Fraud Concern”. The report should provide factual details and available documents. Immediate threats or criminal activity may also be reported to the appropriate law-enforcement or emergency authority. Reports made in good faith will be handled in accordance with the Code of Ethics and Speak-Up Policy.",
  },
  {
    id: "policy-review",
    num: "16",
    title: "Policy Review",
    icon: <RefreshCw size={20} />,
    summary:
      "This Policy may be amended to reflect changes in law, IRDAI or Government directions, insurer requirements, fraud typologies, sanctions or Vestigo’s operations. The current website version will state its effective or last-updated date.",
  },
];

export default function AMLPolicyPage() {
  const [activeTab, setActiveTab] = useState("purpose");
  const [copied, setCopied] = useState(false);
  const indexContainerRef = useRef(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(corporateDetails.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // ==========================================
  // SCROLL SPY INTERSECTION OBSERVER
  // ==========================================
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -55% 0px",
      threshold: 0,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions,
    );

    amlClauses.forEach((clause) => {
      const element = document.getElementById(clause.id);
      if (element) observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
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
      <section className="relative bg-[#070E27] text-white pt-12 pb-20 lg:pt-16 lg:pb-28 overflow-hidden">
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        {/* Glow Effects */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[140px] pointer-events-none" />
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
                  src="/policy/p3-hero.jpeg"
                  alt="AML Policy"
                  width={700}
                  height={700}
                  priority
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-6 backdrop-blur-md">
                <Sparkles size={14} className="animate-pulse" />
                AML / CTF Policy | Effective: {corporateDetails.effectiveDate}
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight mb-6">
                AML, CTF & <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300">
                  Anti-Fraud Policy
                </span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
                Official public statement of financial crime prevention
                commitments by{" "}
                <strong className="text-white">
                  {corporateDetails.companyName}
                </strong>{" "}
                in accordance with AML, CTF and Anti-Fraud regulatory
                requirements.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-4 flex items-center gap-3.5">
                  <div className="p-2.5 rounded-xl bg-blue-500/20 text-blue-400">
                    <ShieldCheck size={22} />
                  </div>

                  <div>
                    <span className="text-[11px] text-slate-400 uppercase tracking-wider block">
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
                    <span className="text-[11px] text-slate-400 uppercase tracking-wider block">
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
                Corporate Office
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
                AML & Fraud Reporting Desk
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
                Policy Index (Clauses 01–16)
              </div>
              <div
                ref={indexContainerRef}
                className="space-y-1 max-h-[70vh] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-slate-200"
              >
                {amlClauses.map((clause) => (
                  <a
                    key={clause.id}
                    id={`nav-${clause.id}`}
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
            {amlClauses.map((clause, index) => {
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
                  <div className="text-slate-600 text-sm leading-relaxed mb-4">
                    {clause.summary}
                  </div>

                  {/* BULLET POINTS IF AVAILABLE */}
                  {clause.points && (
                    <div className="mt-5 pt-4 border-t border-slate-200/60">
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                        Key Framework Provisions:
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
                      </div>
                    </div>
                  )}
                  {clause.desc && (
                    <div className="mt-5 rounded-xl border border-blue-200 bg-blue-50 p-4">
                      <p className="text-sm text-slate-700 leading-relaxed text-justify">
                        {clause.desc}
                      </p>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </main>
        </div>
      </section>

      {/* ================= 4. CONFIDENTIAL AML & FRAUD REPORTING BANNER ================= */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-br from-slate-900 via-[#031154] to-slate-900 rounded-[36px] p-8 md:p-14 text-white shadow-2xl flex flex-col lg:flex-row justify-between items-center gap-10">
            <div className="space-y-4 max-w-2xl">
              <h3 className="text-2xl sm:text-4xl font-black leading-tight">
                Report a Concern or Suspicious Activity
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                If you suspect money laundering, premium diversion, identity
                misuse, fake policy issuance, or insurance fraud, report it
                immediately to our compliance desk.
              </p>

              <div className="space-y-2 text-xs text-blue-200/80 border-l-2 border-blue-500/50 pl-4 pt-2">
                <p>
                  • Include{" "}
                  <strong>&quot;Confidential AML/Fraud Concern&quot;</strong> in
                  the email subject line.
                </p>
                <p>
                  • Provide factual details and attached documents to assist
                  investigation.
                </p>
                <p>
                  • Reports made in good faith are handled strictly under our
                  Code of Ethics.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3.5 w-full sm:w-auto shrink-0">
              <a
                href={`mailto:${corporateDetails.email}?subject=Confidential%20AML/Fraud%20Concern`}
                className="flex items-center gap-4 bg-white text-slate-900 p-4 sm:p-5 rounded-2xl font-bold shadow-lg hover:bg-slate-100 transition-all"
              >
                <Mail className="text-blue-600" size={24} />
                <div>
                  <span className="block text-[10px] uppercase text-slate-400 font-black tracking-wider">
                    Reporting Desk Email
                  </span>
                  <span className="text-sm sm:text-base text-[#031154]">
                    {corporateDetails.email}
                  </span>
                </div>
              </a>

              <Link href="/contact" className="w-full">
                <button className="w-full bg-blue-600 hover:bg-blue-500 text-white py-4 px-6 rounded-2xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors">
                  Contact Compliance Officer <ArrowRight size={16} />
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
