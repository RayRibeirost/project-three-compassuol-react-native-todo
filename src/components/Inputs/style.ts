import { styled } from "styled-components/native";
import { colors } from "../../constants/colors";

export const AppInputComponent = styled.TextInput`
  border: 2px solid ${colors.base.gray300};
  border-radius: 8px;
  width: 100%;
  height: 52px;
  padding-left: 10px;
  background-color: ${colors.base.gray100};
`;