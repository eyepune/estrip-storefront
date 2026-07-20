

export const metadata = {
  title: 'Checkout | E-strip',
};

export default function PageComponent() {
  return (
    <div className="bg-background min-h-screen text-on-background selection:bg-primary-fixed selection:text-on-primary-fixed">
      
      {/* Desktop View */}
      <div className="hidden md:block">
        <main className="max-w-7xl mx-auto px-6 py-12 lg:py-20">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

<div className="lg:col-span-7 space-y-10">

<div className="flex items-center justify-between relative mb-12">
<div className="absolute top-1/2 left-0 w-full h-1 bg-surface-container-highest -translate-y-1/2 z-0 rounded-full"></div>
<div className="absolute top-1/2 left-0 h-1 bg-primary -translate-y-1/2 z-0 rounded-full transition-all duration-500" id="progress-line" style={{ 'width': '0%' }}></div>
<div className="relative z-10 flex flex-col items-center">
<div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold candy-shadow transition-all" id="step-node-1">1</div>
<span className="text-xs mt-2 font-bold text-primary">Shipping</span>
</div>
<div className="relative z-10 flex flex-col items-center">
<div className="w-10 h-10 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center font-bold transition-all" id="step-node-2">2</div>
<span className="text-xs mt-2 font-bold text-on-surface-variant">Delivery</span>
</div>
<div className="relative z-10 flex flex-col items-center">
<div className="w-10 h-10 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center font-bold transition-all" id="step-node-3">3</div>
<span className="text-xs mt-2 font-bold text-on-surface-variant">Payment</span>
</div>
</div>

<section className="active space-y-6" data-step="1">
<div className="flex items-center gap-3 mb-6">
<span className="material-symbols-outlined text-primary text-3xl">local_shipping</span>
<h2 className="text-3xl font-black tracking-tight">Shipping Information</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-sm font-bold ml-1 text-secondary">First Name</label>
<input className="w-full px-5 py-4 rounded-full border-2 border-surface-container-highest bg-surface-container-lowest focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none" placeholder="Jane" type="text" />
</div>
<div className="space-y-1">
<label className="text-sm font-bold ml-1 text-secondary">Last Name</label>
<input className="w-full px-5 py-4 rounded-full border-2 border-surface-container-highest bg-surface-container-lowest focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none" placeholder="Doe" type="text" />
</div>
<div className="md:col-span-2 space-y-1">
<label className="text-sm font-bold ml-1 text-secondary">Address Line 1</label>
<input className="w-full px-5 py-4 rounded-full border-2 border-surface-container-highest bg-surface-container-lowest focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none" placeholder="123 Eco Lane" type="text" />
</div>
<div className="space-y-1">
<label className="text-sm font-bold ml-1 text-secondary">City</label>
<input className="w-full px-5 py-4 rounded-full border-2 border-surface-container-highest bg-surface-container-lowest focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none" placeholder="Greenfield" type="text" />
</div>
<div className="space-y-1">
<label className="text-sm font-bold ml-1 text-secondary">Postal Code</label>
<input className="w-full px-5 py-4 rounded-full border-2 border-surface-container-highest bg-surface-container-lowest focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none" placeholder="E12 3CO" type="text" />
</div>
</div>
<div className="pt-6">
<button className="w-full md:w-auto px-10 py-4 bg-primary text-white rounded-full font-bold candy-shadow hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 group" onclick="goToStep(2)">
                            Continue to Delivery
                            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
</button>
</div>
</section>

<section className="space-y-6" data-step="2">
<div className="flex items-center gap-3 mb-6">
<span className="material-symbols-outlined text-tertiary text-3xl">electric_bolt</span>
<h2 className="text-3xl font-black tracking-tight">Delivery Method</h2>
</div>
<div className="space-y-4">
<label className="block relative p-6 rounded-lg border-2 border-primary bg-primary-fixed cursor-pointer transition-all hover:bg-primary-fixed-dim">
<input checked="" className="absolute right-6 top-1/2 -translate-y-1/2 w-6 h-6 text-primary focus:ring-primary" name="delivery" type="radio" />
<div className="pr-12">
<span className="block font-bold text-lg text-on-primary-fixed">Eco-Standard Shipping</span>
<span className="block text-sm text-on-primary-fixed-variant">3-5 business days • Carbon Neutral</span>
</div>
<div className="mt-2 font-black text-primary">FREE</div>
</label>
<label className="block relative p-6 rounded-lg border-2 border-surface-container-highest bg-surface-container-lowest cursor-pointer transition-all hover:border-tertiary hover:bg-tertiary-fixed">
<input className="absolute right-6 top-1/2 -translate-y-1/2 w-6 h-6 text-tertiary focus:ring-tertiary" name="delivery" type="radio" />
<div className="pr-12">
<span className="block font-bold text-lg text-on-surface">Express Strips</span>
<span className="block text-sm text-on-surface-variant">Next Day Delivery • Plastic-free courier</span>
</div>
<div className="mt-2 font-black text-tertiary">$5.99</div>
</label>
</div>
<div className="pt-6 flex flex-col md:flex-row gap-4">
<button className="px-8 py-4 bg-surface-container text-on-surface rounded-full font-bold hover:bg-surface-container-highest transition-all flex items-center justify-center gap-2" onclick="goToStep(1)">
<span className="material-symbols-outlined">arrow_back</span>
                            Back
                        </button>
<button className="px-10 py-4 bg-primary text-white rounded-full font-bold candy-shadow hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 group" onclick="goToStep(3)">
                            Continue to Payment
                            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
</button>
</div>
</section>

<section className="space-y-6" data-step="3">
<div className="flex items-center gap-3 mb-6">
<span className="material-symbols-outlined text-secondary text-3xl">payments</span>
<h2 className="text-3xl font-black tracking-tight">Payment Details</h2>
</div>
<div className="p-6 bg-secondary-fixed rounded-lg border-2 border-secondary-container mb-6 flex items-start gap-4">
<span className="material-symbols-outlined text-secondary" style={{ 'fontVariationSettings': '\'FILL\' 1' }}>lock</span>
<p className="text-sm text-on-secondary-fixed-variant leading-relaxed">
                            Your transaction is secured with 256-bit SSL encryption. We never store your full card details on our eco-servers.
                        </p>
</div>
<div className="space-y-4">
<div className="space-y-1">
<label className="text-sm font-bold ml-1 text-secondary">Card Number</label>
<div className="relative">
<input className="w-full px-5 py-4 rounded-full border-2 border-surface-container-highest bg-surface-container-lowest focus:border-secondary focus:ring-4 focus:ring-secondary/10 transition-all outline-none pr-12" placeholder="0000 0000 0000 0000" type="text" />
<span className="material-symbols-outlined absolute right-5 top-1/2 -translate-y-1/2 text-on-surface-variant">credit_card</span>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-sm font-bold ml-1 text-secondary">Expiry Date</label>
<input className="w-full px-5 py-4 rounded-full border-2 border-surface-container-highest bg-surface-container-lowest focus:border-secondary focus:ring-4 focus:ring-secondary/10 transition-all outline-none" placeholder="MM/YY" type="text" />
</div>
<div className="space-y-1">
<label className="text-sm font-bold ml-1 text-secondary">CVV</label>
<input className="w-full px-5 py-4 rounded-full border-2 border-surface-container-highest bg-surface-container-lowest focus:border-secondary focus:ring-4 focus:ring-secondary/10 transition-all outline-none" placeholder="***" type="password" />
</div>
</div>
</div>
<div className="pt-6 flex flex-col md:flex-row gap-4">
<button className="px-8 py-4 bg-surface-container text-on-surface rounded-full font-bold hover:bg-surface-container-highest transition-all flex items-center justify-center gap-2" onclick="goToStep(2)">
<span className="material-symbols-outlined">arrow_back</span>
                            Back
                        </button>
<button className="px-10 py-4 bg-primary text-white rounded-full font-bold candy-shadow hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 group">
                            Complete Purchase ($24.00)
                            <span className="material-symbols-outlined">verified</span>
</button>
</div>
</section>
</div>

<aside className="lg:col-span-5">
<div className="sticky top-28 bg-white p-8 rounded-lg candy-shadow border-2 border-surface-container-low">
<h3 className="text-xl font-black mb-6">Order Summary</h3>
<div className="space-y-6 mb-8">

<div className="flex gap-4">
<div className="w-20 h-20 bg-primary-container/20 rounded-lg overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover" data-alt="A premium packaging box of e-strip laundry detergent strips. The box is minimalist white with vibrant hot pink and purple accents. It sits on a clean, bright marble surface in a high-key sunlit modern laundry room with soft bokeh of plants in the background. Professional studio lighting, playful and clean aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNpkKlSM--88JbxMKIzK1LR4Io2MKsB3zZHe78bGDARaT_-58ftetdJJfT-xWXpcrii8Ek6vMHtFRC8D8BEg0aS3lmSyk8fA9nL8MOCnvtoetyjk6Emw_cyoDs0fwO9nvzrmT3C7SfWeSP1VnWZzCFED6XbKJmN-dOXvAYY5fB8u4QlW5lgEpDidUSkSpeIELnxM-o0P2gJJJ4i9pR6wiajFCR0yqSMhhptHy4P0dL3VJVAtfrFoEi5uUj0XYX1gOtUdFdKYBYQfmI" />
</div>
<div className="flex-grow">
<h4 className="font-bold text-on-surface">e-strip Fresh Linen</h4>
<p className="text-sm text-on-surface-variant">60 Loads • Single Pack</p>
<div className="flex justify-between mt-1">
<span className="text-primary font-black">$24.00</span>
<span className="text-sm font-medium">Qty: 1</span>
</div>
</div>
</div>
</div>
<div className="space-y-3 pt-6 border-t border-surface-container-highest">
<div className="flex justify-between text-sm">
<span className="text-on-surface-variant">Subtotal</span>
<span className="font-bold">$24.00</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-on-surface-variant">Shipping</span>
<span className="text-tertiary font-bold">FREE</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-on-surface-variant">Carbon Offset</span>
<span className="text-secondary font-bold">COVERED</span>
</div>
<div className="flex justify-between text-xl font-black pt-4">
<span className="">Total</span>
<span className="text-primary">$24.00</span>
</div>
</div>
<div className="mt-8 p-4 bg-tertiary-fixed rounded-lg flex items-center gap-3">
<span className="material-symbols-outlined text-tertiary" style={{ 'fontVariationSettings': '\'FILL\' 1' }}>forest</span>
<p className="text-xs font-bold text-on-tertiary-fixed-variant">This purchase plants 1 tree in the Amazon Basin through our reforestation partnership.</p>
</div>
<div className="mt-6 flex justify-center gap-4 grayscale opacity-60">
<span className="material-symbols-outlined text-3xl">lock</span>
<span className="material-symbols-outlined text-3xl">verified_user</span>
<span className="material-symbols-outlined text-3xl">shield</span>
</div>
</div>
</aside>
</div>
</main>
      </div>

      {/* Mobile View */}
      <div className="block md:hidden">
        <main className="max-w-md mx-auto px-4 mt-6 space-y-8">

<section className="space-y-4">
<h2 className="font-display font-bold text-lg text-on-background px-1">Express Checkout</h2>
<div className="grid grid-cols-2 gap-3">
<button className="bg-on-background text-surface rounded-full py-4 flex items-center justify-center gap-2 bouncy-btn shadow-md">
<span className="material-symbols-outlined" style={{ 'fontVariationSettings': '\'FILL\' 1' }}>apps</span>
<span className="font-bold">Pay</span>
</button>
<button className="bg-surface-container-lowest border border-outline-variant text-on-background rounded-full py-4 flex items-center justify-center gap-2 bouncy-btn shadow-sm">
<img className="h-5 w-auto" data-alt="A stylized minimalist icon for Google Pay featuring the four brand colors (blue, red, yellow, green) arranged in a sleek modern design against a clean white background, consistent with a high-end candy-themed mobile UI." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyqGdw0Ez56tfAUJ98poQfKLegZna--TA5AIigzHi-SHuyLs5zeOhV63ixDXxj4BM_FH6BUA7qyokKET3EQkuAi-nOLa9O5kKSo_s6oebt6OM0TSyyVnRPvw7PqNY3PPB1w3N5EJtsV3QxdVXmf3zmIqp3A-8JAnsdqbxX4CF0Akbi0-e27xroACMjluSmc4VgZC0hDmqxcRcwEHt2cYUHBjwPIQd18vxO0I0XmvzMlkn8y-_xPo70_TPhoQED5sMyswYWa93KMYC1" />
<span className="font-bold">Pay</span>
</button>
</div>
<div className="flex items-center gap-4 py-2">
<div className="h-px bg-outline-variant flex-grow"></div>
<span className="text-on-surface-variant text-xs font-bold uppercase tracking-widest">or continue below</span>
<div className="h-px bg-outline-variant flex-grow"></div>
</div>
</section>

<section className="space-y-4">
<div className="flex items-center gap-2 px-1">
<span className="material-symbols-outlined text-secondary">local_shipping</span>
<h2 className="font-display font-bold text-lg">Shipping Details</h2>
</div>
<div className="space-y-3">
<div className="group">
<label className="block text-xs font-bold text-on-surface-variant ml-4 mb-1">Full Name</label>
<input className="w-full bg-surface-container-low border-transparent rounded-full px-6 py-4 text-on-surface placeholder:text-outline focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none" placeholder="e.g. Candy Sweet" type="text" />
</div>
<div className="group">
<label className="block text-xs font-bold text-on-surface-variant ml-4 mb-1">Shipping Address</label>
<div className="relative">
<input className="w-full bg-surface-container-low border-transparent rounded-full px-6 py-4 text-on-surface placeholder:text-outline focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none" placeholder="Street Address" type="text" />
<span className="material-symbols-outlined absolute right-5 top-1/2 -translate-y-1/2 text-primary-container">location_on</span>
</div>
</div>
<div className="grid grid-cols-2 gap-3">
<div>
<label className="block text-xs font-bold text-on-surface-variant ml-4 mb-1">City</label>
<input className="w-full bg-surface-container-low border-transparent rounded-full px-6 py-4 text-on-surface placeholder:text-outline focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none" placeholder="City" type="text" />
</div>
<div>
<label className="block text-xs font-bold text-on-surface-variant ml-4 mb-1">ZIP Code</label>
<input className="w-full bg-surface-container-low border-transparent rounded-full px-6 py-4 text-on-surface placeholder:text-outline focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none" placeholder="10001" type="number" />
</div>
</div>
</div>
</section>

<section className="space-y-4">
<div className="flex items-center gap-2 px-1">
<span className="material-symbols-outlined text-tertiary">speed</span>
<h2 className="font-display font-bold text-lg">Delivery Method</h2>
</div>
<div className="space-y-3">
<label className="relative flex items-center p-4 bg-surface-container-lowest border-2 border-primary rounded-lg candy-shadow cursor-pointer bouncy-btn">
<input checked="" className="hidden" name="delivery" type="radio" />
<div className="flex-grow">
<p className="font-bold text-on-surface">Standard Shipping</p>
<p className="text-sm text-on-surface-variant">3-5 Business Days</p>
</div>
<p className="font-black text-primary">Free</p>
<span className="material-symbols-outlined ml-3 text-primary" style={{ 'fontVariationSettings': '\'FILL\' 1' }}>check_circle</span>
</label>
<label className="relative flex items-center p-4 bg-surface-container-lowest border border-outline-variant rounded-lg cursor-pointer bouncy-btn">
<input className="hidden" name="delivery" type="radio" />
<div className="flex-grow">
<p className="font-bold text-on-surface">Rush Delivery</p>
<p className="text-sm text-on-surface-variant">Next Business Day</p>
</div>
<p className="font-black text-on-surface">$12.99</p>
<span className="material-symbols-outlined ml-3 text-outline-variant">circle</span>
</label>
</div>
</section>

<section className="space-y-4">
<div className="flex items-center gap-2 px-1">
<span className="material-symbols-outlined text-primary">credit_card</span>
<h2 className="font-display font-bold text-lg">Payment</h2>
</div>
<div className="bg-secondary-container rounded-lg p-6 space-y-4 relative overflow-hidden">
<div className="absolute -right-8 -top-8 w-32 h-32 bg-secondary opacity-10 rounded-full"></div>
<div className="space-y-4">
<div>
<label className="block text-xs font-bold text-on-secondary-container mb-1">Card Number</label>
<input className="w-full bg-surface-container-lowest border-transparent rounded-full px-6 py-4 text-on-surface placeholder:text-outline focus:ring-2 focus:ring-secondary focus:border-transparent transition-all outline-none" placeholder="0000 0000 0000 0000" type="text" />
</div>
<div className="grid grid-cols-2 gap-3">
<div>
<label className="block text-xs font-bold text-on-secondary-container mb-1">Expiry</label>
<input className="w-full bg-surface-container-lowest border-transparent rounded-full px-6 py-4 text-on-surface placeholder:text-outline focus:ring-2 focus:ring-secondary focus:border-transparent transition-all outline-none" placeholder="MM/YY" type="text" />
</div>
<div>
<label className="block text-xs font-bold text-on-secondary-container mb-1">CVC</label>
<input className="w-full bg-surface-container-lowest border-transparent rounded-full px-6 py-4 text-on-surface placeholder:text-outline focus:ring-2 focus:ring-secondary focus:border-transparent transition-all outline-none" placeholder="123" type="password" />
</div>
</div>
</div>
</div>
</section>

<section className="p-4 bg-surface-container-high rounded-lg space-y-2">
<div className="flex justify-between text-sm text-on-surface-variant font-medium">
<span className="">Subtotal (2 items)</span>
<span className="">$84.00</span>
</div>
<div className="flex justify-between text-sm text-on-surface-variant font-medium">
<span className="">Shipping</span>
<span className="text-tertiary">Free</span>
</div>
<div className="pt-2 mt-2 border-t border-outline-variant flex justify-between items-center">
<span className="font-bold text-on-background">Total</span>
<span className="font-display font-black text-2xl text-primary">$84.00</span>
</div>
</section>
</main>
      </div>

    </div>
  );
}
