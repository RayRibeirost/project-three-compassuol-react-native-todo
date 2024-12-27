import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react';
import { Link } from 'expo-router';

export default function Login() {
  
  SplashScreen.preventAutoHideAsync();
  
  const [fontsLoaded, error] = useFonts({
    'Inter-Regular' : require('../assets/fonts/Inter_28pt-Regular.ttf'),
    'Inter-SemiBold' : require('../assets/fonts/Inter_28pt-SemiBold.ttf'),
    'Inter-Bold' : require('../assets/fonts/Inter_28pt-Bold.ttf')
  })

  useEffect(() => {
    if (fontsLoaded || error) {
      setTimeout(SplashScreen.hideAsync, 1500);
    }
  }, [fontsLoaded, error])

  if (!fontsLoaded && !error) {
    return null
  }


  return (
    <>
      <Link href="/home" style={{marginTop:100}}>Go to Home</Link>
    </> )
}


