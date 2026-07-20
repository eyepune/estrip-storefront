'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, loading, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (
    <div className="bg-background min-h-screen text-on-background selection:bg-primary-fixed selection:text-on-primary-fixed overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden flex items-center justify-center text-center">
        {/* Abstract shapes / Mesh gradient background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 -left-1/4 w-[150%] h-full bg-surface-container-low"></div>
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-fixed rounded-full blur-[100px] opacity-40 mix-blend-multiply"></div>
          <div className="absolute top-40 -left-20 w-80 h-80 bg-tertiary-fixed rounded-full blur-[100px] opacity-40 mix-blend-multiply"></div>
          <div className="absolute -bottom-40 right-1/4 w-96 h-96 bg-secondary-fixed rounded-full blur-[100px] opacity-30 mix-blend-multiply"></div>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block bg-white text-primary font-bold px-6 py-2 rounded-full mb-6 shadow-sm border border-primary/10 tracking-wide uppercase text-sm"
          >
            Get in touch
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-black text-on-surface mb-6 tracking-tight leading-tight"
          >
            We'd love to hear <span className="text-tertiary">from you.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-on-surface-variant font-medium leading-relaxed"
          >
            Whether you have a question about our eco-friendly products, need help with a subscription, or just want to say hi, our team is ready to help!
          </motion.p>
        </div>
      </section>
 
      {/* Main Content */}
      <section className="py-16 md:py-24 px-4 sm:px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-on-surface mb-8">Contact Information</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-fixed/30 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>mail</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-on-surface text-lg mb-1">Email Us</h3>
                    <p className="text-on-surface-variant mb-1 text-sm sm:text-base">We generally respond within 24 hours.</p>
                    <a href="mailto:support@estrip.in" className="text-primary font-black hover:underline text-sm sm:text-base">support@estrip.in</a>
                  </div>
                </div>
 
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-tertiary-fixed/30 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-tertiary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-on-surface text-lg mb-1">Call Us</h3>
                    <p className="text-on-surface-variant mb-1 text-sm sm:text-base">Mon-Fri from 9am to 6pm IST.</p>
                    <a href="tel:+919876543210" className="text-tertiary font-black hover:underline text-sm sm:text-base">+91 98765 43210</a>
                  </div>
                </div>
 
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary-fixed/30 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-secondary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-on-surface text-lg mb-1">HQ Address</h3>
                    <p className="text-on-surface-variant leading-relaxed text-sm sm:text-base">
                      E-Strip Technologies Pvt. Ltd.<br/>
                      123 Green Earth Boulevard, Phase 2<br/>
                      Pune, Maharashtra 411001, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
 
            <div className="bg-surface-container-low p-6 sm:p-8 rounded-2xl border-2 border-outline-variant/30 relative overflow-hidden group">
              <div className="relative z-10">
                <h3 className="text-lg sm:text-xl font-black text-on-surface mb-3">Need quick answers?</h3>
                <p className="text-on-surface-variant font-medium mb-6 text-sm sm:text-base">Check out our comprehensive FAQ section for details on shipping, returns, and subscription management.</p>
                <button className="bg-white text-on-surface border border-outline font-bold py-3 px-6 rounded-full hover:bg-surface-variant transition-colors shadow-sm text-sm sm:text-base">
                  Visit Help Center
                </button>
              </div>
              <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform duration-500">
                <span className="material-symbols-outlined text-[100px]" style={{ fontVariationSettings: "'FILL' 1" }}>help</span>
              </div>
            </div>
          </motion.div>
 
          {/* Right Column: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white p-6 sm:p-10 rounded-3xl candy-shadow-primary border-2 border-primary/10 relative overflow-hidden">
              {status === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center flex flex-col items-center"
                >
                  <div className="w-20 h-20 bg-primary-fixed/30 text-primary rounded-full flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-4xl">check_circle</span>
                  </div>
                  <h3 className="text-3xl font-black text-on-surface mb-4">Message Sent!</h3>
                  <p className="text-on-surface-variant text-lg">Thank you for reaching out. A member of our eco-team will get back to you shortly.</p>
                  <button 
                    onClick={() => {
                      setStatus('idle');
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="mt-8 text-primary font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <h3 className="text-2xl font-black text-on-surface mb-6">Send a Message</h3>
                  
                  <div>
                    <label className="block text-sm font-bold text-on-surface mb-2">Full Name</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full border-2 border-outline-variant bg-surface-container-lowest rounded-xl px-4 py-3 outline-none focus:border-primary focus:bg-white transition-colors"
                      placeholder="Jane Doe"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-on-surface mb-2">Email Address</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full border-2 border-outline-variant bg-surface-container-lowest rounded-xl px-4 py-3 outline-none focus:border-primary focus:bg-white transition-colors"
                      placeholder="jane@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-on-surface mb-2">Subject</label>
                    <input 
                      type="text" 
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      className="w-full border-2 border-outline-variant bg-surface-container-lowest rounded-xl px-4 py-3 outline-none focus:border-primary focus:bg-white transition-colors"
                      placeholder="How can we help?"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-on-surface mb-2">Message</label>
                    <textarea 
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full border-2 border-outline-variant bg-surface-container-lowest rounded-xl px-4 py-3 outline-none focus:border-primary focus:bg-white transition-colors resize-none"
                      placeholder="Write your message here..."
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    disabled={status === 'loading'}
                    className="w-full bg-primary hover:bg-primary-hover text-white font-black py-4 rounded-full text-lg transition-all bouncy-hover pill-shadow-primary disabled:opacity-70 flex items-center justify-center gap-2 mt-4"
                  >
                    {status === 'loading' ? (
                      <span className="material-symbols-outlined animate-spin">refresh</span>
                    ) : (
                      <>
                        Send Message
                        <span className="material-symbols-outlined">send</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
