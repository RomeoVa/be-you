import { Container } from "@/components/ui/container";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { galleryItems } from "@/lib/site-content";

export default function GaleriaPage() {
  return (
    <div className="py-16 sm:py-20">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Multimedia"
            title="Recuerdos, testimonios y momentos que reflejan la experiencia"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. In tempor finibus semper."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {galleryItems.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <article className="rounded-[1.8rem] border border-slate-200 bg-white p-4 shadow-soft">
                <MediaPlaceholder
                  label={item.type === "video" ? "[Video]" : "[Imagen]"}
                  icon={item.icon}
                  ratio={item.type === "video" ? "video" : "square"}
                />
                <div className="px-2 pb-2 pt-5">
                  <h2 className="text-lg font-semibold text-brand-deep">{item.title}</h2>
                  <p className="mt-2 text-sm text-slate-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </div>
  );
}
