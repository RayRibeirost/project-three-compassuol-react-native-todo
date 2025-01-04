import { styled } from "styled-components/native";
import { colors } from "../../constants/colors";

export const MainContainer = styled.TouchableOpacity`
    flex-direction: row;
    justify-content : center;
    align-items: center;
    gap: 9px;
    border-radius: 8px;
    width: 100%;
    height: 52px;
    background-color: ${colors.principal.purpleDark};
`

export const ButtonText = styled.Text`
    font-family: Inter-Bold;
    font-size: 16px;
    color: ${colors.base.gray100}
`