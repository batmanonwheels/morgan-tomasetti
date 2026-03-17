import { Header } from "@/components/header";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const zenithaClassic = localFont({
  src: "./../fonts/ZenithaClassic.woff2",
  variable: "--font-zenitha-classic",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Morgan Tomasetti",
  description: "Actress",
  openGraph: {
    title: "Morgan Tomasetti",
    description: "Actress",
    images: "",
  },
  metadataBase: new URL("https://morgantomasetti.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
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
        className={`${zenithaClassic.variable}${geistSans.variable} ${geistMono.variable} antialiased min-h-[calc(100dvh)]`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
