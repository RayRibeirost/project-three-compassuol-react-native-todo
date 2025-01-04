import { Modal, TouchableOpacity, View, Text } from "react-native";
import { SvgXml } from "react-native-svg";
import { AppSvg } from "../../constants/svg";
import { ForeContainer, 
         InnerContainer,
         ModalOuterContainer, 
         ModalTitleContainer,
         ModalInputContainer,
         ModalInputInnerContainer,
         ModalInputButtonInnerContainer,
         ModalButtonsContainer,
         ModalButtonInnerContainer,
         ModalTodoTextContainer,
         ModalTodoText, 
         ModalTitleText  } from "./style";

import AppButton from "../Buttons";
import AppInput from "../Inputs";

type Props = {
  modalType : string | null;
  isActive: boolean;
  onPressExit?: () => {};
  onChangeText?: () => {};
  value?: string | undefined;
  onPressCreateOrEdit?: () => {};
  taskId?: string | number;
  taskTodo?: string;
  setToEdit?: () => {};
  removeTask?: () => {};
  onPressReload?: () => {};
};

export default function AppModal({
  modalType, 
  isActive,
  onPressExit,
  onChangeText,
  value,
  onPressCreateOrEdit,
  taskId,
  taskTodo,
  setToEdit,
  removeTask,
  onPressReload,
}: Props) {
  if (modalType === "create") {
    return (
      <Modal 
        animationType="fade" 
        visible={isActive} 
        transparent={true}
        >
        <ForeContainer>
          <InnerContainer>
              <ModalOuterContainer>
                <ModalTitleContainer>
                  <ModalTitleText>Nova Tarefa</ModalTitleText>
                  <TouchableOpacity 
                    onPress={onPressExit}>
                    <SvgXml 
                      xml={AppSvg.exitSign}/>
                  </TouchableOpacity>
                </ModalTitleContainer>
                <ModalInputContainer>
                  <ModalInputInnerContainer>
                    <AppInput 
                      inputType="modal" 
                      placeholder="Digitar nova tarefa"
                      onChangeText={onChangeText}
                      value={value}/>
                  </ModalInputInnerContainer>
                  <ModalInputButtonInnerContainer>
                    <AppButton 
                      buttonType="createOrEdit"
                      onPress={onPressCreateOrEdit}/>
                  </ModalInputButtonInnerContainer>
                </ModalInputContainer>
            </ModalOuterContainer>
          </InnerContainer>
        </ForeContainer>
      </Modal>
    );
  }
  if (modalType === "editOrDelete") {
    return (
      <Modal 
        animationType="fade" 
        visible={isActive} 
        transparent={true}
        >
        <ForeContainer>
          <InnerContainer>
            <ModalOuterContainer>
              <ModalTitleContainer>
                <ModalTitleText>Tarefa: {taskId}</ModalTitleText>
                <TouchableOpacity 
                  onPress={onPressExit}>
                    <SvgXml 
                      xml={AppSvg.exitSign}/>
                  </TouchableOpacity>
              </ModalTitleContainer>
              <ModalTodoTextContainer>
                <ModalTodoText>
                  {taskTodo}
                </ModalTodoText>
              </ModalTodoTextContainer>
              <ModalButtonsContainer>
                <ModalButtonInnerContainer>
                  <AppButton 
                    buttonType="default" 
                    content="Editar" 
                    onPress={setToEdit}/>
                </ModalButtonInnerContainer>
                <ModalButtonInnerContainer>
                  <AppButton 
                    buttonType="default" 
                    content="Remover" 
                    onPress={removeTask}/>
                </ModalButtonInnerContainer>
              </ModalButtonsContainer>
            </ModalOuterContainer>
          </InnerContainer>
        </ForeContainer>
      </Modal>
    );
  }
  if (modalType === "edit") {
    return (
      <Modal 
        animationType="fade" 
        visible={isActive} 
        transparent={true}
        >
        <ForeContainer>
          <InnerContainer>
            <ModalOuterContainer>
                <ModalTitleContainer>
                  <Text>Editar Tarefa</Text>
                  <TouchableOpacity 
                    onPress={onPressExit}>
                    <SvgXml 
                      xml={AppSvg.exitSign}/>
                  </TouchableOpacity>
                </ModalTitleContainer>
                <ModalInputContainer>
                  <ModalInputInnerContainer>
                    <AppInput 
                      inputType="modal" 
                      placeholder="Editar tarefa" 
                      value={value}
                      onChangeText={onChangeText}/>
                  </ModalInputInnerContainer>
                  <ModalInputButtonInnerContainer>
                    <AppButton 
                      buttonType="createOrEdit"
                      onPress={onPressCreateOrEdit}
                      />
                  </ModalInputButtonInnerContainer>
                </ModalInputContainer>
            </ModalOuterContainer>
          </InnerContainer>
        </ForeContainer>
      </Modal>
    );
  }
  if (modalType === "error") {
    return (
      <Modal 
        animationType="fade" 
        visible={isActive} 
        transparent={true}
        >
        <ForeContainer>
          <InnerContainer>
            <View>
              <View>
                <Text>ERRO</Text>
              </View>
              <View>
                <Text>Erro ao receber dados da API.</Text>
              </View>
              <View>
                <TouchableOpacity onPress={onPressReload}>
                  <Text>
                    Tentar novamente
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </InnerContainer>
        </ForeContainer>
      </Modal>
    );
  }
}