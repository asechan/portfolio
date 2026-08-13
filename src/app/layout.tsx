import type { Metadata } from "next";
import { Outfit, Manrope } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Asechan Chib - Portfolio",
  description: "Full-Stack & ML Developer",
};

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import NoiseOverlay from "@/components/NoiseOverlay";
import { SmoothCursor } from "@/components/SmoothCursor";
import SmoothScroll from "@/components/SmoothScroll";
import { ThemeProvider } from "@/components/ThemeProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${manrope.variable}`} suppressHydrationWarning>
      <body className="antialiased min-h-screen bg-transparent text-foreground font-sans overflow-x-hidden selection:bg-accent-sage/30 selection:text-foreground flex flex-col relative">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <SmoothScroll>
            <NoiseOverlay />
            <Navigation />
            <SmoothCursor />
            <main className="flex-grow pt-32 px-6 md:px-12 w-full max-w-7xl mx-auto relative z-10">
              {children}
            </main>
            <div className="relative z-10 w-full max-w-7xl mx-auto">
              <Footer />
            </div>
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
