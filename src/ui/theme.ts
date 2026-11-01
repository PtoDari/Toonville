import type { Era, Faction, Rarity, Role } from '../engine/types';

export const COLORS = {
  bg: '#140B2E',
  panel: '#22164A',
  panelLight: '#2F2160',
  text: '#FFFFFF',
  textDim: '#B9AEE0',
  accent: '#FF8A00',
  good: '#4ADE80',
  bad: '#F87171',
  slime: '#8BE33B',
};

export const FACTION_COLORS: Record<Faction, [string, string]> = {
  labrats: ['#38BDF8', '#1D4ED8'],
  heroes: ['#FB7185', '#B91C1C'],
  villains: ['#C084FC', '#5B21B6'],
  animals: ['#4ADE80', '#15803D'],
  friends: ['#FDE047', '#D97706'],
};

export const RARITY_COLORS: Record<Rarity, string> = {
  common: '#9CA3AF',
  rare: '#E5E7EB',
  epic: '#E879F9',
  legendary: '#FBBF24',
};

export const ROLE_ICONS: Record<Role, string> = {
  CAP: '👑',
  STR: '⚡',
  STG: '🧠',
  GRD: '🛡️',
  TRK: '🃏',
};

export const ROLE_NAMES: Record<Role, string> = {
  CAP: 'Captain',
  STR: 'Striker',
  STG: 'Strategist',
  GRD: 'Guardian',
  TRK: 'Trickster',
};

export const ERA_BADGES: Record<Era, string> = { retro: '90s', y2k: 'Y2K', modern: 'NOW' };

export function initials(name: string): string {
  const words = name.replace(/\(.*?\)/g, '').replace(/[^A-Za-z&.\s]/g, '').split(/\s+/).filter(Boolean);
  return words.slice(0, 2).map((w) => w[0]).join('').toUpperCase();
}
