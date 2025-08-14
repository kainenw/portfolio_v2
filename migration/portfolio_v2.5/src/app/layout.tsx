import "./globals.css";
import "./_old-styles_/_Pages.css";
import "./_old-styles_/Homepage.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import ClientProvider from "../Components/ClientProvider";

export const metadata: Metadata = {
  title: "Kainen White | Product & UX Designer",
  description:
    "The design portfolio of Kainen White, a product and UX designer creating user-centered digital experiences that drive business growth. View case studies.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    <html lang="en" data-theme={theme}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ClientProvider>
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          <a href="#footer" className="skip-link">
            Skip to footer
          </a>
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