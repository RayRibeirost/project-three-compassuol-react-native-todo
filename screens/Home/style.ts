import { styled } from "styled-components/native";
import { colors } from "../../src/constants/colors";
import { Dimensions } from "react-native";

const { height } = Dimensions.get("window")
let listHeight = ""

if (height > 900) {
    listHeight = "79.1%"
}
else if (height > 700) {
    listHeight = "77.5%"
} else if (height > 600) {
    listHeight = "65.7%"
} else {
    listHeight = "64.1%"
}

export const MainContainer = styled.View`
    flex: 1;
    jusitfy-content: center;
    align-items: center;
    background-color: ${colors.base.gray100};
`;

export const ContentContainer = styled.View`
    width: 90%;
    align-items: center;
`;

export const HeaderContainer = styled.View`
    align-items: center;
    width: 110%;
    height: 150px;
    background-color: ${colors.base.gray300};
    border-bottom: solid blue 30px;
`;

export const LogoutSingContainer = styled.View`
    width: 90%;
    align-items: flex-end;
    margin-top: 40px;
    margin-bottom: 15px;
`;

export const MainLogoContainer = styled.View``;

export const SearchContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width:90%;
    position: absolute;
    bottom: -23px;
`;

export const SearchInputContainer = styled.View`
    width: 82%;
`;

export const SearchButtonContainer = styled.View`
    width: 16%;
`;

export const GrayRectangle = styled.View`
    height: 1px;
    width: 100%;
    background-color: ${colors.base.gray300};
    margin-bottom: 10px;
    margin-top: 7px;
`

export const TasksContainer =  styled.View`
    margin-top: 40px;
    width: 100%;
`;

export const LoadingContentContainer = styled.View`
`;

export const TaskCounterContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px;
`;

export const TaskCounterButton = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: space-between;
    gap: 7px;
`;

export const TaskCounterText = styled.Text`
    font-family: Inter-SemiBold;
    font-size: 14px;
    color: ${colors.base.gray500}
`;

export const TaskCounterMain = styled.Text`
    font-family: Inter-Bold;
    font-size: 14px;
    color: ${colors.principal.purpleDark};
    background-color: ${colors.principal.purpleLight};
    padding: 1px 7px;
    border-radius: 10px;
`;

export const TaskCounterCompleted = styled.Text`
    font-family: Inter-Bold;
    font-size: 14px;
    color: ${colors.principal.greenDark};
    background-color: ${colors.principal.greenLight};
    padding: 1px 7px;
    border-radius: 10px;
`;

export const TaskListContainer = styled.View`
    height: ${listHeight};

`;

export const CreateButtonContainer = styled.View`
    flex-direction: row;
    justify-content: flex-end;
    width: 100%;
    
`;

export const ButtonContainer = styled.View`
    width: 30%;
    margin-top:10px;
`;

export const ListEmptyContainer = styled.View`
    margin-top: 30px;
    justify-content: center;
    align-items: center;
    gap: 1px;
`;

export const ListEmptyPrimaryText = styled.Text`
    font-family: Inter-SemiBold;
    font-size: 14px;
    color: ${colors.base.gray500};
    margin-top: 20px;
`;
export const ListtEmptySecondatyText = styled.Text`
    font-family: Inter-Regular;
    font-size: 14px;
    color: ${colors.base.gray500};
`;

export const ModalOuterContainer = styled.View`
    gap: 15px;
`;
export const ModalTitleContainer = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;
export const ModalInputContainer = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const ModalInputInnerContainer = styled.View`
    width: 79%;
    height: auto;
`;
export const ModalInputButtonInnerContainer = styled.View`
    width: 19%;
    height: auto;
`;

export const ModalTodoTextContainer = styled.View`
    width: 100%;
`;

export const ModalButtonsContainer = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 3px;
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
