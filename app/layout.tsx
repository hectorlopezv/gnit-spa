import type { Metadata } from "next";
import { Albert_Sans } from "next/font/google";

import "./globals.css";
import Footer from "@/components/global/footer";

const albertSans = Albert_Sans({
  subsets: ["latin"],
  variable: "--font-albert-sans",
});

export const metadata: Metadata = {
  title: "GNIT ministerio de tecnologia",
  description: "GNIT ministerio de tecnologia colombia",
  icons: [
    {
      rel: "icon",
      href: "/assets/logo.svg",
      url: "/assets/logo.svg",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     <body className={`${albertSans.variable}`}>
      {children}
      <Footer />
      </body>
    </html>
  );
}
