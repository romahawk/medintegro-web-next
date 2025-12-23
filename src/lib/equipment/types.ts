import type { Locale } from "@/lib/i18n/locales";

export type CategoryKey =
  | "or"
  | "integration"
  | "monitoring"
  | "icu"
  | "gas"
  | "lights"
  | "service";

export type IconKey =
  | "video"
  | "layers"
  | "monitor"
  | "activity"
  | "wind"
  | "cable"
  | "wrench";

export type LocalizedText = Record<Locale, string>;
export type LocalizedList = Record<Locale, string[]>;

export type ProductLine = "standalone" | "integrated";

export type EquipmentProduct = {
  key: string; // slug
  category: CategoryKey;
  brand: string;
  line: ProductLine;
  name: string;
  summary: LocalizedText;
  highlights: LocalizedList;
  url?: string;
};

export type EquipmentCategory = {
  key: CategoryKey;
  iconKey: IconKey;
  title: LocalizedText;
  lead: LocalizedText;
  chips?: LocalizedList;
  includes?: LocalizedList;
  products?: EquipmentProduct[];
};
