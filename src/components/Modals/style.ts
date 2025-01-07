import { styled } from "styled-components/native";
import { colors } from "../../constants/colors";

import { Dimensions } from "react-native";

const { height } = Dimensions.get("window")
let inputWidth : string = ""

if (height > 900) {
    inputWidth = "85%"
}
else if (height > 700) {
    inputWidth = "83%"
} else if (height > 600) {
    inputWidth = "81%"
} else {
    inputWidth = "79%"
}

export const ForeContainer = styled.View`
    flex : 1;
    align-items : center;
    justify-content : center;
    background-color : rgba(38, 36, 40, 0.3);
`
export const InnerContainer = styled.View`
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    width: 90%;
    height: auto;
    padding: 15px 10px;
    background-color: ${colors.base.gray100};
` 

export const ModalOuterContainer = styled.View`
    gap: 15px;
`;
export const ModalTitleContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;
export const ModalInputContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height:auto;
    width: 100%;
`;

export const ModalInputInnerContainer = styled.View`
    flex-direction: row;
    align-items: center;
    width: ${inputWidth};
    height: auto;
`;
export const ModalInputButtonInnerContainer = styled.View`
    width: 19%;
    min-height: 52px;
    height: auto;
`;

export const ModalTodoTextContainer = styled.View`
    width: 100%;
`;

export const ModalButtonsContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 3px;
    width: 100%;
`;

export const ModalButtonInnerContainer = styled.View`
    width:49%;
`

export const ModalTitleText = styled.Text`
    font-family: Inter-SemiBold;
    font-size: 14px;
    color: ${colors.base.gray500};
`;

export const ModalTodoText = styled.Text`
    font-family: Inter-SemiBold;
    font-size: 12px;
    color: ${colors.base.gray600};
`

export const ErrorModalMainContainer = styled.View`
    justify-content: center;
    align-items: center;
    gap: 28px;
    margin: 15px auto;
    width: 100%;
`;
export const ErrorTextContainer = styled.View``;
export const ErrorText = styled.Text`
    font-family: Inter-SemiBold;
    font-size: 14px;
    color: ${colors.base.gray500};
`;
export const ErroInfoContainer = styled.View``;
export const ErrorInfoText = styled.Text`
    font-family: Inter-Regular;
    font-size: 16px;
    color: ${colors.base.gray500};
`;
export const ReloadButtonContainer = styled.View`
    width: 90%
`;

export const ReloadButton = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: flex-end;
    width:100%;
`;

export const ReloadButtonText = styled.Text`
    font-family: Inter-SemiBold;
    font-size: 14px;
    color: ${colors.base.gray500};
`;
