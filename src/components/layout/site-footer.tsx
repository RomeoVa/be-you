import { contactDetails, navigationLinks, socialLinks } from "@/lib/site-content";
import Link from "next/link";
import { Container } from "../ui/container";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50/80">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-[1.3fr_0.8fr_0.9fr]">
          <div className="max-w-md">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-secondary">
              Be you
            </p>
            <h2 className="mt-4 font-serif-display text-3xl text-brand-deep">
              Una experiencia espiritual para jóvenes que buscan volver al centro.
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam blandit, turpis at
              tincidunt cursus, odio mauris imperdiet nisl, sed scelerisque dui est vitae risus.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-brand-deep">Enlaces rápidos</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-brand-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-brand-deep">Contacto</p>
            <ul className="mt-4 space-y-4">
              {contactDetails.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="flex items-start gap-3 text-sm text-slate-600 transition-colors hover:text-brand-primary"
                  >
                    <item.icon className="mt-0.5 h-4 w-4 shrink-0" />
                    <span>{item.value}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-600 transition-colors hover:border-brand-primary hover:text-brand-primary"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 text-xs uppercase tracking-[0.2em] text-slate-500">
          © 2026 Be you. Todos los derechos reservados.
        </div>
      </Container>
    </footer>
  );
}
