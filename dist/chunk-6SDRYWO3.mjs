// src/utils/generate-slug.ts
import { normalize } from "path";
function generateSlug(text) {
  const normalized = normalize(text);
  const map = {
    "\xE1": "a",
    "\xE3": "a",
    "\xE0": "a",
    "\xE4": "a",
    "\xE9": "e",
    "\xEA": "e",
    "\xE8": "e",
    "\xEB": "e",
    "\xED": "i",
    "\xEE": "i",
    "\xEC": "i",
    "\xEF": "i",
    "\xF3": "o",
    "\xF5": "o",
    "\xF2": "o",
    "\xF6": "o",
    "\xFA": "u",
    "\xFB": "u",
    "\xF9": "u",
    "\xFC": "u",
    "\xE7": "c",
    "'": ""
  };
  const normalizedAndMapped = normalized.toLowerCase().replace(/[áãàäéêèëíîìïóõòöúûùüç’]/g, (match) => map[match]).replace(/[^\w\s-]+/g, "-").replace(/^-|-$|[\s-]+/g, "-");
  return normalizedAndMapped;
}

export {
  generateSlug
};
