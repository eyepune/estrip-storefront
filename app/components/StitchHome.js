"use client";

import React, { useEffect } from 'react';

export default function StitchHome() {
    // Simple entry animation
    useEffect(() => {
        const elements = document.querySelectorAll('.bouncy-hover');
        elements.forEach((el, index) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
            setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, 100 * index);
        });
    }, []);

    return (
        <div className="text-on-background">
            {/* TopNavBar */}
            <header className="bg-background dark:bg-background shadow-[0_4px_16px_rgba(0,150,204,0.15)] docked full-width top-0 sticky z-50">
                <nav className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
                    <div className="text-2xl font-black tracking-tighter text-tertiary dark:text-tertiary-fixed-dim flex items-center gap-2">
                        <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
                        e-strip
                    </div>
                    <div className="hidden md:flex gap-8 items-center font-headline text-body-lg font-bold">
                        <a className="text-primary font-bold border-b-4 border-primary pb-1 cursor-pointer active:scale-95 transition-all" href="#">Shop All</a>
                        <a className="text-on-surface-variant hover:text-secondary transition-colors cursor-pointer active:scale-95 transition-all" href="#">Our Mission</a>
                        <a className="text-on-surface-variant hover:text-secondary transition-colors cursor-pointer active:scale-95 transition-all" href="#">Sustainability</a>
                        <a className="text-on-surface-variant hover:text-secondary transition-colors cursor-pointer active:scale-95 transition-all" href="#">Bundles</a>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="material-symbols-outlined text-primary hover:scale-105 transition-transform duration-200 ease-out p-2">search</button>
                        <div className="relative cursor-pointer hover:scale-105 transition-transform duration-200 ease-out">
                            <span className="material-symbols-outlined text-primary">shopping_cart</span>
                            <span className="absolute -top-1 -right-1 bg-tertiary text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">0</span>
                        </div>
                    </div>
                </nav>
            </header>
            <main>
                {/* Hero Section */}
                <section className="relative overflow-hidden bg-tertiary min-h-[600px] flex items-center">
                    <div className="absolute inset-0 opacity-20 pointer-events-none">
                        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary rounded-full blur-[120px]"></div>
                        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-secondary rounded-full blur-[100px]"></div>
                    </div>
                    <div className="container mx-auto px-8 grid md:grid-cols-2 gap-12 items-center relative z-10">
                        <div className="text-white">
                            <h1 className="text-6xl md:text-7xl font-black leading-[1.1] mb-6 tracking-tight">
                                The Future of <br /><span className="text-primary-fixed">Clean is Here</span>
                            </h1>
                            <p className="text-xl md:text-2xl mb-10 opacity-90 font-medium max-w-lg">
                                Powerful, Eco-friendly, and Easy to Use Detergent Sheets. No plastic jugs, no mess, just joy.
                            </p>
                            <button className="bg-primary hover:bg-surface-tint text-white px-10 py-5 rounded-full font-black text-xl pill-shadow-primary bouncy-hover transition-all flex items-center gap-3">
                                SHOP NOW
                                <span className="material-symbols-outlined">arrow_forward</span>
                            </button>
                        </div>
                        <div className="flex justify-center items-center">
                            <div className="relative w-full max-w-md bouncy-hover">
                                <img alt="SmartClean 3X Laundry Detergent Sheets" className="w-full h-auto drop-shadow-2xl rounded-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4_7xb6D0h6kaWhRbdLqEx12I3Jm9uUiWqahZEM-aKVGELrZ8TspyV0P9pZOWpNcgcqIkWZzlO5rBrYJf6zXO4LwE4cCpMNpuVQOMgwLTwYRg3R4_1oKjWJbX8HPnPqafLuZHUc09NVFhdSHJr_zWqGAIjh0f5mveKxi0-z-ewUQGOQbVQJSZs6eBbPTtcLZekKY6Z11jeiruvLMiDtKllbUrVsBH7XnAWEV6FetVoGm-AhTeSNPxIlgDEecf_TuN7YT8QqKQ7IeXd" />
                                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl rotate-3 flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
                                    <div>
                                        <div className="font-black text-on-surface">5-Star Rated</div>
                                        <div className="text-sm text-on-surface-variant">by 10k+ customers</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Shop by Category */}
                <section className="py-24 px-8 max-w-7xl mx-auto">
                    <div className="flex justify-between items-end mb-16">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-black text-on-surface mb-4">Shop by Category</h2>
                            <p className="text-on-surface-variant text-lg">Solutions for every corner of your home.</p>
                        </div>
                        <div className="hidden md:block">
                            <button className="flex items-center gap-2 text-primary font-bold text-lg hover:underline">
                                View all Categories <span className="material-symbols-outlined">chevron_right</span>
                            </button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Laundry */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border-2 border-primary-container group bouncy-hover cursor-pointer">
                            <div className="aspect-square mb-6 overflow-hidden rounded-lg bg-surface-container">
                                <img alt="Laundry Sheets" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4_7xb6D0h6kaWhRbdLqEx12I3Jm9uUiWqahZEM-aKVGELrZ8TspyV0P9pZOWpNcgcqIkWZzlO5rBrYJf6zXO4LwE4cCpMNpuVQOMgwLTwYRg3R4_1oKjWJbX8HPnPqafLuZHUc09NVFhdSHJr_zWqGAIjh0f5mveKxi0-z-ewUQGOQbVQJSZs6eBbPTtcLZekKY6Z11jeiruvLMiDtKllbUrVsBH7XnAWEV6FetVoGm-AhTeSNPxIlgDEecf_TuN7YT8QqKQ7IeXd" />
                            </div>
                            <div className="text-center">
                                <h3 className="text-xl font-black text-primary mb-2">Laundry Sheets</h3>
                                <p className="text-on-surface-variant text-sm mb-6">Powerful &amp; Eco-friendly cleaning for all fabrics.</p>
                                <button className="w-full bg-primary py-3 rounded-full text-white font-bold pill-shadow-primary text-sm tracking-wide">SHOP LAUNDRY</button>
                            </div>
                        </div>
                        {/* Baby */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border-2 border-tertiary-container group bouncy-hover cursor-pointer">
                            <div className="aspect-square mb-6 overflow-hidden rounded-lg bg-surface-container">
                                <img alt="Baby Detergent Sheets" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFSPn6HtCae4MOYwuGsHSvYLe2_KmIt4ojrwaSI3hCCrBLsoE89f-k_aflBN5s8Cy6mAkCp7fYQOxJZppClGS2BVfRIEAEppYAiqwcksiaCYYPIqyfudjOmUZdRakaMN1n8MM6j11Oagp8x5J_yJ8W3sD-Sq7priRHzAagLtLniiGvVrmvxxFJXOxIbXcELAAmHp26OTf0VSrIAZcbSym5wpK2-dbtjhRGnB14plt2poVVh_DbNLDtqGx8ZqSKYG_iN6ClqKqu6Ozs" />
                            </div>
                            <div className="text-center">
                                <h3 className="text-xl font-black text-tertiary mb-2">Baby Laundry</h3>
                                <p className="text-on-surface-variant text-sm mb-6">Gentle &amp; Safe formula for delicate newborn skin.</p>
                                <button className="w-full bg-tertiary py-3 rounded-full text-white font-bold pill-shadow-tertiary text-sm tracking-wide">SHOP BABY</button>
                            </div>
                        </div>
                        {/* Dish */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border-2 border-secondary-container group bouncy-hover cursor-pointer">
                            <div className="aspect-square mb-6 overflow-hidden rounded-lg bg-surface-container">
                                <img alt="Dishwashing Sheets" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmcNmjoXRLGscG3Oktx0wj4CJL1XBXxGLfOlH_YTH_3bj1XcmAoHAzpPqE7l5kOOTD7QVr8CX-ypd8TxjHYrJBe8Rdxzy6F8n1n-rHt2v2Sx6n2luIxxwryaoTZzgOeJOWr10fUpij4fphmx4n12EIy5x59-LZvQoUrb_cXYZEjL-MXnIy7sI2tbA3kRQMqIknb9cfU0kqgzaeY2UxqJ1fh_4E1H1wrJDSPmwLBwKl89yvooRayFlhgsNhKOFaW25kdrx1TLgJ7WOo" />
                            </div>
                            <div className="text-center">
                                <h3 className="text-xl font-black text-secondary mb-2">Dishwashing Sheets</h3>
                                <p className="text-on-surface-variant text-sm mb-6">Grease-Cutting &amp; Clean finish for every plate.</p>
                                <button className="w-full bg-secondary py-3 rounded-full text-white font-bold text-sm tracking-wide shadow-[0_4px_16px_rgba(124,82,170,0.2)]">SHOP DISH</button>
                            </div>
                        </div>
                        {/* Floor */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border-2 border-primary-fixed group bouncy-hover cursor-pointer">
                            <div className="aspect-square mb-6 overflow-hidden rounded-lg bg-surface-container">
                                <img alt="Floor Cleaner Sheets" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJmY6zMhW74VoclvS4xYbRtmGw0n42DWneUKaeLq-bYb9UaU170q_IP2rc8UwLdpbkVsFZytfwSTws15g_rKFq2-RTjwr2j5DxhbytJaykbwDgE3lrrmXisyXYK48rIrGsR9gUoKC71y493kbBQMTHWFDUDhl5TNIQ2-i6cQcAqJKgCmv9ki9aI5EqYBq134iZPTBY_8qbxrtfwr22BHccEF_Pql3vHHn8uZ269PI5VvvBjF13dy4qNzALxPuRFoFLDWvHmgQX5HUp" />
                            </div>
                            <div className="text-center">
                                <h3 className="text-xl font-black text-primary-container mb-2">Floor Cleaner</h3>
                                <p className="text-on-surface-variant text-sm mb-6">Streak-Free &amp; Disinfects all hard floor surfaces.</p>
                                <button className="w-full bg-primary-container py-3 rounded-full text-on-primary-container font-bold text-sm tracking-wide shadow-[0_4px_16px_rgba(240,128,192,0.2)]">SHOP FLOOR</button>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Why e-strip? Section */}
                <section className="bg-secondary-container py-24 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-20 opacity-10">
                        <span className="material-symbols-outlined text-[300px]" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
                    </div>
                    <div className="container mx-auto px-8 relative z-10 text-center">
                        <h2 className="text-4xl md:text-5xl font-black text-on-secondary-container mb-16">Why e-strip?</h2>
                        <div className="grid md:grid-cols-3 gap-12">
                            <div className="bg-white p-12 rounded-xl shadow-xl flex flex-col items-center bouncy-hover">
                                <div className="w-24 h-24 bg-tertiary-fixed rounded-full flex items-center justify-center mb-8">
                                    <span className="material-symbols-outlined text-tertiary text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>water_drop</span>
                                </div>
                                <h4 className="text-2xl font-black text-on-surface mb-4">20x Super Concentrated</h4>
                                <p className="text-on-surface-variant leading-relaxed">A single sheet packs more cleaning power than heavy liquid detergents, minus the water and weight.</p>
                            </div>
                            <div className="bg-white p-12 rounded-xl shadow-xl flex flex-col items-center bouncy-hover">
                                <div className="w-24 h-24 bg-primary-fixed rounded-full flex items-center justify-center mb-8">
                                    <span className="material-symbols-outlined text-primary text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                                </div>
                                <h4 className="text-2xl font-black text-on-surface mb-4">Hypoallergenic &amp; Safe</h4>
                                <p className="text-on-surface-variant leading-relaxed">No harsh chemicals, paraben-free, and phosphate-free. Safe for your most sensitive family members.</p>
                            </div>
                            <div className="bg-white p-12 rounded-xl shadow-xl flex flex-col items-center bouncy-hover">
                                <div className="w-24 h-24 bg-secondary-fixed rounded-full flex items-center justify-center mb-8">
                                    <span className="material-symbols-outlined text-secondary text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>cruelty_free</span>
                                </div>
                                <h4 className="text-2xl font-black text-on-surface mb-4">100% Vegan &amp; Cruelty-Free</h4>
                                <p className="text-on-surface-variant leading-relaxed">Never tested on animals. Plant-based ingredients that are kind to the earth and its inhabitants.</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Bento Promo Section */}
                <section className="py-24 px-8 max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
                        <div className="md:col-span-2 bg-primary rounded-xl p-10 flex flex-col justify-end text-white relative overflow-hidden group">
                            <div className="absolute top-10 right-10 opacity-20 group-hover:scale-110 transition-transform duration-700">
                                <span className="material-symbols-outlined text-[200px]" style={{ fontVariationSettings: "'FILL' 1" }}>recycling</span>
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-4xl font-black mb-4">Zero Waste Packaging</h3>
                                <p className="text-lg opacity-90 max-w-md">Our envelopes are 100% compostable. No plastic jugs ending up in landfills or oceans.</p>
                            </div>
                        </div>
                        <div className="bg-tertiary rounded-xl p-10 flex flex-col justify-between text-white bouncy-hover">
                            <span className="material-symbols-outlined text-5xl">travel_explore</span>
                            <div>
                                <h3 className="text-2xl font-black mb-2">Travel Friendly</h3>
                                <p className="text-sm opacity-90">Lightweight sheets that fit anywhere. Perfect for trips and laundry on the go.</p>
                            </div>
                        </div>
                        <div className="bg-secondary rounded-xl p-10 flex items-center justify-center text-center text-white relative overflow-hidden bouncy-hover">
                            <div className="relative z-10">
                                <div className="text-5xl font-black mb-2">Save 20%</div>
                                <p className="font-bold">On your first subscription box.</p>
                                <button className="mt-6 bg-white text-secondary px-6 py-2 rounded-full font-black text-sm hover:scale-105 transition-transform">JOIN THE CLUB</button>
                            </div>
                        </div>
                        <div className="md:col-span-2 bg-surface-container-highest rounded-xl p-10 flex items-center gap-8 group">
                            <div className="flex-1">
                                <h3 className="text-3xl font-black text-on-surface mb-4 italic">"I'll never go back to liquid jugs again!"</h3>
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                    <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                    <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                    <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                    <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                </div>
                                <p className="text-on-surface-variant font-bold">— Sarah J., Verified Eco-Warrior</p>
                            </div>
                            <div className="w-32 h-32 rounded-full bg-primary-fixed overflow-hidden hidden md:block">
                                <div className="w-full h-full bg-cover" data-alt="A cheerful profile portrait of a woman in her 30s with a bright smile, wearing a clean white t-shirt, set against a vibrant pink studio background with soft lighting, matching the playful candy theme." style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuChXqzxpqWUXPyPrj_YsYqbuxH1piq2LOIUyaGGOzeGt2ZH2r1ESj8g5vN2q-IyOFAM1lmW2I_zkeEZiquPq8RLPobR1Z2CwefeHRXLdOWo7eekcZcwD1N4fm05q6U6vOONyuwP2r6HxQ4ylTXLSsYNd0MZIYG3ixxY3amrTa27E7RN1leCP7j9hsMqC76gnd8veiam0043WG9rzGzSb5t7cY6sQNW0YknawfUduvfp1p_KfwSmGMGjvhLfcjIpwDOhjsgL215VbMX4')" }}></div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            {/* Footer */}
            <footer className="bg-surface-container dark:bg-surface-container-high full-width rounded-t-xl mt-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-12 py-16 w-full max-w-7xl mx-auto">
                    <div className="flex flex-col gap-4">
                        <div className="text-xl font-black text-tertiary">e-strip</div>
                        <p className="text-on-surface-variant font-body text-body-md">Making clean clothes easier for you and better for the planet.</p>
                        <div className="flex gap-4 mt-4">
                            <a className="hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">public</span></a>
                            <a className="hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">alternate_email</span></a>
                            <a className="hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">groups</span></a>
                        </div>
                    </div>
                    <div>
                        <h5 className="text-secondary dark:text-secondary-fixed-dim font-bold mb-6 font-headline">Company</h5>
                        <ul className="flex flex-col gap-3 text-on-surface-variant font-body text-body-md">
                            <li><a className="hover:text-primary transition-colors" href="#">Our Story</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#">Sustainability Report</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#">Blog</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#">Careers</a></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="text-secondary dark:text-secondary-fixed-dim font-bold mb-6 font-headline">Support</h5>
                        <ul className="flex flex-col gap-3 text-on-surface-variant font-body text-body-md">
                            <li><a className="hover:text-primary transition-colors" href="#">Contact Us</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#">Shipping Info</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#">Returns &amp; Refunds</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#">FAQs</a></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="text-secondary dark:text-secondary-fixed-dim font-bold mb-6 font-headline">Stay in the Loop</h5>
                        <p className="text-on-surface-variant text-sm mb-4">Get eco-tips and exclusive offers!</p>
                        <form className="flex gap-2">
                            <input className="bg-white border-none rounded-full px-4 py-2 text-sm w-full focus:ring-2 focus:ring-primary" placeholder="Email address" type="email" />
                            <button className="bg-primary text-white p-2 rounded-full flex items-center justify-center" type="submit">
                                <span className="material-symbols-outlined">send</span>
                            </button>
                        </form>
                    </div>
                </div>
                <div className="border-t border-outline-variant py-8 px-12 flex flex-col md:flex-row justify-between items-center text-on-surface-variant text-sm gap-4">
                    <p>© 2024 e-strip. Clean Clothes, Greener Planet.</p>
                    <div className="flex gap-6">
                        <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
                        <a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
