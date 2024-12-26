import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Inter-Regular' : require('./assets/fonts/Inter_28pt-Regular.ttf'),
    'Inter-SemiBold' : require('./assets/fonts/Inter_28pt-SemiBold.ttf'),
    'Inter-Bold' : require('./assets/fonts/Inter_28pt-Bold.ttf')
  })
  return (
    <View style={styles.container}>
      <Text>Init</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
