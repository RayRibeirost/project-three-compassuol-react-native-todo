import { SvgXml } from "react-native-svg";
import { AppSvg } from "../../constants/svg";
import { MainContainer, 
         ButtonText } from "./style";

type Props = {
    content : string | null;
    buttonType : string;
    onPress: any;
    isVisible: any | null ;
}

export default function AppButton ({
    buttonType = "default", 
    content = "", 
    onPress = null, 
    isVisible = null} : Props){

    if (buttonType === "default") {
        return (
            <MainContainer onPress={onPress}>
                <ButtonText>{content}</ButtonText>
            </MainContainer>
        )
    }
    if (buttonType === "password") {
        return (
            <MainContainer onPress={onPress}>
                <SvgXml xml={isVisible} />
            </MainContainer>
        )
    }
    if (buttonType === "search") {
        return (
            <MainContainer onPress={onPress}>
                <SvgXml xml={AppSvg.searchIcon} />
            </MainContainer>
        )
    }
    if (buttonType === "createTask") {
        return (
            <MainContainer onPress={onPress}>
                <ButtonText>{content}</ButtonText>
                <SvgXml xml={AppSvg.createSign} />
            </MainContainer>
        )
    }
    if (buttonType === "createOrEdit") {
        return (
            <MainContainer onPress={onPress}>
                <SvgXml xml={AppSvg.createSign} />
            </MainContainer>
        )
    }
    
}