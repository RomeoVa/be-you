import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { campuses } from "@/lib/site-content";
import { MapPin } from "lucide-react";

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
                <p className="mt-5 text-sm leading-7 text-slate-600">{campus.blurb}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </div>
  );
}
