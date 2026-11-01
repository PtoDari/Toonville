import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { CollectionScreen } from './src/ui/screens/CollectionScreen';
import { DeckSelectScreen, MatchSetup } from './src/ui/screens/DeckSelectScreen';
import { HomeScreen } from './src/ui/screens/HomeScreen';
import { HowToScreen } from './src/ui/screens/HowToScreen';
import { MatchScreen } from './src/ui/screens/MatchScreen';
import { COLORS } from './src/ui/theme';

type Screen = { name: 'home' } | { name: 'decks' } | { name: 'collection' } | { name: 'howto' } | { name: 'match'; setup: MatchSetup };

export default function App() {
  const [screen, setScreen] = useState<Screen>({ name: 'home' });
  const home = () => setScreen({ name: 'home' });

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.root}>
        <StatusBar style="light" />
        {screen.name === 'home' && (
          <HomeScreen
            onPlay={() => setScreen({ name: 'decks' })}
            onCollection={() => setScreen({ name: 'collection' })}
            onHowTo={() => setScreen({ name: 'howto' })}
          />
        )}
        {screen.name === 'decks' && <DeckSelectScreen onBack={home} onStart={(setup) => setScreen({ name: 'match', setup })} />}
        {screen.name === 'collection' && <CollectionScreen onBack={home} />}
        {screen.name === 'howto' && <HowToScreen onBack={home} />}
        {screen.name === 'match' && <MatchScreen setup={screen.setup} onExit={home} />}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: COLORS.bg },
});
