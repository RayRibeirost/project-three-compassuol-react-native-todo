import { styled } from "styled-components/native";
import { colors } from "../../constants/colors";

export const AppInputComponent = styled.TextInput`
  width: 100%;
  height: 52px;
  border: 2px solid ${colors.base.gray300};
  padding-left: 10px;
  border-radius: 8px;
  background-color: ${colors.base.gray100};
`;