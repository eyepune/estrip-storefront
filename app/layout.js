import { CartProvider } from "@/context/CartContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingWidgets from "./components/FloatingWidgets";
import "./globals.css";

import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata = {
  title: "E-strip | Eco-Friendly Cleaning Sheets",
  description: "High-performance, plant-based laundry & cleaning detergent strips. Pre-measured, zero mess, plastic-free packaging. 20x concentrated. Free shipping over ₹599.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`scroll-smooth ${dmSans.variable}`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className="antialiased min-h-screen flex flex-col font-sans bg-white">
        <CartProvider>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <FloatingWidgets />
        </CartProvider>
      </body>
    </html>
  );
}
