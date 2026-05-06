"use client";

import { navigationLinks } from "@/lib/site-content";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Container } from "../ui/container";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [isOnHero, setIsOnHero] = useState(pathname === "/");
  const useHeroStyle = isOnHero && !open;

  useEffect(() => {
    const updateHeaderState = () => {
      if (pathname !== "/") {
        setIsOnHero(false);
        return;
      }

      setIsOnHero(window.scrollY < window.innerHeight * 0.7);
    };

    updateHeaderState();
    window.addEventListener("scroll", updateHeaderState, { passive: true });
    window.addEventListener("resize", updateHeaderState);

    return () => {
      window.removeEventListener("scroll", updateHeaderState);
      window.removeEventListener("resize", updateHeaderState);
    };
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        useHeroStyle
          ? "border-b border-white/12 bg-white/8 backdrop-blur-2xl"
          : "border-b border-slate-200/80 bg-white/88 backdrop-blur-xl"
      }`}
    >
      <Container>
        <div className="flex h-20 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <div className="relative flex h-16 w-16 items-center justify-center overflow-hidden bg-transparent">
              <Image
                src="/logos/beyou-log-trans.webp"
                alt="Be you logo"
                fill
                loading="eager"
                unoptimized
                className="object-contain"
              />
            </div>
            <div>
              <p
                className={`font-serif-display text-xl leading-none ${
                  useHeroStyle ? "text-white" : "text-brand-deep"
                }`}
              >
                Be you
              </p>
              <p
                className={`mt-1 text-[0.65rem] uppercase tracking-[0.28em] ${
                  useHeroStyle ? "text-white/72" : "text-slate-500"
                }`}
              >
                By Regnum Christi
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-2 md:flex">
            {navigationLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-brand-primary text-white"
                      : useHeroStyle
                        ? "text-white/82 hover:bg-white/12 hover:text-white"
                        : "text-slate-600 hover:bg-brand-secondary/10 hover:text-brand-secondary"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contacto"
              className="hidden rounded-full bg-brand-deep px-5 py-3 text-sm font-semibold text-white shadow-soft transition-transform hover:-translate-y-0.5 md:inline-flex"
            >
              Regístrate
            </Link>
            <button
              type="button"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              className={`inline-flex h-11 w-11 items-center justify-center rounded-full md:hidden ${
                useHeroStyle
                  ? "border border-white/22 bg-white/10 text-white backdrop-blur-sm"
                  : "border border-slate-200 text-slate-700"
              }`}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </Container>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-slate-200 bg-white md:hidden"
          >
            <Container className="py-4">
              <nav className="flex flex-col gap-2">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`rounded-2xl px-4 py-3 text-sm font-medium ${
                      pathname === link.href
                        ? "bg-brand-primary text-white"
                        : "bg-slate-50 text-slate-700"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
