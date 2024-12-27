import { View, Text, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import { SvgXml } from "react-native-svg";
import { AppSvg } from "../../constants/svg";
import { MainContainer, ButtonText } from "./style";

type Props = {
    content : string | null;
    buttonType : string ;
}

export default function AppButton ({buttonType, content} : Props){
    if (buttonType === "default") {
        return (
            <MainContainer>
                <ButtonText>{content}</ButtonText>
            </MainContainer>
        )
    }
    if (buttonType = "password") {
        return (
            <MainContainer>
                <SvgXml xml={AppSvg.isVisible} />
            </MainContainer>
        )
    }
}