import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { resources } from "@/lib/site-content";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function RecursosPage() {
  return (
    <div className="py-16 sm:py-20">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Recursos"
            title="Materiales para preparar, profundizar y acompañar cada retiro"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat tincidunt sem, at pharetra augue convallis id."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {resources.map((resource, index) => (
            <Reveal key={resource.title} delay={index * 0.06}>
              <article className="group rounded-[1.9rem] border border-slate-200 bg-white p-6 shadow-soft">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-brand-primary/10 text-brand-primary">
                    <resource.icon className="h-6 w-6" strokeWidth={1.7} />
                  </div>
                  <span className="rounded-full bg-slate-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                    {resource.category}
                  </span>
                </div>
                <h2 className="mt-6 text-2xl font-semibold text-brand-deep">{resource.title}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">{resource.description}</p>
                <Link
                  href="#"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-secondary"
                >
                  Ver recurso
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </div>
  );
}
