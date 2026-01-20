import type { Metadata } from "next";
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

export const metadata: Metadata = {
  // 1. Base URL: Change this to your actual domain when you deploy (e.g., https://xenbird.com)
  metadataBase: new URL("https://xenbird-landing-page.vercel.app/"), 

  title: "Xenbird - Custom eCommerce", 
  description: "Launch your custom-coded eCommerce site in days.",

  // 2. Open Graph (Social Media Preview)
  openGraph: {
    title: "Xenbird - Custom eCommerce",
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
    type: "website",
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