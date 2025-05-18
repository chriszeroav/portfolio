import type { Metadata } from "next";
import { Cabin, Overlock, Assistant } from "next/font/google";
import "./globals.css";
import { Background } from "@/components/utils";
import { Footer, Header } from "@/components/layout";

const cabin = Cabin({
  variable: "--font-cabin",
  subsets: ["latin"],
  weight: ["700"],
});

const overlock = Overlock({
  variable: "--font-overlock",
  subsets: ["latin"],
  weight: ["700"],
});

const assistant = Assistant({
  variable: "--font-assistant",
  subsets: ["latin"],
  weight: ["600"],
});

export const metadata: Metadata = {
  title: "Christopher | Desarrollador Web Frontend",
  description:
    "Ingeniero en Sistemas especializado en desarrollo web frontend con 2 años de experiencia utilizando Next.js, React, y Tailwind CSS.",
  keywords: [
    "Christopher",
    "Desarrollador Frontend",
    "Portafolio Web",
    "Next.js",
    "React",
    "Tailwind CSS",
    "Ingeniero en Sistemas",
    "Desarrollo Web",
    "Frontend Developer",
  ],
  openGraph: {
    title: "Christopher | Desarrollador Web Frontend",
    description:
      "Desarrollador frontend especializado en Next.js y Tailwind CSS.",
    url: "https://chrisze.com",
    siteName: "Christopher | Desarrollador Web Frontend",
    locale: "es_ES",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Christopher | Desarrollador Web Frontend",
    description: "Experto en desarrollo web con Next.js y Tailwind CSS.",
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${cabin.variable} ${overlock.variable} ${assistant.variable} antialiased`}
      >
        <Background />
        <div className="grid grid-rows-[auto_1fr_auto] min-h-dvh text-custom-seconday">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
