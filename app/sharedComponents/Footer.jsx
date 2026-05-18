import React from 'react';

const Footer = () => {
    return (
        <footer className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between gap-6 border-t border-white/10">
            <div>
                <h4 className="text-2xl font-bold">Frame House Creative</h4>
                <p className="text-white/50 mt-2 max-w-sm">
                    Modern creative solutions for businesses and individuals.
                </p>
            </div>

            <div className="text-white/60 space-y-2 text-sm md:text-base">
                <p>
                    Email: <a href="mailto:hello@framehousecreative.com" className="hover:text-white transition">hello@framehousecreative.com</a>
                </p>
                <p>
                    Facebook: <a href="https://facebook.com/framehousecreative" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">{"/framehousecreative"}</a>
                </p>
                <p>Available Worldwide</p>
            </div>
        </footer>
    );
};

export default Footer;