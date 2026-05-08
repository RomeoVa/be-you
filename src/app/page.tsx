import { Container } from "@/components/ui/container";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { heroVideoUrl } from "@/lib/site-config";
import { retreatPrograms, stats } from "@/lib/site-content";
import { ArrowRight, CalendarDays, ImageIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="pb-20">
      <section className="relative -mt-20 overflow-hidden pt-20">
        <div className="absolute inset-0">
          {heroVideoUrl ? (
            <video
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source src={heroVideoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <div className="h-full w-full bg-[linear-gradient(135deg,#3a327a_0%,#5979a4_42%,#da623e_100%)]" />
          )}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,0.78)_0%,rgba(15,23,42,0.58)_36%,rgba(15,23,42,0.26)_62%,rgba(15,23,42,0.55)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(218,98,62,0.28),transparent_30%),radial-gradient(circle_at_72%_18%,rgba(89,121,164,0.24),transparent_24%)]" />
        </div>

        <Container className="relative z-10">
          <div className="flex min-h-[calc(100svh-5rem)] items-start py-10 sm:py-16 lg:items-center">
            <Reveal className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-secondary">
                Sé auténtico | Ve contracorriente
              </p>
              <h1 className="mt-6 text-balance font-serif-display text-5xl leading-tight text-white sm:text-6xl lg:text-7xl">
                Si eres lo que tienes que ser, prenderás fuego al mundo.
              </h1>
              <p className="mt-6 max-w-xl text-pretty text-base leading-8 text-white/82 sm:text-lg">
                Una comunidad de jóvenes
                que se ayudan mutuamente a seguir a
                Cristo, y se proponen predicar el
                Evangelio a sus amigos a través de la
                coherencia cristiana y, cuando sea
                necesario, también con palabras.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-primary px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition-transform hover:-translate-y-0.5"
                >
                  Próximo Retiro Switch
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/nosotros"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:border-white/50 hover:bg-white/16"
                >
                  Conoce la misión
                </Link>
              </div>
              <div className="hidden lg:grid mt-10 gap-4 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-3xl border border-white/20 bg-white/10 p-5 backdrop-blur-md"
                  >
                    <p className="text-3xl font-semibold text-white">{stat.value}</p>
                    <p className="mt-2 text-sm text-white/72">{stat.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="relative z-10 mt-8 lg:hidden">
        <Container>
          <Reveal>
            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft lg:border-white/20 lg:bg-white/10 lg:backdrop-blur-md"
                >
                  <p className="text-3xl font-semibold text-brand-primary lg:text-white">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-slate-600 lg:text-white/72">{stat.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="pt-24">
        <Container>
          <Reveal>
              <SectionHeading
                eyebrow="Retiros"
                title="Switch y Quest forman parte del camino espiritual de Be you"
                description=""
              />
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {retreatPrograms.map((program, index) => (
              <Reveal key={program.slug} delay={index * 0.08}>
                <article className="group h-full rounded-4xl border border-slate-200 bg-white p-7 shadow-soft transition-transform hover:-translate-y-1">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-secondary/10 text-brand-secondary">
                      <program.icon className="h-7 w-7" strokeWidth={1.7} />
                    </div>
                    <span className="rounded-full bg-brand-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-brand-primary">
                      {program.label}
                    </span>
                  </div>
                  {typeof program.name === "string" ? (
                    <h3 className="mt-8 font-serif-display text-4xl text-brand-deep">{program.name}</h3>
                  ) : (
                    <div className="relative mt-8 h-16 w-full max-w-60">
                      <Image
                        src={program.name.src}
                        alt={program.name.alt}
                        fill
                        sizes="240px"
                        className="object-contain object-left"
                      />
                    </div>
                  )}
                  <p className="mt-4 text-base leading-8 text-slate-600">{program.description}</p>
                  <Link
                    href={program.href}
                    className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-primary"
                  >
                    Más información
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="pt-24">
        <Container>
          <div className="grid items-center gap-8 rounded-4xl bg-slate-50 px-6 py-10 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
            <Reveal delay={0.08}>
              <div className="max-w-xl">
                <SectionHeading
                  eyebrow="Sobre Nosotros"
                  title="Conoce el corazón de Be you y la misión que impulsa cada retiro"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vestibulum turpis ut erat molestie, eget efficitur nisl posuere. Descubre la historia, visión y propósito de esta comunidad juvenil."
                />
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/nosotros"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-deep px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition-transform hover:-translate-y-0.5"
                  >
                    Ir a Sobre Nosotros
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/contacto"
                    className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-brand-deep transition-colors hover:border-brand-secondary hover:text-brand-secondary"
                  >
                    Únete a la comunidad
                  </Link>
                </div>
              </div>
            </Reveal>
            <Reveal>
              <div className="relative aspect-video overflow-hidden rounded-4xl border border-white shadow-soft">
                <Image
                  src="/inicio/cruz-inicio.webp"
                  alt="Cruz de Be you"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="pt-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <Reveal>
              <div className="relative aspect-video overflow-hidden rounded-4xl border border-white shadow-soft">
                <Image
                  src="/inicio/switch-retiro.webp"
                  alt="Retiro Switch"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="max-w-xl">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-secondary">
                  Próximamente
                </p>
                <h2 className="mt-5 text-balance font-serif-display text-4xl leading-tight text-brand-deep sm:text-5xl">
                  Preparando una nueva edición para vivir Switch y continuar con Quest.
                </h2>
                <p className="mt-5 text-base leading-8 text-slate-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue neque ac
                  orci suscipit, ut tincidunt lacus auctor. Donec auctor purus et libero facilisis
                  egestas.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/contacto"
                    className="inline-flex items-center justify-center rounded-full bg-brand-deep px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition-transform hover:-translate-y-0.5"
                  >
                    Quiero recibir noticias
                  </Link>
                  <Link
                    href="/galeria"
                    className="inline-flex items-center justify-center rounded-full border border-slate-200 px-6 py-3.5 text-sm font-semibold text-slate-700 transition-colors hover:border-brand-primary hover:text-brand-primary"
                  >
                    Ver multimedia
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </div>
  );
}
