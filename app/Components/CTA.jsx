import React from "react";
import {
  FaWhatsapp,
  FaFacebookMessenger,
  FaEnvelope,
} from "react-icons/fa";

const CTA = () => {
  return (
    <section
      id="cta"
      className="w-full scroll-mt-24 md:scroll-mt-28 lg:scroll-mt-36"
    >
      <div className="rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-10 md:p-14 text-center relative overflow-hidden">

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-60" />

        <div className="relative z-10">

          {/* Label */}
          <p className="text-white/40 uppercase tracking-[0.3em] text-xs mb-4">
            Let’s work together
          </p>

          {/* Heading */}
          <h3 className="text-3xl md:text-5xl font-semibold leading-tight max-w-3xl mx-auto text-white/90">
            Have a project in mind?
          </h3>

          {/* Description */}
          <p className="mt-5 text-white/50 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Contact Frame House Creative and let’s create something modern,
            clean, and impactful for your brand.
          </p>

          {/* Contact Buttons */}
          <div className="mt-8 flex justify-center gap-3 flex-wrap">

            {/* Email */}
            <a
              href="mailto:framehousecreative@gmail.com"
              className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-white text-black font-medium hover:scale-105 transition"
            >
              <FaEnvelope />
              Email
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/8801986854479"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-2xl border border-white/10 bg-white/5 text-white/70 hover:bg-white/10 transition"
            >
              <FaWhatsapp />
              WhatsApp
            </a>

            {/* Messenger */}
            <a
              href="https://m.me/meNashif"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-2xl border border-white/10 bg-white/5 text-white/70 hover:bg-white/10 transition"
            >
              <FaFacebookMessenger />
              Messenger
            </a>

          </div>

        </div>
      </div>
    </section>
  );
};

export default CTA;