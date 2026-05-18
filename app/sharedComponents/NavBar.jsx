"use client";

import React, { useEffect, useState } from "react";
import { FaBars, FaTimes, FaArrowRight, FaWhatsapp, FaEnvelope, FaDiscord } from "react-icons/fa";

const NavBar = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [visible, setVisible] = useState(true);
    const [mounted, setMounted] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "Services", href: "#services" },
        { name: "Work", href: "#portfolio" },
        { name: "About", href: "#about" },
        { name: "Contact", href: "#cta" },
    ];

    const contactOptions = [
        {
            name: "WhatsApp",
            description: "Instant chat & quick inquiries",
            href: "https://wa.me/8801986854479", 
            icon: <FaWhatsapp className="text-[#25D366] text-2xl" />,
        },
        {
            name: "Email",
            description: "Project briefs & official proposals",
            href: "mailto:framehousec@gmail.com",
            icon: <FaEnvelope className="text-[#EA4335] text-2xl" />,
        },
        {
            name: "Discord",
            description: "Add user: Nashif0054",
            href: "https://discord.com/users/Nashif0054",
            icon: <FaDiscord className="text-[#5865F2] text-2xl" />,
        },
    ];

    useEffect(() => {
        setMounted(true);
        let lastScrollY = typeof window !== "undefined" ? window.scrollY : 0;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (!isModalOpen) {
                if (currentScrollY > lastScrollY && currentScrollY > 80) {
                    setVisible(false);
                } else {
                    setVisible(true);
                }
            }
            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isModalOpen]);

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => { document.body.style.overflow = "unset"; };
    }, [isModalOpen]);

    return (
        <>
            <header
                className={`
                    fixed top-0 left-0 w-full z-50
                    transition-transform duration-300 ease-in-out
                    ${visible ? "translate-y-0" : "-translate-y-full"}
                `}
            >
                {/* NAV CONTAINER */}
                <div className="max-w-7xl mx-auto px-6 py-4 grid grid-cols-3 items-center">

                    {/* LOGO */}
                    <a href="/" className="leading-tight">
                        <h1 className="text-2xl md:text-3xl font-black text-white">
                            Frame House
                        </h1>
                        <span className="text-xs tracking-[0.3em] uppercase text-white/60">
                            Creative
                        </span>
                    </a>

                    {/* DESKTOP NAV */}
                    <nav className="hidden lg:flex justify-center">
                        <div className="flex items-center gap-1 px-2 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl">
                            {navLinks.map((link, index) => (
                                <a
                                    key={`desktop-nav-${index}`}
                                    href={link.href}
                                    className="px-4 py-2 rounded-full text-sm text-white/70 hover:text-white hover:bg-white/10 transition"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </nav>

                    {/* CTA DESKTOP */}
                    <div className="hidden lg:flex justify-end">
                        <button 
                            type="button" 
                            onClick={() => setIsModalOpen(true)}
                            className="group flex items-center gap-2 px-5 py-3 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition"
                        >
                            Hire Us
                            <FaArrowRight className="group-hover:translate-x-1 transition" />
                        </button>
                    </div>

                    {/* MOBILE BUTTON */}
                    <div className="lg:hidden flex justify-end col-span-2">
                        <button
                            type="button"
                            onClick={() => setMobileMenu(!mobileMenu)}
                            className="w-12 h-12 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center text-white"
                            aria-label="Toggle Menu"
                        >
                            {mounted && mobileMenu ? <FaTimes size={18} /> : <FaBars size={18} />}
                        </button>
                    </div>
                </div>

                {/* MOBILE MENU */}
                <div
                    className={`lg:hidden absolute top-full left-0 w-full px-4 transition-all duration-300 ${
                        mounted && mobileMenu
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 -translate-y-4 pointer-events-none"
                    }`}
                >
                    <div className="mt-4 rounded-[2rem] border border-white/10 bg-black/40 backdrop-blur-2xl overflow-hidden">
                        <div className="flex flex-col p-4">
                            {navLinks.map((link, index) => (
                                <a
                                    key={`mobile-nav-${index}`}
                                    href={link.href}
                                    onClick={() => setMobileMenu(false)}
                                    className="px-4 py-3 rounded-xl text-white/70 hover:text-white hover:bg-white/10 transition"
                                >
                                    {link.name}
                                </a>
                            ))}

                            <button 
                                type="button" 
                                onClick={() => {
                                    setMobileMenu(false);
                                    setIsModalOpen(true);
                                }}
                                className="mt-4 flex items-center justify-center gap-2 px-5 py-4 rounded-2xl bg-white text-black font-semibold"
                            >
                                Hire Us
                                <FaArrowRight />
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* CONTACT MODAL WINDOW LAYER */}
            {mounted && (
                <div
                    className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-all duration-300 ${
                        isModalOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
                >
                    <div 
                        className="absolute inset-0 bg-black/70 backdrop-blur-md"
                        onClick={() => setIsModalOpen(false)}
                    />

                    <div 
                        className={`relative w-full max-w-lg rounded-[2.5rem] border border-white/10 bg-neutral-900/95 p-6 md:p-8 shadow-2xl transition-all duration-300 transform ${
                            isModalOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-4"
                        }`}
                    >
                        <button
                            type="button"
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-6 right-6 w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition"
                            aria-label="Close Modal"
                        >
                            <FaTimes size={16} />
                        </button>

                        <div className="mb-6">
                            <h3 className="text-2xl font-bold text-white">Let's build something together</h3>
                            <p className="text-white/50 text-sm mt-1">Choose your preferred method to start a conversation.</p>
                        </div>

                        <div className="space-y-3">
                            {contactOptions.map((option, index) => (
                                <a
                                    key={`contact-opt-${index}`}
                                    href={option.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-4 rounded-2xl border border-white/5 bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/20 transition duration-200 group"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-105 transition duration-200">
                                        {option.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-base font-semibold text-white/90">{option.name}</h4>
                                        <p className="text-xs text-white/40 mt-0.5">{option.description}</p>
                                    </div>
                                    <FaArrowRight className="text-white/20 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 group-hover:text-white/60 transition duration-200 text-sm" />
                                </a>
                            ))}
                        </div>

                        <div className="mt-6 pt-4 border-t border-white/5 text-center">
                            <p className="text-xs text-white/30">Average reply timeline: under 12 hours</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default NavBar;