import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://space-dc.vercel.app"),
  title: "Space DC — Data centers en órbita | Orbital Data Centers",
  description:
    "Space DC lleva data centers al espacio, alimentados por energía solar autosustentable y tokenizables. Cómputo global desde la órbita.",
  keywords: [
    "data center",
    "space",
    "orbital",
    "solar",
    "tokenization",
    "compute",
    "Space DC",
  ],
  openGraph: {
    title: "Space DC — Data centers en órbita",
    description:
      "Cómputo orbital autosustentable, impulsado por el sol y tokenizable.",
    type: "website",
    images: ["/images/helios.jpg"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#03060f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${display.variable} ${body.variable}`}>
      <body className="font-body antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
