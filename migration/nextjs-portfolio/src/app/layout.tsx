import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kainen White | Product & UX Designer",
  description: "The design portfolio of Kainen White, a product and UX designer creating user-centered digital experiences that drive business growth. View case studies.",
  authors: [{ name: "Kainen White" }],
  keywords: ["UX Design", "Product Design", "UI Design", "Portfolio", "Kainen White"],
  openGraph: {
    title: "Kainen White | Product & UX Designer",
    description: "The design portfolio of Kainen White, a product and UX designer creating user-centered digital experiences that drive business growth. View case studies.",
    url: "https://kainenwhite.com",
    siteName: "Kainen White Portfolio",
    images: [
      {
        url: "https://kainenwhite.com/headshot.webp",
        width: 1200,
        height: 630,
        alt: "Kainen White - Product & UX Designer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kainen White | Product & UX Designer",
    description: "The design portfolio of Kainen White, a product and UX designer creating user-centered digital experiences that drive business growth. View case studies.",
    images: ["https://kainenwhite.com/headshot.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "your-google-site-verification",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Skip links for accessibility */}
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <a href="#footer" className="skip-link">Skip to footer</a>
        
        <Header />
        <main id="main-content" role="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
