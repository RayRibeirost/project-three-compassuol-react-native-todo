import { useEffect, useState } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { SvgXml } from "react-native-svg";
import { AppSvg } from "../../src/constants/svg";
import { MainContainer, ContentContainer, HeaderContainer, LogoutSingContainer, MainLogoContainer, SearchContainer, SearchInputContainer, SearchButtonContainer, GrayRectangle, TasksContainer, LoadingContentContainer, TaskCounterContainer, TaskCounterButton, TaskCounterText, TaskCounterMain, TaskCounterCompleted, TaskListContainer, CreateButtonContainer, ButtonContainer, ListEmptyContainer, ListEmptyPrimaryText, ListtEmptySecondatyText } from "./style";
import { useAuth, getTasks, createTask, updateTask, toggleTaskCompleted, deleteTask } from "../../src/context/AuthContext";
import AppButton from "../../src/components/Buttons";
import AppInput from "../../src/components/Inputs";
import TaskCard from "../../src/components/TaskCard";

const generateId = () => `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`

const isLoaded: boolean = false

export default function Home() {
  const { onLogout } = useAuth();

  const [tasks, setTasks] = useState([]);

  const [tasksCounter, setTaskCounter] = useState(0)
  const [tasksCompletedCounter, setTaskCompletedCounter] = useState(0);

  const [showCompleted, setShowCompleted] = useState(false)
  const [tasksCompleted, setTaskCompleted] = useState([])

  const [searchTask, setSearchTask] = useState('')
  const [filteredTasks, setFilteredTasks] = useState('')

  let completedCounter = 0;

  const loadTasks = async () => {
    const data = await getTasks();
    setTasks(data.todos.sort((a, b) => (a.completed === b.completed ? 0 : a.completed ? 1 : -1)))

    setTaskCounter(data.todos.length)
    data.todos.forEach(item => {item.completed ? completedCounter +=1 : completedCounter += 0})

    setTaskCompletedCounter(completedCounter)
    setTaskCompleted(data.todos.filter(item => item.completed))
  }

  useEffect(() => {loadTasks();
  }, [])

  const handleToggleCompleted = async (id:number, completed: boolean) => {
    await toggleTaskCompleted(id, !completed)
    loadTasks()
  }
  
  const handleDeleteTask = async (id: number) => {
    await deleteTask(id);
    loadTasks();
  }

  const resetVisibility = () => {
    setFilteredTasks('')
    setShowCompleted(false)
  }

    return (
      <MainContainer>
        <ContentContainer>
          <HeaderContainer>
            <LogoutSingContainer>
              <TouchableOpacity onPress={onLogout}>
                <SvgXml xml={AppSvg.logoutSign} />
              </TouchableOpacity>
            </LogoutSingContainer>

            <MainLogoContainer>
              <SvgXml xml={AppSvg.mainLogo} />
            </MainLogoContainer>

            <SearchContainer>
              <SearchInputContainer>
                <AppInput inputType="default" placeholder="Pesquisar Tarefa" onChangeText={(text:string) => setSearchTask(text)}/>
              </SearchInputContainer>
              <SearchButtonContainer>
                <AppButton buttonType="search" content="" onPress={searchTask ? () => setFilteredTasks(tasks.filter(item => item.todo.toLowerCase().includes(searchTask.toLowerCase()))) : null } />
              </SearchButtonContainer>
            </SearchContainer>
          </HeaderContainer>

          <TasksContainer>
            <LoadingContentContainer>
              <TaskCounterContainer>
                <TaskCounterButton
                  onPress={resetVisibility}
                >
                  <TaskCounterText>Tarefas Criadas</TaskCounterText>
                  <TaskCounterMain>{tasksCounter}</TaskCounterMain>
                </TaskCounterButton>
                <TaskCounterButton onPress={() => setShowCompleted(true)}>
                  <TaskCounterText>Concluídas</TaskCounterText>
                  <TaskCounterCompleted>
                    {tasksCompletedCounter}
                  </TaskCounterCompleted>
                </TaskCounterButton>
              </TaskCounterContainer>
              <GrayRectangle></GrayRectangle>

              <TaskListContainer>
                <FlatList
                  data={showCompleted ? tasksCompleted : filteredTasks? filteredTasks : tasks}
                  renderItem={({ item }) => <TaskCard content={item.todo} />}
                  keyExtractor={(item) => item.id}
                  ListEmptyComponent={
                    <ListEmptyContainer>
                      <SvgXml xml={AppSvg.noItemsInserted} />
                      <ListEmptyPrimaryText>
                        Você ainda não tem tarefas cadastradas
                      </ListEmptyPrimaryText>
                      <ListtEmptySecondatyText>
                        Crie tarefas e organize seus itens a fazer
                      </ListtEmptySecondatyText>
                    </ListEmptyContainer>
                  }
                />
              </TaskListContainer>

              <CreateButtonContainer>
                <ButtonContainer>
                  <AppButton buttonType="createTask" content="Criar" />
                </ButtonContainer>
              </CreateButtonContainer>
            </LoadingContentContainer>
          </TasksContainer>
        </ContentContainer>
      </MainContainer>
    );
}