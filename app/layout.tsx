import type { Metadata } from "next";
import { Geologica, Manrope } from "next/font/google";

import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { siteConfig } from "@/config/site";

import "./globals.css";

const metadataBase = new URL(siteConfig.url);

const manrope = Manrope({
  subsets: ["cyrillic", "latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
});

const geologica = Geologica({
  subsets: ["cyrillic", "latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: "2К Digital — разработка сайтов под ключ",
    template: "%s | 2К Digital",
  },
  description:
    "Современная веб-студия: сайты под ключ, техническая поддержка, аналитика и базовая SEO-оптимизация для бизнеса.",
  applicationName: "2К Digital",
  authors: [{ name: "2К Digital" }],
  keywords: [
    "создание сайтов",
    "веб-студия",
    "лендинг",
    "корпоративный сайт",
    "интернет-магазин",
    "SEO",
    "Next.js",
  ],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "2К Digital — сайты, которые помогают бизнесу получать клиентов",
    description:
      "Разработка современных сайтов под ключ: дизайн, программирование, запуск, аналитика и базовая SEO-оптимизация.",
    url: siteConfig.url,
    siteName: "2К Digital",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "2К Digital — коммерческие сайты под ключ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "2К Digital — разработка сайтов под ключ",
    description: siteConfig.description,
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" data-scroll-behavior="smooth" className={`${manrope.variable} ${geologica.variable}`}>
      <body>
        <div className="site-backdrop" aria-hidden="true">
          <div className="site-backdrop__aura" />
          <div className="site-backdrop__grid" />
          <div className="site-backdrop__beam site-backdrop__beam--one" />
          <div className="site-backdrop__beam site-backdrop__beam--two" />
          <div className="site-backdrop__grain" />
        </div>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
