import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View } from 'react-native';
import { ALL_CARDS } from '../../data/cards';
import { Button } from '../common';
import { COLORS } from '../theme';

export function HomeScreen({ onPlay, onCollection, onHowTo }: { onPlay: () => void; onCollection: () => void; onHowTo: () => void }) {
  return (
    <View style={styles.wrap}>
      <LinearGradient colors={['#FF8A00', '#E11D48', '#7C3AED']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.logo}>
        <Text style={styles.logoText}>TOONVILLE</Text>
        <Text style={styles.tagline}>Grand Tournament</Text>
      </LinearGradient>
      <Text style={styles.sub}>{ALL_CARDS.length} cards · 5 factions · 3 eras</Text>
      <View style={styles.buttons}>
        <Button label="▶  PLAY VS CPU" onPress={onPlay} />
        <Button label="📚  COLLECTION" onPress={onCollection} variant="secondary" />
        <Button label="❔  HOW TO PLAY" onPress={onHowTo} variant="secondary" />
      </View>
      <Text style={styles.footer}>A just-for-fun fan project</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24 },
  logo: { paddingVertical: 28, paddingHorizontal: 28, borderRadius: 24, alignItems: 'center', transform: [{ rotate: '-3deg' }] },
  logoText: { color: '#fff', fontSize: 44, fontWeight: '900', fontStyle: 'italic', letterSpacing: 2, textShadowColor: '#000', textShadowRadius: 6, textShadowOffset: { width: 2, height: 3 } },
  tagline: { color: '#FDE047', fontSize: 16, fontWeight: '800', letterSpacing: 4, marginTop: 4 },
  sub: { color: COLORS.textDim, marginTop: 24, fontSize: 14 },
  buttons: { alignSelf: 'stretch', gap: 12, marginTop: 36 },
  footer: { color: COLORS.textDim, fontSize: 11, position: 'absolute', bottom: 16 },
});
