import { useEffect, useMemo, useState } from 'react';
import { Animated, Modal, Pressable, ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { getCard } from '../../data/cards';
import { chooseAction } from '../../engine/ai';
import { createMatch, playQuarter } from '../../engine/match';
import { computeScores } from '../../engine/score';
import { BoardCard, MatchState, Placement, PLACEMENTS_PER_QUARTER, SideScore, SLOT_ROLES } from '../../engine/types';
import { CardDetail, CardView } from '../CardView';
import { Button } from '../common';
import { FloatingPopup, Popup, popupFor, synergyKeys } from '../Popups';
import { COLORS, ROLE_ICONS, ROLE_NAMES } from '../theme';
import type { MatchSetup } from './DeckSelectScreen';

const MONTH = new Date().getMonth() + 1;

function newMatch(setup: MatchSetup): MatchState {
  const seed = Math.floor(Math.random() * 1e9);
  return createMatch([setup.playerDeck.cards, setup.cpuDeck.cards], ['You', `CPU · ${setup.cpuDeck.name}`], seed, { month: MONTH });
}

/** Pops a card in when it first appears (keyed by board uid). */
function FlipIn({ children }: { children: React.ReactNode }) {
  const [scale] = useState(() => new Animated.Value(0.2));
  useEffect(() => {
    Animated.spring(scale, { toValue: 1, friction: 5, useNativeDriver: true }).start();
  }, [scale]);
  return <Animated.View style={{ transform: [{ scale }] }}>{children}</Animated.View>;
}

export function MatchScreen({ setup, onExit }: { setup: MatchSetup; onExit: () => void }) {
  const { width } = useWindowDimensions();
  const [match, setMatch] = useState(() => newMatch(setup));
  const [pending, setPending] = useState<Placement[]>([]);
  const [swap, setSwap] = useState<Placement | null>(null);
  const [selected, setSelected] = useState<string | null>(null);
  const [detail, setDetail] = useState<{ cardId: string; side?: 0 | 1; slot?: number } | null>(null);
  const [hint, setHint] = useState<string | null>(null);
  /** The finished match whose result screen is showing (null = hidden). */
  const [resultFor, setResultFor] = useState<MatchState | null>(null);

  const slotW = Math.min(90, (width - 32 - 4 * 6) / 5);
  const handW = Math.min(96, slotW * 1.15);
  const need = PLACEMENTS_PER_QUARTER[match.quarter] ?? 0;
  const me = match.players[0];
  const cpu = match.players[1];

  // My board as it would look with pending placements, for live projected scoring.
  const myDisplayBoard = useMemo(() => {
    const b: (BoardCard | null)[] = [...me.board];
    for (const p of [...pending, ...(swap ? [swap] : [])]) {
      b[p.slot] = { uid: -1 - p.slot, cardId: p.cardId, playedQuarter: match.quarter, silenced: false, fixedMods: [] };
    }
    return b;
  }, [me.board, pending, swap, match.quarter]);

  const scores = useMemo(
    () => computeScores([myDisplayBoard, cpu.board], match.finished ? 4 : match.quarter, MONTH),
    [myDisplayBoard, cpu.board, match.quarter, match.finished],
  );

  // Pop-up bubbles whenever a new synergy (combo, aura, leader, team bonus...) switches on.
  // Compared against the previous board during render (React's "adjust state on change" pattern).
  const keys = useMemo(
    () => synergyKeys(scores, [myDisplayBoard.map((b) => b?.cardId ?? null), cpu.board.map((b) => b?.cardId ?? null)]),
    [scores, myDisplayBoard, cpu.board],
  );
  const [popupState, setPopupState] = useState<{ keys: typeof keys; list: Popup[]; nextId: number }>(() => ({
    keys: new Map(),
    list: [],
    nextId: 1,
  }));
  if (popupState.keys !== keys) {
    let nextId = popupState.nextId;
    const fresh: Popup[] = [];
    for (const [k, v] of keys) if (!popupState.keys.has(k)) fresh.push(popupFor(nextId++, v.side, v.slot, v.mod));
    const replaced = new Set(fresh.map((f) => f.group));
    setPopupState({ keys, list: [...popupState.list.filter((p) => !replaced.has(p.group)), ...fresh], nextId });
  }
  const popups = popupState.list;
  const removePopup = (id: number) => setPopupState((st) => ({ ...st, list: st.list.filter((p) => p.id !== id) }));

  // Let the final Clutch popups play before the result screen appears.
  useEffect(() => {
    if (!match.finished) return;
    const t = setTimeout(() => setResultFor(match), 2200);
    return () => clearTimeout(t);
  }, [match]);
  const resultOpen = match.finished && resultFor === match;

  const usedIds = new Set([...pending.map((p) => p.cardId), ...(swap ? [swap.cardId] : [])]);
  const hand = me.hand.filter((id) => !usedIds.has(id));

  const flash = (msg: string) => {
    setHint(msg);
    setTimeout(() => setHint((h) => (h === msg ? null : h)), 2200);
  };

  const tapMySlot = (slot: number) => {
    const pend = pending.find((p) => p.slot === slot);
    if (pend && !selected) return setPending(pending.filter((p) => p !== pend));
    if (swap?.slot === slot && !selected) return setSwap(null);
    const existing = me.board[slot];
    if (!selected) {
      if (myDisplayBoard[slot]) setDetail({ cardId: myDisplayBoard[slot]!.cardId, side: 0, slot });
      return;
    }
    if (!existing && !pend) {
      if (pending.length >= need) return flash(`Only ${need} new card${need > 1 ? 's' : ''} this quarter.`);
      setPending([...pending, { cardId: selected, slot }]);
      setSelected(null);
      return;
    }
    if (pend) {
      setPending(pending.map((p) => (p === pend ? { cardId: selected, slot } : p)));
      setSelected(null);
      return;
    }
    if (existing && match.quarter === 3) {
      setSwap({ cardId: selected, slot });
      setSelected(null);
      flash(`Bench swap: ${getCard(selected).name} replaces ${getCard(existing.cardId).name}.`);
      return;
    }
    flash(match.quarter === 3 ? 'Pick an empty slot.' : 'Bench swaps unlock in Q3.');
  };

  const reveal = () => {
    const cpuAction = chooseAction(match, 1, setup.difficulty, match.rngState);
    const next = playQuarter(match, [{ placements: pending, swap: swap ?? undefined }, cpuAction]);
    setMatch(next);
    setPending([]);
    setSwap(null);
    setSelected(null);
  };

  const rematch = () => {
    setMatch(newMatch(setup));
    setPending([]);
    setSwap(null);
    setSelected(null);
  };

  const detailScore = detail?.side !== undefined && detail.slot !== undefined ? scores[detail.side].cards[detail.slot] : null;
  const last = match.history[match.history.length - 1];

  const renderBoard = (side: 0 | 1) => {
    const board = side === 0 ? myDisplayBoard : cpu.board;
    return (
      <View style={styles.boardRow}>
        {SLOT_ROLES.map((role, slot) => {
          const bc = board[slot];
          const isPending = side === 0 && (pending.some((p) => p.slot === slot) || swap?.slot === slot);
          const canPlace = side === 0 && !!selected && (!bc || isPending || match.quarter === 3);
          return (
            <View key={slot} style={{ alignItems: 'center', zIndex: 5 }}>
              {popups
                .filter((p) => p.side === side && p.slot === slot)
                .map((p, i) => (
                  <FloatingPopup key={p.id} popup={p} index={i} onDone={removePopup} width={slotW} />
                ))}
              {side === 0 ? null : <Text style={styles.slotLabel}>{ROLE_ICONS[role]}</Text>}
              {bc ? (
                <FlipIn key={bc.uid}>
                  <CardView
                    cardId={bc.cardId}
                    width={slotW}
                    score={scores[side].cards[slot]}
                    pending={isPending}
                    onPress={() => (side === 0 ? tapMySlot(slot) : setDetail({ cardId: bc.cardId, side, slot }))}
                    onLongPress={() => setDetail({ cardId: bc.cardId, side, slot })}
                  />
                </FlipIn>
              ) : (
                <Pressable
                  onPress={() => side === 0 && tapMySlot(slot)}
                  style={[styles.emptySlot, { width: slotW, height: slotW * 1.4 }, canPlace && styles.emptySlotActive]}
                >
                  <Text style={{ fontSize: slotW * 0.3 }}>{ROLE_ICONS[role]}</Text>
                  <Text style={styles.emptyText}>{ROLE_NAMES[role]}</Text>
                </Pressable>
              )}
              {side === 0 ? <Text style={styles.slotLabel}>{ROLE_ICONS[role]}</Text> : null}
            </View>
          );
        })}
      </View>
    );
  };

  const chemLine = (s: SideScore) => (s.chemistry.length ? s.chemistry.map((c) => `${c.label} +${c.amount}`).join(' · ') : 'No team bonuses yet');

  const status = match.finished
    ? 'Final — Clutch!'
    : `Q${match.quarter} · place ${need - pending.length} more${match.quarter === 3 ? ' · swap optional' : ''}`;

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.topBar}>
        <Pressable onPress={onExit} hitSlop={10}>
          <Text style={styles.exit}>✕</Text>
        </Pressable>
        <Text style={styles.status}>{status}</Text>
        {match.finished && !resultOpen ? (
          <Pressable onPress={() => setResultFor(match)} hitSlop={10}>
            <Text style={styles.exit}>🏁</Text>
          </Pressable>
        ) : (
          <View style={{ width: 20 }} />
        )}
      </View>

      <ScrollView contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 12 }}>
        <View style={styles.scoreRow}>
          <Text style={styles.cpuName} numberOfLines={1}>{cpu.name}</Text>
          <Text style={[styles.score, { color: COLORS.bad }]}>{scores[1].total}</Text>
        </View>
        <Text style={styles.chem}>{chemLine(scores[1])}</Text>
        {renderBoard(1)}

        <View style={[styles.divider, { zIndex: 30 }]}>
          <Text style={styles.dividerText}>
            {last ? `Q${last.quarter}: You ${last.totals[0]} – ${last.totals[1]} CPU` : 'Cards are revealed at the same time!'}
          </Text>
          <View pointerEvents="none" style={styles.bannerLayer}>
            {popups
              .filter((p) => p.slot === null)
              .map((p, i) => (
                <FloatingPopup key={p.id} popup={p} index={i} onDone={removePopup} />
              ))}
          </View>
        </View>

        {renderBoard(0)}
        <Text style={styles.chem}>{chemLine(scores[0])}</Text>
        <View style={styles.scoreRow}>
          <Text style={styles.cpuName}>You{!match.finished && pending.length ? ' (projected)' : ''}</Text>
          <Text style={[styles.score, { color: COLORS.good }]}>{scores[0].total}</Text>
        </View>

        <Text style={styles.log} numberOfLines={3}>
          {hint ?? match.log.slice(-3).join('\n')}
        </Text>
      </ScrollView>

      {!match.finished ? (
        <View style={styles.handArea}>
          <Text style={styles.handLabel}>
            {selected ? `Tap a slot for ${getCard(selected).name}` : 'Your hand — tap a card, then a slot · hold for details'}
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 8, paddingHorizontal: 16, paddingTop: 8 }}>
            {hand.map((id) => (
              <CardView
                key={id}
                cardId={id}
                width={handW}
                selected={selected === id}
                onPress={() => setSelected(selected === id ? null : id)}
                onLongPress={() => setDetail({ cardId: id })}
              />
            ))}
          </ScrollView>
          <View style={styles.actions}>
            <Button
              label="Clear"
              variant="secondary"
              onPress={() => {
                setPending([]);
                setSwap(null);
                setSelected(null);
              }}
              style={{ flex: 1 }}
            />
            <Button label={match.quarter === 3 ? 'REVEAL → CLUTCH!' : 'REVEAL!'} onPress={reveal} disabled={pending.length !== need} style={{ flex: 2 }} />
          </View>
        </View>
      ) : null}

      <CardDetail cardId={detail?.cardId ?? null} score={detailScore} onClose={() => setDetail(null)} />

      <Modal transparent visible={resultOpen} animationType="slide">
        <View style={styles.resultWrap}>
          <View style={styles.result}>
            <Text style={styles.resultTitle}>{match.winner === 0 ? '🏆 VICTORY!' : '💥 DEFEAT'}</Text>
            <Text style={styles.resultScore}>
              {scores[0].total} – {scores[1].total}
            </Text>
            <Text style={styles.resultReason}>{match.winReason}</Text>
            <Text style={styles.resultChem}>Your bonuses: {chemLine(scores[0])}</Text>
            <View style={{ gap: 10, alignSelf: 'stretch', marginTop: 16 }}>
              <Button label="REMATCH" onPress={rematch} />
              <Button label="See the board" variant="secondary" onPress={() => setResultFor(null)} />
              <Button label="Home" variant="secondary" onPress={onExit} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  topBar: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 8 },
  exit: { color: COLORS.textDim, fontSize: 20, width: 20 },
  status: { color: COLORS.accent, fontSize: 15, fontWeight: '900' },
  scoreRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 4 },
  cpuName: { color: COLORS.text, fontWeight: '800', fontSize: 14, flex: 1 },
  score: { fontSize: 30, fontWeight: '900' },
  chem: { color: COLORS.slime, fontSize: 11, marginBottom: 6 },
  boardRow: { flexDirection: 'row', justifyContent: 'space-between' },
  slotLabel: { color: COLORS.textDim, fontSize: 10, marginVertical: 2 },
  emptySlot: { borderWidth: 2, borderStyle: 'dashed', borderColor: COLORS.panelLight, borderRadius: 10, alignItems: 'center', justifyContent: 'center' },
  emptySlotActive: { borderColor: COLORS.accent, backgroundColor: 'rgba(255,138,0,0.12)' },
  emptyText: { color: COLORS.textDim, fontSize: 9, marginTop: 4 },
  divider: { marginVertical: 8, paddingVertical: 6, borderRadius: 8, backgroundColor: COLORS.panel, alignItems: 'center' },
  bannerLayer: { position: 'absolute', top: 2, left: 0, right: 0, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: 4, zIndex: 30 },
  dividerText: { color: COLORS.text, fontSize: 12, fontWeight: '700' },
  log: { color: COLORS.textDim, fontSize: 12, marginTop: 6, minHeight: 48 },
  handArea: { borderTopWidth: 1, borderColor: COLORS.panelLight, paddingBottom: 8, backgroundColor: COLORS.panel },
  handLabel: { color: COLORS.textDim, fontSize: 12, textAlign: 'center', marginTop: 6 },
  actions: { flexDirection: 'row', gap: 10, paddingHorizontal: 16, marginTop: 10 },
  resultWrap: { flex: 1, backgroundColor: 'rgba(0,0,0,0.75)', justifyContent: 'center', padding: 24 },
  result: { backgroundColor: COLORS.panel, borderRadius: 20, padding: 24, alignItems: 'center' },
  resultTitle: { color: COLORS.text, fontSize: 32, fontWeight: '900' },
  resultScore: { color: COLORS.accent, fontSize: 40, fontWeight: '900', marginTop: 8 },
  resultReason: { color: COLORS.textDim, marginTop: 4 },
  resultChem: { color: COLORS.slime, marginTop: 12, textAlign: 'center', fontSize: 12 },
});
