

export const metadata = {
  title: 'Manage Subscriptions | E-strip',
};

export default function SubscriptionsPage() {
  return (
    <div className="bg-background min-h-screen text-on-background selection:bg-primary-fixed selection:text-on-primary-fixed">
      
      {/* Desktop View */}
      <div className="hidden md:block">
        <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="mb-12">
        <h1 className="text-5xl font-black text-on-surface tracking-tight mb-2">Your Subscriptions</h1>
        <p className="text-on-surface-variant text-lg">Manage your eco-friendly laundry and kitchen deliveries in one place.</p>
        </header>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Active Subscriptions Column */}
        <div className="lg:col-span-2 space-y-8">
        <h2 className="text-2xl font-bold text-on-surface flex items-center gap-2">
        <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
                            Active Subscriptions
                        </h2>
        {/* Subscription Card 1 */}
        <div className="bg-surface-container-lowest rounded-xl p-6 pink-shadow border border-surface-variant flex flex-col md:flex-row gap-6 bouncy-hover">
        <div className="w-full md:w-40 h-40 rounded-lg overflow-hidden bg-surface-variant flex-shrink-0">
        <img alt="SmartClean 3X Laundry Detergent Sheets" className="w-full h-full object-cover" src="https://estrip.in/cdn/shop/files/4_f1f2e1df-6ce4-4869-93e1-e970a24eb798.png?v=1717585098&width=800"/>
        </div>
        <div className="flex-grow space-y-3">
        <div className="flex justify-between items-start">
        <div>
        <h3 className="text-xl font-bold text-on-surface">SmartClean 3X Laundry Sheets</h3>
        <p className="text-secondary font-medium">Frequency: Every 2 months</p>
        </div>
        <span className="bg-primary-fixed text-on-primary-fixed-variant px-3 py-1 rounded-full text-sm font-bold">Active</span>
        </div>
        <div className="grid grid-cols-2 gap-4 py-2 border-y border-surface-variant border-dashed">
        <div>
        <p className="text-xs uppercase tracking-wider text-on-surface-variant font-bold">Next Bill Date</p>
        <p className="font-bold text-on-surface">Oct 14, 2024</p>
        </div>
        <div>
        <p className="text-xs uppercase tracking-wider text-on-surface-variant font-bold">Price</p>
        <p className="font-bold text-on-surface">$19.99</p>
        </div>
        </div>
        <div className="flex flex-wrap gap-3 pt-2">
        <button className="bg-primary text-on-primary px-6 py-2 rounded-full font-bold bouncy-hover pink-shadow text-sm">Edit Frequency</button>
        <button className="bg-secondary-container text-on-secondary-container px-6 py-2 rounded-full font-bold bouncy-hover text-sm">Pause</button>
        <button className="text-on-surface-variant px-4 py-2 font-medium hover:text-error transition-colors text-sm">Cancel Subscription</button>
        </div>
        </div>
        </div>
        {/* Subscription Card 2 */}
        <div className="bg-surface-container-lowest rounded-xl p-6 purple-shadow border border-surface-variant flex flex-col md:flex-row gap-6 bouncy-hover">
        <div className="w-full md:w-40 h-40 rounded-lg overflow-hidden bg-surface-variant flex-shrink-0">
        <img alt="Dishwashing Cleaning Sheets" className="w-full h-full object-cover" src="https://estrip.in/cdn/shop/files/Dish_Front.png?v=1717585869&width=800"/>
        </div>
        <div className="flex-grow space-y-3">
        <div className="flex justify-between items-start">
        <div>
        <h3 className="text-xl font-bold text-on-surface">Dishwashing Cleaning Sheets</h3>
        <p className="text-secondary font-medium">Frequency: Monthly</p>
        </div>
        <span className="bg-secondary-fixed text-on-secondary-fixed-variant px-3 py-1 rounded-full text-sm font-bold">Active</span>
        </div>
        <div className="grid grid-cols-2 gap-4 py-2 border-y border-surface-variant border-dashed">
        <div>
        <p className="text-xs uppercase tracking-wider text-on-surface-variant font-bold">Next Bill Date</p>
        <p className="font-bold text-on-surface">Oct 02, 2024</p>
        </div>
        <div>
        <p className="text-xs uppercase tracking-wider text-on-surface-variant font-bold">Price</p>
        <p className="font-bold text-on-surface">$14.50</p>
        </div>
        </div>
        <div className="flex flex-wrap gap-3 pt-2">
        <button className="bg-secondary text-on-secondary px-6 py-2 rounded-full font-bold bouncy-hover purple-shadow text-sm">Edit Frequency</button>
        <button className="bg-secondary-container text-on-secondary-container px-6 py-2 rounded-full font-bold bouncy-hover text-sm">Pause</button>
        <button className="text-on-surface-variant px-4 py-2 font-medium hover:text-error transition-colors text-sm">Cancel Subscription</button>
        </div>
        </div>
        </div>
        {/* Upcoming Deliveries Section */}
        <div className="mt-12">
        <h2 className="text-2xl font-bold text-on-surface mb-6 flex items-center gap-2">
        <span className="material-symbols-outlined text-tertiary">local_shipping</span>
                                Upcoming Deliveries
                            </h2>
        <div className="bg-surface-container-low rounded-xl p-8 border-2 border-dashed border-outline-variant">
        <div className="flex flex-col md:flex-row items-center gap-8 justify-between">
        <div className="flex gap-4 items-center">
        <div className="bg-tertiary-fixed w-16 h-16 rounded-full flex items-center justify-center">
        <span className="material-symbols-outlined text-tertiary text-3xl">calendar_today</span>
        </div>
        <div>
        <p className="font-black text-on-surface text-xl">Oct 02 Delivery</p>
        <p className="text-on-surface-variant">Includes: Dishwashing Sheets (1x)</p>
        </div>
        </div>
        <button className="bg-on-surface text-surface px-8 py-3 rounded-full font-bold bouncy-hover">Skip This Delivery</button>
        </div>
        </div>
        </div>
        </div>
        {/* Sidebar */}
        <div className="space-y-8">
        {/* Subscription Perks Area */}
        <div className="bg-primary text-on-primary rounded-xl p-8 pink-shadow flex flex-col gap-6">
        <h3 className="text-2xl font-black">Subscription Perks</h3>
        <div className="space-y-6">
        <div className="flex items-start gap-4">
        <div className="bg-white/20 p-2 rounded-lg">
        <span className="material-symbols-outlined">payments</span>
        </div>
        <div>
        <p className="font-bold text-lg">Saved $142.50</p>
        <p className="text-primary-fixed text-sm opacity-90">Total savings since joining the e-strip family.</p>
        </div>
        </div>
        <div className="flex items-start gap-4">
        <div className="bg-white/20 p-2 rounded-lg">
        <span className="material-symbols-outlined">recycling</span>
        </div>
        <div>
        <p className="font-bold text-lg">24kg Plastic Saved</p>
        <p className="text-primary-fixed text-sm opacity-90">Equivalent to 480 single-use laundry jugs.</p>
        </div>
        </div>
        <div className="flex items-start gap-4">
        <div className="bg-white/20 p-2 rounded-lg">
        <span className="material-symbols-outlined">eco</span>
        </div>
        <div>
        <p className="font-bold text-lg">Eco-Warrior Status</p>
        <p className="text-primary-fixed text-sm opacity-90">You are in the top 5% of planet savers!</p>
        </div>
        </div>
        </div>
        </div>
        {/* Bento Quick Actions */}
        <div className="grid grid-cols-2 gap-4">
        <div className="bg-tertiary-fixed text-on-tertiary-fixed-variant p-4 rounded-xl flex flex-col gap-2 cursor-pointer bouncy-hover blue-shadow">
        <span className="material-symbols-outlined">add_circle</span>
        <p className="font-bold">Add Product</p>
        </div>
        <div className="bg-secondary-fixed text-on-secondary-fixed-variant p-4 rounded-xl flex flex-col gap-2 cursor-pointer bouncy-hover purple-shadow">
        <span className="material-symbols-outlined">credit_card</span>
        <p className="font-bold">Payment</p>
        </div>
        <div className="bg-surface-container-high text-on-surface-variant p-4 rounded-xl flex flex-col gap-2 col-span-2 cursor-pointer bouncy-hover">
        <span className="material-symbols-outlined">help</span>
        <p className="font-bold">Subscription Support</p>
        </div>
        </div>
        </div>
        </div>
        </main>
      </div>

      {/* Mobile View */}
      <div className="block md:hidden">
        <main className="px-5 pt-8 pb-10">
        {/* Title Section */}
        <div className="mb-8">
        <h2 className="font-display font-bold text-3xl text-on-background tracking-tight">Manage Subscriptions</h2>
        <p className="text-on-surface-variant mt-2 font-medium">Control your glow. Adjust anytime.</p>
        </div>
        {/* Active Subscription Card */}
        <section className="mb-10">
        <div className="bg-surface-container-lowest rounded-lg p-6 shadow-[0_8px_24px_rgba(224,64,160,0.12)] border-2 border-primary-fixed/30 relative overflow-hidden">
        {/* Status Badge */}
        <div className="absolute top-4 right-4 bg-primary-fixed text-on-primary-fixed-variant text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                            Active
                        </div>
        <div className="flex items-start gap-5 mb-6">
        <div className="w-24 h-24 rounded-lg overflow-hidden bg-primary-fixed/20 flex-shrink-0">
        <img className="w-full h-full object-cover" src="https://estrip.in/cdn/shop/files/4_f1f2e1df-6ce4-4869-93e1-e970a24eb798.png?v=1717585098&width=800" />
        </div>
        <div>
        <h3 className="font-display font-bold text-xl text-on-background">The Morning Spark</h3>
        <p className="text-on-surface-variant text-sm mt-1">30 Daily Strips • Caffeine + B12</p>
        <p className="text-secondary font-bold text-lg mt-1">$24.00 / mo</p>
        </div>
        </div>
        {/* Progress Bar Section */}
        <div className="mb-6 bg-surface-container rounded-lg p-4">
        <div className="flex justify-between items-center mb-3">
        <span className="text-sm font-bold text-on-surface-variant">Next delivery: Oct 24</span>
        <span className="text-xs font-bold text-primary uppercase">12 Days Left</span>
        </div>
        <div className="w-full h-3 bg-white rounded-full overflow-hidden">
        <div className="h-full bg-primary rounded-full shadow-[0_0_12px_rgba(224,64,160,0.4)]" style={{ width: '60%' }}></div>
        </div>
        </div>
        {/* Management Buttons */}
        <div className="grid grid-cols-3 gap-3">
        <button className="bouncy-hover flex flex-col items-center justify-center gap-1 py-3 bg-surface-container-high rounded-full text-on-surface-variant hover:bg-tertiary-fixed-dim transition-colors group">
        <span className="material-symbols-outlined text-xl group-hover:text-on-tertiary-container">fast_forward</span>
        <span className="text-[10px] font-bold uppercase tracking-tight">Skip</span>
        </button>
        <button className="bouncy-hover flex flex-col items-center justify-center gap-1 py-3 bg-surface-container-high rounded-full text-on-surface-variant hover:bg-secondary-fixed transition-colors group">
        <span className="material-symbols-outlined text-xl group-hover:text-on-secondary-container">edit</span>
        <span className="text-[10px] font-bold uppercase tracking-tight">Edit</span>
        </button>
        <button className="bouncy-hover flex flex-col items-center justify-center gap-1 py-3 bg-surface-container-high rounded-full text-on-surface-variant hover:bg-error-container transition-colors group">
        <span className="material-symbols-outlined text-xl group-hover:text-error">pause_circle</span>
        <span className="text-[10px] font-bold uppercase tracking-tight">Pause</span>
        </button>
        </div>
        </div>
        </section>
        {/* Add-ons Section */}
        <section>
        <div className="flex justify-between items-end mb-4">
        <h3 className="font-display font-bold text-xl text-on-background">Add-ons</h3>
        <span className="text-xs font-bold text-tertiary-fixed-variant uppercase">Next Box Only</span>
        </div>
        <div className="space-y-4">
        {/* Add-on Card 1 */}
        <div className="glass-card flex items-center justify-between p-4 rounded-lg border-2 border-white shadow-[0_4px_12px_rgba(0,150,204,0.08)]">
        <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-full overflow-hidden bg-tertiary-fixed/30 border-2 border-white shadow-sm flex-shrink-0">
        <img className="w-full h-full object-cover" src="https://estrip.in/cdn/shop/files/4_f1f2e1df-6ce4-4869-93e1-e970a24eb798.png?v=1717585098&width=800" />
        </div>
        <div>
        <h4 className="font-bold text-sm text-on-background">Sweet Dreams</h4>
        <p className="text-xs text-on-surface-variant font-medium">+$5.00 (5 Strips)</p>
        </div>
        </div>
        <button className="bouncy-hover w-10 h-10 flex items-center justify-center bg-tertiary text-on-tertiary rounded-full shadow-[0_4px_10px_rgba(0,150,204,0.3)]">
        <span className="material-symbols-outlined">add</span>
        </button>
        </div>
        {/* Add-on Card 2 */}
        <div className="glass-card flex items-center justify-between p-4 rounded-lg border-2 border-white shadow-[0_4px_12px_rgba(124,82,170,0.08)]">
        <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-full overflow-hidden bg-secondary-fixed/30 border-2 border-white shadow-sm flex-shrink-0">
        <img className="w-full h-full object-cover" src="https://estrip.in/cdn/shop/files/Dish_Front.png?v=1717585869&width=800" />
        </div>
        <div>
        <h4 className="font-bold text-sm text-on-background">Travel Tin</h4>
        <p className="text-xs text-on-surface-variant font-medium">+$8.00 (Limited Ed.)</p>
        </div>
        </div>
        <button className="bouncy-hover w-10 h-10 flex items-center justify-center bg-secondary text-on-secondary rounded-full shadow-[0_4px_10px_rgba(124,82,170,0.3)]">
        <span className="material-symbols-outlined">add</span>
        </button>
        </div>
        </div>
        </section>
        {/* Help Section (Subtle) */}
        <div className="mt-12 text-center p-6 bg-primary-fixed/10 rounded-lg">
        <p className="text-sm font-medium text-on-surface-variant">Need to cancel entirely?</p>
        <button className="mt-2 text-primary font-bold text-sm underline decoration-2 underline-offset-4">Manage Account Settings</button>
        </div>
        </main>
      </div>

    </div>
  );
}
