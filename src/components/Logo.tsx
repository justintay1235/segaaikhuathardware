import Image from "next/image";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Image
      src={light ? "/logo-light.svg" : "/logo.svg"}
      alt="Sega Pumps"
      width={160}
      height={48}
      priority
      unoptimized
      className="h-9 w-auto object-contain"
    />
  );
}
