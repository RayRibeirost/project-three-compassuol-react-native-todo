import { View, Text, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import { SvgXml } from "react-native-svg";
import { AppSvg } from "../../constants/svg";
import { MainContainer, ContentContainer, ContentText, ButtonContainer, TextContainer } from "./style";

type Props = {
    content : string;
}

export default function TaskCard({content} : Props) {
    return (
        <MainContainer>
            <ContentContainer>
                <ButtonContainer>
                    <SvgXml xml={AppSvg.isNotChecked}/>
                </ButtonContainer>
                <TextContainer>
                    <ContentText>
                        {content}
                    </ContentText>
                </TextContainer>
                <ButtonContainer>
                    <SvgXml xml={AppSvg.trashSign}/>
                </ButtonContainer>
            </ContentContainer>
        </MainContainer>
    )
}