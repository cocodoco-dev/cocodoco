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
    default: "Fun Personality Tests | Cocodoco",
    template: "%s | Cocodoco",
  },
  description:
    "Discover your personality, aura, emotional age, and hidden strengths through fun interactive tests.",
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
    title: "Fun Personality Tests | Cocodoco",
    description:
      "Discover your personality, aura, emotional age, and hidden strengths through fun interactive tests.",
    url: "https://www.cocodoco.fun",
    siteName: "Cocodoco",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fun Personality Tests | Cocodoco",
    description:
      "Discover your personality, aura, emotional age, and hidden strengths through fun interactive tests.",
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
      <head>
        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8500564460470684"
          crossOrigin="anonymous"
        ></script>
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}