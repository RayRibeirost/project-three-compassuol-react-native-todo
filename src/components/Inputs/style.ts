import { styled } from "styled-components/native";
import { colors } from "../../constants/colors";

export const AppInputComponent = styled.TextInput`
    width: 100%;
    height: 52px;
    border: 1px solid ${colors.base.gray300};
    padding-left: 10px;
    border-radius: 8px;
`;