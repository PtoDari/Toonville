import { useEffect, useState } from 'react';
import type { CardDef } from '../engine/types';

/**
 * Card art lives in the public GitHub repo, in the `art/` folder, named after the card id
 * (e.g. `art/spongebob.png`, `art/leo-rise.jpg`). Upload a picture there and it shows up in the
 * game on next launch. Skins without their own picture fall back to the base character's art.
 */
export const ART_SOURCE = {
  owner: 'PtoDari',
  repo: 'toonville',
  folder: 'art',
  /** Branches checked for art, in priority order. */
  branches: ['main', 'claude/toonville-game'],
};

const EXTENSIONS = ['png', 'jpg', 'jpeg', 'webp'];

/** card id (lowercase) -> raw image URL */
let index: Map<string, string> | null = null;
let loading: Promise<void> | null = null;
const listeners = new Set<() => void>();

async function listBranch(branch: string): Promise<[string, string][]> {
  const { owner, repo, folder } = ART_SOURCE;
  const res = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${folder}?ref=${encodeURIComponent(branch)}`);
  if (!res.ok) return [];
  const files: { name: string; type: string; download_url: string | null }[] = await res.json();
  return files
    .filter((f) => f.type === 'file' && f.download_url)
    .flatMap((f) => {
      const m = f.name.match(/^(.+)\.([a-z]+)$/i);
      return m && EXTENSIONS.includes(m[2].toLowerCase()) ? [[m[1].toLowerCase(), f.download_url!] as [string, string]] : [];
    });
}

export function loadArtIndex(): Promise<void> {
  if (!loading) {
    loading = (async () => {
      const found = new Map<string, string>();
      // Lower-priority branches first so higher-priority ones overwrite.
      for (const branch of [...ART_SOURCE.branches].reverse()) {
        try {
          for (const [id, url] of await listBranch(branch)) found.set(id, url);
        } catch {
          // offline or rate-limited: placeholders are fine
        }
      }
      index = found;
      listeners.forEach((l) => l());
    })();
  }
  return loading;
}

export function artUrl(card: CardDef): string | null {
  if (!index) return null;
  return index.get(card.id) ?? index.get(card.baseId) ?? null;
}

/** Re-renders the caller once the art index has loaded. */
export function useArtIndex(): number {
  const [version, setVersion] = useState(index ? 1 : 0);
  useEffect(() => {
    const l = () => setVersion((v) => v + 1);
    listeners.add(l);
    loadArtIndex();
    return () => {
      listeners.delete(l);
    };
  }, []);
  return version;
}

export function artCount(): number {
  return index?.size ?? 0;
}
