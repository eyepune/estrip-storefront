'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Message sent! We will get back to you within 24 hours.');
    e.target.reset();
  };

  return (
    <div className="bg-[#f6f6f6] min-h-screen pb-24">
      
      {/* Header */}
      <section className="bg-gray-900 text-white py-20 text-center px-4 relative overflow-hidden">
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">Let's talk.</h1>
          <p className="text-gray-300 font-medium text-lg">We're here to help with orders, subscriptions, or general inquiries.</p>
        </div>
      </section>

      {/* Main Split Content */}
      <section className="max-w-7xl mx-auto px-4 -mt-10 relative z-20">
        <div className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden flex flex-col md:flex-row">
          
          {/* Left Column: Contact Details & Quick Links */}
          <div className="w-full md:w-5/12 bg-gray-50 p-10 md:p-16 border-r border-gray-100 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-8 tracking-tight">Get in touch</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0 border border-gray-200">
                    <span className="material-symbols-outlined text-gray-900 text-[20px]">email</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm uppercase tracking-widest mb-1">Email Us</h4>
                    <p className="text-gray-600 font-medium mb-1">hello@estrip.in</p>
                    <p className="text-xs text-gray-400 font-bold">24-48 hr response time</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0 border border-gray-200">
                    <span className="material-symbols-outlined text-gray-900 text-[20px]">location_on</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm uppercase tracking-widest mb-1">HQ Address</h4>
                    <p className="text-gray-600 font-medium leading-relaxed">
                      E-strip Eco Solutions<br/>
                      123 Green Valley Tech Park<br/>
                      Pune, Maharashtra 411057
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-gray-200">
              <h4 className="font-black text-gray-900 text-xs uppercase tracking-widest mb-4">Quick Links</h4>
              <div className="flex flex-col gap-3">
                <Link href="/faq" className="font-bold text-sm text-[var(--color-primary)] hover:underline flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">help</span> View FAQs
                </Link>
                <Link href="/account" className="font-bold text-sm text-[var(--color-primary)] hover:underline flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">person</span> Manage Subscription
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="w-full md:w-7/12 p-10 md:p-16">
            <h2 className="text-2xl font-black text-gray-900 mb-8 tracking-tight">Send a message</h2>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-black tracking-widest uppercase text-gray-500">First Name</label>
                  <input required type="text" className="border-2 border-gray-200 rounded-lg px-4 py-3 font-medium text-gray-900 focus:outline-none focus:border-gray-900 transition-colors" placeholder="Jane" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-black tracking-widest uppercase text-gray-500">Last Name</label>
                  <input required type="text" className="border-2 border-gray-200 rounded-lg px-4 py-3 font-medium text-gray-900 focus:outline-none focus:border-gray-900 transition-colors" placeholder="Doe" />
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-xs font-black tracking-widest uppercase text-gray-500">Email Address</label>
                <input required type="email" className="border-2 border-gray-200 rounded-lg px-4 py-3 font-medium text-gray-900 focus:outline-none focus:border-gray-900 transition-colors" placeholder="jane@example.com" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-black tracking-widest uppercase text-gray-500">Order Number (Optional)</label>
                <input type="text" className="border-2 border-gray-200 rounded-lg px-4 py-3 font-medium text-gray-900 focus:outline-none focus:border-gray-900 transition-colors" placeholder="#ES10492" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-black tracking-widest uppercase text-gray-500">How can we help?</label>
                <textarea required rows="4" className="border-2 border-gray-200 rounded-lg px-4 py-3 font-medium text-gray-900 focus:outline-none focus:border-gray-900 transition-colors resize-none" placeholder="Write your message here..."></textarea>
              </div>

              <button type="submit" className="btn bg-gray-900 hover:bg-[var(--color-primary)] text-white h-[60px] rounded-[9999px] font-black text-sm tracking-widest uppercase shadow-lg transition-all hover:-translate-y-1 mt-2">
                Send Message
              </button>
              
              {status && (
                <div className="bg-emerald-50 text-emerald-700 font-bold text-sm px-4 py-3 rounded-lg flex items-center gap-2 border border-emerald-100">
                  <span className="material-symbols-outlined text-[18px]">check_circle</span>
                  {status}
                </div>
              )}
            </form>
          </div>

        </div>
      </section>
    </div>
  );
}
