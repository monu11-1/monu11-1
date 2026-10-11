import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { DemoBanner } from "@/components/layout/DemoBanner";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Sagenex Practice Clone | Heritage & Innovation",
  description:
    "Unofficial beginner teaching clone of the public Sagenex homepage. Demo / practice only — no real accounts, payments, or wallets.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <DemoBanner />
        {children}
      </body>
    </html>
  );
}
