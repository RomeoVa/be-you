import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ScrollToTop } from "@/components/layout/scroll-to-top";

export const metadata: Metadata = {
  title: {
    default: "Be you",
    template: "%s | Be you",
  },
  description:
    "Be you, comunidad de jóvenes que se ayudan mutuamente a seguir a Cristo, y se proponen predicar el Evangelio a sus amigos a través de la coherencia cristiana y, cuando sea necesario, también con palabras.",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth" data-scroll-behavior="smooth">
      <body className="bg-white text-slate-900 antialiased">
        <div className="relative flex min-h-screen flex-col">
          <ScrollToTop />
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
