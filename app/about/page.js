import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'About E-strip | The Future of Clean',
  description: 'Learn about our mission to elevate everyday cleaning while honouring Mother Earth.'
};

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-[#faf7f2] flex flex-col font-sans pt-16">

      {/* Hero Video Section */}
      <header className="relative w-full h-[50vh] sm:h-[70vh] flex items-center justify-center bg-black">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          src="/Family_holding_detergent_sheet_1080p_202607210138.mp4"
        />
        <div className="relative z-10 text-center px-4 sm:px-6">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-6 drop-shadow-lg leading-tight">Our Mission</h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto drop-shadow-md font-medium">
            Strip for the planet. Clean for the future.
          </p>
        </div>
      </header>

      <main className="flex-grow py-16 md:py-24">
        {/* The Story */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 mb-20 md:mb-24 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-[#1a3a36] mb-8">More Than a Business</h2>
          <div className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-600 font-medium space-y-6 md:space-y-8">
            <p>
              For us, eStrip is more than a business. It was born from a deeply rooted passion to elevate everyday cleaning while honouring Mother Earth.
            </p>
            <p>
              We looked at the cleaning aisle and saw a problem: outdated formats that were heavy on the planet. We believe that high-quality performance and planetary responsibility shouldn&apos;t be a choice—they must go hand in hand.
            </p>
            <p className="font-bold text-[#2d5a54]">
              eStrip stands for a future where your home stays brilliantly clean, while the world outside stays beautifully preserved.
            </p>
          </div>
        </section>

        {/* Contact Grid */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Address */}
            <div className="bg-white p-6 sm:p-10 rounded-3xl shadow-xl border border-[#f0ebe1] text-center flex flex-col items-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-[#faf7f2] rounded-full flex items-center justify-center text-[#2d5a54] text-2xl mb-6 shadow-inner">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <h3 className="text-xl font-black text-[#1a3a36] mb-4">Registered Office</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base font-medium">
                Shed No. 6, United Industrial Hub,<br />
                Kathwada Road, Near Hinglajmata Mandir,<br />
                Daskroi, Ahmedabad, Gujarat,<br />
                India – 382430
              </p>
            </div>

            {/* Email */}
            <div className="bg-white p-6 sm:p-10 rounded-3xl shadow-xl border border-[#f0ebe1] text-center flex flex-col items-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-[#faf7f2] rounded-full flex items-center justify-center text-[#2d5a54] text-2xl mb-6 shadow-inner">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <h3 className="text-xl font-black text-[#1a3a36] mb-4">Email Us</h3>
              <p className="text-gray-600 mb-2 text-sm sm:text-base font-medium">For general inquiries & support:</p>
              <a href="mailto:info@estripsolution.com" className="text-[var(--color-primary)] font-black hover:underline text-sm sm:text-base">
                info@estripsolution.com
              </a>
            </div>

            {/* Phone */}
            <div className="bg-white p-6 sm:p-10 rounded-3xl shadow-xl border border-[#f0ebe1] text-center flex flex-col items-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-[#faf7f2] rounded-full flex items-center justify-center text-[#2d5a54] text-2xl mb-6 shadow-inner">
                <i className="fa-solid fa-phone"></i>
              </div>
              <h3 className="text-xl font-black text-[#1a3a36] mb-4">Call Us</h3>
              <p className="text-gray-600 mb-2 text-sm sm:text-base font-medium">Available Mon-Fri, 9AM-6PM</p>
              <a href="tel:+919558877337" className="text-[var(--color-primary)] font-black hover:underline block mb-1 text-sm sm:text-base">
                +91 9558877337 (Kishan)
              </a>
              <a href="tel:09099515661" className="text-[var(--color-primary)] font-black hover:underline block text-sm sm:text-base">
                090995 15661
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
