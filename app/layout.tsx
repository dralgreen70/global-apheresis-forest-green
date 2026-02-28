import type { Metadata } from "next";
import { Cormorant_Garamond, Libre_Franklin } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const franklin = Libre_Franklin({
  variable: "--font-franklin",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Global Apheresis — Therapeutic Apheresis in Mill Valley, CA",
    template: "%s | Global Apheresis",
  },
  description:
    "Pioneering therapeutic apheresis for over 40 years. Led by Dr. Dobri Kiprov. Treatments for Alzheimer's, autoimmune disorders, longevity, and more.",
  metadataBase: new URL("https://globalapheresis.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Global Apheresis",
    images: [
      {
        url: "/images/ga-sphere-only.png",
        width: 512,
        height: 512,
        alt: "Global Apheresis",
      },
    ],
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
        className={`${cormorant.variable} ${franklin.variable} overflow-x-hidden bg-cream font-body text-[1.0625rem] leading-[1.8] text-body`}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
