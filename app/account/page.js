

export const metadata = {
  title: 'Customer Dashboard | E-strip',
};

export default function PageComponent() {
  return (
    <div className="bg-background min-h-screen text-on-background selection:bg-primary-fixed selection:text-on-primary-fixed">
      
      {/* Desktop View */}
      <div className="hidden md:block">
        <main className="max-w-7xl mx-auto px-6 py-12">

<header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<h1 className="text-5xl font-black tracking-tight text-primary mb-2">Hello, Arjun!</h1>
<p className="text-on-surface-variant text-lg">Welcome back to your green laundry hub. You're making a difference.</p>
</div>
<div className="flex gap-3">
<div className="bg-primary-container px-6 py-3 rounded-full flex items-center gap-2 candy-shadow-primary bouncy-hover cursor-pointer">
<span className="material-symbols-outlined text-on-primary-container" data-icon="stars" style={{ 'fontVariationSettings': '\'FILL\' 1' }}>stars</span>
<span className="font-bold text-on-primary-container">1,240 Points</span>
</div>
</div>
</header>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

<aside className="lg:col-span-3">
<div className="bg-surface-container-low rounded-lg p-6 space-y-2 sticky top-24">
<a className="flex items-center gap-4 px-4 py-3 rounded-full text-primary font-bold border-b-4 border-primary pb-1 bg-primary-fixed transition-all" href="#">
<span className="material-symbols-outlined" data-icon="package">package</span>
<span className="">My Orders</span>
</a>
<a className="flex items-center gap-4 px-4 py-3 rounded-full text-on-surface-variant hover:text-secondary transition-all bouncy-hover" href="#">
<span className="material-symbols-outlined" data-icon="event_repeat">event_repeat</span>
<span className="">Subscriptions</span>
</a>
<a className="flex items-center gap-4 px-4 py-3 rounded-full text-on-surface-variant hover:text-secondary transition-all bouncy-hover" href="#">
<span className="material-symbols-outlined" data-icon="redeem">redeem</span>
<span className="">Rewards</span>
</a>
<a className="flex items-center gap-4 px-4 py-3 rounded-full text-on-surface-variant hover:text-secondary transition-all bouncy-hover" href="#">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
<span className="">Account Settings</span>
</a>
<div className="pt-6 mt-6 border-t border-outline-variant">
<a className="flex items-center gap-4 px-4 py-3 rounded-full text-error hover:bg-error-container transition-all" href="#">
<span className="material-symbols-outlined" data-icon="logout">logout</span>
<span className="">Sign Out</span>
</a>
</div>
</div>
</aside>

<div className="lg:col-span-9 space-y-8">

<section className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="bg-tertiary-container text-on-tertiary-container p-8 rounded-lg relative overflow-hidden candy-shadow-tertiary bouncy-hover">
<div className="relative z-10">
<span className="material-symbols-outlined text-5xl mb-4" data-icon="ecg_heart" style={{ 'fontVariationSettings': '\'FILL\' 1' }}>ecg_heart</span>
<h3 className="text-4xl font-black mb-1">42 kg</h3>
<p className="font-bold opacity-90">Plastic Waste Prevented</p>
</div>
<div className="absolute -right-8 -bottom-8 opacity-20 transform rotate-12">
<span className="material-symbols-outlined text-[120px]" data-icon="eco">eco</span>
</div>
</div>
<div className="bg-secondary-container text-on-secondary-container p-8 rounded-lg relative overflow-hidden candy-shadow-secondary bouncy-hover">
<div className="relative z-10">
<span className="material-symbols-outlined text-5xl mb-4" data-icon="forest" style={{ 'fontVariationSettings': '\'FILL\' 1' }}>forest</span>
<h3 className="text-4xl font-black mb-1">12</h3>
<p className="font-bold opacity-90">Trees Planted This Year</p>
</div>
<div className="absolute -right-8 -bottom-8 opacity-20 transform -rotate-12">
<span className="material-symbols-outlined text-[120px]" data-icon="nature">nature</span>
</div>
</div>
</section>

<section className="space-y-6">
<div className="flex items-center justify-between">
<h2 className="text-2xl font-black text-on-surface">Recent Orders</h2>
<button className="text-secondary font-bold hover:underline">View All History</button>
</div>
<div className="space-y-4">

<div className="bg-surface-container-lowest p-6 rounded-lg candy-shadow-primary border-l-8 border-tertiary flex flex-col md:flex-row md:items-center justify-between gap-6 bouncy-hover">
<div className="flex items-center gap-6">
<div className="w-20 h-20 rounded-lg bg-surface-variant flex items-center justify-center">
<img className="w-16 h-16 object-contain" data-alt="A premium close-up of e-strip laundry detergent sheets in minimalist colorful packaging, vibrant pink and electric blue accents, studio lighting with soft playful shadows, modern clean aesthetic for a sustainability brand." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAe3dvn7uzZSBmkK-M1EO5algf7jmFAJ8mYG7ZQYVbe-D6x0_NK-LOofS5gOjMEo-30_zS-UW289tbHoM9k8vVJ8RT0GkFI-V2OhsmF9KZCYR-jsWpVDssXhh8YJ7JkNNa1lNhiQI2lq_9oC02MwJwghHhLEJTGeIkCA8_DtG6SayNqkjIsfiGgJpG4c02o9x0W4_fReNWhJHWReIEFv26PQx9oMVxBryGVcFxWsVuI77b2KbPwBZXUMuHAm2xLcfKBgV2RUgbMFJDX" />
</div>
<div>
<div className="flex items-center gap-3 mb-1">
<span className="font-black text-lg text-on-surface">Order #ES-98241</span>
<span className="bg-tertiary-fixed text-on-tertiary-fixed-variant text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">In Transit</span>
</div>
<p className="text-on-surface-variant text-sm">Estimated Delivery: <span className="font-bold text-on-surface">Oct 24, 2023</span></p>
</div>
</div>
<div className="flex items-center gap-4">
<button className="bg-tertiary text-white font-bold py-3 px-8 rounded-full candy-shadow-tertiary hover:bg-tertiary/90 transition-all active:scale-95">
                                    Track Package
                                </button>
<button className="p-3 text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined">more_vert</span>
</button>
</div>
</div>

<div className="bg-surface-container-lowest p-6 rounded-lg candy-shadow-primary border-l-8 border-primary flex flex-col md:flex-row md:items-center justify-between gap-6 bouncy-hover opacity-90">
<div className="flex items-center gap-6">
<div className="w-20 h-20 rounded-lg bg-surface-variant flex items-center justify-center">
<img className="w-16 h-16 object-contain" data-alt="Eco-friendly cleaning bundles including e-strips and reusable glass bottles, vibrant purple and pink color scheme, sunny morning kitchen setting, professional product photography with joyful pop energy." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0mjuYmsVFAbcZqNAseMpM7QBap9CtxHaqdz-ObAPFVuOVN0OA4vFB9vFxcbCrW_4pzm-apTXyDXqi3yoBIHfujzPGYv_5OyHXtCC8i3DDhTiO3b_xpD6EfC6oOCplAwnN2yUSGTgAkCf02dTM120tutZcIRhk-vre7BDfexy8hJJM1DowU_JXgrsTH0KVh6oiQfwNlGpPlxT8KSS_KNtH9Dnourtjw-XuHt7eE_b3QEGUyfmjqa7oFOeYPEOdohzui1zEFUUq7RIO" />
</div>
<div>
<div className="flex items-center gap-3 mb-1">
<span className="font-black text-lg text-on-surface">Order #ES-97102</span>
<span className="bg-primary-fixed text-on-primary-fixed-variant text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Delivered</span>
</div>
<p className="text-on-surface-variant text-sm">Arrived on: <span className="font-bold text-on-surface">Oct 12, 2023</span></p>
</div>
</div>
<div className="flex items-center gap-4">
<button className="bg-primary text-white font-bold py-3 px-8 rounded-full candy-shadow-primary hover:bg-primary/90 transition-all active:scale-95">
                                    Buy Again
                                </button>
<button className="p-3 text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined">more_vert</span>
</button>
</div>
</div>
</div>
</section>

<section className="bg-gradient-to-r from-secondary to-primary p-1 rounded-lg candy-shadow-secondary overflow-hidden">
<div className="bg-surface-container-lowest rounded-[calc(1rem-4px)] p-8 flex flex-col md:flex-row items-center gap-8">
<div className="flex-1">
<h3 className="text-3xl font-black text-secondary mb-3">Refer a friend, get $10!</h3>
<p className="text-on-surface-variant mb-6 text-lg">Help us grow our community. For every friend who makes their first purchase, we'll add 1,000 points to your account.</p>
<div className="flex flex-wrap gap-4">
<div className="bg-surface-container px-6 py-3 rounded-full font-mono text-primary font-bold border-2 border-dashed border-primary">
                                    ARJUN-GREEN-24
                                </div>
<button className="bg-secondary text-white font-black py-3 px-8 rounded-full hover:scale-105 transition-transform active:scale-95">
                                    Copy Link
                                </button>
</div>
</div>
<div className="w-48 h-48 hidden md:flex items-center justify-center bg-secondary-container rounded-full shrink-0">
<span className="material-symbols-outlined text-secondary text-8xl" data-icon="celebration" style={{ 'fontVariationSettings': '\'FILL\' 1' }}>celebration</span>
</div>
</div>
</section>
</div>
</div>
</main>
      </div>

      {/* Mobile View */}
      <div className="block md:hidden">
        <main className="px-5 pt-8 space-y-8">

<section className="space-y-4">
<div className="space-y-1">
<h2 className="text-3xl font-display font-black text-on-surface tracking-tight">Hey, Alex! 👋</h2>
<p className="text-on-surface-variant font-medium">Ready to keep the planet clean?</p>
</div>

<div className="relative overflow-hidden rounded-xl bg-primary shadow-[0_8px_24px_rgba(224,64,160,0.25)] p-6 text-on-primary">
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="flex justify-between items-start">
<div className="p-3 bg-white/20 rounded-full">
<span className="material-symbols-outlined text-3xl" style={{ 'fontVariationSettings': '\'FILL\' 1' }}>eco</span>
</div>
<span className="bg-white/20 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Earth Hero</span>
</div>
<div className="mt-8">
<div className="text-5xl font-black">24</div>
<p className="text-lg font-bold opacity-90 leading-tight">Plastic Jugs Saved</p>
<p className="mt-2 text-sm opacity-80 max-w-[200px]">Your eco-swaps have diverted 12kg of waste from oceans this year.</p>
</div>
</div>

<div className="absolute -right-10 -bottom-10 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
<div className="absolute -left-10 -top-10 w-32 h-32 bg-primary-container/30 rounded-full blur-2xl"></div>
</div>
</section>

<section className="grid grid-cols-3 gap-3">
<button className="bouncy bg-surface-container-highest p-4 rounded-xl flex flex-col items-center justify-center text-center space-y-2 shadow-[0_4px_12px_rgba(0,0,0,0.03)] border border-outline-variant/30">
<span className="material-symbols-outlined text-primary text-2xl">local_shipping</span>
<span className="text-[10px] font-bold text-on-surface-variant leading-none">Track Order</span>
</button>
<button className="bouncy bg-surface-container-highest p-4 rounded-xl flex flex-col items-center justify-center text-center space-y-2 shadow-[0_4_12px_rgba(0,0,0,0.03)] border border-outline-variant/30">
<span className="material-symbols-outlined text-secondary text-2xl">calendar_month</span>
<span className="text-[10px] font-bold text-on-surface-variant leading-none">Subscription</span>
</button>
<button className="bouncy bg-surface-container-highest p-4 rounded-xl flex flex-col items-center justify-center text-center space-y-2 shadow-[0_4_12px_rgba(0,0,0,0.03)] border border-outline-variant/30">
<span className="material-symbols-outlined text-tertiary text-2xl">autorenew</span>
<span className="text-[10px] font-bold text-on-surface-variant leading-none">Reorder Fast</span>
</button>
</section>

<section className="space-y-4">
<div className="flex items-center justify-between">
<h3 className="text-xl font-display font-black text-on-surface">Recent Orders</h3>
<button className="text-tertiary text-sm font-bold flex items-center gap-1">View all <span className="material-symbols-outlined text-sm">chevron_right</span></button>
</div>

<div className="bouncy bg-surface-container-lowest rounded-xl p-4 shadow-[0_8px_20px_rgba(0,0,0,0.05)] border border-outline-variant/20 flex gap-4">
<div className="w-20 h-20 rounded-lg overflow-hidden bg-surface-variant shrink-0">
<img className="w-full h-full object-cover" data-alt="Close up photography of eco-friendly laundry detergent strips in a colorful and minimalist packaging. The background is a soft pink pastel color consistent with the vibrant candy brand aesthetic, featuring bright soft studio lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7WZ-wgLet1vv8_PL9Xe5b5Tdbd4NXOL_AzJ3kXoWqpYN0LvrhOlASGiX9PAbVFQKXVfQgcoqgQuU4qlJSbNfBvmL9ZNRaz4N5e7wBTj_BbJrmN9F-h0jlWOnxgA0g2BxlX_sJSUXiR3w6xT5fVDgNdviqNlJtMtIAwlteYeC7Scfv__-P85I34fxGvifrJgtTPsQZ_YFqO7qScZ8TjaD_hQQZT88EKxf7VXuYgrQgrMMpPBP35-0XH5Yp68cOf1ESkO0ydG3Fkj0y"/>
</div>
<div className="flex-1 flex flex-col justify-between">
<div>
<div className="flex justify-between items-start">
<h4 className="font-bold text-on-surface leading-tight">Fresh Linen Strips (60pk)</h4>
<span className="bg-tertiary-container text-on-tertiary-container text-[10px] px-2 py-0.5 rounded-full font-black uppercase">Out for Delivery</span>
</div>
<p className="text-xs text-on-surface-variant mt-1">Order #88291 • $19.99</p>
</div>
<div className="flex gap-2 mt-2">
<button className="flex-1 bg-primary text-white text-[11px] font-bold py-1.5 rounded-full shadow-[0_4px_10px_rgba(224,64,160,0.2)]">Track</button>
<button className="px-3 bg-surface-variant text-on-surface-variant rounded-full"><span className="material-symbols-outlined text-sm leading-none">more_horiz</span></button>
</div>
</div>
</div>

<div className="bouncy bg-surface-container-lowest rounded-xl p-4 shadow-[0_8px_20px_rgba(0,0,0,0.05)] border border-outline-variant/20 flex gap-4">
<div className="w-20 h-20 rounded-lg overflow-hidden bg-surface-variant shrink-0">
<img className="w-full h-full object-cover" data-alt="Macro shot of a variety of colorful eco-friendly cleaning tablets in vibrant sky blue and deep purple hues. The scene is bright and joyful, matching the playfulness of a candy-inspired design system with glossy textures and soft-focus backgrounds." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAjNAK81_istJg4QOFkpnAmXhDDa1zxWdwilPyCNo9haw4dZo6zUFB9ELnm1D5GNZIZP059g_Io0_RdM41vFQalwoxZq7u9CqJWE5Ic3g10BhXwONCyhkxMWTTxeMm055O9bTP8vsUVMU1ScBQN0jKj5Zn9yG5lDqT7X-ZncLnFR5kWqcCWywq1iiGzfqKliYtgvp6fsIN2bpb3skInZyFJ1vl8t1GHavVZZBgM-kVARiqiOr_N6Oqt3udEFvo9mXMF1ptCmk42Sh_"/>
</div>
<div className="flex-1 flex flex-col justify-between">
<div>
<div className="flex justify-between items-start">
<h4 className="font-bold text-on-surface leading-tight">Multi-Surface Pods (12pk)</h4>
<span className="bg-surface-variant text-on-surface-variant text-[10px] px-2 py-0.5 rounded-full font-black uppercase">Delivered</span>
</div>
<p className="text-xs text-on-surface-variant mt-1">Order #88245 • $14.50</p>
</div>
<button className="mt-2 w-fit border-2 border-primary text-primary text-[11px] font-bold px-4 py-1 rounded-full">Buy Again</button>
</div>
</div>
</section>

<section className="bg-secondary-container/40 border-2 border-dashed border-secondary/30 rounded-xl p-6 flex items-center justify-between">
<div className="space-y-1">
<h4 className="font-display font-black text-secondary">Next refill arrives in 5 days</h4>
<p className="text-xs text-on-secondary-container">Monthly eco-box is on its way!</p>
</div>
<span className="material-symbols-outlined text-secondary text-3xl">autopay</span>
</section>
</main>
      </div>

    </div>
  );
}
