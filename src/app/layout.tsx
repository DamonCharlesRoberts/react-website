import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
//import { GeistSans } from "geist/font/sans";
//import { GeistMono } from "geist/font/mono";
//import { Navbar } from "./components/nav";
//import { Analytics } from "@vercel/analytics/react";
//import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./components/footer";
//import { baseUrl } from "./sitemap";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  //metadataBase: new URL(baseUrl),
  //title: {
  //default: "Damon C. Roberts",
  //},
  // ddescription: "This is my portfolio.",
  openGraph: {
    title: "Damon C. Roberts",
    description: "This is my portfolio.",
    // url: baseUrl,
    siteName: "My Portfolio",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        "text-black bg-white dark:text-white dark:bg-black",
        geistSans.variable,
        geistMono.variable,
      )}
    >
      <body className="antialiased ${geistSans.variable} ${geistMono.variable} max-w-xl mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
