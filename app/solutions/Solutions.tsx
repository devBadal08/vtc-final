"use client";
import { useRef, useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  Target,
  ShieldCheck,
  Briefcase,
  HeartPulse,
  Factory,
  Truck,
  Search,
  ArrowRight,
  Sparkles,
  Layers,
} from "lucide-react";
import Link from "next/link";
import {
  faBuildingShield,
  faClipboardCheck,
  faUsersGear,
  faHeartPulse,
  faFileShield,
  faTruckFast,
  faFileContract,
  faMagnifyingGlassChart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Solutions() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLElement | null>(null);
  const [hasPlayedOnce, setHasPlayedOnce] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      setHasPlayedOnce(true);

      video.muted = true; // ✅ mute after first play
      video.loop = true; // ✅ enable loop
      video.play(); // ✅ restart smoothly
    };

    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  const solutions = [
    {
      id: "commercialinsurance",
      category: "Corporate",
      title: "Commercial Insurance",
      desc: "End-to-end claims advocacy to ensure fair, timely, and accurate settlements.",
      features: ["Property Insurance", "Liability Cover", "Cyber Risk"],
      icon: <FontAwesomeIcon icon={faBuildingShield} />,
      accent: "from-blue-500 to-cyan-400",
      lightBg: "bg-blue-50",
    },
    {
      id: "audits-risk-assessment",
      category: "Industrial",
      title: "Audits & Risk Assessment",
      desc: "Identify, evaluate, and mitigate operational and strategic risks proactively.",
      features: [
        "Machinery Breakdown",
        "Fire & Special Perils",
        "Stock Insurance",
      ],
      icon: <FontAwesomeIcon icon={faClipboardCheck} />,
      accent: "from-orange-500 to-amber-400",
      lightBg: "bg-amber-50",
    },
    {
      id: "employee-benefits",
      category: "Health",
      title: "Employee Benefits",
      desc: "Health and benefit programs that protect people and support growth.",
      features: ["Group Medical", "Accident Cover", "Mental Wellness"],
      icon: <FontAwesomeIcon icon={faUsersGear} />,
      accent: "from-emerald-500 to-teal-400",
      lightBg: "bg-emerald-50",
    },
    {
      id: "lifeinsurance",
      category: "Health",
      title: "Life Insurance",
      desc: "Long-term financial security for individuals and business leadership.",
      features: ["Term Insurance", "Group Life Cover", "Keyman Insurance"],
      icon: <FontAwesomeIcon icon={faHeartPulse} />,
      accent: "from-rose-500 to-pink-400",
      lightBg: "bg-rose-50",
    },
    {
      id: "claimsmanagement",
      category: "Corporate",
      title: "Claims Management",
      desc: "End-to-end claims advocacy to ensure fair, timely, and accurate settlements.",
      features: [
        "Claim Documentation Support",
        "Dispute Resolution",
        "Survey Coordination",
      ],
      icon: <FontAwesomeIcon icon={faFileShield} />,
      accent: "from-slate-500 to-slate-400",
      lightBg: "bg-slate-50",
    },
    {
      id: "green-insurance",
      category: "Logistics",
      title: "Green X Insurance",
      desc: "Specialised risk protection for renewable and sustainable energy projects.",
      features: [
        "Solar Panel Insurance",
        "Wind Turbine Cover",
        "EPC Contractor Insurance",
      ],
      icon: <FontAwesomeIcon icon={faTruckFast} />,
      accent: "from-purple-500 to-indigo-400",
      lightBg: "bg-purple-50",
    },
    {
      id: "suretybond&creditinsurance",
      category: "Corporate",
      title: "Surety Bond",
      desc: "Risk transfer solutions that strengthen financial credibility.",
      features: ["Performance Bonds", "Bid Bonds", "Credit Insurance"],
      icon: <FontAwesomeIcon icon={faFileContract} />,
      accent: "from-cyan-500 to-blue-400",
      lightBg: "bg-cyan-50",
    },
    {
      id: "abilitysuite",
      category: "Industrial",
      title: "Bespoke Risk Programme",
      desc: "Advanced, structured insurance programs built for complex needs.",
      features: ["Safety Gap Analysis", "Premium Optimization", "Compliance"],
      icon: <FontAwesomeIcon icon={faMagnifyingGlassChart} />,
      accent: "from-indigo-500 to-blue-400",
      lightBg: "bg-indigo-50",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F8FAFC] overflow-hidden">
      <section
        ref={containerRef}
        className="relative min-h-[85vh] bg-[#040a26] overflow-hidden"
      >
        {/* ================= VIDEO ================= */}
        <div
          className="absolute top-0 left-0 w-full h-[45vh] 
            lg:h-full lg:w-1/2 lg:left-auto lg:right-0 z-0"
        >
          <video
            ref={videoRef}
            autoPlay
            playsInline
            preload="auto"
            muted={false}
            loop={false}
            className="
              w-full h-full
              
              object-cover
              object-center
              
              max-md:object-cover
              max-md:object-center
            "
          >
            <source src="/solution.mp4" type="video/mp4" />
          </video>

          {/* Desktop fade effect */}
          <div className="hidden lg:block absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#020617]/40 to-transparent" />
        </div>

        {/* ================= CONTENT ================= */}
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[85vh] px-6">
          {/* LEFT TEXT (Adjust as needed) */}
          <div
            className="flex pt-[45vh] lg:pt-0
              items-end lg:items-center"
          >
            <motion.div
              style={{ y, opacity }}
              className="max-w-xl pb-12 md:pb-0"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-blue-400/30 bg-blue-500/10 text-blue-400 text-xs font-bold">
                <Sparkles size={14} />
                Innovative Digital Solutions
              </div>

              <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
                What We Do Or{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  The vestigo suite line
                </span>
              </h1>

              <p className="text-sm sm:text-lg text-slate-300 leading-relaxed mb-8">
                Comprehensive protection tailored to your unique needs. From
                commercial enterprises to individual life cover, we deliver
                integrated risk, insurance, and claims expertise to safeguard
                what matters most.
              </p>
            </motion.div>
          </div>

          {/* RIGHT EMPTY COLUMN */}
          <div className="hidden md:block" />
        </div>

        {/* ================= OVERLAY PATTERN ================= */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(#3b82f6 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </section>

      <section className="max-w-7xl mx-auto px-5 pt-14 pb-10">
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {solutions.map((item, index) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -12 }}
                className="group bg-white rounded-[3rem] p-10 border border-slate-100 shadow-xl shadow-slate-200/40 flex flex-col h-full relative overflow-hidden"
              >
                {/* Decoration: Subtle Circle */}
                <div
                  className={`absolute -top-10 -right-10 w-32 h-32 rounded-full transition-colors duration-500 ${item.lightBg} group-hover:bg-opacity-50`}
                />

                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 bg-gradient-to-br ${item.accent} text-white shadow-lg transform group-hover:rotate-6 transition-transform duration-500`}
                >
                  {item.icon}
                </div>

                <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-slate-500 leading-relaxed mb-8 flex-grow">
                  {item.desc}
                </p>

                <div className="space-y-4 mb-10">
                  {item.features.map((feat, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 text-sm font-bold text-slate-700"
                    >
                      <div
                        className={`w-2 h-2 rounded-full bg-gradient-to-r ${item.accent}`}
                      />
                      {feat}
                    </div>
                  ))}
                </div>

                <Link
                  href={`/solutions/${item.id}`}
                  className="group/btn flex items-center justify-between py-5 px-8 bg-slate-900 rounded-[2rem] font-bold text-white hover:bg-blue-600 transition-all duration-300"
                >
                  Get Expert Advice
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* --- INTERACTIVE CTA SECTION --- */}
      <section className="py-20 px-6">
        <motion.div
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.95 }}
          className="max-w-6xl mx-auto rounded-[4rem] bg-[#0F172A] p-12 md:p-24 text-center text-white relative overflow-hidden"
        >
          {/* Animated Background Elements */}
          <motion.div
            animate={{ x: [0, 50, 0], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute -left-20 -top-20 w-80 h-80 bg-blue-600 rounded-full blur-[120px]"
          />

          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="w-20 h-20 bg-blue-500/20 rounded-[2rem] flex items-center justify-center mx-auto mb-8 border border-blue-500/30">
              <Layers className="text-blue-400" size={40} />
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">
              Can&apos;t find a{" "}
              <span className="text-blue-400 italic font-serif">Perfect</span>{" "}
              Fit?
            </h2>
            <p className="text-slate-400 text-lg mb-12 leading-relaxed">
              Every business is a unique entity. If our standard suites don t
              match your specific risk profile, our underwriters will build a
              bespoke plan for you from scratch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-block">
                <button className="bg-white text-slate-900 px-12 py-5 rounded-[2rem] font-black text-lg hover:scale-105 transition-all shadow-2xl w-full">
                  Speak to an Advisors
                </button>
              </Link>
              {/* <button className="bg-white/5 border border-white/10 backdrop-blur-xl text-white px-12 py-5 rounded-[2rem] font-black text-lg hover:bg-white/10 transition-all">
                Download Brochure
              </button> */}
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
