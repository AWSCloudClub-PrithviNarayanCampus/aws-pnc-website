import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/lib/providers/QueryProvider";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "AWS Cloud Club Prithvi Narayan Campus",
    template: "%s - AWS Cloud Club Prithvi Narayan Campus"
  },
  description: "A Club Dedicated to Provide Knowledge on Cloud Computing!",
  keywords: [
    "AWS Cloud Club",
    "AWS Cloud Club Pokhara",
    "Prithvi Narayan Camplus",
  ],
  authors: [{ name: "AWS Cloud Club Prithvi Narayan Campus" }],
  openGraph: {
    title: "AWS Cloud Club Prithvi Narayan Campus",
    description: "Your contribution to a better future!",
    url: "https://awscloudclubpnc.vercel.app/",
    siteName: "AWS Cloud Club Prithvi Narayan Campus",
    images: [
      {
        url: "./opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "AWS Cloud Club Prithvi Narayan Campus",
      },
    ],
    type: "website",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <QueryProvider>
          {children}
        </QueryProvider>
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
