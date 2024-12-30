import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react';
import { useFonts } from 'expo-font';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider, useAuth } from './src/context/AuthContext';
import Login from './screens/Login';
import Home from './screens/Home';


const Stack = createNativeStackNavigator()

export default function App() {
    SplashScreen.preventAutoHideAsync();
      
      const [fontsLoaded, error] = useFonts({
        'Inter-Regular' : require('./assets/fonts/Inter_28pt-Regular.ttf'),
        'Inter-SemiBold' : require('./assets/fonts/Inter_28pt-SemiBold.ttf'),
        'Inter-Bold' : require('./assets/fonts/Inter_28pt-Bold.ttf')
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
          <AuthProvider>
            <Layout></Layout>
          </AuthProvider>
      )
}

export const Layout = () => {
  const {authState} = useAuth()
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        { authState?.authenticated ? (
          <Stack.Screen 
            name="home"
            component={Home}
          />
        ) : (
          <Stack.Screen 
            name="login"
            component={Login}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}