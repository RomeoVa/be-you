import { LucideIcon } from "lucide-react";

type MediaPlaceholderProps = {
  label: string;
  icon: LucideIcon;
  ratio?: "banner" | "square" | "video";
  className?: string;
};

const ratioClasses = {
  banner: "aspect-[16/9]",
  square: "aspect-square",
  video: "aspect-video",
};

export function MediaPlaceholder({
  label,
  icon: Icon,
  ratio = "video",
  className = "",
}: MediaPlaceholderProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-[2rem] border border-slate-200 bg-gray-200/80 ${ratioClasses[ratio]} ${className}`}
    >
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.22),rgba(255,255,255,0.56),rgba(255,255,255,0.22))] bg-[length:200%_100%] animate-shimmer" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-slate-500">
        <Icon className="h-10 w-10" strokeWidth={1.5} />
        <span className="rounded-full border border-white/80 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em]">
          {label}
        </span>
      </div>
    </div>
  );
}
