import { DM_Sans, Syne } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { PersonJsonLd } from "@/components/JsonLd";

const dm = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

export default function SiteShellLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${dm.variable} ${syne.variable} min-h-screen bg-ink font-sans text-zinc-200`}
    >
      <PersonJsonLd />
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
