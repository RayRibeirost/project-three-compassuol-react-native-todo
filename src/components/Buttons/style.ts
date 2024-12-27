import { styled } from "styled-components/native";
import { colors } from "../../constants/colors";

export const MainContainer = styled.TouchableOpacity`
    height: 52px;
    width: 100%;
    justify-content : center;
    align-items: center;
    border-radius: 8px;
    background-color: ${colors.principal.purpleDark};
`

export const ButtonText = styled.Text`
    font-family: inter-regular;
    font-size: 16px;
    color: ${colors.base.gray100}
`