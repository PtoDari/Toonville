import { useEffect, useState } from 'react';
import { Animated, StyleSheet, Text } from 'react-native';
import type { Mod, ModKind, SideScore } from '../engine/types';
import { COLORS } from './theme';

export interface Popup {
  id: number;
  side: 0 | 1;
  /** null = team-wide bonus (shown as a banner). */
  slot: number | null;
  title: string;
  sub: string;
  /** Popups in the same group replace each other (e.g. Show Squad +2 → +3). */
  group: string;
}

const TITLES: Partial<Record<ModKind, string>> = {
  combo: 'Combo!',
  synergy: 'Synergy!',
  aura: 'Aura',
  leader: 'Leader',
  team: 'Team-up!',
  clutch: 'Clutch!',
  matchup: 'Matchup!',
  steal: 'Steal!',
  holiday: 'Holiday!',
  chaos: 'Chaos!',
  rivalry: 'Rivalry!',
  bonus: 'Bonus!',
};

/** Stable keys for every positive synergy currently on the board. */
export function synergyKeys(scores: [SideScore, SideScore], cardIds: [(string | null)[], (string | null)[]]): Map<string, { side: 0 | 1; slot: number | null; mod: Mod }> {
  const out = new Map<string, { side: 0 | 1; slot: number | null; mod: Mod }>();
  for (const side of [0, 1] as const) {
    scores[side].cards.forEach((c, slot) => {
      if (!c) return;
      for (const mod of c.mods) {
        if (mod.amount <= 0 || !mod.kind || !TITLES[mod.kind]) continue;
        out.set(`${side}:${slot}:${cardIds[side][slot]}:${mod.kind}:${mod.label}:${mod.amount}`, { side, slot, mod });
      }
    });
    for (const mod of scores[side].chemistry) out.set(`${side}:team:${mod.label}:${mod.amount}`, { side, slot: null, mod });
  }
  return out;
}

export function popupFor(id: number, side: 0 | 1, slot: number | null, mod: Mod): Popup {
  if (slot === null) {
    const [name, detail] = mod.label.split(':');
    return { id, side, slot, title: `${name} +${mod.amount}!`, sub: detail?.trim() ?? '', group: `${side}:team:${name}` };
  }
  return {
    id,
    side,
    slot,
    title: `+${mod.amount} ${TITLES[mod.kind!]}`,
    sub: mod.kind === 'rivalry' ? 'Faction edge' : mod.label,
    group: `${side}:${slot}:${mod.kind}:${mod.label}`,
  };
}

/** A bubble that pops up, floats upward and fades out. */
export function FloatingPopup({ popup, index, onDone, width }: { popup: Popup; index: number; onDone: (id: number) => void; width?: number }) {
  const [anim] = useState(() => new Animated.Value(0));
  useEffect(() => {
    Animated.sequence([
      Animated.delay(index * 180),
      Animated.spring(anim, { toValue: 1, friction: 5, useNativeDriver: true }),
      Animated.delay(900),
      Animated.timing(anim, { toValue: 2, duration: 500, useNativeDriver: true }),
    ]).start(() => onDone(popup.id));
    // Run once per popup; a changed stack index shouldn't restart the animation.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [anim]);
  const mine = popup.side === 0;
  const banner = popup.slot === null;
  return (
    <Animated.View
      pointerEvents="none"
      style={[
        banner ? styles.banner : styles.bubble,
        { backgroundColor: mine ? COLORS.slime : '#F472B6' },
        !banner && { top: -8 - index * 24, width: width ? width + 6 : undefined },
        {
          opacity: anim.interpolate({ inputRange: [0, 0.3, 1, 2], outputRange: [0, 1, 1, 0] }),
          transform: [
            { translateY: anim.interpolate({ inputRange: [0, 1, 2], outputRange: [10, 0, -24] }) },
            { scale: anim.interpolate({ inputRange: [0, 1, 2], outputRange: [0.5, 1, 1] }) },
          ],
        },
      ]}
    >
      <Text style={banner ? styles.bannerTitle : styles.title} numberOfLines={1}>
        {popup.title}
      </Text>
      {popup.sub ? (
        <Text style={banner ? styles.bannerSub : styles.sub} numberOfLines={1}>
          {popup.sub}
        </Text>
      ) : null}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  bubble: {
    position: 'absolute',
    alignSelf: 'center',
    zIndex: 20,
    paddingHorizontal: 3,
    paddingVertical: 2,
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 6,
  },
  title: { color: '#000', fontWeight: '900', fontSize: 11 },
  sub: { color: '#000', fontSize: 8, fontWeight: '700' },
  banner: { paddingHorizontal: 8, paddingVertical: 3, borderRadius: 10, alignItems: 'center', elevation: 6 },
  bannerTitle: { color: '#000', fontWeight: '900', fontSize: 12 },
  bannerSub: { color: '#000', fontSize: 9, fontWeight: '700' },
});
