import {
  Cctv,
  HardDrive,
  Laptop,
  LifeBuoy,
  Monitor,
  Network,
  Printer,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import type { Service } from "@/data/services";

const icons: Record<Service["icon"], LucideIcon> = {
  laptop: Laptop,
  cctv: Cctv,
  printer: Printer,
  desktop: Monitor,
  network: Network,
  accessories: HardDrive,
  repair: Wrench,
  support: LifeBuoy,
};

export default function ServiceIcon({
  name,
  className,
}: {
  name: Service["icon"];
  className?: string;
}) {
  const Icon = icons[name];
  return <Icon className={className} aria-hidden="true" />;
}
