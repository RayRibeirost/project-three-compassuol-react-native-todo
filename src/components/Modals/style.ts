import { styled } from "styled-components/native";
import { colors } from "../../constants/colors";

export const ForeContainer = styled.View`
    flex : 1;
    align-items : center;
    justify-content : center;
    background-color : rgba(38, 36, 40, 0.3);
`
export const InnerContainer = styled.View`
    width: 90%;
    height: auto;
    padding: 15px 10px;
    align-items: center;
    justify-content: center;
    background-color: ${colors.base.gray100};
    border-radius: 10px;
` 