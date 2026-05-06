import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { campuses } from "@/lib/site-content";
import { Mail, MapPin, Phone, UserRound } from "lucide-react";

export default function SedesPage() {
  return (
    <div className="py-16 sm:py-20">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Sedes"
            title="Una misma llama, encendida en distintas ciudades"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra eros sit amet dui volutpat, in suscipit leo consequat."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {campuses.map((campus, index) => (
            <Reveal key={campus.name} delay={index * 0.05}>
              <article className="rounded-[1.9rem] border border-slate-200 bg-white p-6 shadow-soft">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-secondary/10 text-brand-secondary">
                    <MapPin className="h-6 w-6" strokeWidth={1.7} />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-brand-deep">{campus.name}</h2>
                    <p className="text-sm text-slate-500">{campus.country}</p>
                  </div>
                </div>
                <div className="mt-5 space-y-3 rounded-[1.4rem] bg-slate-50 p-4">
                  <div className="flex items-start gap-3 text-sm text-slate-700">
                    <UserRound className="mt-0.5 h-4 w-4 shrink-0 text-brand-primary" />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                        Responsable
                      </p>
                      <p className="mt-1 font-medium">{campus.contact.name}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-slate-700">
                    <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-primary" />
                    <a href={`mailto:${campus.contact.email}`} className="transition-colors hover:text-brand-primary">
                      {campus.contact.email}
                    </a>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-slate-700">
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-primary" />
                    <a href={`tel:${campus.contact.phone.replace(/\s+/g, "")}`} className="transition-colors hover:text-brand-primary">
                      {campus.contact.phone}
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </div>
  );
}
