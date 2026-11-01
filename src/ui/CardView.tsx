import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { Modal, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { getCard } from '../data/cards';
import { cardText } from '../engine/describe';
import { ERA_LABEL, FACTION_NAMES } from '../engine/score';
import type { CardScore } from '../engine/types';
import { artUrl, useArtIndex } from './art';
import { COLORS, ERA_BADGES, FACTION_COLORS, initials, RARITY_COLORS, ROLE_ICONS, ROLE_NAMES } from './theme';

interface Props {
  cardId: string;
  width: number;
  score?: CardScore | null;
  selected?: boolean;
  pending?: boolean;
  faceDown?: boolean;
  onPress?: () => void;
  onLongPress?: () => void;
  showLock?: boolean;
}

/** Compact card tile used on the board, in the hand and in the collection grid. */
export function CardView({ cardId, width, score, selected, pending, faceDown, onPress, onLongPress, showLock }: Props) {
  const c = getCard(cardId);
  const height = width * 1.4;
  const points = score ? score.points : c.points;
  const delta = score ? score.points - score.base : 0;
  const small = width < 80;
  useArtIndex();
  const art = artUrl(c);

  if (faceDown) {
    return (
      <View style={[styles.card, { width, height, borderColor: COLORS.panelLight }]}>
        <LinearGradient colors={['#3B2A7A', '#1B1035']} style={[StyleSheet.absoluteFill, styles.inner, styles.center]}>
          <Text style={{ fontSize: width * 0.35 }}>❓</Text>
        </LinearGradient>
      </View>
    );
  }

  return (
    <Pressable onPress={onPress} onLongPress={onLongPress} delayLongPress={300}>
      <View
        style={[
          styles.card,
          { width, height, borderColor: selected ? COLORS.accent : RARITY_COLORS[c.rarity], opacity: pending ? 0.75 : 1 },
          selected && styles.selected,
        ]}
      >
        <LinearGradient colors={FACTION_COLORS[c.faction]} style={StyleSheet.absoluteFill} />
        {art ? (
          <>
            <Image source={{ uri: art }} contentFit="cover" contentPosition="top" transition={250} cachePolicy="memory-disk" style={StyleSheet.absoluteFill} />
            <LinearGradient colors={['transparent', 'rgba(0,0,0,0.85)']} start={{ x: 0, y: 0.45 }} end={{ x: 0, y: 1 }} style={StyleSheet.absoluteFill} />
          </>
        ) : null}
        <View style={[StyleSheet.absoluteFill, styles.inner]}>
          <View style={styles.topRow}>
            <View style={[styles.points, { width: width * 0.36, height: width * 0.36, borderRadius: width * 0.18 }]}>
              <Text
                style={[
                  styles.pointsText,
                  { fontSize: width * 0.2 },
                  delta > 0 && { color: COLORS.good },
                  delta < 0 && { color: COLORS.bad },
                ]}
              >
                {points}
              </Text>
            </View>
            <Text style={{ fontSize: width * 0.17 }}>{ROLE_ICONS[c.role]}</Text>
          </View>
          <View style={styles.center}>
            {art ? null : <Text style={[styles.initials, { fontSize: width * 0.3 }]}>{initials(c.name)}</Text>}
          </View>
          <Text numberOfLines={2} style={[styles.name, { fontSize: small ? 9 : 12 }]}>
            {c.skin ? `${c.skin} ` : ''}
            {c.name}
          </Text>
          <View style={styles.bottomRow}>
            <Text style={[styles.badge, { fontSize: small ? 7 : 9 }]}>{ERA_BADGES[c.era]}</Text>
            {showLock && c.unlock ? <Text style={{ fontSize: small ? 8 : 10 }}>🔒</Text> : null}
            {score?.silenced ? <Text style={{ fontSize: small ? 8 : 10 }}>🔇</Text> : null}
          </View>
        </View>
        {pending ? (
          <View style={styles.pendingTag}>
            <Text style={styles.pendingText}>READY</Text>
          </View>
        ) : null}
      </View>
    </Pressable>
  );
}

/** Full-screen card details, including the live score breakdown when on the board. */
export function CardDetail({ cardId, score, onClose }: { cardId: string | null; score?: CardScore | null; onClose: () => void }) {
  if (!cardId) return null;
  const c = getCard(cardId);
  return (
    <Modal transparent animationType="fade" onRequestClose={onClose}>
      <Pressable style={styles.backdrop} onPress={onClose}>
        <Pressable style={styles.detail} onPress={() => {}}>
          <ScrollView contentContainerStyle={{ alignItems: 'center', padding: 16 }}>
            <CardView cardId={cardId} width={150} score={score} />
            <Text style={styles.detailTitle}>{c.skin ? `${c.name} — ${c.skin}` : c.name}</Text>
            <Text style={styles.detailSub}>
              {FACTION_NAMES[c.faction]} · {ROLE_NAMES[c.role]} · {c.rarity.toUpperCase()} · {ERA_LABEL[c.era]}
            </Text>
            <Text style={styles.detailSub}>{c.show}</Text>
            <Text style={styles.tags}>{c.tags.join(' · ')}</Text>
            {c.abilityName ? <Text style={styles.abilityName}>{c.abilityName}</Text> : null}
            {cardText(c).map((line, i) => (
              <Text key={i} style={styles.rule}>
                • {line}
              </Text>
            ))}
            {cardText(c).length === 0 ? <Text style={styles.rule}>No special ability — solid points.</Text> : null}
            {score ? (
              <View style={styles.breakdown}>
                <Text style={styles.abilityName}>This match</Text>
                <Text style={styles.rule}>Base {score.base}</Text>
                {score.mods.map((m, i) => (
                  <Text key={i} style={[styles.rule, { color: m.amount >= 0 ? COLORS.good : COLORS.bad }]}>
                    {m.amount >= 0 ? '+' : ''}
                    {m.amount} {m.label}
                  </Text>
                ))}
                {score.silenced ? <Text style={[styles.rule, { color: COLORS.bad }]}>Silenced: abilities off</Text> : null}
                <Text style={[styles.rule, { fontWeight: '800' }]}>= {score.points}</Text>
              </View>
            ) : null}
            {c.unlock ? <Text style={styles.unlock}>🔒 {c.unlock}</Text> : null}
            <Pressable style={styles.closeBtn} onPress={onClose}>
              <Text style={styles.closeText}>Close</Text>
            </Pressable>
          </ScrollView>
        </Pressable>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  card: { borderWidth: 2, borderRadius: 10, overflow: 'hidden', backgroundColor: COLORS.panel },
  selected: { borderWidth: 3, transform: [{ translateY: -6 }] },
  inner: { padding: 4, justifyContent: 'space-between' },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  topRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  points: { backgroundColor: 'rgba(0,0,0,0.55)', alignItems: 'center', justifyContent: 'center' },
  pointsText: { color: '#fff', fontWeight: '900' },
  initials: { color: 'rgba(255,255,255,0.85)', fontWeight: '900', fontStyle: 'italic', textShadowColor: 'rgba(0,0,0,0.5)', textShadowRadius: 4 },
  name: { color: '#fff', fontWeight: '800', textShadowColor: 'rgba(0,0,0,0.7)', textShadowRadius: 3 },
  bottomRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 2 },
  badge: { color: '#fff', backgroundColor: 'rgba(0,0,0,0.45)', paddingHorizontal: 3, borderRadius: 3, fontWeight: '700', overflow: 'hidden' },
  pendingTag: { position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: COLORS.accent, alignItems: 'center' },
  pendingText: { color: '#000', fontSize: 8, fontWeight: '900' },
  backdrop: { flex: 1, backgroundColor: 'rgba(0,0,0,0.7)', justifyContent: 'center', padding: 20 },
  detail: { backgroundColor: COLORS.panel, borderRadius: 16, maxHeight: '90%' },
  detailTitle: { color: COLORS.text, fontSize: 20, fontWeight: '900', marginTop: 12, textAlign: 'center' },
  detailSub: { color: COLORS.textDim, fontSize: 13, marginTop: 2, textAlign: 'center' },
  tags: { color: COLORS.accent, fontSize: 12, marginTop: 6, textAlign: 'center' },
  abilityName: { color: COLORS.text, fontWeight: '800', fontSize: 15, marginTop: 10 },
  rule: { color: COLORS.text, fontSize: 14, marginTop: 4, alignSelf: 'stretch' },
  breakdown: { alignSelf: 'stretch', marginTop: 8, padding: 8, backgroundColor: COLORS.panelLight, borderRadius: 8 },
  unlock: { color: COLORS.textDim, marginTop: 10, fontStyle: 'italic', textAlign: 'center' },
  closeBtn: { marginTop: 16, backgroundColor: COLORS.accent, paddingVertical: 10, paddingHorizontal: 32, borderRadius: 20 },
  closeText: { color: '#000', fontWeight: '900' },
});
