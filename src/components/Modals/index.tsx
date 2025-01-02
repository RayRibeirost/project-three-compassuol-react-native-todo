import { Modal, View } from "react-native";
import { colors } from "../../constants/colors";
import { ForeContainer, InnerContainer } from "./style";

type Props = {
  children: any | null;
  isActive: boolean;
};

export default function AppModal({ children, isActive }: Props) {
  return (
    <Modal animationType="fade" visible={isActive} transparent={true}>
      <ForeContainer>
        <InnerContainer
        >
          {children}
        </InnerContainer>
      </ForeContainer>
    </Modal>
  );
}
