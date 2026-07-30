"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Lock,
  Globe,
  FileCheck,
  Users,
  Database,
  Key,
  Cpu,
  Terminal,
  Activity,
  Server,
  Building2,
  UserCheck,
  ShieldAlert,
  Clock,
  Scale,
  Mail,
  RefreshCw,
  MapPin,
  ArrowRight,
  Sparkles,
  ChevronRight,
  CheckCircle2,
  AlertTriangle,
  FileText,
  Copy,
  Check,
} from "lucide-react";
import Image from "next/image";

// ==========================================
// CORPORATE DETAILS & 18 ISMS POLICY CLAUSES
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

const ismsClauses = [
  {
    id: "purpose",
    num: "01",
    title: "Purpose",
    icon: <ShieldCheck size={22} className="text-blue-500" />,
    summary:
      "Information is central to insurance advisory, policy placement, servicing and claims. Vestigo is committed to protecting the confidentiality, integrity, availability and lawful use of information entrusted to it. This Information Security Management System (ISMS) Policy establishes the principles by which Vestigo manages information-security and cyber risks across people, processes, premises, technology and third parties.",
  },
  {
    id: "scope",
    num: "02",
    title: "Scope",
    icon: <Globe size={22} className="text-white" />,
    summary:
      "This Policy applies to information in any form, including electronic records, emails, communications, documents, paper files, images, audio, credentials, system logs and backups. It applies to directors, employees, trainees, consultants, business partners, vendors and other persons who access Vestigo information or systems, to the extent relevant to their role or contract.",
  },
  {
    id: "policy objectives",
    num: "03",
    title: "Policy Objectives",
    icon: <FileCheck size={22} className="text-blue-500" />,
    summary: "Vestigo's information-security objectives are to:",
    points: [
      "Protect client, insurer, employee and regulatory information.",
      "Maintain resilient systems.",
      "Manage cyber and technology risk.",
      "Meet IRDAI and legal requirements.",
      "Respond to security incidents.",
      "Ensure third parties maintain safeguards.",
      "Promote a culture of information security.",
    ],
  },
  {
    id: "governance",
    num: "04",
    title: "Governance & Accountability",
    icon: <Users size={22} className="text-white" />,
    summary: (
      <>
        Management is responsible for establishing oversight, assigning security
        responsibilities, providing reasonable resources, approving policies and
        monitoring material information-security risks. Business and technology
        owners are accountable for risks within their functions. Every
        authorised user is responsible for complying with security requirements,
        protecting credentials and promptly reporting suspected incidents.
        <br />
        Security policies, risk assessments and material controls will be
        reviewed periodically and following significant legal, regulatory,
        technological, operational or threat changes. Independent review,
        internal audit or external assessment may be undertaken where
        appropriate.
      </>
    ),
  },
  {
    id: "core security",
    num: "05",
    title: "Core Security Principles",
    icon: <Lock size={22} className="text-blue-500" />,
    summary: "",
    points: [
      "Confidentiality: information is accessible only to authorised persons for approved purposes.",
      "Integrity: information is protected against unauthorised or accidental alteration and remains accurate and traceable.",
      "Availability: systems and information required for critical operations are reasonably available and recoverable.",
      "Privacy by design: personal data considerations are integrated into new processes, technology and vendor arrangements.",
      "Least privilege and need-to-know: access is limited to what a user reasonably requires for authorised duties",
      "Defence in depth: multiple preventive, detective, responsive and recovery measures are used rather than reliance on a single control",
      "Continuous improvement: controls are reviewed and improved based on risk, incidents, testing, audit and evolving threats.",
    ],
  },
  {
    id: "information classification",
    num: "06",
    title: "Information Classification and Handling",
    icon: <Database size={22} className="text-white" />,
    summary:
      "Vestigo classifies and handles information according to its sensitivity, business value and legal or contractual requirements. Confidential, personal, medical, financial, claims, KYC, credential and regulatory information is subject to enhanced access, transfer, storage, retention and disposal controls. Information must not be copied, transmitted, downloaded, printed or disclosed except for an authorised business purpose and through approved means.",
  },
  {
    id: "access control",
    num: "07",
    title: "Access Control & Identity Security",
    icon: <Key size={22} className="text-blue-500" />,
    summary:
      "Access to systems and information is authorised according to role, approved business need and the principle of least privilege. Vestigo may use unique user identities, strong passwords, multi-factor authentication where appropriate, periodic access review, prompt removal or modification of access following role changes, and controls over privileged accounts. Users must not share passwords, authentication codes or credentials.",
  },
  {
    id: "technology, network and endpoint security",
    num: "08",
    title: "Technology, Network and Endpoint Security",
    icon: <Cpu size={22} className="text-white" />,
    summary:
      "Vestigo applies risk-appropriate controls to networks, devices, applications and infrastructure. These may include secure configuration, anti-malware, firewalls, endpoint protection, patching, vulnerability management, email security, encryption, secure remote access, backup, monitoring and restrictions on removable media or unauthorised software. Technology changes and new information-processing facilities are subject to appropriate review and approval.",
  },
  {
    id: "secure development",
    num: "09",
    title: "Secure Development and Change Management",
    icon: <Terminal size={22} className="text-blue-500" />,
    summary:
      "Where Vestigo develops, configures or procures applications, websites, integrations or automation, security and privacy requirements are considered during design, testing, implementation and change. Material changes are authorised, tested and documented commensurate with risk. Production data should not be used in testing unless appropriately protected and authorised.",
  },
  {
    id: "logging and monitoring",
    num: "10",
    title: "Logging, Monitoring and Threat Detection",
    icon: <Activity size={22} className="text-white" />,
    summary:
      "Vestigo maintains logs and monitoring appropriate to its systems, risk profile and applicable legal requirements. Security events may be reviewed to detect unauthorised activity, malware, data leakage, account compromise, fraud or operational failure. Logs are protected against unauthorised alteration and retained for the period required by applicable law, regulatory direction, investigation or business need.",
  },
  {
    id: "third-party",
    num: "11",
    title: "Third-Party and Cloud Security",
    icon: <Server size={22} className="text-blue-500" />,
    summary:
      "Before allowing a vendor or service provider to process or access material information, Vestigo considers the nature of the service, data sensitivity, security capability, location, subcontracting, incident management, continuity, confidentiality, audit and exit requirements. Contracts will contain appropriate information-security, privacy, confidentiality and cooperation obligations. Vestigo remains accountable for its regulatory obligations and does not treat outsourcing as a transfer of responsibility.",
  },
  {
    id: "physical and paper security",
    num: "12",
    title: "Physical and Paper Security",
    icon: <Building2 size={22} className="text-white" />,
    summary:
      "Vestigo applies reasonable physical safeguards to premises, work areas, records, equipment and visitor access. Confidential papers and media must be stored securely and disposed of through approved destruction methods. Unattended screens, portable devices and documents must be protected against unauthorised viewing, theft or loss.",
  },
  {
    id: "personnel security",
    num: "13",
    title: "Personnel Security, Awareness and Confidentiality",
    icon: <UserCheck size={22} className="text-blue-500" />,
    summary:
      "Personnel and relevant third parties are subject to role-appropriate screening, confidentiality obligations, acceptable-use requirements and security awareness. Training may cover phishing, social engineering, credential protection, safe handling of personal and claims information, remote working, incident reporting, fraud and regulatory responsibilities. Breach of security obligations may result in access restriction, disciplinary action, contractual remedies or reporting to authorities, as applicable.",
  },
  {
    id: "incident management",
    num: "14",
    title: "Incident Management and Regulatory Reporting",
    icon: <ShieldAlert size={22} className="text-white" />,
    summary: (
      <>
        All suspected cyber incidents, data breaches, malware, phishing, lost
        devices, unauthorised disclosure, credential compromise, fraud or
        security weaknesses must be reported immediately through approved
        channels. Vestigo will triage, contain, preserve evidence, investigate,
        remediate and document incidents and will cooperate with insurers,
        clients, service providers, law-enforcement and regulators as required.
        <br />
        Where applicable, Vestigo will make notifications or reports to CERT-In,
        IRDAI, the Data Protection Board of India, affected clients or
        individuals, and other competent authorities within legally prescribed
        timeframes. No employee or third party may conceal an incident, make an
        unauthorised public statement, or destroy relevant evidence.
      </>
    ),
  },
  {
    id: "business continuity",
    num: "15",
    title: "Business Continuity, Backup and Recovery",
    icon: <Clock size={22} className="text-blue-500" />,
    summary:
      "Vestigo maintains risk-appropriate business-continuity, backup and recovery arrangements for critical operations. Backups are protected and tested at reasonable intervals. Continuity and recovery plans may be exercised, reviewed and improved based on testing, incidents, technology changes and business dependency.",
  },
  {
    id: "compliance, review and enforcement",
    num: "16",
    title: "Compliance, Review and Enforcement",
    icon: <Scale size={22} className="text-white" />,
    summary:
      "Compliance with this Policy may be monitored through reviews, audits, testing, vulnerability assessment, incident analysis and management reporting. Exceptions must be documented, risk-assessed, time-bound and authorised. Violations may result in disciplinary, contractual, civil, regulatory or criminal consequences, depending on the circumstances.",
  },
  {
    id: "public security",
    num: "17",
    title: "Public Security Contact",
    icon: <Mail size={22} className="text-blue-500" />,
    summary:
      "A person who believes that Vestigo’s website, systems or information may be affected by a security weakness or incident should report it responsibly to enquiry@vestigoinsurance.com with the subject “Confidential Security Report”. The report should contain sufficient factual detail to permit investigation and should not involve unlawful access, disruption, exploitation, data extraction or public disclosure.",
  },
  {
    id: "policy status",
    num: "18",
    title: "Policy Status and Updates",
    icon: <RefreshCw size={22} className="text-white" />,
    summary:
      "This is a public statement of Vestigo’s information-security commitments. Detailed control configurations, network architecture and internal procedures are confidential and are not disclosed through this website. Publication of this Policy does not represent that Vestigo holds any particular external certification unless expressly stated elsewhere with current evidence. This Policy may be updated to reflect changes in risk, law, regulation, technology or business operations.",
  },
];

export default function ISMSPolicyPage() {
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

    ismsClauses.forEach((clause) => {
      const element = document.getElementById(clause.id);
      if (element) observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // ==========================================
  // FIXED: Smooth scroll active index item into sidebar view
  // ==========================================
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
      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-[#070E27] text-white pt-12 pb-20 lg:pt-16 lg:pb-28 overflow-hidden">
        {/* Animated Cyber Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        {/* Glow Spheres */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* HERO VISUAL CARD */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 shadow-2xl">
                <Image
                  src="/policy/p1-hero.jpeg"
                  alt="Information Security Management"
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
                ISMS Framework | Effective: {corporateDetails.effectiveDate}
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight mb-6">
                Information Security <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300">
                  Management System
                </span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl font-normal">
                Official statement of governance commitments by{" "}
                <strong className="text-white font-semibold">
                  {corporateDetails.companyName}
                </strong>{" "}
                to protect the Confidentiality, Integrity, and Availability of
                client and regulatory information assets.
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

      {/* ================= CORPORATE BANNER ================= */}
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
                Security Desk
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

      {/* ================= MAIN CONTENT LAYOUT (STICKY NAV + CLAUSES) ================= */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* LEFT: STICKY NAVIGATION */}
          <aside className="hidden lg:block lg:col-span-4 sticky top-8 space-y-4">
            <div className="bg-white border border-slate-200/90 rounded-3xl p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-4 px-2 text-slate-800 font-bold text-sm">
                <FileText size={18} className="text-blue-600" />
                ISMS Index (Clauses 01-18)
              </div>
              {/* અહીં "relative" ક્લાસ એડ કર્યો છે */}
              <div
                ref={indexContainerRef}
                className="relative space-y-1 max-h-[70vh] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-slate-200"
              >
                {ismsClauses.map((clause) => (
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

          {/* RIGHT: CLAUSES CONTAINER */}
          <main className="lg:col-span-8 space-y-8">
            {ismsClauses.map((clause, index) => {
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
                </motion.div>
              );
            })}
          </main>
        </div>
      </section>

      {/* ================= CLAUSE 17 SECURITY REPORTING BANNER ================= */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-br from-slate-900 via-[#031154] to-slate-900 rounded-[36px] p-8 md:p-14 text-white shadow-2xl flex flex-col lg:flex-row justify-between items-center gap-10">
            <div className="space-y-4 max-w-2xl">
              <h3 className="text-2xl sm:text-4xl font-black leading-tight">
                Responsible Security Reporting
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                If you have identified a potential security weakness, bug, or
                vulnerability within Vestigo’s infrastructure, please notify our
                IT Security Desk responsibly.
              </p>

              <div className="space-y-2 text-xs text-blue-200/80 border-l-2 border-blue-500/50 pl-4 pt-2">
                <p>
                  • Include{" "}
                  <strong>&quot;Confidential Security Report&quot;</strong> in
                  the subject line.
                </p>
                <p>
                  • Detail steps to reproduce the issue without altering or
                  accessing non-public data.
                </p>
                <p>• Our team acknowledges reports within 24–48 hours.</p>
              </div>
            </div>

            <div className="flex flex-col gap-3.5 w-full sm:w-auto shrink-0">
              <a
                href={`mailto:${corporateDetails.email}?subject=Confidential%20Security%20Report`}
                className="flex items-center gap-4 bg-white text-slate-900 p-4 sm:p-5 rounded-2xl font-bold shadow-lg hover:bg-slate-100 transition-all"
              >
                <Mail className="text-blue-600" size={24} />
                <div>
                  <span className="block text-[10px] uppercase text-slate-400 font-black tracking-wider">
                    Incident Email
                  </span>
                  <span className="text-sm sm:text-base text-[#031154]">
                    {corporateDetails.email}
                  </span>
                </div>
              </a>

              <Link href="/contact" className="w-full">
                <button className="w-full bg-blue-600 hover:bg-blue-500 text-white py-4 px-6 rounded-2xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors">
                  Contact Information Security Team <ArrowRight size={16} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATUTORY FOOTER ================= */}
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
