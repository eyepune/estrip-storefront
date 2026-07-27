const fs = require('fs');
const path = require('path');

const pages = [
  // Shop
  { path: 'shop/laundry-sheets', title: 'Laundry Detergent Sheets', category: 'Shop' },
  { path: 'shop/floor-cleaner', title: 'Floor Cleaner Sheets', category: 'Shop' },
  { path: 'shop/dishwashing-sheets', title: 'Dishwashing Sheets', category: 'Shop' },
  { path: 'shop/stain-remover-spray', title: 'Stain Remover Spray', category: 'Shop' },
  
  // Company
  { path: 'about', title: 'About Us', category: 'Company' },
  { path: 'sustainability', title: 'Our Sustainability Mission', category: 'Company' },
  { path: 'contact', title: 'Contact Support', category: 'Company' },
  { path: 'wholesale', title: 'Wholesale & B2B', category: 'Company' },
  
  // Legal
  { path: 'policies/privacy', title: 'Privacy Policy', category: 'Legal' },
  { path: 'policies/terms', title: 'Terms of Service', category: 'Legal' },
  { path: 'policies/refund', title: 'Refund Policy', category: 'Legal' }
];

const appDir = path.join(__dirname, '..', 'app');

pages.forEach(page => {
  const dirPath = path.join(appDir, page.path);
  
  // Create directories if they don't exist
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  // Create page.js
  const filePath = path.join(dirPath, 'page.js');
  
  const content = `import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: '${page.title} | E-strip',
  description: 'Learn more about ${page.title} at E-strip.'
};

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Simple Header for Subpages */}
      <nav className="glass-nav bg-white/95 shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="logo block relative w-24 h-10">
            <Image src="https://estrip.in/cdn/shop/files/Primary-Logo_Blue-scaled_1.png?v=1777612281" alt="E-strip Logo" fill className="object-contain" sizes="96px" priority />
          </Link>
          <div className="hidden md:flex gap-8">
            <Link href="/#features" className="font-medium hover:text-[var(--primary-blue)] transition">Benefits</Link>
            <Link href="/#how-it-works" className="font-medium hover:text-[var(--primary-blue)] transition">How It Works</Link>
            <Link href="/#pricing" className="font-medium hover:text-[var(--primary-blue)] transition">Shop</Link>
            <Link href="/#faq" className="font-medium hover:text-[var(--primary-blue)] transition">FAQ</Link>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/" className="text-[var(--primary-blue)] font-medium">Back to Home &rarr;</Link>
          </div>
        </div>
      </nav>

      <main className="flex-grow pt-24 pb-32">
        <div className="max-w-4xl mx-auto px-6">
          <div className="inline-block px-3 py-1 bg-gray-200 text-gray-700 rounded-full font-semibold text-xs mb-6 uppercase tracking-wider">
            ${page.category}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1a3a36] mb-8">${page.title}</h1>
          
          <div className="prose prose-lg text-gray-600 max-w-none bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
            <p className="lead text-xl mb-6">
              Welcome to the ${page.title} page. This is a premium placeholder page for the E-strip storefront.
            </p>
            <p className="mb-4">
              We are currently in the final stages of integrating our live Shopify Storefront API. Once connected, this page will automatically populate with real-time dynamic data, inventory counts, and rich text descriptions pulled directly from your Shopify admin dashboard.
            </p>
            <div className="mt-12 pt-8 border-t border-gray-100">
              <Link href="/#pricing" className="inline-flex items-center justify-center bg-[var(--primary-blue)] text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-600 transition shadow-lg shadow-blue-500/30">
                Return to Shop
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Simplified Footer */}
      <footer className="bg-black text-white pt-24 pb-12 relative z-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <Image src="https://estrip.in/cdn/shop/files/Primary-Logo_White-scaled_1.png?v=1777612281" alt="E-strip Logo" width={150} height={60} className="mb-6 opacity-90" />
            <p className="text-gray-400 text-sm leading-relaxed pr-4">
              High-quality performance and planetary responsibility shouldn't be a choice—they must go hand in hand.
            </p>
          </div>
          <div>
            <h4 className="font-mono text-sm mb-6 uppercase tracking-widest text-gray-500 font-bold">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} E-strip India. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
`;

  fs.writeFileSync(filePath, content);
  console.log(\`✅ Created \${page.path}/page.js\`);
});

console.log('\\n🚀 Successfully generated all 11 subpages!');
