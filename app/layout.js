import "./globals.css";

export const metadata = {
  title: "E-strip | The Future of Clean",
  description: "Eco-friendly, plant-based laundry detergent strips. Pre-measured, zero mess, and plastic-free packaging.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className="antialiased font-sans min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
