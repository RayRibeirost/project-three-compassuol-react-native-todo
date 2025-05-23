import { styled } from "styled-components/native";
import { colors } from "../../constants/colors";

export const MainContainer = styled.View`
    align-items: center;
    justify-content: center;
    border: 1px solid ${colors.base.gray400};
    border-radius: 10px;
    margin-bottom: 10px;
    width: 100%;
    height: 75px; 
`;

export const ContentContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    height: 90%; 
`;

export const ButtonContainer = styled.TouchableOpacity`
    justify-content: flex-start;
`;

export const TextContainer = styled.View`
    width: 80%;
`;

export const ContentText = styled.Text`
    font-family: Inter-Regular;
    font-size: 12px;
    color: ${colors.base.gray600}
`;