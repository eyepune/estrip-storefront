'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function FAQPage() {
  const [activeTab, setActiveTab] = useState('Product');
  const [openFaq, setOpenFaq] = useState(null);

  const categories = ['Product', 'Shipping', 'Subscriptions', 'Returns'];

  const faqs = {
    'Product': [
      { q: "Do E-strip sheets work in cold water?", a: "Yes! Our plant-based enzymes are specifically formulated to dissolve completely and activate in both hot and cold water." },
      { q: "Are they safe for sensitive skin?", a: "Absolutely. We offer a hypoallergenic SoftTouch Baby version, and all our products are free from harsh chemicals, dyes, and optical brighteners." },
      { q: "Can I use them in HE (High Efficiency) machines?", a: "Yes, E-strip sheets are low-sudsing and designed to work perfectly in all machine types, including HE, front loaders, and top loaders." },
      { q: "How many sheets should I use?", a: "One sheet equals one large load (up to 6kg). For smaller loads, you can simply tear the sheet in half." }
    ],
    'Shipping': [
      { q: "How much is shipping?", a: "Shipping is completely FREE on all orders over ₹599 across India." },
      { q: "How long does delivery take?", a: "Orders are processed within 24 hours. Standard delivery takes 3-5 business days depending on your location." },
      { q: "Is your packaging really plastic-free?", a: "Yes! Our boxes are made from 100% recycled cardboard and are fully compostable. We use paper mailers for shipping." }
    ],
    'Subscriptions': [
      { q: "How does the subscription work?", a: "When you subscribe, you save 15% on every order. You choose the delivery frequency (every 1, 2, or 3 months) and we automatically ship it to your door so you never run out." },
      { q: "Can I cancel or pause my subscription?", a: "Yes, you have complete control. You can skip a delivery, pause, or cancel at any time directly from your account portal." },
      { q: "Are there any hidden fees?", a: "None. You only pay for the products you receive, and shipping is always free on subscription orders." }
    ],
    'Returns': [
      { q: "What is your return policy?", a: "We offer a 30-day money-back guarantee. If you're not completely satisfied with your purchase, simply contact us for a full refund." },
      { q: "How do I initiate a return?", a: "Email our support team at hello@estrip.in with your order number, and we'll provide you with a prepaid return label." }
    ]
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-[#f6f6f6] min-h-screen pb-24">
      
      {/* Header */}
      <section className="bg-gray-900 text-white py-20 text-center px-4 relative overflow-hidden">
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">Got Questions?</h1>
          <p className="text-gray-300 font-medium text-lg">Everything you need to know about E-strip and making the switch.</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 -mt-8 relative z-20">
        <div className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden">
          
          {/* Tabs */}
          <div className="flex flex-wrap border-b border-gray-100 bg-gray-50/50">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveTab(cat); setOpenFaq(null); }}
                className={`flex-1 py-5 px-4 font-black text-xs md:text-sm uppercase tracking-widest transition-all border-b-2 ${activeTab === cat ? 'border-[var(--color-primary)] text-gray-900 bg-white' : 'border-transparent text-gray-400 hover:text-gray-900 hover:bg-gray-50'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* FAQ Accordions */}
          <div className="p-4 md:p-8">
            <h2 className="text-2xl font-black text-gray-900 mb-8 tracking-tight">{activeTab} FAQs</h2>
            
            <div className="space-y-4">
              {faqs[activeTab].map((faq, index) => (
                <div key={index} className={`border rounded-xl transition-all ${openFaq === index ? 'border-gray-900 shadow-md bg-white' : 'border-gray-200 bg-gray-50 hover:border-gray-300'}`}>
                  <button 
                    onClick={() => toggleFaq(index)}
                    className="w-full flex justify-between items-center p-5 text-left focus:outline-none"
                  >
                    <span className="font-bold text-gray-900 pr-8">{faq.q}</span>
                    <span className="material-symbols-outlined text-gray-500 shrink-0">
                      {openFaq === index ? 'remove_circle' : 'add_circle'}
                    </span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="p-5 pt-0 text-gray-600 font-medium leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Still need help */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 font-medium mb-4">Can't find what you're looking for?</p>
          <Link href="/contact" className="btn bg-gray-900 text-white hover:bg-[var(--color-primary)] px-8 py-3 rounded-full font-bold text-sm tracking-widest shadow-lg inline-block transition-colors">
            Contact Support
          </Link>
        </div>

      </section>
    </div>
  );
}
