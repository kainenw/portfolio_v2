"use client";

import "./globals.css";
import "./_old-styles_/_Pages.css";
import "./_old-styles_/Homepage.css";
import { useContext, useEffect } from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import ClientProvider from "../Components/ClientProvider";
import { ThemeContext } from "../context/ThemeContext";



export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { theme } = useContext(ThemeContext);

  // keep <html data-theme> in sync after hydration
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <html lang="en" data-theme={theme}>
      <body className="antialiased">
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