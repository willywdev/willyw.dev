/**
 * @typedef {Object} Project
 * @property {{ de: string, en: string }} title
 * @property {{ de: string, en: string }} description
 * @property {string} icon - Iconify identifier for the project glyph.
 * @property {string} href
 * @property {string[]} tags
 */

/** @type {Project[]} */
export const projects = [
  {
    title: { de: "Masterportal", en: "Masterportal" },
    description: {
      de: "Open-Source-Geoportal auf Basis von Vue und OpenLayers, getragen von über 40 öffentlichen Institutionen. Ich committe regelmäßig und erweitere das Framework.",
      en: "Open-source geoportal built on Vue and OpenLayers, maintained by 40+ public institutions. I contribute to and extend the framework regularly.",
    },
    icon: "lucide:map",
    href: "https://www.masterportal.org",
    tags: ["Vue", "OpenLayers", "Open Source"],
  },
  {
    title: { de: "Demnächst", en: "Coming soon" },
    description: { de: "Weiteres Projekt folgt in Kürze.", en: "Another project — coming soon." },
    icon: "lucide:circle-dashed",
    href: "#",
    tags: [],
  },
  {
    title: { de: "Demnächst", en: "Coming soon" },
    description: { de: "Weiteres Projekt folgt in Kürze.", en: "Another project — coming soon." },
    icon: "lucide:circle-dashed",
    href: "#",
    tags: [],
  },
  {
    title: { de: "Demnächst", en: "Coming soon" },
    description: { de: "Weiteres Projekt folgt in Kürze.", en: "Another project — coming soon." },
    icon: "lucide:circle-dashed",
    href: "#",
    tags: [],
  },
];
