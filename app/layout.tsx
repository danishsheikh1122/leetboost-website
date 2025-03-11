import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LeetBoost - Smart Companion for Coding Interviews",
  description:
    "LeetBoost helps you crack coding interviews with AI-powered insights, code complexity analysis, and comprehensive tracking tools.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png", // Optional for Apple devices
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "LeetBoost - Smart Companion for Coding Interviews",
    description:
      "LeetBoost helps you crack coding interviews with AI-powered insights, code complexity analysis, and comprehensive tracking tools.",
    url: "https://leetboost.live",
    siteName: "LeetBoost",
    images: [
      {
        url: "/icon.png",
        width: 1200,
        height: 630,
        alt: "LeetBoost - Smart Companion for Coding Interviews",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LeetBoost - Smart Companion for Coding Interviews",
    description:
      "LeetBoost helps you crack coding interviews with AI-powered insights, code complexity analysis, and comprehensive tracking tools.",
    images: ["/icon.png"],
  },
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* ✅ Ensuring Favicon Appears */}
        <link rel="icon" type="image/x-icon" href="/fav.png?v=2" />
        <link rel="shortcut icon" href="/fav.png?v=2" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics/>
        </ThemeProvider>
      </body>
    </html>
  );
}
