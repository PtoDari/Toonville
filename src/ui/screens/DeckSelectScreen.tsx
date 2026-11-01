import { useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { getCard } from '../../data/cards';
import { PRESET_DECKS, PresetDeck } from '../../data/decks';
import type { Difficulty } from '../../engine/ai';
import { Button, Chip, Header } from '../common';
import { COLORS, FACTION_COLORS } from '../theme';

export interface MatchSetup {
  playerDeck: PresetDeck;
  cpuDeck: PresetDeck;
  difficulty: Difficulty;
}

export function DeckSelectScreen({ onBack, onStart }: { onBack: () => void; onStart: (setup: MatchSetup) => void }) {
  const [deckId, setDeckId] = useState(PRESET_DECKS[0].id);
  const [cpuId, setCpuId] = useState<string>('random');
  const [difficulty, setDifficulty] = useState<Difficulty>('normal');

  const start = () => {
    const playerDeck = PRESET_DECKS.find((d) => d.id === deckId)!;
    const others = PRESET_DECKS.filter((d) => d.id !== deckId);
    const cpuDeck = cpuId === 'random' ? others[Math.floor(Math.random() * others.length)] : PRESET_DECKS.find((d) => d.id === cpuId)!;
    onStart({ playerDeck, cpuDeck, difficulty });
  };

  return (
    <View style={{ flex: 1 }}>
      <Header title="Choose Your Crew" onBack={onBack} />
      <FlatList
        data={PRESET_DECKS}
        keyExtractor={(d) => d.id}
        contentContainerStyle={{ padding: 16, paddingBottom: 8 }}
        renderItem={({ item }) => {
          const active = item.id === deckId;
          return (
            <Pressable onPress={() => setDeckId(item.id)} style={[styles.deck, active && styles.deckActive]}>
              <Text style={styles.deckName}>{item.name}</Text>
              <Text style={styles.strategy}>{item.strategy}</Text>
              <View style={styles.dots}>
                {item.cards.map((id) => (
                  <View key={id} style={[styles.dot, { backgroundColor: FACTION_COLORS[getCard(id).faction][0] }]} />
                ))}
              </View>
              {active ? (
                <Text style={styles.cardList}>{item.cards.map((id) => getCard(id).name).join(' · ')}</Text>
              ) : null}
            </Pressable>
          );
        }}
      />
      <View style={styles.footer}>
        <Text style={styles.label}>Opponent</Text>
        <View style={styles.row}>
          <Chip label="Random" active={cpuId === 'random'} onPress={() => setCpuId('random')} />
          {PRESET_DECKS.filter((d) => d.id !== deckId).map((d) => (
            <Chip key={d.id} label={d.name} active={cpuId === d.id} onPress={() => setCpuId(d.id)} />
          ))}
        </View>
        <Text style={styles.label}>Difficulty</Text>
        <View style={styles.row}>
          {(['easy', 'normal', 'hard'] as Difficulty[]).map((d) => (
            <Chip key={d} label={d[0].toUpperCase() + d.slice(1)} active={difficulty === d} onPress={() => setDifficulty(d)} />
          ))}
        </View>
        <Button label="TIP-OFF!" onPress={start} style={{ marginTop: 8 }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  deck: { backgroundColor: COLORS.panel, borderRadius: 14, padding: 14, marginBottom: 10, borderWidth: 2, borderColor: 'transparent' },
  deckActive: { borderColor: COLORS.accent },
  deckName: { color: COLORS.text, fontSize: 17, fontWeight: '900' },
  strategy: { color: COLORS.textDim, fontSize: 13, marginTop: 4 },
  dots: { flexDirection: 'row', gap: 4, marginTop: 8 },
  dot: { width: 12, height: 12, borderRadius: 6 },
  cardList: { color: COLORS.text, fontSize: 12, marginTop: 8 },
  footer: { padding: 16, paddingTop: 8, borderTopWidth: 1, borderColor: COLORS.panelLight },
  label: { color: COLORS.textDim, fontSize: 12, fontWeight: '700', marginBottom: 4 },
  row: { flexDirection: 'row', flexWrap: 'wrap' },
});
