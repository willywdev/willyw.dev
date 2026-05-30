import { ui, defaultLang } from "./ui.js";

/** @param {URL} url */
export function getLangFromUrl(url) {
  const [, seg] = url.pathname.split("/");
  if (seg in ui) return seg;
  return defaultLang;
}

/** @param {keyof typeof ui} lang */
export function useTranslations(lang) {
  return function t(/** @type {string} */ key) {
    return ui[lang]?.[key] ?? ui[defaultLang][key];
  };
}

/**
 * Maps the current URL path to its equivalent in the target language.
 * @param {URL} url
 * @param {"de"|"en"} target
 */
export function getAlternatePath(url, target) {
  const path = url.pathname;
  const isEn = path === "/en" || path.startsWith("/en/");
  let base = isEn ? path.replace(/^\/en/, "") : path;
  if (base === "") base = "/";
  if (target === "en") return base === "/" ? "/en/" : `/en${base}`;
  return base;
}
