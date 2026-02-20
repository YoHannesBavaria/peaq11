import type { Metadata } from "next";
import { Sora, Space_Grotesk } from "next/font/google";
import { Navigation } from "@/components/navigation";
import { SiteFooter } from "@/components/site-footer";
import { getSiteContent } from "@/lib/content";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "peaq11 - Structured Relaunch",
  description: "Modernized peaq.ch relaunch with complete legacy content, media, and route coverage.",
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const content = await getSiteContent();

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sora.variable} ${spaceGrotesk.variable}`}>
        <Navigation menuItems={content.menuItems} />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
