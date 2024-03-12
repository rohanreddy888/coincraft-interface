import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";

const league = League_Spartan({ subsets: ["latin"] });

export const metadata = {
  title:
    "CoinCraft - Unlock a World of Possibilities with Our Bundled Brilliance!",
  description:
    "Collect, Connect, Conquer! Elevate your experience with our curated token bundles – your key to a universe of possibilities, all in one seamless package.",
  openGraph: {
    title:
      "CoinCraft - Unlock a World of Possibilities with Our Bundled Brilliance!",
    url: "https://coincraft-interface.vercel.app",
    description:
      "Collect, Connect, Conquer! Elevate your experience with our curated token bundles – your key to a universe of possibilities, all in one seamless package.",
    images: [
      {
        url: "https://coincraft-interface.vercel.app/og/og-home.png",
        secureUrl: "https://coincraft-interface.vercel.app/og/og-home.png",
        alt: "CoinCraft - Unlock a World of Possibilities with Our Bundled Brilliance!",
        width: 1200,
        height: 630,
        type: "image/png",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  alternates: {
    canonical: "https://coincraft-interface.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "CoinCraft - Unlock a World of Possibilities with Our Bundled Brilliance!",
    description:
      "Collect, Connect, Conquer! Elevate your experience with our curated token bundles – your key to a universe of possibilities, all in one seamless package.",
    creator: "@QuillAudits",
    images: ["https://coincraft-interface.vercel.app/og/og-home.png"],
  },
  robots: {
    index: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={league.className}>
        <ul className="background">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        {children}
      </body>
    </html>
  );
}
