import type { Metadata } from "next";
import { Sora, Space_Grotesk } from "next/font/google";
import { Navigation } from "@/components/navigation";
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
  title: "peaq11 - structured reboot",
  description: "Legacy peaq.ch rebuilt with Next.js + Sanity-ready content layer.",
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const content = await getSiteContent();

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sora.variable} ${spaceGrotesk.variable}`}>
        <Navigation menu={content.menu} pages={content.pages} />
        {children}
      </body>
    </html>
  );
}
