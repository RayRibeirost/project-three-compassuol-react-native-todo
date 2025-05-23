import { Text, 
         View } from 'react-native';
import { MainContainer, 
         ContentContainer, 
         SvgContainer, 
         FormContainer, 
         UsernameContainer, 
         PasswordFormContainer, 
         PasswordForm, 
         PasswordButton, 
         LoginButtonContainer } from './style';

import { SvgXml } from 'react-native-svg';
import { AppSvg } from '../../src/constants/svg';
import { useContext, useState } from 'react';
import { GlobalContext} from '../../src/context/AuthContext';
import { colors } from '../../src/constants/colors';


import AppButton from '../../src/components/Buttons';
import AppInput from '../../src/components/Inputs';


export default function Login() {

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const {onLogin} = useContext(GlobalContext)
  const [errorLogin, setErrorLogin] = useState<boolean>(false)
  const [showPassword, setShowPassword] = useState<boolean>(true)


  const login = async () => {
    const result = await onLogin!(username, password);
    if (result && result.error) {
      setErrorLogin(true)
    }
  }

  return (
      <MainContainer>
        <ContentContainer>

          <SvgContainer>
            <SvgXml 
              xml={AppSvg.mainLogo}
            />
          </SvgContainer>

          <FormContainer>
            <UsernameContainer>
              <AppInput 
                inputType="default" 
                placeholder="Username" 
                onChangeText={(text:string) => setUsername(text)} 
                value={username} 
                secureTextEntry={false} 
                borderStyle={errorLogin? 
                  {borderColor:`${colors.feedback.danger}`} : 
                  {}}
              />
            </UsernameContainer>

            <View 
              style={errorLogin? 
                {width:"100%", marginVertical:3, flexDirection:"row", alignItems:"center", justifyContent:"flex-start"} : 
                {width:"100%", marginVertical:3}}
            >
              <Text 
                style={errorLogin? 
                  {width:"100%", color:colors.feedback.danger, fontFamily:'Inter-Bold', fontSize:12} : 
                  {display:"none"}}
              >Username inválido</Text>
            </View>

            <PasswordFormContainer>
              <PasswordForm>
                <AppInput 
                  inputType="password" 
                  placeholder="Password" 
                  onChangeText={(text:string) => setPassword(text)} 
                  value={password} 
                  secureTextEntry={showPassword} 
                  borderStyle={errorLogin? 
                    {borderColor:`${colors.feedback.danger}`} : 
                    {}}
                  />
              </PasswordForm>
              <PasswordButton>
                <AppButton 
                  content="" 
                  buttonType="password" 
                  onPress={() => showPassword ? 
                    setShowPassword(false) : 
                    setShowPassword(true)} 
                  isVisible={showPassword ? 
                    AppSvg.isVisible : 
                    AppSvg.isNotVisible}
                />
              </PasswordButton>
            </PasswordFormContainer>
            
            <View 
              style={errorLogin? 
                {width:"100%", marginVertical:3, flexDirection:"row", alignItems:"center", justifyContent:"flex-start"} : 
                {width:"100%", marginVertical:3}}
            >
              <Text 
                style={errorLogin? 
                  {width:"100%", color:colors.feedback.danger, fontFamily:'Inter-Bold', fontSize:12} : 
                  {display:"none"}}
              >Senha inválida</Text>
            </View>

            <LoginButtonContainer>
              <AppButton 
                content="Login" 
                buttonType="default" 
                onPress={login} 
                isVisible={null}
              />
            </LoginButtonContainer>
          </FormContainer>

        </ContentContainer>
      </MainContainer>
    )
}


