import type { LucideIcon } from "lucide-react";
import {
  Video,
  Layers,
  Monitor,
  Activity,
  Wind,
  Cable,
  Wrench,
} from "lucide-react";
import type { IconKey } from "./types";

export const EQUIPMENT_ICONS: Record<IconKey, LucideIcon> = {
  video: Video,
  layers: Layers,
  monitor: Monitor,
  activity: Activity,
  wind: Wind,
  cable: Cable,
  wrench: Wrench,
};

export function getEquipmentIcon(iconKey: IconKey): LucideIcon {
  return EQUIPMENT_ICONS[iconKey];
}
