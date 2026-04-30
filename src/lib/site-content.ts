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

export const navigationLinks = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/sedes", label: "Sedes" },
  { href: "/galeria", label: "Multimedia" },
  { href: "/recursos", label: "Recursos" },
  { href: "/contacto", label: "Contacto" },
];

export const retreatPrograms = [
  {
    name: "Switch",
    label: "Parte 1",
    description:
      "El retiro Switch es el inicio de un camino espiritual para jóvenes entre 18 y 32 años. Este camino comienza con un fin de semana, para que de manera intensa se inicie este recorrido. Es un conjunto de pláticas, meditaciones, actividades y dinámicas que buscan conducir al caminante hacia la experiencia de ser hijo amadísimo de Dios, y también ayudar a descubrir la misión particular a la que cada joven ha sido llamado por Dios en este mundo.",
    href: "/contacto",
    icon: Sparkles,
  },
  {
    name: "Quest",
    label: "Parte 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat, ligula et faucibus facilisis, purus urna faucibus ipsum, non posuere erat arcu eget justo.",
    href: "/contacto",
    icon: Compass,
  },
];

export const stats = [
  { value: "7", label: "Sedes activas" },
  { value: "2", label: "Experiencias principales" },
  { value: "100%", label: "Espacios pensados para jóvenes" },
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
    blurb:
      "Sede ubicada en la zona poniente de la Ciudad de México, brindando una comunidad activa y cercana para los jóvenes.",
  },
  {
    name: "CDMX Norte",
    country: "México",
    blurb:
      "Sede en la zona norte de Ciudad de México, enfocada en el acompañamiento espiritual y la formación de jóvenes.",
  },
  {
    name: "Querétaro",
    country: "México",
    blurb:
      "Sede en Querétaro, un espacio para la vivencia de experiencias profundas y auténticas en comunidad.",
  },
  {
    name: "León",
    country: "México",
    blurb:
      "Sede en la ciudad de León, comprometida con el crecimiento personal y espiritual de los jóvenes.",
  },
  {
    name: "Guadalajara",
    country: "México",
    blurb:
      "Sede en Guadalajara que impulsa el desarrollo de la fe y la vivencia comunitaria.",
  },
  {
    name: "Puebla",
    country: "México",
    blurb:
      "Sede en Puebla, facilitando encuentros y retiros para fomentar valores y sentido de pertenencia.",
  },
  {
    name: "Cancún",
    country: "México",
    blurb:
      "Sede en Cancún, un lugar de encuentro para jóvenes que buscan crecer juntos en comunidad.",
  },
  {
    name: "Mérida",
    country: "México",
    blurb:
      "Sede en Mérida, enfocada en acompañar a los jóvenes en su camino espiritual.",
  },
  {
    name: "Madrid",
    country: "España",
    blurb:
      "Sede en Madrid, extendiendo la misión y la experiencia de comunidad más allá de México.",
  },
];

export const galleryItems = [
  { title: "Momento de oración", type: "image", icon: ImageIcon },
  { title: "Testimonio en retiro", type: "video", icon: PlaySquare },
  { title: "Dinámica comunitaria", type: "image", icon: ImageIcon },
  { title: "Adoración y música", type: "video", icon: PlaySquare },
  { title: "Servicio en equipo", type: "image", icon: ImageIcon },
  { title: "Resumen de jornada", type: "video", icon: PlaySquare },
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
