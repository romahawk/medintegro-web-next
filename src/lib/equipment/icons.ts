import type { LucideIcon } from "lucide-react";
import { Activity, Cable, Layers, Monitor, Video, Wind, Wrench } from "lucide-react";

import type { IconKey } from "./types";

/**
 * Icon registry.
 *
 * Important: keep this file as the single place that imports lucide-react icons.
 * The data layer (data.ts) must stay React-free.
 */
export const ICONS_BY_KEY: Record<IconKey, LucideIcon> = {
  video: Video,
  layers: Layers,
  monitor: Monitor,
  activity: Activity,
  wind: Wind,
  cable: Cable,
  wrench: Wrench,
};

export function getIconByKey(iconKey: IconKey): LucideIcon {
  return ICONS_BY_KEY[iconKey];
}
