import { SvgXml } from "react-native-svg";
import { AppSvg } from "../../constants/svg";
import { MainContainer, 
         ContentContainer, 
         ContentText, 
         ButtonContainer, 
         TextContainer } from "./style";

type Props = {
    content : string;
    onPressCompleted : () => Promise<void> | null;
    onPressDelete: () => void | null;
    completedSvg: any;
    backgroundCardStyle: any;
    textCardStyle: any;
}

export default function TaskCard({
  content = "", 
  onPressCompleted, 
  onPressDelete, 
  completedSvg, 
  backgroundCardStyle, 
  textCardStyle} : Props) {

    return (
      <MainContainer style={backgroundCardStyle}>
        <ContentContainer>
          <ButtonContainer onPress={onPressCompleted}>
            <SvgXml xml={completedSvg} />
          </ButtonContainer>
          <TextContainer>
            <ContentText style={textCardStyle}>{content}</ContentText>
          </TextContainer>
          <ButtonContainer onPress={onPressDelete}>
            <SvgXml xml={AppSvg.trashSign} />
          </ButtonContainer>
        </ContentContainer>
      </MainContainer>
    );
    
}