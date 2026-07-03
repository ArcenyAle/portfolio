import Image from "next/image";

/**
 * Renders a project thumbnail when `src` is set (a real file in
 * /public). Returns null otherwise — callers should adjust their
 * layout (e.g. drop a grid column) when this renders nothing, so
 * cards without media don't show an empty gap or a placeholder box.
 */
export function CardMedia({
  src,
  alt,
  className = "",
}: {
  src?: string;
  alt: string;
  className?: string;
}) {
  if (!src) return null;

  return (
    <div className={`relative w-full overflow-hidden bg-secondary ${className}`}>
      <Image src={src} alt={alt} fill className="object-cover" />
    </div>
  );
}
