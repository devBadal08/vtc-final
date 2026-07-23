"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Cookie,
  ShieldCheck,
  CheckCircle2,
  Lock,
  Globe,
  SlidersHorizontal,
  Info,
  Clock,
  Eye,
  Settings,
  Mail,
  ChevronRight,
  Sparkles,
  Building2,
  MapPin,
  FileText,
  Copy,
  Check,
  ArrowRight,
  Shield,
  ToggleLeft,
  ToggleRight,
  RefreshCw,
} from "lucide-react";
import Image from "next/image";

// ==========================================
// CORPORATE DETAILS & 10 COOKIE CLAUSES
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

const cookieClauses = [
  {
    id: "purpose",
    num: "01",
    title: "Purpose",
    icon: <Cookie size={20} />,
    summary:
      "This Cookie Policy explains how Vestigo uses cookies and similar technologies on its website. It should be read alongside our Privacy Policy. Cookies are not permitted to override legal consent requirements, and optional cookies will not be treated as accepted merely because a visitor continues browsing.",
  },
  {
    id: "what-are-cookies",
    num: "02",
    title: "What Cookies Are",
    icon: <Info size={20} />,
    summary:
      "Cookies are small text files placed on a device when a website is visited. They enable essential website functions, remember preferences, support security, measure performance, or provide other disclosed functionality. Similar technologies include pixels, tags, scripts, software development kits (SDKs), local storage, and device identifiers.",
  },
  {
    id: "cookie-types",
    num: "03",
    title: "Types of Cookies We May Use",
    icon: <SlidersHorizontal size={20} />,
    summary:
      "Vestigo categorizes cookies into functional groups based on their purpose and legal consent requirements:",
    points: [
      "Strictly necessary cookies: required for website operation, security, network management, form submission, load balancing, fraud prevention or saving a visitor’s cookie choices. These cannot ordinarily be disabled through our preference tool because the website may not function correctly without them.",
      "Functional cookies: remember choices such as language, region, accessibility or other preferences. Where legally required, these are activated only after consent.",
      "Analytics and performance cookies: help us understand visits, traffic, page performance, errors and navigation so that we can improve the website. Where these are not strictly necessary, consent will be obtained before use.",
      "Advertising, social-media or embedded-content cookies: may be placed by a third party when a social-media feature, video, map, campaign or advertising service is enabled. Vestigo will use such cookies only if the feature is actually deployed, clearly disclosed and permitted by the visitor’s choice and applicable law.",
    ],
  },
  {
    id: "first-vs-third-party",
    num: "04",
    title: "First-Party and Third-Party Cookies",
    icon: <Globe size={20} />,
    summary:
      "First-party cookies are set by Vestigo’s website domain. Third-party cookies are set by an external service whose content or functionality is used on the website. Third parties may process information under their own privacy policies. Vestigo will seek to select reputable providers and configure services to minimise unnecessary data collection, but does not control a third party’s independent processing.",
  },
  {
    id: "session-vs-persistent",
    num: "05",
    title: "Session and Persistent Cookies",
    icon: <Clock size={20} />,
    summary:
      "Session cookies expire when the browser is closed. Persistent cookies remain for a specified period or until deleted. Cookie duration will be limited to what is reasonably necessary for the stated purpose. The specific cookies, providers, purposes and typical lifespans currently in use should be displayed in the website’s cookie banner, preference centre or cookie inventory, where such cookies are deployed.",
  },
  {
    id: "choices-and-consent",
    num: "06",
    title: "Cookie Choices and Consent",
    icon: <ShieldCheck size={20} />,
    summary: (
      <>
        Where non-essential cookies are used, Vestigo will provide a mechanism
        that allows visitors to accept, reject or manage categories before those
        cookies are activated, except where applicable law permits otherwise.
        Rejecting optional cookies should be as accessible as accepting them. A
        visitor may change or withdraw a choice through the “Cookie Settings”
        link or preference mechanism made available on the website.
        <br />
        <br />
        Consent choices may be recorded through a strictly necessary cookie or
        similar record so that the website can respect the visitor’s preference.
        Withdrawal does not invalidate processing that occurred before
        withdrawal but will prevent future optional cookie use after the
        preference is applied.
      </>
    ),
  },
  {
    id: "browser-controls",
    num: "07",
    title: "Browser and Device Controls",
    icon: <Settings size={20} />,
    summary:
      "Most browsers permit users to view, block or delete cookies. Blocking all cookies may affect essential functionality, forms, security or saved preferences. Browser settings operate separately from the website’s preference centre and may need to be applied on each device or browser. Where technically feasible and legally appropriate, Vestigo may also recognise supported privacy preference signals.",
  },
  {
    id: "analytics",
    num: "08",
    title: "Analytics and Aggregated Information",
    icon: <Eye size={20} />,
    summary:
      "Analytics information may be used to understand how the website performs and to improve content and navigation. Vestigo will seek to configure analytics in a privacy-conscious manner, limit data collection and retention, and use aggregated or de-identified information where reasonably possible. Analytics information will not be used to make insurance underwriting or claim decisions by Vestigo.",
  },
  {
    id: "policy-updates",
    num: "09",
    title: "Updates to the Cookie Inventory and Policy",
    icon: <RefreshCw size={20} />,
    summary:
      "Website features and service providers may change. The cookie inventory or preference centre may therefore be updated from time to time. Material changes to this Policy will be published with an updated date and, where required, renewed consent will be sought.",
  },
  {
    id: "contact",
    num: "10",
    title: "Contact",
    icon: <Mail size={20} />,
    summary:
      "Questions about cookies or privacy choices may be sent to enquiry@vestigoinsurance.com with the subject “Cookie or Privacy Query”.",
  },
];

export default function CookiePolicyPage() {
  const [activeTab, setActiveTab] = useState("purpose");
  const [copied, setCopied] = useState(false);
  const indexContainerRef = useRef(null);

  // Preference Simulator States
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true
    functional: false,
    analytics: false,
    advertising: false,
  });
  const [preferencesSaved, setPreferencesSaved] = useState(false);

  const togglePreference = (key) => {
    if (key === "necessary") return;
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
    setPreferencesSaved(false);
  };

  const savePreferences = () => {
    setPreferencesSaved(true);
    setTimeout(() => setPreferencesSaved(false), 3000);
  };

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

    cookieClauses.forEach((clause) => {
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
                  src="/policy/p4-hero.jpeg"
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
                Transparency & Control | Effective:{" "}
                {corporateDetails.effectiveDate}
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight mb-6">
                Cookie{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300">
                  Policy
                </span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl font-normal">
                Learn how{" "}
                <strong className="text-white font-semibold">
                  {corporateDetails.companyName}
                </strong>{" "}
                uses cookies and web technologies to ensure security, maintain
                site functionality, and respect user privacy preferences.
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
                Cookie & Privacy Desk
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
                Cookie Policy Index (01–10)
              </div>
              <div className="space-y-1 max-h-[70vh] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-slate-200">
                {cookieClauses.map((clause) => (
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
            {cookieClauses.map((clause, index) => {
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
                        Category Breakdown:
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
                </motion.div>
              );
            })}
          </main>
        </div>
      </section>

      {/* ================= 4. CONFIDENTIAL COOKIE & PRIVACY DESK BANNER ================= */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-br from-slate-900 via-[#031154] to-slate-900 rounded-[36px] p-8 md:p-14 text-white shadow-2xl flex flex-col lg:flex-row justify-between items-center gap-10">
            <div className="space-y-4 max-w-2xl">
              <h3 className="text-2xl sm:text-4xl font-black leading-tight">
                Have Questions About Cookies or Privacy?
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                If you wish to update your consent, request details about
                third-party vendors, or exercise statutory privacy choices,
                reach out to our dedicated team.
              </p>

              <div className="space-y-2 text-xs text-blue-200/80 border-l-2 border-blue-500/50 pl-4 pt-2">
                <p>
                  • Include <strong>&quot;Cookie or Privacy Query&quot;</strong>{" "}
                  in the email subject line.
                </p>
                <p>• Requests are acknowledged within 3 working days.</p>
                <p>
                  • Withdrawal of cookie consent prevents future optional cookie
                  placement instantly.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3.5 w-full sm:w-auto shrink-0">
              <a
                href={`mailto:${corporateDetails.email}?subject=Cookie%20or%20Privacy%20Query`}
                className="flex items-center gap-4 bg-white text-slate-900 p-4 sm:p-5 rounded-2xl font-bold shadow-lg hover:bg-slate-100 transition-all"
              >
                <Mail className="text-blue-600" size={24} />
                <div>
                  <span className="block text-[10px] uppercase text-slate-400 font-black tracking-wider">
                    Privacy Email
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
