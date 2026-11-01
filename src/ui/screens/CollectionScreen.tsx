import { useMemo, useState } from 'react';
import { FlatList, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { ALL_CARDS } from '../../data/cards';
import { FACTION_NAMES } from '../../engine/score';
import type { Era, Faction } from '../../engine/types';
import { CardDetail, CardView } from '../CardView';
import { Chip, Header } from '../common';
import { COLORS, ERA_BADGES, FACTION_COLORS } from '../theme';

const FACTIONS: Faction[] = ['labrats', 'heroes', 'villains', 'animals', 'friends'];
const ERAS: Era[] = ['retro', 'y2k', 'modern'];

export function CollectionScreen({ onBack }: { onBack: () => void }) {
  const { width } = useWindowDimensions();
  const [faction, setFaction] = useState<Faction | null>(null);
  const [era, setEra] = useState<Era | null>(null);
  const [skinsOnly, setSkinsOnly] = useState(false);
  const [detail, setDetail] = useState<string | null>(null);
  const cols = width > 600 ? 5 : 3;
  const cardW = (width - 32 - (cols - 1) * 8) / cols;

  const cards = useMemo(
    () =>
      ALL_CARDS.filter(
        (c) => (!faction || c.faction === faction) && (!era || c.era === era) && (!skinsOnly || c.skin),
      ),
    [faction, era, skinsOnly],
  );

  return (
    <View style={{ flex: 1 }}>
      <Header title="Collection" onBack={onBack} />
      <View style={styles.filters}>
        <View style={styles.row}>
          <Chip label="All" active={!faction} onPress={() => setFaction(null)} />
          {FACTIONS.map((f) => (
            <Chip key={f} label={FACTION_NAMES[f]} color={FACTION_COLORS[f][0]} active={faction === f} onPress={() => setFaction(faction === f ? null : f)} />
          ))}
        </View>
        <View style={styles.row}>
          {ERAS.map((e) => (
            <Chip key={e} label={ERA_BADGES[e]} active={era === e} onPress={() => setEra(era === e ? null : e)} />
          ))}
          <Chip label="Skins" active={skinsOnly} onPress={() => setSkinsOnly(!skinsOnly)} />
        </View>
        <Text style={styles.count}>{cards.length} cards · tap for details</Text>
      </View>
      <FlatList
        data={cards}
        key={cols}
        numColumns={cols}
        keyExtractor={(c) => c.id}
        contentContainerStyle={{ padding: 16, paddingTop: 4 }}
        columnWrapperStyle={{ gap: 8, marginBottom: 8 }}
        renderItem={({ item }) => <CardView cardId={item.id} width={cardW} showLock onPress={() => setDetail(item.id)} />}
      />
      <CardDetail cardId={detail} onClose={() => setDetail(null)} />
    </View>
  );
}

const styles = StyleSheet.create({
  filters: { paddingHorizontal: 16 },
  row: { flexDirection: 'row', flexWrap: 'wrap' },
  count: { color: COLORS.textDim, fontSize: 12, marginBottom: 4 },
});
