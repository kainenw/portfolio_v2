// FILE: app/layout.tsx
// PURPOSE: The root layout for the entire application. Now includes shared UI.

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../Components/Header/Header"; // Adjust path if needed
import Footer from "../Components/Footer/Footer"; // Adjust path if needed
import ClientProvider from "../components/ClientProvider"; // Adjust path if needed

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// This metadata is for the whole site, but can be overridden by pages
export const metadata: Metadata = {
  title: "Kainen White | Product & UX Designer",
  description: "The design portfolio of Kainen White, a product and UX designer creating user-centered digital experiences that drive business growth. View case studies.",
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
        <ClientProvider>
          {/* Skip Links for Accessibility */}
          <a href="#main-content" className="skip-link">Skip to main content</a>
          <a href="#footer" className="skip-link">Skip to footer</a>

          <Header />
          <main id="main-content" role="main">
            {children}
          </main>
          <Footer />
        </ClientProvider>
      </body>
    </html>
  );
}