import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import MusicAppHomeScreen from './components/MusicHomeScreen';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#111' }}>
        <MusicAppHomeScreen />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
