"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    {
      name: "Instagram",
      icon: <Instagram size={18} />,
      href: "https://www.instagram.com/vestigoinsurance?igsh=dHFxYmFlN2RtbHVp",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={18} />,
      href: "https://www.linkedin.com/company/vestigo-insurance-brokers-pvt-ltd/",
    },
  ];

  return (
    <div className="w-full">
      <footer className="relative w-full text-slate-300 overflow-hidden min-h-[550px] flex flex-col justify-end">
        {/* --- BACKGROUND LAYER FIX --- */}
        <div className="absolute inset-0 z-0">
          <picture>
            <source media="(min-width: 1024px)" srcSet="/f3.jpeg" />
            <source media="(min-width: 768px)" srcSet="/tablet.jpeg" />
            <img
              src="/m.jpeg"
              alt="Footer Background"
              className="w-full h-full object-fill brightness-[0.6]"
            />
          </picture>
        </div>

        <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#0B1120] via-[#0B1120]/90 to-transparent opacity-100" />

        {/* --- MAIN CONTENT CONTAINER --- */}
        <div className="relative z-10 mt-0 max-w-[1600px] mx-auto py-12 px-6 lg:px-10 w-full">
          {/* Main Grid: Reduced gap-y on mobile from 10 to 4 to make titles closer */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-4 gap-y-4 lg:gap-y-10 items-start">
            {/* 1. Company */}
            <div className="lg:col-span-1">
              <Link href="/company">
                <h3 className="text-white font-bold text-[18px] lg:uppercase tracking-[0.1em] mb-2 lg:mb-6 relative inline-block whitespace-nowrap cursor-pointer hover:text-blue-400 transition-colors">
                  Company
                  <span className="absolute -bottom-2 left-0 w-6 h-0.5 bg-[#4169E1]"></span>
                </h3>
              </Link>
              {/* Visible only on Desktop */}
              <ul className="hidden lg:block space-y-2 text-[13px]">
                <li>
                  <Link
                    href="/company/whoweare"
                    className="hover:text-white transition-all"
                  >
                    Who We Are
                  </Link>
                </li>
                <li>
                  <Link
                    href="/company/whyus"
                    className="hover:text-white transition-all"
                  >
                    Why Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/company/ourteam"
                    className="hover:text-white transition-all"
                  >
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="/company/ourpartners"
                    className="hover:text-white transition-all"
                  >
                    Our Partners
                  </Link>
                </li>
              </ul>
            </div>

            {/* 2. Industries */}
            <div className="lg:col-span-4 lg:pl-4">
              <Link href="/industries">
                <h3 className="text-white font-bold text-[18px] lg:uppercase tracking-[0.1em] mb-2 lg:mb-6 relative inline-block whitespace-nowrap cursor-pointer hover:text-blue-400 transition-colors">
                  Industries We Serve
                  <span className="absolute -bottom-2 left-0 w-6 h-0.5 bg-[#4169E1]"></span>
                </h3>
              </Link>
              {/* Visible only on Desktop */}
              <div className="hidden lg:grid grid-cols-4 gap-x-4 gap-y-2 text-[11px]">
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/industries/automobile"
                      className="hover:text-white"
                    >
                      Automobile
                    </Link>
                  </li>
                  <li>
                    <Link href="/industries/bfsi" className="hover:text-white">
                      BFSI
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/industries/packaging"
                      className="hover:text-white"
                    >
                      Packaging
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/industries/plastic"
                      className="hover:text-white"
                    >
                      Plastic
                    </Link>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li>
                    <Link href="/industries/it" className="hover:text-white">
                      IT & TECH
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/industries/e-commerce"
                      className="hover:text-white"
                    >
                      E-Commerce
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/industries/papermills"
                      className="hover:text-white whitespace-nowrap"
                    >
                      Paper Mills
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/industries/textile"
                      className="hover:text-white"
                    >
                      Textile
                    </Link>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/industries/engineering"
                      className="hover:text-white"
                    >
                      Infrastructure
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/industries/hospital-education"
                      className="hover:text-white"
                    >
                      Hospital & Education
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/industries/chemical-pharmaceuticals"
                      className="hover:text-white"
                    >
                      Chemical & Pharmaceuticals
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/industries/sme-msme"
                      className="hover:text-white"
                    >
                      SME & MSME
                    </Link>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/industries/hospitality"
                      className="hover:text-white"
                    >
                      Hospitality
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/industries/shipping-odc-cargo"
                      className="hover:text-white"
                    >
                      Shipping
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/industries/greenenergy"
                      className="hover:text-white whitespace-nowrap"
                    >
                      Green Energy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/industries/wood-laminates"
                      className="hover:text-white"
                    >
                      Wood & Laminates
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* 3. Services */}
            <div className="lg:col-span-1 lg:pl-4">
              <Link href="/solutions">
                <h3 className="text-white font-bold text-[18px] lg:uppercase tracking-[0.1em] mb-2 lg:mb-6 relative inline-block whitespace-nowrap cursor-pointer hover:text-blue-400 transition-colors">
                  Services
                  <span className="absolute -bottom-2 left-0 w-6 h-0.5 bg-[#4169E1]"></span>
                </h3>
              </Link>
              {/* Visible only on Desktop */}
              <ul className="hidden lg:block space-y-2 text-[13px]">
                <li>
                  <Link
                    href="/solutions"
                    className="hover:text-white transition-all"
                  >
                    Risk Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/industries"
                    className="hover:text-white transition-all"
                  >
                    Industries
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blogs"
                    className="hover:text-white transition-all"
                  >
                    Insights
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="hover:text-white transition-all"
                  >
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            {/* 4. Contact Us */}
            <div className="lg:col-span-2 lg:pl-4">
              <Link href="/contact">
                <h3 className="text-white font-bold text-[18px] lg:uppercase tracking-[0.1em] mb-2 lg:mb-6 relative inline-block whitespace-nowrap cursor-pointer hover:text-blue-400 transition-colors">
                  Contact Us
                  <span className="absolute -bottom-2 left-0 w-6 h-0.5 bg-[#4169E1]"></span>
                </h3>
              </Link>
              <ul className="space-y-2 lg:space-y-4 text-[12px]">
                <li className="flex items-center gap-2">
                  <Phone size={14} className="text-[#4169E1] flex-shrink-0" />
                  <a
                    href="tel:+919726160360"
                    className="hover:text-white whitespace-nowrap"
                  >
                    +91 97261 60360
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={14} className="text-[#4169E1] flex-shrink-0" />
                  <a
                    href="mailto:enquiry@vestigoinsurance.com"
                    className="hover:text-white break-all"
                  >
                    enquiry@vestigoinsurance.com
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin
                    size={14}
                    className="text-[#4169E1] flex-shrink-0 mt-0.5"
                  />
                  <span>Ahmedabad, Vadodara</span>
                </li>
              </ul>
            </div>

            {/* 5. Address */}
            <div className="lg:col-span-4 lg:pl-4">
              <h3 className="text-white font-bold text-[18px] lg:uppercase tracking-[0.1em] mb-2 lg:mb-6 relative inline-block whitespace-nowrap">
                Address
                <span className="absolute -bottom-2 lg:-bottom-2 left-0 w-6 h-0.5 bg-[#4169E1]"></span>
              </h3>
              <div className="grid grid-cols-2 lg:grid-cols-2 gap-4">
                <address className="not-italic text-[11px] leading-relaxed opacity-90">
                  <h4 className="text-white font-semibold mb-1 uppercase tracking-wider text-[10px]">
                    Corporate Office
                  </h4>
                  <p>
                    SF 201, Status Complex, Opp. Amrapali Complex, Pani Tanki
                    Road, Karelibaug, Vadodara - 390018
                  </p>
                </address>
                <address className="not-italic text-[11px] leading-relaxed opacity-90">
                  <h4 className="text-white font-semibold mb-1 uppercase tracking-wider text-[10px]">
                    Branch Office
                  </h4>
                  <p>
                    229, Platinum Plaza, Above HDFC Bank, Judges Bunglows Road,
                    Bodakdev, Ahmedabad - 380054
                  </p>
                </address>
              </div>
            </div>
          </div>

          {/* --- POLICIES CENTERED --- */}
          <div className="mt-8 lg:mt-6">
            <div className="flex flex-col items-center justify-center gap-6">
              <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-2 text-[13px] text-slate-400">
                <Link
                  href="/privacy-policy/isms-policy"
                  className="text-blue-400 transition-colors"
                >
                  ISMS Policy
                </Link>
                <span className="text-white/10 hidden md:block">|</span>
                <Link
                  href="/privacy-policy/aml-policy"
                  className="text-blue-400 transition-colors"
                >
                  AML Policy
                </Link>
                <span className="text-white/10 hidden md:block">|</span>
                <Link
                  href="/privacy-policy/other-policies"
                  className="text-blue-400 transition-colors"
                >
                  Other Policies
                </Link>
              </div>
            </div>
          </div>

          {/* --- BOTTOM BAR --- */}
          <div className="mt-6 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-widest">
            <p className="text-slate-400 text-center md:text-left text-[9px] leading-relaxed">
              © 2026 Vestigo Insurance Brokers Pvt Ltd | <br /> IRDAI Regn. No:
              1131 Direct Broker (General & Life)
            </p>

            <div className="flex gap-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>

            <Link
              href="/privacy-policy"
              className="text-blue-500 underline underline-offset-4 font-semibold text-[10px] hover:text-blue-400 uppercase"
            >
              PRIVACY POLICY
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
