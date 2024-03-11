import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";

const league = League_Spartan({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "CoinCraft - Unlock a World of Possibilities with Our Bundled Brilliance!",
  description:
    "Collect, Connect, Conquer! Elevate your experience with our curated token bundles – your key to a universe of possibilities, all in one seamless package.",
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
