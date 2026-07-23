"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const slides = [
  {
    tag: "🔍 The Spirit of Vestigo",
    title: "Uncover, Explore, ",
    highlight: "and Protect.",
    desc: "We track and trace risks before they reach you using intelligent insurance tech to ensure certainty.",
  },
  {
    tag: "🛡️ Strategic Security",
    title: "Deep Insights, ",
    highlight: "Corporate Shield.",
    desc: "Tailored insurance solutions built by deeply understanding your specific industry needs.",
  },
  {
    tag: "📈 Asset Growth",
    title: "Stability for ",
    highlight: "Your Future.",
    desc: "Focus on scaling your enterprise while we manage the complexities of risk and liability.",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  const totalVideoDuration = 10000;
  const slideDuration = totalVideoDuration / slides.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, slideDuration);

    return () => clearInterval(timer);
  }, [slideDuration]);

  return (
    <section className="relative w-full bg-[#020420]">
      {/* ✅ MOBILE LAYOUT */}
      <div className="block md:hidden">
        {/* Video Top with Gradient Background */}
        <div className="relative w-full h-[45svh] overflow-hidden bg-[#020420]">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020420]/40 to-[#020420] z-10" />
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/hero3.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Content Below */}
        <div className="px-5 py-10 text-center relative z-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-[#93C5FD] font-black uppercase tracking-[0.3em] text-[10px] mb-4">
                {slides[index].tag}
              </span>

              <h1 className="text-xl font-black text-white leading-snug uppercase mb-4">
                {slides[index].title}
                <span className="text-blue-500">
                  {" "}
                  {slides[index].highlight}
                </span>
              </h1>

              <p className="text-sm text-[#D1D5DB] leading-relaxed mb-8">
                {slides[index].desc}
              </p>
              <p className="text-sm text-gray-300 mb-6 font-medium tracking-wide">
                IRDAI Licensed Direct Broker | Regn. No. 1131 | General & Life
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="flex flex-col gap-3">
            <Link href="/contact">
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 bg-[#070B7F] text-white text-xs font-black uppercase tracking-widest rounded-full shadow-lg"
              >
                Speak to an Advisor
              </motion.button>
            </Link>

            <Link href="/solutions">
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 border border-white/60 text-white text-xs font-black uppercase tracking-widest rounded-full"
              >
                View Solutions
              </motion.button>
            </Link>
          </div>
        </div>
      </div>

      {/* ✅ DESKTOP LAYOUT */}
      <div className="hidden md:block relative min-h-screen overflow-hidden bg-[#020420]">
        {/* Background Video & Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/30 z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#020420]/80 via-[#020420]/40 to-[#020420] z-10" />

          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
          >
            <source src="/hero3.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 h-screen container mx-auto px-6 flex flex-col items-center justify-end pb-24 text-center">
          <div className="max-w-4xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${index}`}
                initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -30, filter: "blur(8px)" }}
                transition={{ duration: 0.8 }}
              >
                <span className="inline-block text-[#93C5FD] font-black uppercase tracking-[0.4em] text-[12px] mb-6">
                  {slides[index].tag}
                </span>

                <h1 className="text-2xl lg:text-4xl font-black text-white leading-[1.2] mb-6 uppercase">
                  {slides[index].title}
                  <span className="text-blue-500">
                    {" "}
                    {slides[index].highlight}
                  </span>
                </h1>

                <p className="text-lg text-[#D1D5DB] leading-relaxed max-w-2xl mx-auto mb-10">
                  {slides[index].desc}
                </p>

                <p className="text-md text-gray-300 mb-10 font-medium tracking-wide">
                  IRDAI Licensed Direct Broker | Regn. No. 1131 | General & Life
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="flex gap-6 justify-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-[#070B7F] hover:bg-[#0a0faf] text-white text-xs font-black uppercase tracking-widest rounded-full transition-all shadow-xl"
                >
                  Speak to an Advisor
                </motion.button>
              </Link>

              <Link href="/solutions">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 border-2 border-white/80 hover:border-white text-white text-xs font-black uppercase tracking-widest rounded-full transition-all"
                >
                  View Solutions
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
