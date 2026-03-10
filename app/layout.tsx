import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
    default: "Fun Personality Tests & Quizzes | Cocodoco",
    template: "%s | Cocodoco",
  },
  description:
    "Discover your personality, aura, emotional age, and hidden strengths through fun interactive tests and quizzes.",
  metadataBase: new URL("https://www.cocodoco.fun"),
  keywords: [
    "personality test",
    "fun quizzes",
    "aura test",
    "emotional age test",
    "hidden talent test",
    "self discovery quiz",
    "online personality quiz",
    "cocodoco",
  ],
  openGraph: {
    title: "Fun Personality Tests & Quizzes | Cocodoco",
    description:
      "Discover your personality, aura, emotional age, and hidden strengths through fun interactive tests and quizzes.",
    url: "https://www.cocodoco.fun",
    siteName: "Cocodoco",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fun Personality Tests & Quizzes | Cocodoco",
    description:
      "Discover your personality, aura, emotional age, and hidden strengths through fun interactive tests and quizzes.",
  },
  robots: {
    index: true,
    follow: true,
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
        {children}
      </body>
    </html>
  );
}