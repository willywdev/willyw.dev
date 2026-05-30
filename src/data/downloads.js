/**
 * @typedef {Object} DownloadItem
 * @property {{ de: string, en: string }} title
 * @property {{ de: string, en: string }} description
 * @property {string} meta
 * @property {string} href
 * @property {string} icon
 */

/** @type {DownloadItem[]} */
export const downloads = [
  {
    title: { de: "Download-Titel", en: "Download title" },
    description: { de: "Kurze Beschreibung des Downloads.", en: "Short description of the download." },
    meta: "PDF",
    href: "#",
    icon: "lucide:file-text",
  },
  {
    title: { de: "Download-Titel", en: "Download title" },
    description: { de: "Kurze Beschreibung des Downloads.", en: "Short description of the download." },
    meta: "ZIP",
    href: "#",
    icon: "lucide:file-archive",
  },
  {
    title: { de: "Download-Titel", en: "Download title" },
    description: { de: "Kurze Beschreibung des Downloads.", en: "Short description of the download." },
    meta: "Datei",
    href: "#",
    icon: "lucide:file-code",
  },
];
