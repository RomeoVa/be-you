import {
  Compass,
  FileText,
  HeartHandshake,
  ImageIcon,
  Mail,
  MapPin,
  Phone,
  PlaySquare,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type ProgramTitleBadge =
  | string
  | {
      type: "image";
      src: string;
      alt: string;
      width: number;
      height: number;
    };

export type RetreatProgram = {
  slug: string;
  name: ProgramTitleBadge;
  label: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

export const navigationLinks = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/sedes", label: "Sedes" },
  { href: "/galeria", label: "Multimedia" },
  { href: "/recursos", label: "Recursos" },
  { href: "/contacto", label: "Contacto" },
];

export const retreatPrograms: RetreatProgram[] = [
  {
    slug: "switch",
    name: {
      type: "image",
      src: "/logos/switch-logo.webp",
      alt: "Switch by BeYou logo",
      width: 180,
      height: 55,
    },
    label: "Parte 1",
    description:
      "El retiro Switch es el inicio de un camino espiritual para jóvenes entre 18 y 32 años. Este camino comienza con un fin de semana, para que de manera intensa se inicie este recorrido. Es un conjunto de pláticas, meditaciones, actividades y dinámicas que buscan conducir al caminante hacia la experiencia de ser hijo amadísimo de Dios, y también ayudar a descubrir la misión particular a la que cada joven ha sido llamado por Dios en este mundo.",
    href: "/contacto",
    icon: Sparkles,
  },
  {
    slug: "quest",
    name: {
      type: "image",
      src: "/logos/quest-logo.webp",
      alt: "Quest by BeYou logo",
      width: 157,
      height: 64,
    },
    label: "Parte 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat, ligula et faucibus facilisis, purus urna faucibus ipsum, non posuere erat arcu eget justo.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat, ligula et faucibus facilisis, purus urna faucibus ipsum, non posuere erat arcu eget justo.",
    href: "/contacto",
    icon: Compass,
  },
];

export const stats = [
  { value: "9", label: "Sedes activas" },
  { value: "+50", label: "Retiros" },
  { value: "+2,000", label: "Jóvenes" },
];

export const values = [
  {
    title: "1. Testimonio de coherencia cristiana",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in sem at sapien malesuada laoreet.",
    icon: HeartHandshake,
  },
  {
    title: "2. Testimonio de caridad y alegría",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque arcu et justo facilisis, ut vulputate est porta.",
    icon: MapPin,
  },
  {
    title: "3. Presentar a Jesús (Kerigma)",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eleifend nisl ut nibh faucibus, nec interdum odio volutpat.",
    icon: Mail,
  },
  {
    title: "4. Catequesis",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eleifend nisl ut nibh faucibus, nec interdum odio volutpat.",
    icon: Mail,
  },
  {
    title: "5. Comunidad",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eleifend nisl ut nibh faucibus, nec interdum odio volutpat.",
    icon: Mail,
  },
];

export const campuses = [
  {
    name: "CDMX Poniente",
    country: "México",
    contact: {
      name: "Responsable de sede",
      email: "poniente@beyou.org",
      phone: "+52 000 000 0001",
    },
  },
  {
    name: "CDMX Norte",
    country: "México",
    contact: {
      name: "Responsable de sede",
      email: "norte@beyou.org",
      phone: "+52 000 000 0002",
    },
  },
  {
    name: "Querétaro",
    country: "México",
    contact: {
      name: "Responsable de sede",
      email: "queretaro@beyou.org",
      phone: "+52 000 000 0003",
    },
  },
  {
    name: "León",
    country: "México",
    contact: {
      name: "Responsable de sede",
      email: "leon@beyou.org",
      phone: "+52 000 000 0004",
    },
  },
  {
    name: "Guadalajara",
    country: "México",
    contact: {
      name: "Responsable de sede",
      email: "guadalajara@beyou.org",
      phone: "+52 000 000 0005",
    },
  },
  {
    name: "Puebla",
    country: "México",
    contact: {
      name: "Responsable de sede",
      email: "puebla@beyou.org",
      phone: "+52 000 000 0006",
    },
  },
  {
    name: "Cancún",
    country: "México",
    contact: {
      name: "Responsable de sede",
      email: "cancun@beyou.org",
      phone: "+52 000 000 0007",
    },
  },
  {
    name: "Mérida",
    country: "México",
    contact: {
      name: "Responsable de sede",
      email: "merida@beyou.org",
      phone: "+52 000 000 0008",
    },
  },
  {
    name: "Madrid",
    country: "España",
    contact: {
      name: "Responsable de sede",
      email: "madrid@beyou.org",
      phone: "+34 000 000 000",
    },
  },
];

export const galleryItems = [
  { title: "Switch", type: "image", icon: ImageIcon },
  { title: "Noches Be you", type: "video", icon: PlaySquare },
  { title: "Quest", type: "image", icon: ImageIcon },
  { title: "Adoración y música", type: "video", icon: PlaySquare },
  { title: "Servicio en equipo", type: "image", icon: ImageIcon },
  { title: "Hikes", type: "video", icon: PlaySquare },
];

export const resources = [
  {
    title: "Guía de preparación espiritual",
    category: "PDF",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consequat volutpat erat.",
    icon: FileText,
  },
  {
    title: "Lectio para jóvenes",
    category: "Artículo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non dui in odio volutpat malesuada.",
    icon: FileText,
  },
  {
    title: "Preguntas frecuentes del retiro",
    category: "PDF",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit metus sed erat faucibus lacinia.",
    icon: FileText,
  },
  {
    title: "Checklist para servidores",
    category: "Recurso",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquet odio et commodo malesuada.",
    icon: FileText,
  },
];

export const socialLinks = [
  { href: "#", label: "Instagram" },
  { href: "#", label: "YouTube" },
  { href: "#", label: "Facebook" },
];

export const contactDetails = [
  {
    label: "Correo",
    value: "hola@beyou.org",
    href: "mailto:hola@beyou.org",
    icon: Mail,
  },
  {
    label: "WhatsApp",
    value: "+52 000 000 0000",
    href: "https://wa.me/520000000000",
    icon: Phone,
  },
  {
    label: "Ubicación",
    value: "México y sedes internacionales",
    href: "/sedes",
    icon: MapPin,
  },
];
