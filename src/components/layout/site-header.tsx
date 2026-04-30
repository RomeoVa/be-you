"use client";

import { navigationLinks } from "@/lib/site-content";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Container } from "../ui/container";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/88 backdrop-blur-xl">
      <Container>
        <div className="flex h-18 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-primary/12 text-brand-primary shadow-soft">
              <span className="font-serif-display text-lg font-semibold">BY</span>
            </div>
            <div>
              <p className="font-serif-display text-xl leading-none text-brand-deep">Be you</p>
              <p className="mt-1 text-[0.65rem] uppercase tracking-[0.28em] text-slate-500">
                By Regnum Cristi
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
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-700 md:hidden"
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
