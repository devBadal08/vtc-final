"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Twitter,
  Facebook,
  Loader2,
  Instagram,
} from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileno: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const socialLinks = [
    {
      icon: Instagram,
      url: "https://www.instagram.com/vestigoinsurance?igsh=dHFxYmFlN2RtbHVp",
    },
    {
      icon: Linkedin,
      url: "https://www.linkedin.com/company/vestigo-insurance-brokers-pvt-ltd/",
    },
  ];

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch(
        "https://admin.vestigoinsurance.com/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          mobileno: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="relative min-h-[420px] md:min-h-[520px] lg:min-h-[620px] px-6 overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <img
            src="/contact-us.jpeg"
            alt="Vestigo Advisory Team"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#0F172A]/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center text-white mt-20 md:mt-32">
          <h1 className="text-2xl md:text-4xl font-extrabold mb-6">
            Get in Touch With{" "}
            <span className="text-blue-400">Our Insurance Experts</span>
          </h1>
          <p className="text-md text-slate-200 max-w-2xl mx-auto">
            Reach out today to schedule a comprehensive risk consultation and
            take a confident step toward long-term security.
          </p>
        </div>
      </section>

      {/* Main Contact Content */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side: Contact Info */}
          <div className="bg-gradient-to-br from-sky-100 to-white rounded-[2rem] p-8 md:p-10 shadow-lg border border-sky-200">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-3">
                  Get In Touch
                </h2>
                <p className="text-slate-500 leading-relaxed">
                  Share your details and our advisory team will connect with you
                  shortly.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 md:w-14 md:h-14 flex-shrink-0 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <Mail size={24} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-slate-900">Email Us</h4>

                    <p className="text-slate-500 break-all text-[15px] leading-relaxed">
                      enquiry@vestigoinsurance.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 md:w-14 md:h-14 flex-shrink-0 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <Phone size={24} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-slate-900">Call Support</h4>
                    <p className="text-slate-500 break-all text-[15px] leading-relaxed">
                      +91 97261 60360
                    </p>
                    <p className="text-slate-500 break-all text-[15px] leading-relaxed">
                      +91 97378 01385
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-sky-200">
                <h4 className="font-bold text-slate-900 mb-4">Follow Us</h4>

                <div className="flex gap-4">
                  {socialLinks.map((item, i) => {
                    const Icon = item.icon;

                    return (
                      <a
                        key={i}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 border border-slate-200 rounded-full flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-600 transition-all shadow-sm"
                      >
                        <Icon size={20} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-2xl border border-slate-100">
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8 p-4 bg-green-50 text-green-700 rounded-xl border border-green-200 flex items-center gap-2"
              >
                <span className="font-bold">Thank you.</span> A Vestigo advisor
                will contact you within 24 hours.
              </motion.div>
            )}
            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8 p-4 bg-red-50 text-red-700 rounded-xl border border-red-200"
              >
                Something went wrong. Please try again later.
              </motion.div>
            )}

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                    className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email address"
                    className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="mobileno"
                  value={formData.mobileno}
                  onChange={handleChange}
                  required
                  placeholder="+91 97261 60360"
                  className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Policy Inquiry"
                  className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Tell us about your requirements..."
                  className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-2xl shadow-xl shadow-blue-200 transition-all flex items-center justify-center gap-3 group disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    Sending... <Loader2 className="animate-spin" size={20} />
                  </>
                ) : (
                  <>
                    Send Message{" "}
                    <Send
                      size={20}
                      className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    />
                  </>
                )}
              </button>
              <p className="text-md text-slate-400 text-center mt-4">
                Our advisors typically respond within 4 business hours.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">
              Visit Our Offices
            </h2>
            <p className="text-slate-500">Find us in Ahmedabad and Vadodara</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Ahmedabad Map */}
            <div className="group">
              <div className="h-[450px] bg-slate-100 rounded-[2.5rem] overflow-hidden border border-slate-200 shadow-xl relative transition-transform duration-500 hover:-translate-y-2">
                <iframe
                  src="https://maps.google.com/maps?q=229,%20Platinum%20Plaza,%20Above%20HDFC%20Bank,%20Judges%20Bunglows%20Road,%20Bodakdev,%20Ahmedabad%20380054&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  className="grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="mt-6 px-4">
                <h4 className="font-bold text-slate-900 text-lg mb-2">
                  Ahmedabad Office
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  229, Platinum Plaza, Above HDFC Bank, Judges Bunglows Road,
                  Bodakdev, Ahmedabad - 380054
                </p>
              </div>
            </div>

            {/* Vadodara Map */}
            <div className="group">
              <div className="h-[450px] bg-slate-100 rounded-[2.5rem] overflow-hidden border border-slate-200 shadow-xl relative transition-transform duration-500 hover:-translate-y-2">
                <iframe
                  src="https://maps.google.com/maps?q=SF%20201,%20Status%20Complex,%20Opp.%20Amrapali%20Complex,%20Pani%20Tanki%20Road,%20Karelibaug,%20Vadodara%20390018&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  className="grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="mt-6 px-4">
                <h4 className="font-bold text-slate-900 text-lg mb-2">
                  Vadodara Office
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  SF 201, Status Complex, Opp. Amrapali Complex, Pani Tanki
                  Road, Karelibaug, Vadodara - 390018
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
