import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Header } from '../common';
import { COLORS, FACTION_COLORS, ROLE_ICONS } from '../theme';

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <View style={styles.section}>
    <Text style={styles.h}>{title}</Text>
    {children}
  </View>
);
const P = ({ children }: { children: React.ReactNode }) => <Text style={styles.p}>{children}</Text>;

export function HowToScreen({ onBack }: { onBack: () => void }) {
  return (
    <View style={{ flex: 1 }}>
      <Header title="How to Play" onBack={onBack} />
      <ScrollView contentContainerStyle={{ padding: 16, paddingBottom: 40 }}>
        <Section title="The match">
          <P>Both crews bring 12 cards and draw 6. Each side has 5 slots: {ROLE_ICONS.STR} Striker, {ROLE_ICONS.TRK} Trickster, {ROLE_ICONS.CAP} Captain, {ROLE_ICONS.STG} Strategist, {ROLE_ICONS.GRD} Guardian.</P>
          <P>Q1: place 2 cards · Q2: place 2 · Q3: place the last 1 and optionally bench-swap a card · Q4 Clutch: Clutch abilities fire and the highest score wins.</P>
          <P>Everyone places in secret, then all cards reveal at once.</P>
        </Section>
        <Section title="Card bonuses">
          <P>Role Fit: a card in its own role slot gets +1 (off-role −1).</P>
          <P>Lane: the card straight across from yours. Some abilities hit or depend on it.</P>
          <P>Aura: affects the cards right next to it. Leader: only works in the {ROLE_ICONS.CAP} Captain slot.</P>
          <P>Combo: bonus when a partner is on your board (Ren & Stimpy, Bebop & Rocksteady...).</P>
          <P>Steadfast ignores debuffs · Intangible ignores Lane effects · 🔇 = silenced.</P>
        </Section>
        <Section title="Team bonuses">
          <P>Full Crew: all 5 cards role-fit → +4</P>
          <P>Faction Surge: 3/4/5 of one faction → +3/+4/+6</P>
          <P>Show Squad: 3/4/5 from one show → +2/+3/+5 (only the bigger of Surge or Squad counts)</P>
          <P>Rainbow Crew: all 5 factions → +8</P>
          <P>Era Block: 3/4/5 from one era → +1/+2/+3 · Time Warp: every era → +4</P>
        </Section>
        <Section title="Rivalry Wheel (+1 per lane you win)">
          {[
            ['heroes', 'Heroes beat Villains'],
            ['villains', 'Villains beat Friends'],
            ['friends', 'Friends beat Animals'],
            ['animals', 'Animals beat Lab Rats'],
            ['labrats', 'Lab Rats beat Heroes'],
          ].map(([f, t]) => (
            <Text key={f} style={[styles.p, { color: FACTION_COLORS[f as keyof typeof FACTION_COLORS][0] }]}>
              ● {t}
            </Text>
          ))}
        </Section>
        <Section title="Tips">
          <P>Hold any card to read its abilities and see exactly where its points come from.</P>
          <P>Your score updates live as you place cards, so try different slots before revealing.</P>
        </Section>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  section: { backgroundColor: COLORS.panel, borderRadius: 14, padding: 14, marginBottom: 12 },
  h: { color: COLORS.accent, fontSize: 16, fontWeight: '900', marginBottom: 6 },
  p: { color: COLORS.text, fontSize: 14, lineHeight: 20, marginBottom: 4 },
});
