import React from "react";

const Hero = () => {
    return (
        <section 
            id="home"
            className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center scroll-mt-24 md:scroll-mt-28 lg:scroll-mt-32"
        >

            {/* LEFT SIDE */}
            <div>

                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-lg text-xs text-white/60 mb-6">
                    Creative Agency {"\u2022"} Design {"\u2022"} Editing {"\u2022"} Web
                </div>

                {/* Heading */}
                <h2 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight">
                    Modern Creative
                    <span className="block text-white/50">
                        Experiences
                    </span>
                </h2>

                {/* Description */}
                <p className="mt-6 text-base md:text-lg text-white/60 leading-relaxed max-w-xl">
                    <span className="font-bold text-2xl text-white">Frame House Creative </span>helps businesses and creators build premium visuals,
                    branding, and modern digital experiences.
                </p>

                {/* Buttons */}
                <div className="mt-8 flex flex-wrap gap-3">

                    <button className="px-6 py-3 rounded-2xl bg-white text-black font-medium hover:scale-105 transition">
                        Start Project
                    </button>

                    <button className="px-6 py-3 rounded-2xl border border-white/10 bg-white/5 text-white/70 hover:bg-white/10 transition">
                        View Work
                    </button>

                </div>

            </div>

            {/* RIGHT SIDE */}
            <div className="relative">

                <div className="rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-6">

                    {/* Main Image */}
                    <div className="aspect-video rounded-2xl overflow-hidden border border-white/10">
                        <img
                            src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1600&auto=format&fit=crop"
                            alt="Creative Work"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Caption Overlay */}
                    <div className="mt-5 text-center">
                        <h3 className="text-lg md:text-xl font-semibold text-white/80">
                            Creative That Converts
                        </h3>
                        <p className="text-white/50 text-sm mt-1">
                            Design {"\u2022"} Branding {"\u2022"} Web Experience
                        </p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 mt-6">

                        <div className="rounded-2xl bg-white/5 border border-white/10 p-4 text-center">
                            <h4 className="text-xl font-semibold">100+</h4>
                            <p className="text-white/50 text-xs mt-1">Projects</p>
                        </div>

                        <div className="rounded-2xl bg-white/5 border border-white/10 p-4 text-center">
                            <h4 className="text-xl font-semibold">24/7</h4>
                            <p className="text-white/50 text-xs mt-1">Support</p>
                        </div>

                    </div>

                </div>
            </div>

        </section>
    );
};

export default Hero;