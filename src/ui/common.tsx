import { Pressable, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { COLORS } from './theme';

export function Button({
  label,
  onPress,
  disabled,
  variant = 'primary',
  style,
}: {
  label: string;
  onPress: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
  style?: ViewStyle;
}) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.btn,
        variant === 'secondary' && styles.secondary,
        disabled && styles.disabled,
        pressed && { opacity: 0.8, transform: [{ scale: 0.98 }] },
        style,
      ]}
    >
      <Text style={[styles.label, variant === 'secondary' && { color: COLORS.text }]}>{label}</Text>
    </Pressable>
  );
}

export function Header({ title, onBack }: { title: string; onBack?: () => void }) {
  return (
    <View style={styles.header}>
      {onBack ? (
        <Pressable onPress={onBack} hitSlop={12}>
          <Text style={styles.back}>‹ Back</Text>
        </Pressable>
      ) : (
        <View style={{ width: 50 }} />
      )}
      <Text style={styles.title}>{title}</Text>
      <View style={{ width: 50 }} />
    </View>
  );
}

export function Chip({ label, active, onPress, color }: { label: string; active?: boolean; onPress?: () => void; color?: string }) {
  return (
    <Pressable onPress={onPress} style={[styles.chip, active && { backgroundColor: color ?? COLORS.accent, borderColor: color ?? COLORS.accent }]}>
      <Text style={[styles.chipText, active && { color: '#000' }]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: { backgroundColor: COLORS.accent, paddingVertical: 14, paddingHorizontal: 24, borderRadius: 28, alignItems: 'center' },
  secondary: { backgroundColor: COLORS.panelLight },
  disabled: { opacity: 0.4 },
  label: { color: '#000', fontWeight: '900', fontSize: 16, letterSpacing: 0.5 },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 16, paddingVertical: 10 },
  back: { color: COLORS.accent, fontSize: 16, fontWeight: '700', width: 50 },
  title: { color: COLORS.text, fontSize: 20, fontWeight: '900' },
  chip: { borderWidth: 1, borderColor: COLORS.panelLight, borderRadius: 14, paddingVertical: 5, paddingHorizontal: 10, marginRight: 6, marginBottom: 6 },
  chipText: { color: COLORS.text, fontSize: 12, fontWeight: '700' },
});
