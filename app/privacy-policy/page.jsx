"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ShieldCheck,
  Lock,
  Sparkles,
  Mail,
  ArrowRight,
  CheckCircle2,
  Fingerprint,
  FileSearch,
  Users,
  Database,
  Clock,
  UserCheck,
  Scale,
  Cookie,
  Globe,
  MapPin,
  MessageSquareWarning,
  Building2,
  ExternalLink,
  ShieldAlert,
  Settings,
  AlertCircle,
  RefreshCw,
  FileText,
  ChevronRight,
  Copy,
  Check,
} from "lucide-react";

// ==========================================
// FULL 18-CLAUSE POLICY DATA
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

const policyCards = [
  {
    id: "about",
    num: "01",
    title: "About this Policy",
    icon: <FileText className="text-blue-500" size={22} />,
    content:
      "Vestigo respects privacy and is committed to processing personal data lawfully, fairly, transparently, and securely.",
    list: [
      "This Privacy Policy explains how we handle personal data when an individual visits our website, makes an enquiry, seeks or receives insurance broking or advisory services, participates in a corporate or group insurance programme, communicates with us, submits information for a quotation, policy, endorsement, renewal or claim, or otherwise interacts with Vestigo.",
      "This Policy is intended to operate in accordance with applicable Indian law, including the Information Technology Act, 2000 and the rules framed under it, applicable insurance laws and IRDAI requirements, and the Digital Personal Data Protection Act, 2023 and the Digital Personal Data Protection Rules, 2025 as and when their respective provisions become applicable.",
      "If a specific notice, consent form, proposal form, insurer document or contractual term provides additional information for a particular processing activity, that document will supplement this Policy.",
    ],
  },
  {
    id: "scope",
    num: "02",
    title: "Scope",
    icon: <Users className="text-white" size={22} />,
    content: "This Policy may apply to personal data relating to:",
    list: [
      "Website visitors, enquirers and prospective clients.",
      "Individual policyholders, insured persons, proposers, nominees, beneficiaries and claimants.",
      "Directors, partners, authorised representatives, employees and dependants connected with corporate or group clients.",
      "Business contacts, insurer, reinsurer, third-party administrator, surveyor, hospital, healthcare, legal, accounting, technology and service-provider personnel.",
      "Persons who visit our premises, attend meetings or events, or communicate with us through email, telephone, messaging platforms, online forms or social media",
      "Any other individual whose personal data is lawfully provided to Vestigo for an insurance-related or legitimate business purpose.",
    ],
  },
  {
    id: "data",
    num: "03",
    title: "Personal Data We May Collect",
    icon: <Fingerprint className="text-blue-500" size={22} />,
    content:
      "Depending on the service and context, Vestigo may collect the following categories of data. We seek to collect only data that is reasonably necessary for the relevant purpose. Health, financial and other sensitive information is handled with enhanced care and access restrictions.",
    list: [
      "Identity and contact data: name, age or date of birth, gender where relevant, photograph, signature, postal address, email address, telephone number and proof of identity or address.",
      "Business and professional data: designation, employer, organisation, ownership or beneficial ownership, authorised signatory status, business profile, industry, assets, operations, locations, contracts and risk information.",
      "Insurance and risk data: existing and proposed covers, policy details, sums insured, claims history, loss information, survey and inspection information, risk-management records and supporting documents.",
      "Health and medical data: medical history, reports, prescriptions, hospital records, disability or health information where required for life, health, accident, employee-benefit or claim-related services.",
      "Financial, KYC and transaction data: banking or payment information, PAN, tax or statutory identifiers, premium and refund information, financial statements, source-of-funds information and KYC or due-diligence documents where legally or operationally required.",
      "Family, nominee and beneficiary data: relationship, contact details and other information required for policy issuance, administration or claims.",
      "Communication and service data: emails, letters, call notes, meeting records, instructions, complaints, feedback and service history.",
      "Website and device data: IP address, browser and device information, operating system, access times, referring pages, website interactions, security logs and cookie or similar technology data.",
      "Premises and security data: visitor records and CCTV footage where security systems are lawfully deployed at our premises.",
    ],
  },
  {
    id: "collection",
    num: "04",
    title: "How We Collect Personal Data",
    icon: <FileSearch className="text-white" size={22} />,
    content: "We may obtain personal data:",
    list: [
      "Directly from the individual through forms, emails, calls, meetings, website submissions or documents.",
      "From an employer, group policyholder, authorised representative, family member, nominee, beneficiary or other person who is authorised to provide it.",
      "From insurers, reinsurers, third-party administrators, surveyors, loss assessors, hospitals, healthcare providers, garages, investigators, legal advisers and other participants in the insurance lifecycle.",
      "From lawful public sources, statutory databases, credit or identity-verification sources and business directories, where permitted.",
      "Automatically through website, network, security and cookie technologies.",
    ],
  },
  {
    id: "purpose",
    num: "05",
    title: "Purposes for Which We Use Personal Data",
    icon: <Settings className="text-blue-500" size={22} />,
    content:
      "Vestigo may process personal data for one or more of the following purposes",
    list: [
      "Responding to enquiries and understanding insurance, risk and service requirements.",
      "Seeking quotations, arranging, placing, servicing, renewing, modifying or cancelling insurance contracts.",
      "Supporting policy administration, endorsements, certificates, enrolment, claims, surveys, loss assessment and grievance handling.",
      "Providing risk advisory, claims advisory, employee-benefit administration and related lawful insurance-broking services.",
      "Conducting identity, authority, KYC, beneficial-ownership, sanctions, fraud-prevention and other due-diligence checks.",
      "Communicating service information, regulatory notices, policy or claim updates and other transaction-related messages.",
      "Meeting legal, regulatory, audit, tax, accounting, record-keeping, inspection and reporting obligations.",
      "Protecting clients, Vestigo, insurers and other stakeholders against fraud, cyber threats, unlawful conduct and security incidents.",
      "Managing business continuity, quality assurance, training, complaints, disputes, legal claims and enforcement of rights.",
      "Improving our services, website, processes and client experience through lawful and proportionate analysis, including aggregated or anonymised information.",
      "Sending relevant service or marketing communications where permitted by law and the recipient has not opted out or where consent is required and has been obtained.",
    ],
  },

  {
    id: "consent",
    num: "06",
    title: "Consent and Other Permitted Processing",
    icon: <UserCheck className="text-white" size={22} />,
    content:
      "Where consent is the appropriate basis for processing, Vestigo will seek consent that is specific, informed and indicated through a clear affirmative action. Merely browsing a publicly accessible page will not, by itself, be treated as consent for unrelated processing or optional cookies.",
    list: [
      "An individual may withdraw consent by contacting us, subject to reasonable identity verification.",
      "Withdrawal will apply prospectively and may affect our ability to continue a service that necessarily depends on the relevant data.",
      "It will not require Vestigo to erase or stop using information that must be retained or processed to comply with law, regulation, a contract, a claim, a dispute, fraud prevention, or another legally permitted purpose.",
      "Vestigo may also process data where permitted or required by applicable law, including for voluntarily provided data used for its stated purpose, contractual or pre-contractual activities, compliance with legal obligations, protection of rights, responding to emergencies, and other lawful uses.",
    ],
  },
  {
    id: "thirdparty",
    num: "07",
    title: "Data About Other Persons",
    icon: <Users className="text-blue-500" size={22} />,
    content: "Vestigo may seek evidence of authority where appropriate.",
    list: [
      "If you provide personal data about another person, you represent that you are authorised to do so and have provided any notice or obtained any consent required by law.",
      "For corporate and group insurance, the employer, group policyholder or authorised administrator is responsible for lawfully collecting and sharing member and dependant data with Vestigo and the relevant insurer.",
    ],
  },
  {
    id: "children",
    num: "08",
    title: "Children and Persons Requiring Assistance",
    icon: <AlertCircle className="text-white" size={22} />,
    content:
      "Our website and services are not directed at obtaining independent consent from children.",
    list: [
      "Data relating to a person below eighteen years of age, or a person who lawfully acts through a guardian, should be provided by or with the involvement of a parent, lawful guardian, employer, group policyholder or other authorised person, as applicable.",
      "We process such data only for legitimate insurance, benefit, claim or legal purposes and with appropriate safeguards.",
    ],
  },
  {
    id: "sharing",
    num: "09",
    title: "Sharing & Disclosure",
    icon: <Globe className="text-blue-500" size={22} />,
    content:
      "Vestigo may disclose personal data on a need-to-know and purpose-limited basis to:",
    list: [
      "Insurers, reinsurers and their authorised representatives.",
      "Third-party administrators, surveyors, loss assessors, investigators, hospitals, healthcare providers, garages, repairers, assistance companies and claims-service providers.",
      "The employer, group policyholder or authorised administrator for a corporate or group insurance arrangement, subject to appropriate authority and confidentiality.",
      "Banks, payment-service providers, auditors, accountants, lawyers, consultants, technology, cloud, communication, document-management, security and other service providers.",
      "IRDAI, CERT-In, the Data Protection Board of India when applicable, courts, tribunals, law-enforcement, tax and other governmental or regulatory authorities.",
      "A prospective or actual successor, investor, acquirer or restructuring participant, subject to confidentiality and applicable law.",
      "Any other person where the individual has authorised disclosure or disclosure is permitted or required by law.",
      "Service providers are expected to use information only for authorised purposes and to maintain appropriate confidentiality and security. Vestigo does not sell personal data or trade it for unrelated commercial gain.",
    ],
  },
  {
    id: "transfers",
    num: "10",
    title: "International and Cross-Border Processing",
    icon: <Globe className="text-white" size={22} />,
    content:
      "Certain insurance arrangements, overseas travel or employee-benefit programmes, global insurers or reinsurers, assistance services, claims, technology platforms or cloud services may require data to be accessed from or transferred outside India. Any such processing will be undertaken only where legally permitted and with contractual, technical and organisational safeguards appropriate to the circumstances. Vestigo will comply with any country restrictions or conditions notified under applicable Indian law.",
  },
  {
    id: "cookies",
    num: "11",
    title: "Cookies and Similar Technologies",
    icon: <Cookie className="text-blue-500" size={22} />,
    content:
      "Our website may use cookies and similar technologies for security, essential functionality, preferences and analytics. Optional cookies will be used in accordance with our Cookie Policy and applicable consent requirements. Please read the separate Cookie Policy available on this website.",
  },
  {
    id: "security",
    num: "12",
    title: "Information Security",
    icon: <Lock className="text-white" size={22} />,
    content: (
      <>
        Vestigo uses reasonable and proportionate physical, administrative and
        technical safeguards designed to protect personal data against
        unauthorised access, use, disclosure, alteration, loss or destruction.
        Measures may include access controls, authentication, encryption or
        secure transfer methods where appropriate, endpoint and network
        protection, logging, backup, vendor controls, confidentiality
        obligations, training and incident-response procedures.
        <br />
        <br />
        No system, transmission or storage method is completely secure. Vestigo
        therefore cannot guarantee absolute security, but will continue to
        assess risk and improve safeguards in line with applicable requirements
        and the nature of the information processed.
      </>
    ),
  },
  {
    id: "breach",
    num: "13",
    title: "Personal Data Breach and Security Incident Response",
    icon: <ShieldAlert className="text-blue-500" size={22} />,
    content:
      "Vestigo maintains procedures to identify, contain, investigate, remediate and document suspected security incidents and personal data breaches. Where a notification or report is legally required, Vestigo will notify the relevant authority, regulator, insurer, client or affected individual in the manner and within the timeframe prescribed by applicable law. Notifications may be delayed or limited where law-enforcement, security or legal requirements so require.",
  },
  {
    id: "retention",
    num: "14",
    title: "Retention and Disposal",
    icon: <Clock className="text-white" size={22} />,
    content: (
      <>
        Insurance-broking books, records and documents will ordinarily be
        preserved for at least seven years from the end of the relevant
        financial year, or for any longer period required by applicable law,
        IRDAI direction, insurer arrangement, audit, investigation, litigation,
        claim or contractual obligation. Records relating to pending claims,
        disputes, proceedings or investigations may be retained until final
        disposal and completion of any required preservation period.
        <br />
        <br />
        Other personal data is retained only for as long as reasonably necessary
        for the purpose for which it was collected and for legitimate legal,
        regulatory, security and business requirements. When retention is no
        longer required, data will be securely deleted, destroyed, de-identified
        or anonymised, subject to backup and archival deletion cycles.,
      </>
    ),
  },
  {
    id: "rights",
    num: "15",
    title: "Your Choices and Rights",
    icon: <Scale className="text-blue-500" size={22} />,
    content:
      "Subject to applicable law, identity verification and lawful exceptions, an individual may request:",
    list: [
      "A summary of personal data being processed and relevant processing information.",
      "Correction, completion or updating of inaccurate or incomplete personal data.",
      "Erasure of personal data that is no longer necessary and is not required to be retained.",
      "Withdrawal of consent where processing is based on consent.",
      "cessation of promotional communications",
      "Grievance redressal concerning our handling of personal data",
      "Nomination of another individual to exercise rights in circumstances recognised by applicable law.",
    ],
    desc: "A request may be refused, restricted or deferred where it is repetitive, manifestly unfounded, affects the rights of another person, compromises security or confidentiality, or conflicts with a legal, regulatory, contractual, claims, fraud-prevention, investigation or record-retention requirement. We will provide an appropriate response in accordance with applicable law.",
  },
  {
    id: "communications",
    num: "16",
    title: "Communications and Marketing Preferences",
    icon: <MessageSquareWarning className="text-white" size={22} />,
    content:
      "Vestigo may send communications necessary to respond to an enquiry, administer a service, provide policy or claim information, comply with law or protect security. Such service communications cannot always be opted out of while the relevant relationship continues. Promotional communications may be stopped by using the unsubscribe option, replying with an opt-out request, or writing to enquiry@vestigoinsurance.com. We may retain limited suppression information to honour an opt-out request.",
  },
  {
    id: "links",
    num: "17",
    title: "Third-Party Websites and Platforms",
    icon: <ExternalLink className="text-blue-500" size={22} />,
    content:
      "Our website may link to insurer, regulator, service-provider or other third-party websites. Vestigo does not control those platforms and this Policy does not govern their privacy practices. Users should review the privacy notices of those third parties before submitting personal data.",
  },
  {
    id: "updates",
    num: "18",
    title: "Changes to this Policy",
    icon: <RefreshCw className="text-white" size={22} />,
    content:
      "Vestigo may amend this Privacy Policy to reflect changes in law, regulation, technology, services or business practices. The revised version will be posted on the website with an updated effective or last-updated date. Material changes may also be communicated through an appropriate additional notice where required.",
  },
];

export default function ComprehensivePolicy() {
  const [activeTab, setActiveTab] = useState("about");
  const [copied, setCopied] = useState(false);
  const videoRef = useRef(null);
  const indexContainerRef = useRef(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(corporateDetails.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Video looping logic
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = async () => {
      video.muted = true;
      video.currentTime = 0;

      try {
        await video.play();
      } catch (err) {
        console.log(err);
      }
    };

    video.addEventListener("ended", handleEnded);
    return () => {
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  // ==========================================
  // SCROLL SPY INTERSECTION OBSERVER
  // ==========================================
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -55% 0px", // Triggers when top of clause reaches upper portion of viewport
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

    policyCards.forEach((card) => {
      const element = document.getElementById(card.id);
      if (element) observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Smooth scroll active index item into sidebar view
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
      <section className="relative bg-[#040a26] overflow-hidden flex flex-col lg:flex-row lg:items-center lg:min-h-[75vh]">
        <div className="relative w-full h-[280px] sm:h-[360px] lg:absolute lg:top-0 lg:right-0 lg:w-1/2 lg:h-full z-0 overflow-hidden">
          <video
            ref={videoRef}
            autoPlay
            playsInline
            preload="auto"
            muted={false}
            loop={false}
            className="w-full h-full object-cover"
          >
            <source src="/heropolicy.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-[#040a26] via-[#040a26]/40 to-transparent lg:hidden" />
          <div className="hidden lg:block absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#040a26] to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-8 sm:py-12 lg:py-16 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl lg:max-w-xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-blue-400/30 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wider">
              <Sparkles size={14} />
              Effective Date: {corporateDetails.effectiveDate}
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Privacy{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Policy
              </span>
            </h1>
            <p className="text-sm sm:text-lg text-slate-300 leading-relaxed mb-6">
              Official governance framework for{" "}
              <strong className="text-white">
                {corporateDetails.companyName}
              </strong>{" "}
              ensuring compliant and secure processing of personal data.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 text-xs text-blue-200 backdrop-blur-sm">
                <span className="block text-slate-400 font-medium mb-1">
                  IRDAI Registration
                </span>
                <strong className="text-white text-sm block">
                  No. {corporateDetails.irdaiRegNo} ({corporateDetails.category}
                  )
                </strong>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 text-xs text-blue-200 backdrop-blur-sm">
                <span className="block text-slate-400 font-medium mb-1">
                  Registration Validity
                </span>
                <strong className="text-white text-sm block">
                  {corporateDetails.validity}
                </strong>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= 2. CORPORATE IDENTIFICATION BANNER ================= */}
      <section className="relative z-20 -mt-8 px-6 max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200/90 shadow-xl grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 items-center">
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
                Privacy & Compliance Desk
              </p>
              <p className="text-sm font-bold text-blue-600 mt-0.5 break-all sm:break-normal">
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
      <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-start">
          {/* LEFT: STICKY NAVIGATION INDEX (Desktop only) */}
          <aside className="hidden lg:block lg:col-span-4 sticky top-8 space-y-4">
            <div className="bg-white border border-slate-200/90 rounded-3xl p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-4 px-2 text-slate-800 font-bold text-sm">
                <FileText size={18} className="text-blue-600" />
                Policy Index (Clauses 01–18)
              </div>
              <div
                ref={indexContainerRef}
                className="space-y-1 max-h-[70vh] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-slate-200"
              >
                {policyCards.map((clause) => (
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

            {/* QUICK CONTACT HELP CARD */}
          </aside>

          {/* RIGHT: CLAUSES CONTENT CONTAINER */}
          <main className="lg:col-span-8 space-y-6 sm:space-y-8">
            {policyCards.map((card, index) => {
              const isEven = index % 2 === 1;

              return (
                <motion.div
                  key={card.id}
                  id={card.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4 }}
                  className={`scroll-mt-8 p-5 sm:p-8 rounded-[24px] sm:rounded-[28px] transition-all ${
                    isEven
                      ? "bg-gradient-to-br from-blue-50/60 via-indigo-50/20 to-white border border-blue-200/80 shadow-md"
                      : "bg-white border border-slate-200/90 shadow-sm"
                  }`}
                >
                  {/* CARD HEADER */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <div
                      className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 ${
                        isEven
                          ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                          : "bg-blue-50 text-blue-600 border border-blue-100"
                      }`}
                    >
                      {card.icon}
                    </div>

                    <span
                      className={`text-[10px] sm:text-[11px] font-black uppercase tracking-widest px-3 py-1 rounded-full border ${
                        isEven
                          ? "bg-blue-100 text-blue-800 border-blue-200"
                          : "bg-slate-100 text-slate-500 border-slate-200"
                      }`}
                    >
                      Clause {card.num}
                    </span>
                  </div>

                  {/* TITLE */}
                  <h3
                    className={`text-lg sm:text-xl font-black mb-3 tracking-tight ${
                      isEven ? "text-[#031154]" : "text-slate-900"
                    }`}
                  >
                    {card.num}. {card.title}
                  </h3>

                  {/* SUMMARY / CONTENT */}
                  <div className="text-slate-600 text-sm leading-relaxed mb-4 text-left sm:text-justify">
                    {card.content}
                  </div>

                  {/* BULLET POINTS IF AVAILABLE */}
                  {card.list && (
                    <div className="mt-5 pt-4 border-t border-slate-200/60">
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                        Key Policy Provisions:
                      </p>
                      <div className="grid grid-cols-1 gap-2.5">
                        {card.list.map((item, i) => (
                          <div
                            key={i}
                            className={`flex items-start gap-3 p-3.5 rounded-xl text-xs sm:text-sm font-medium border ${
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
                            <span className="leading-relaxed text-left sm:text-justify flex-1 w-full">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* DESCRIPTION / EXTRA NOTE IF AVAILABLE */}
                  {card.desc && (
                    <div className="mt-4 p-4 rounded-xl border border-blue-200/60 bg-blue-50/50 text-xs text-slate-700 leading-relaxed text-left sm:text-justify">
                      {card.desc}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </main>
        </div>
      </section>

      {/* ================= 4. PRIVACY CONTACT & GRIEVANCE BANNER ================= */}
      <section className="py-12 sm:py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-br from-slate-900 via-[#031154] to-slate-900 rounded-[28px] sm:rounded-[36px] p-6 sm:p-14 text-white shadow-2xl flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-10">
            <div className="space-y-4 max-w-2xl">
              <h3 className="text-2xl sm:text-4xl font-black leading-tight">
                Privacy Contact & Grievance Redressal
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                For privacy questions, consent withdrawal, statutory rights
                requests, or grievances, write directly to our official
                Grievance Contact.
              </p>

              <div className="space-y-2 text-xs text-blue-200/80 border-l-2 border-blue-500/50 pl-4 pt-2">
                <p>
                  • Include <strong>&quot;Privacy Request&quot;</strong> in the
                  email subject line.
                </p>
                <p>
                  • Acknowledgement: <strong>Within 3 working days</strong>.
                </p>
                <p>
                  • Resolution: <strong>Within 15 working days</strong>.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3.5 w-full lg:w-auto shrink-0">
              <a
                href={`mailto:${corporateDetails.email}?subject=Privacy%20Request`}
                className="flex items-center justify-center lg:justify-start gap-4 bg-white text-slate-900 p-4 sm:p-5 rounded-2xl font-bold shadow-lg hover:bg-slate-100 transition-all"
              >
                <Mail className="text-blue-600" size={24} />
                <div className="text-left">
                  <span className="block text-[10px] uppercase text-slate-400 font-black tracking-wider">
                    Direct Email
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

      {/* ================= 5. STATUTORY FOOTER ================= */}
      <footer className="py-6 sm:py-8 bg-slate-100 text-center border-t border-slate-200 px-4 sm:px-6">
        <p className="text-slate-500 text-[10px] sm:text-[11px] font-bold uppercase tracking-widest max-w-4xl mx-auto leading-relaxed">
          Insurance is a subject matter of solicitation |{" "}
          {corporateDetails.companyName} | IRDAI Regn. No:{" "}
          {corporateDetails.irdaiRegNo} ({corporateDetails.category}) | CIN:{" "}
          {corporateDetails.cin}
        </p>
      </footer>
    </div>
  );
}
