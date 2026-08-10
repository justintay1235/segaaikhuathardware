import {
  Droplets,
  Gauge,
  Home,
  Sun,
  Tractor,
  Waves,
  type LucideIcon,
} from "lucide-react";

export const PRODUCT_ICONS: Record<string, LucideIcon> = {
  droplets: Droplets,
  waves: Waves,
  sun: Sun,
  gauge: Gauge,
  tractor: Tractor,
  home: Home,
};

export const PRODUCT_ICON_OPTIONS = Object.keys(PRODUCT_ICONS);

export function getProductIcon(key: string): LucideIcon {
  return PRODUCT_ICONS[key] ?? Droplets;
}
