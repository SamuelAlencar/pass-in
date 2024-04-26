import { normalize } from "path";

export function generateSlug(text: string): string {
  const normalized = normalize(text);
  const map: Record<string, string> = {
    'á': 'a', 'ã': 'a', 'à': 'a', 'ä': 'a',
    'é': 'e', 'ê': 'e', 'è': 'e', 'ë': 'e',
    'í': 'i', 'î': 'i', 'ì': 'i', 'ï': 'i',
    'ó': 'o', 'õ': 'o', 'ò': 'o', 'ö': 'o',
    'ú': 'u', 'û': 'u', 'ù': 'u', 'ü': 'u',
    'ç': 'c', '\'': '',
  };
  const normalizedAndMapped = normalized.toLowerCase()
    .replace(/[áãàäéêèëíîìïóõòöúûùüç’]/g, (match: string | number) => map[match])
    .replace(/[^\w\s-]+/g, '-')
    .replace(/^-|-$|[\s-]+/g, '-');
  return normalizedAndMapped;
}


