import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 1. Viewport Settings (Good for mobile responsiveness)
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#182257", // Your brand color from the screenshots
};

export const metadata: Metadata = {
  // 2. Base URL: CHANGE THIS to your real domain when you deploy!
  metadataBase: new URL("https://xenbird-landing-page.vercel.app/"),

  // 3. Smart Title Template
  title: {
    default: "Xenbird", // Shows on Home Page
    template: "%s | Xenbird", // Shows on other pages like "About | Xenbird"
  },
  description: "Launch your custom-coded eCommerce site in days.",

  // 4. Open Graph (For WhatsApp, Facebook, LinkedIn)
  openGraph: {
    title: "Xenbird",
    description: "Launch your custom-coded eCommerce site in days.",
    url: "https://xenbird-landing-page.vercel.app/",
    siteName: "Xenbird",
    images: [
      {
        url: "/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "Xenbird Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // 5. Twitter Card (Crucial for Twitter/X)
  twitter: {
    card: "summary_large_image",
    title: "Xenbird",
    description: "Launch your custom-coded eCommerce site in days.",
    images: ["/og-image.jpg"],
    creator: "@xenbird", 
  },

  // 6. Icons (Favicon in browser tab)
  icons: {
    icon: "/favicon.ico",
  },
  
  // 7. Robots (SEO)
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}