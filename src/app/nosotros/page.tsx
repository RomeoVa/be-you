import { Container } from "@/components/ui/container";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { values } from "@/lib/site-content";
import { ImageIcon } from "lucide-react";

export default function NosotrosPage() {
  return (
    <div className="py-16 sm:py-20">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Sobre Nosotros"
            title="Un apostolado de jóvenes que se proponen predicar el evangelio a sus amigos"
            description="BeYou es un programa de iniciación Cristiana, que tiene un inicio y un fin, asumiendo que el jóven tendrá necesidad de seguir creciendo y que la Iglesia, a través de sus múltiples instituciones, podrá seguir acompañándole a lo largo de toda su vida cristiana."
          />
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <MediaPlaceholder
              label="[Imagen]"
              icon={ImageIcon}
              ratio="banner"
              className="rounded-4xl border-white shadow-soft"
            />
          </Reveal>

          <Reveal delay={0.08}>
            <article className="rounded-4xl bg-brand-deep px-8 py-10 text-white shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
                Nuestra misión
              </p>
              <h2 className="mt-5 font-serif-display text-4xl leading-tight">
                Acercar a los jóvenes a una experiencia transformadora de fe, comunidad y servicio.
              </h2>
              <p className="mt-5 text-base leading-8 text-white/78">
                BeYou es un apostolado que busca atraer a los jóvenes a Cristo y acompañarlos en los primeros pasos de la vivencia del cristianismo, 
                para luego llevarlos a una comunidad eclesial que pueda seguirlos nutriendo en la fe.
              </p>
            </article>
          </Reveal>
        </div>

        <div className="mt-12">
          <Reveal>
            <SectionHeading
              title="Be You en el proceso de evangelización"
              description="BeYou se enfoca en las cuatro primeras etapas del proceso de evangelización dejando la quinta a cada parroquia o institución ecclesial."
            />
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 0.08}>
                <article className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-brand-primary shadow-soft">
                    <value.icon className="h-6 w-6" strokeWidth={1.7} />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-brand-deep">{value.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{value.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
