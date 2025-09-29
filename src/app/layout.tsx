import type { Metadata } from "next";
import { Inter_Tight, Playfair_Display } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "BrainRot Memecoin — chaotic memes with simple buy steps",
  description: "BrainRot Memecoin is a playful, meme-driven token with a clear buy path, bite-sized tokenomics, and a community-first vibe. Fast, fun, and built to meme.",
  keywords: ["brainrot", "memecoin", "meme-coin", "cryptocurrency", "buy-steps", "tokenomics", "community", "web3"],
  alternates: { canonical: "/" },
  openGraph: {
    title: "BrainRot Memecoin — chaotic memes with simple buy steps",
    description: "BrainRot Memecoin is a playful, meme-driven token with a clear buy path, bite-sized tokenomics, and a community-first vibe. Fast, fun, and built to meme.",
    type: "website",
    url: "/",
    siteName: "BrainRot MEME",
    images: [{ url: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/design-a-simple-high-contrast-logo-for-b-1759143260668-ef9ce8a0.jpg", width: 1200, height: 630, alt: "BrainRot Memecoin logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "BrainRot Memecoin — chaotic memes with simple buy steps",
    description: "BrainRot Memecoin is a playful, meme-driven token with a clear buy path, bite-sized tokenomics, and a community-first vibe. Fast, fun, and built to meme.",
    images: ["https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/design-a-simple-high-contrast-logo-for-b-1759143260668-ef9ce8a0.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${interTight.variable} ${playfairDisplay.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}