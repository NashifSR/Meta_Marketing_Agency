"use client";

import React, { useEffect, useState } from "react";
import { FaBars, FaTimes, FaArrowRight } from "react-icons/fa";

const NavBar = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [visible, setVisible] = useState(true);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "Services", href: "#services" },
        { name: "Work", href: "#portfolio" },
        { name: "About", href: "#about" },
        { name: "Contact", href: "#cta" },
    ];

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 80) {
                setVisible(false); // scroll down → hide
            } else {
                setVisible(true); // scroll up → show
            }

            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
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
                                key={index}
                                href={link.href}
                                className="px-4 py-2 rounded-full text-sm text-white/70 hover:text-white hover:bg-white/10 transition"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </nav>

                {/* CTA */}
                <div className="hidden lg:flex justify-end">
                    <button className="group flex items-center gap-2 px-5 py-3 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition">
                        Hire Us
                        <FaArrowRight className="group-hover:translate-x-1 transition" />
                    </button>
                </div>

                {/* MOBILE BUTTON */}
                <div className="lg:hidden flex justify-end col-span-2">
                    <button
                        onClick={() => setMobileMenu(!mobileMenu)}
                        className="w-12 h-12 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center"
                    >
                        {mobileMenu ? <FaTimes size={18} /> : <FaBars size={18} />}
                    </button>
                </div>
            </div>

            {/* MOBILE MENU */}
            <div
                className={`lg:hidden absolute top-full left-0 w-full px-4 transition-all duration-300 ${
                    mobileMenu
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-4 pointer-events-none"
                }`}
            >
                <div className="mt-4 rounded-[2rem] border border-white/10 bg-black/40 backdrop-blur-2xl overflow-hidden">
                    <div className="flex flex-col p-4">
                        {navLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                onClick={() => setMobileMenu(false)}
                                className="px-4 py-3 rounded-xl text-white/70 hover:text-white hover:bg-white/10 transition"
                            >
                                {link.name}
                            </a>
                        ))}

                        <button className="mt-4 flex items-center justify-center gap-2 px-5 py-4 rounded-2xl bg-white text-black font-semibold">
                            Hire Us
                            <FaArrowRight />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default NavBar;