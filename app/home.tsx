import { View, Text, StyleSheet, StatusBar, ScrollView, FlatList, TouchableOpacity } from "react-native";
import { Link } from 'expo-router';
import AppButton from "../src/components/Buttons";
import { SvgXml } from "react-native-svg";
import { AppSvg } from "../src/constants/svg";
import AppInput from "../src/components/Inputs";
import { MainContainer, ContentContainer, HeaderContainer, LogoutSingContainer, MainLogoContainer, SearchContainer, SearchInputContainer, SearchButtonContainer, GrayRectangle, TasksContainer, LoadingContentContainer, TaskCounterContainer, TaskCounterButton, TaskCounterText, TaskCounterMain, TaskCounterCompleted, TaskListContainer, CreateButtonContainer, ButtonContainer, ListEmptyContainer, ListEmptyPrimaryText, ListtEmptySecondatyText } from "../src/styles/home";
import TaskCard from "../src/components/TaskCard";

const generateId = () => `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`

const isLoaded: boolean = false

const DATA = [
  {
    task : "Organize your desk and declutter unnecessary items.",
    id: generateId(),
    taskCompleted : false
  },
  {
    task : "Write a list of your goals for the next week.",
    id: generateId(),
    taskCompleted : false
  },
  {
    task : "Water your indoor plants and check their sunlight needs.",
    id: generateId(),
    taskCompleted : false
  },
  {
    task : "Research a new recipe and try cooking it for dinner.",
    id: generateId(),
    taskCompleted : false
  },
  {
    task : "Plan a weekend hike or outdoor activity.",
    id: generateId(),
    taskCompleted : false
  },
  {
    task : "Back up important files from your computer to the cloud.",
    id: generateId(),
    taskCompleted : false
  },
  {
    task : "Read a chapter of a book you've been meaning to finish.",
    id: generateId(),
    taskCompleted : false
  },
  {
    task : "Create a playlist of your favorite relaxing songs.",
    id: generateId(),
    taskCompleted : false
  },
  {
    task : "Stretch or do a 10-minute yoga session.",
    id: generateId(),
    taskCompleted : false
  },
  {
    task : "Write a thank-you note to someone who helped you recently. ",
    id: generateId(),
    taskCompleted : false
  },
  {
    task : "Organize your desk and declutter unnecessary items.",
    id: generateId(),
    taskCompleted : false
  },
  {
    task : "Write a list of your goals for the next week.",
    id: generateId(),
    taskCompleted : false
  },
  {
    task : "Water your indoor plants and check their sunlight needs.",
    id: generateId(),
    taskCompleted : false
  },
  {
    task : "Research a new recipe and try cooking it for dinner.",
    id: generateId(),
    taskCompleted : false
  },
  {
    task : "Plan a weekend hike or outdoor activity.",
    id: generateId(),
    taskCompleted : false
  },
  {
    task : "Back up important files from your computer to the cloud.",
    id: generateId(),
    taskCompleted : false
  },
  {
    task : "Read a chapter of a book you've been meaning to finish.",
    id: generateId(),
    taskCompleted : false
  },
  {
    task : "Create a playlist of your favorite relaxing songs.",
    id: generateId(),
    taskCompleted : false
  },
  {
    task : "Stretch or do a 10-minute yoga session.",
    id: generateId(),
    taskCompleted : false
  },
  {
    task : "Write a thank-you note to someone who helped you recently. ",
    id: generateId(),
    taskCompleted : false
  },

]

export default function Home() {
    return (
      <MainContainer>

        <ContentContainer>

            <HeaderContainer>

              <LogoutSingContainer>
                <SvgXml xml={AppSvg.logoutSign}/>
              </LogoutSingContainer>

              <MainLogoContainer>
                <SvgXml xml={AppSvg.mainLogo}/>
              </MainLogoContainer>

              <SearchContainer>
                <SearchInputContainer>
                  <AppInput inputType="default" placeholder="Pesquisar Tarefa"/>
                </SearchInputContainer>
                <SearchButtonContainer>
                  <AppButton buttonType="search" content=""/>
                </SearchButtonContainer>
              </SearchContainer>
            </HeaderContainer>

            <TasksContainer>

              <LoadingContentContainer>
                
                  <TaskCounterContainer>
                    <TaskCounterButton>
                      <TaskCounterText>Tarefas Criadas</TaskCounterText>
                      <TaskCounterMain>10</TaskCounterMain>
                    </TaskCounterButton>
                    <TaskCounterButton>
                      <TaskCounterText>Concluídas</TaskCounterText>
                      <TaskCounterCompleted>10</TaskCounterCompleted>
                    </TaskCounterButton>
                  </TaskCounterContainer>
                    <GrayRectangle></GrayRectangle>

                  <TaskListContainer>
                    <FlatList
                      data={DATA}
                      renderItem={({item}) => <TaskCard content={item.task} />}
                      keyExtractor={item => item.id}
                      ListEmptyComponent={
                        <ListEmptyContainer>
                          <SvgXml xml={AppSvg.noItemsInserted}/>
                          <ListEmptyPrimaryText>Você ainda não tem tarefas cadastradas</ListEmptyPrimaryText>
                          <ListtEmptySecondatyText>Crie tarefas e organize seus itens a fazer</ListtEmptySecondatyText>
                        </ListEmptyContainer>
                      }
                    />
                  </TaskListContainer>
                
                
                
                  <CreateButtonContainer>
                    <ButtonContainer>
                      <AppButton buttonType="createTask" content="Criar"/>
                    </ButtonContainer>
                  </CreateButtonContainer>
              </LoadingContentContainer>

            </TasksContainer>
            {/* <Link href="/">Back to login page</Link> */}
        </ContentContainer> 

      </MainContainer>
    )
}