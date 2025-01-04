import { useContext, 
         useEffect,  
         useState } from "react";

import { Text, 
         View, 
         FlatList, 
         TouchableOpacity, 
         ActivityIndicator } from "react-native";

import { MainContainer, 
         ContentContainer, 
         HeaderContainer, 
         LogoutSingContainer, 
         MainLogoContainer, 
         SearchContainer, 
         SearchInputContainer, 
         SearchButtonContainer, 
         GrayRectangle, 
         TasksContainer, 
         LoadingContentContainer, 
         TaskCounterContainer, 
         TaskCounterButton, 
         TaskCounterText, 
         TaskCounterMain, 
         TaskCounterCompleted, 
         TaskListContainer, 
         CreateButtonContainer, 
         ButtonContainer, 
         ListEmptyContainer, 
         ListEmptyPrimaryText, 
         ListtEmptySecondatyText, 
         } from "./style";

import { GlobalContext } from "../../src/context/AuthContext";


import { SvgXml } from "react-native-svg";
import { AppSvg } from "../../src/constants/svg";         
import { colors } from "../../src/constants/colors";

import AppButton from "../../src/components/Buttons";
import AppInput from "../../src/components/Inputs";
import TaskCard from "../../src/components/TaskCard";
import AppModal from "../../src/components/Modals";


export default function Home() {
  const { onLogout, 
          getTasks, 
          toggleTaskCompleted, 
          deleteTask, 
          createTask, 
          updateTask } = useContext(GlobalContext);
  
  const [isLoaded, setLoaded] = useState(false)
  
  const [tasks, setTasks] = useState('');
  
  const [tasksCounter, setTaskCounter] = useState(0)
  const [tasksCompletedCounter, setTaskCompletedCounter] = useState(0);
  
  const [showCompleted, setShowCompleted] = useState(false)
  const [tasksCompleted, setTaskCompleted] = useState([])
  
  const [searchTask, setSearchTask] = useState('')
  const [filteredTasks, setFilteredTasks] = useState('')
  
  const [isModalVisible, setModalVisible] = useState(false)
  const [modalType, setModalType] = useState("")
  
  const [editModalText, setEditModalText] = useState('')
  const [createModalText, setCreateModalText] = useState('')

  const [idForModal, setIdForModal] = useState('')
  const [todoForModal, setTodoForModal] = useState('')


  let completedCounter = 0;

  useEffect(() => {
    setTimeout(() => {
      loadTasks();
      setLoaded(true)
    }, 2000)
  }, []);

  const loadTasks = async () => {
    const data = await getTasks();
    setTasks(data.todos.sort((a, b) => (a.completed === b.completed ? 0 : a.completed ? 1 : -1)))

    setTaskCounter(data.todos.length)
    data.todos.forEach(item => {item.completed ? completedCounter +=1 : completedCounter += 0})

    setTaskCompletedCounter(completedCounter)
    setTaskCompleted(data.todos.filter(item => item.completed))
  };

  const handleToggleCompleted = async (id:number, completed: boolean) => {
    await toggleTaskCompleted(id, !completed);
    loadTasks();
  };
  
  const handleDeleteTask = async (id: string | number) => {
    await deleteTask(id);
    loadTasks();
  };

  const handleCreateTask = async (title : string) => {
    await createTask(title)
    loadTasks()
  }

  const handleUpdateTask = async (id : number | string, title : string) => {
    await updateTask(id, title)
    loadTasks()
  }

  const resetVisibility = () => {
    setFilteredTasks('')
    setShowCompleted(false)
  };

  const resetModalState = () => {
    setModalVisible(false);
    setModalType("")
    setEditModalText('')
    setCreateModalText('')
    setIdForModal('')
    setTodoForModal('')
  }

  const createModalHandler = () => {
    setModalVisible(true);
    setModalType("create");
  }

  const editOrDeleteHandler = (id : number | string, todo : string) => {
    setModalVisible(true);
    setModalType("editOrDelete");
    setEditModalText(todo)
    setCreateModalText(null)
    setIdForModal(id)
    setTodoForModal(todo)

  }

  const editModalHandler = () => {
    setModalType("edit");
  }

  const removeModalHandler = (id : string | number) => {
    handleDeleteTask(id);
    resetModalState();
  }

  const createTaskHandler = (title : string) => {
    handleCreateTask(title)
    resetModalState();
  }

  const updateTaskHandler = (id : number | string, title : string) => {
    handleUpdateTask(id, title)
    resetModalState();
  }

  

    return (
      <MainContainer>
        <ContentContainer>
          <HeaderContainer>
            <LogoutSingContainer>
              <TouchableOpacity 
                onPress={onLogout}>
                <SvgXml 
                  xml={AppSvg.logoutSign} />
              </TouchableOpacity>
            </LogoutSingContainer>

            <MainLogoContainer>
              <SvgXml 
                xml={AppSvg.mainLogo} />
            </MainLogoContainer>

            <SearchContainer>
              <SearchInputContainer>
                <AppInput
                  inputType="default"
                  placeholder="Pesquisar Tarefa"
                  value = {searchTask}
                  onChangeText={(text: string) => setSearchTask(text)}
                />
              </SearchInputContainer>
              <SearchButtonContainer>
                <AppButton
                  buttonType="search"
                  content=""
                  onPress={searchTask? 
                    () => setFilteredTasks(tasks.filter((item) => item.todo.toLowerCase().includes(searchTask.toLowerCase()))): 
                    null}
                />
              </SearchButtonContainer>
            </SearchContainer>
          </HeaderContainer>

          <TasksContainer>
            <LoadingContentContainer>
              <TaskCounterContainer>
                <TaskCounterButton 
                  onPress={resetVisibility}>
                  <TaskCounterText>Tarefas Criadas</TaskCounterText>
                  <TaskCounterMain>{tasksCounter}</TaskCounterMain>
                </TaskCounterButton>
                <TaskCounterButton 
                  onPress={() => setShowCompleted(true)}>
                  <TaskCounterText>Concluídas</TaskCounterText>
                  <TaskCounterCompleted>
                    {tasksCompletedCounter}
                  </TaskCounterCompleted>
                </TaskCounterButton>
              </TaskCounterContainer>
              <GrayRectangle></GrayRectangle>

              <TaskListContainer>
                {isLoaded ? 
                  <FlatList 
                    data={showCompleted? 
                      tasksCompleted : 
                      filteredTasks? 
                        filteredTasks : 
                        tasks}
                    renderItem={({ item }) => (
                      <TaskCard
                        content={item.todo}
                        onPressCompleted={() => handleToggleCompleted(item.id, item.completed)}
                        onPressDelete={() => {editOrDeleteHandler(item.id, item.todo)}}
                        completedSvg={item.completed ? 
                          AppSvg.isChecked : 
                          AppSvg.isNotChecked}
                        backgroundCardStyle={item.completed ? 
                          { backgroundColor: colors.base.gray100 } : 
                          { backgroundColor: colors.base.gray300 }}
                        textCardStyle={item.completed? 
                          {color: colors.base.gray500,textDecorationLine: "line-through"} : 
                          null}
                      />)}
                    keyExtractor={(item) => item.id}
                    ListEmptyComponent={
                      <ListEmptyContainer>
                        <SvgXml 
                          xml={AppSvg.noItemsInserted}/>
                        <ListEmptyPrimaryText>
                          Você ainda não tem tarefas cadastradas
                        </ListEmptyPrimaryText>
                        <ListtEmptySecondatyText>
                          Crie tarefas e organize seus itens a fazer
                        </ListtEmptySecondatyText>
                      </ListEmptyContainer>
                    }
                /> : 
                <View 
                  style={{flex:1, justifyContent:"center", alignItems:"center"}}>
                  <ActivityIndicator 
                    size={"large"} 
                    color={colors.principal.purpleDark}/>
                </View>
              }
    
              </TaskListContainer>

              <CreateButtonContainer>
                <ButtonContainer>
                  <AppButton 
                    buttonType="createTask" 
                    content="Criar" 
                    onPress={() => {createModalHandler()}} />
                </ButtonContainer>
              </CreateButtonContainer>
            </LoadingContentContainer>
          </TasksContainer>
        </ContentContainer>

          <AppModal 
            modalType={modalType} 
            isActive={isModalVisible}
            onPressExit={() => resetModalState()}
            onChangeText={modalType === "create" ? setCreateModalText : setEditModalText}
            value={modalType === "create" ? createModalText : editModalText }
            onPressCreateOrEdit={() => {modalType === "create"? createTaskHandler(createModalText) : updateTaskHandler(idForModal, editModalText)}}
            taskId={idForModal}
            taskTodo={todoForModal}
            setToEdit={() => editModalHandler()}
            removeTask={() => removeModalHandler(idForModal)}
            onPressReload={() => loadTasks()}
             />
      </MainContainer>
    );
}