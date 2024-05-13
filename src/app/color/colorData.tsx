import { z } from "zod";

export const ColorDataSchema = z.object({
  name: z.string(),
  hebrewName: z.string(),
  color: z.string(),
  bgImagePath: z.string().optional(),
});
export type ColorData = z.infer<typeof ColorDataSchema>;

export const colors: ColorData[] = [
  { name: "red", color: "#ff0000", hebrewName: "אָדֹום" },
  { name: "pink", color: "#ffc0cb", hebrewName: "וָרֹוד" },
  { name: "orange", color: "#ffa500", hebrewName: "כָּתֹום" },
  { name: "yellow", color: "#ffff00", hebrewName: "צָהֹוב" },
  { name: "green", color: "#00ff00", hebrewName: "יָרֹוק" },
  { name: "blue", color: "#0000ff", hebrewName: "כָּחֹול" },
  { name: "cyan", color: "#00ffff", hebrewName: "תְּכֵלֶת" },
  { name: "purple", color: "#800080", hebrewName: "סָגֹול" },
  {
    name: "mixed",
    color: "#ffffff",
    hebrewName: "צבעוני",
    bgImagePath: "/mixed_color.png",
  },
];
