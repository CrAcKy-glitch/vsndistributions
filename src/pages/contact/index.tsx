"use client";

import type React from "react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    company: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        console.error("Contact error:", data);
        alert(data?.error || "Failed to send message. Please try again.");
        return;
      }

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ fullname: "", email: "", company: "", message: "" });
      }, 3000);
    } catch (error) {
      console.error("Contact submit error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  const contactIcons = {
    email: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
      </svg>
    ),
    phone: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773c.418 1.265 1.215 2.541 2.16 3.486.945.945 2.221 1.742 3.486 2.16l.773-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2.57C6.82 17.89 2.109 13.18 2.11 7.57V5a1 1 0 01-1-1z" />
      </svg>
    ),
    linkedin: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.002-3.096 1.548 1.548 0 01.002 3.096zm-1.337 9.763h2.674V7.748H3.668v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" />
      </svg>
    ),
    location: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
          clipRule="evenodd"
        />
      </svg>
    ),
  };

  return (
    <section
      id="contact"
      className="w-full py-20 md:py-32 px-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800"
    >
      <div className="max-w-6xl mx-auto mt-20">
        <div className="text-center mb-20">
          <p className="text-cyan-400 font-semibold tracking-wide uppercase mb-4">
            Connect With Us
          </p>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            {"Let's Work Together"}
          </h2>
          <p className="text-xl text-slate-300 font-light max-w-2xl mx-auto">
            Have a partnership opportunity or inquiry? Our team is ready to help
            you grow your business globally.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-white/10 hover:border-white/20 transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-8">
              Send us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-white/90 font-semibold mb-3 text-sm tracking-wide">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullname"
                  value={formData.fullname}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all duration-300"
                  required
                />
              </div>

              <div>
                <label className="block text-white/90 font-semibold mb-3 text-sm tracking-wide">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all duration-300"
                  required
                />
              </div>

              <div>
                <label className="block text-white/90 font-semibold mb-3 text-sm tracking-wide">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your Company"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all duration-300"
                  required
                />
              </div>

              <div>
                <label className="block text-white/90 font-semibold mb-3 text-sm tracking-wide">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your inquiry..."
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all duration-300 resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 transform hover:scale-105 active:scale-95"
              >
                {submitted ? "✓ Message Sent Successfully" : "Send Message"}
              </button>
            </form>
          </div>

          <div className="text-white space-y-12">
            <div>
              <h3 className="text-2xl font-bold mb-3">Contact Information</h3>
              <p className="text-slate-400 font-light">
                Reach out to our dedicated team for any inquiries
              </p>
            </div>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/30 transition-all duration-300">
                  {contactIcons.email}
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Email</h4>
                  <a
                    href="mailto:Admin@vsndistribution.com"
                    className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                  >
                    Admin@vsndistribution.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/30 transition-all duration-300">
                  {contactIcons.phone}
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Phone</h4>
                  <a
                    href="tel:+971052989599"
                    className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                  >
                    +971 052 98 99 599
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/30 transition-all duration-300">
                  {contactIcons.linkedin}
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">LinkedIn</h4>
                  <a
                    href="https://linkedin.com/company/vsn-group"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                  >
                    VSN Group
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/30 transition-all duration-300">
                  {contactIcons.location}
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Head Office</h4>
                  <p className="text-slate-400">
                    Shaikha Mariam Building, Office #810, Dubai, UAE
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
