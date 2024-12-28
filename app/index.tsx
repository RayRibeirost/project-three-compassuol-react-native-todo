import { useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen'
import { Link } from 'expo-router';
import { useFonts } from 'expo-font';

import AppButton from '../src/components/Buttons';
import { MainContainer, ContentContainer, SvgContainer, FormContainer, UsernameContainer, PasswordFormContainer, PasswordForm, PasswordButton, LoginButtonContainer } from '../src/styles/index';
import AppInput from '../src/components/Inputs';
import { SvgXml } from 'react-native-svg';
import { AppSvg } from '../src/constants/svg';

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
      <MainContainer>
        <ContentContainer>

          <SvgContainer>
            <SvgXml xml={AppSvg.mainLogo}/>
          </SvgContainer>

          <FormContainer>
            <UsernameContainer>
              <AppInput inputType="default" placeholder="Username" />
            </UsernameContainer>

            <PasswordFormContainer>
              <PasswordForm>
                <AppInput inputType="password" placeholder="Password"/>
              </PasswordForm>
              <PasswordButton>
                <AppButton content="" buttonType="password"/>
              </PasswordButton>
            </PasswordFormContainer>

            <LoginButtonContainer>
              <AppButton content="Login" buttonType="default">

              </AppButton>
            </LoginButtonContainer>
          </FormContainer>
          <Link href="/home">Go to Home</Link>

        </ContentContainer>
      </MainContainer>
    )
}


