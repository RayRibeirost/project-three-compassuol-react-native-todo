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
    justify-content: space-around;
    align-items: center;
    background-color: ${colors.base.gray100};
`;

export const ContentContainer = styled.View`
    align-items: center;
    width: 90%;
`;

export const HeaderContainer = styled.View`
    align-items: center;
    width: 110%;
    height: 150px;
    background-color: ${colors.base.gray300};
    border-bottom: solid blue 30px;
`;

export const LogoutSingContainer = styled.View`
    align-items: flex-end;
    width: 90%;
    margin-top: 40px;
    margin-bottom: 15px;
`;

export const MainLogoContainer = styled.View``;

export const SearchContainer = styled.View`
    position: absolute;
    bottom: -23px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width:90%;
`;

export const SearchInputContainer = styled.View`
    width: 82%;
`;

export const SearchButtonContainer = styled.View`
    width: 16%;
`;

export const GrayRectangle = styled.View`
    width: 100%;
    height: 1px;
    margin-bottom: 10px;
    margin-top: 7px;
    background-color: ${colors.base.gray300};
`

export const TasksContainer =  styled.View`
    width: 100%;
    margin-top: 40px;
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
    padding: 1px 7px;
    border-radius: 10px;
    font-family: Inter-Bold;
    font-size: 14px;
    color: ${colors.principal.purpleDark};
    background-color: ${colors.principal.purpleLight};
`;

export const TaskCounterCompleted = styled.Text`
    padding: 1px 7px;
    border-radius: 10px;
    font-family: Inter-Bold;
    font-size: 14px;
    color: ${colors.principal.greenDark};
    background-color: ${colors.principal.greenLight};
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
    justify-content: center;
    align-items: center;
    gap: 1px;
    margin-top: 30px;
`;

export const ListEmptyPrimaryText = styled.Text`
    margin-top: 20px;
    font-family: Inter-SemiBold;
    font-size: 14px;
    color: ${colors.base.gray500};
`;
export const ListtEmptySecondatyText = styled.Text`
    font-family: Inter-Regular;
    font-size: 14px;
    color: ${colors.base.gray500};
`;


