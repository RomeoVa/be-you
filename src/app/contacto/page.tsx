import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { contactDetails } from "@/lib/site-content";

export default function ContactoPage() {
  return (
    <div className="py-16 sm:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr]">
          <Reveal>
            <div>
              <SectionHeading
                eyebrow="Contacto"
                title="Estamos listos para ayudarte a dar el siguiente paso"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vehicula felis et justo tristique, quis elementum augue bibendum."
              />

              <div className="mt-10 space-y-4">
                {contactDetails.map((detail, index) => (
                  <Reveal key={detail.label} delay={index * 0.06}>
                    <a
                      href={detail.href}
                      className="flex items-start gap-4 rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-soft transition-colors hover:border-brand-primary"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-secondary/10 text-brand-secondary">
                        <detail.icon className="h-6 w-6" strokeWidth={1.7} />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                          {detail.label}
                        </p>
                        <p className="mt-2 text-sm leading-7 text-slate-700">{detail.value}</p>
                      </div>
                    </a>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <form className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-soft sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-medium text-slate-700">Nombre</span>
                  <input
                    type="text"
                    className="mt-2 h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm outline-none transition-colors placeholder:text-slate-400 focus:border-brand-primary"
                    placeholder="Lorem Ipsum"
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-slate-700">Correo electrónico</span>
                  <input
                    type="email"
                    className="mt-2 h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm outline-none transition-colors placeholder:text-slate-400 focus:border-brand-primary"
                    placeholder="correo@ejemplo.com"
                  />
                </label>
              </div>

              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-medium text-slate-700">Interés</span>
                  <select className="mt-2 h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm outline-none transition-colors focus:border-brand-primary">
                    <option>Próximo Retiro Switch</option>
                    <option>Próximo Retiro Quest</option>
                    <option>Servir en el equipo</option>
                    <option>Información general</option>
                  </select>
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-slate-700">Ciudad</span>
                  <input
                    type="text"
                    className="mt-2 h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm outline-none transition-colors placeholder:text-slate-400 focus:border-brand-primary"
                    placeholder="Tu ciudad"
                  />
                </label>
              </div>

              <label className="mt-5 block">
                <span className="text-sm font-medium text-slate-700">Mensaje</span>
                <textarea
                  rows={6}
                  className="mt-2 w-full rounded-[1.5rem] border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition-colors placeholder:text-slate-400 focus:border-brand-primary"
                  placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                />
              </label>

              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-brand-primary px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition-transform hover:-translate-y-0.5 sm:w-auto"
              >
                Enviar mensaje
              </button>
            </form>
          </Reveal>
        </div>
      </Container>
    </div>
  );
}
