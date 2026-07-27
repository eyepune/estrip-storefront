import fs from 'fs';
import path from 'path';

const outDir = process.cwd();
const stitchDir = path.join(outDir, 'stitch_exports');

const pages = [
  {
    route: 'app/account/page.js',
    desktop: 'e_strip_customer_dashboard_desktop__desktop.html',
    mobile: 'e_strip_customer_dashboard_mobile__mobile.html',
    title: 'Customer Dashboard | E-strip'
  },
  {
    route: 'app/shop/page.js',
    desktop: 'e_strip_shop_all_desktop__desktop.html',
    mobile: 'e_strip_shop_all_mobile__mobile.html',
    title: 'Shop All | E-strip'
  },
  {
    route: 'app/products/smartclean-3x/page.js',
    desktop: 'e_strip_smartclean_3x_desktop__desktop.html',
    mobile: 'e_strip_smartclean_3x_mobile__mobile.html',
    title: 'SmartClean 3X | E-strip'
  },
  {
    route: 'app/cart/page.js',
    desktop: 'e_strip_shopping_cart_desktop__desktop.html',
    mobile: 'e_strip_shopping_cart_mobile__mobile.html',
    title: 'Shopping Cart | E-strip'
  },
  {
    route: 'app/checkout/page.js',
    desktop: 'e_strip_checkout_desktop__desktop.html',
    mobile: 'e_strip_checkout_mobile__mobile.html',
    title: 'Checkout | E-strip'
  },
  {
    route: 'app/thank-you/page.js',
    desktop: 'e_strip_thank_you_desktop__desktop.html',
    mobile: 'e_strip_thank_you_mobile__mobile.html',
    title: 'Thank You | E-strip'
  },
  {
    route: 'app/mission/page.js',
    desktop: 'e_strip_our_mission_desktop__desktop.html',
    mobile: 'e_strip_our_mission_mobile__mobile.html',
    title: 'Our Mission | E-strip'
  },
  {
    route: 'app/account/pause-flow/page.js',
    desktop: 'e_strip_pause_flow_discount_offer_desktop__desktop.html',
    mobile: 'e_strip_pause_flow_discount_offer_mobile__mobile.html',
    title: 'Pause Subscription | E-strip'
  }
];

const parseHTML = (fileName) => {
  const filePath = path.join(stitchDir, fileName);
  if (!fs.existsSync(filePath)) return '';
  
  let content = fs.readFileSync(filePath, 'utf-8');
  let bodyMatch = content.match(/<main[\s\S]*?<\/main>/i);
  if (!bodyMatch) bodyMatch = content.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  let html = bodyMatch ? bodyMatch[0] : '';
  
  // Strip out scripts
  html = html.replace(/<script[\s\S]*?<\/script>/gi, '');

  // Convert class to className
  html = html.replace(/class=/g, 'className=');
  
  // Convert style tags to react format
  html = html.replace(/style=\"([^\"]+)\"/g, (match, p1) => {
    let styles = p1.split(';').filter(s => s.trim()).map(s => {
      let [k, v] = s.split(':');
      if(!v) return '';
      k = k.trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
      return `'${k}': '${v.trim().replace(/'/g, "\\'")}'`;
    }).join(', ');
    return `style={{ ${styles} }}`;
  });
  
  // Convert void elements
  html = html.replace(/<img([^>]+[^\/])>/g, '<img$1 />');
  html = html.replace(/<br([^>]+[^\/])>/g, '<br$1 />');
  html = html.replace(/<input([^>]+[^\/])>/g, '<input$1 />');
  html = html.replace(/<hr([^>]+[^\/])>/g, '<hr$1 />');
  
  // Remove conflicting global html/body tags if accidentally captured
  html = html.replace(/<body/g, '<div').replace(/<\/body>/g, '</div>');
  
  // Remove exact "<!-- -->" comments that might break JSX
  html = html.replace(/<!--[\s\S]*?-->/g, '');

  return html;
};

for (const page of pages) {
  console.log(`Generating ${page.route}...`);
  const desktopHtml = parseHTML(page.desktop);
  const mobileHtml = parseHTML(page.mobile);

  const pageContent = `import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

export const metadata = {
  title: '${page.title}',
};

export default function PageComponent() {
  return (
    <div className="bg-background min-h-screen text-on-background selection:bg-primary-fixed selection:text-on-primary-fixed">
      <Navbar />
      
      {/* Desktop View */}
      <div className="hidden md:block">
        ${desktopHtml}
      </div>

      {/* Mobile View */}
      <div className="block md:hidden">
        ${mobileHtml}
      </div>

      <div className="hidden md:block"><Footer /></div>
    </div>
  );
}
`;

  const destPath = path.join(outDir, page.route);
  fs.mkdirSync(path.dirname(destPath), { recursive: true });
  fs.writeFileSync(destPath, pageContent);
}

console.log('Finished generating all Next.js pages from Stitch templates!');
