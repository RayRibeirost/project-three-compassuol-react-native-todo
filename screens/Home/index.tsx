import { useContext, 
         useEffect,  
         useState } from "react";

import { View, 
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
  
  const [isLoaded, setLoaded] = useState<boolean | null>(false)
  
  const [tasks, setTasks] = useState<any>('');
  
  const [tasksCounter, setTaskCounter] = useState<number>(0)
  const [tasksCompletedCounter, setTaskCompletedCounter] = useState<number>(0);
  
  const [showCompleted, setShowCompleted] = useState<boolean>(false)
  const [tasksCompleted, setTaskCompleted] = useState<any>([])
  
  const [searchTask, setSearchTask] = useState<string | null>('')
  const [filteredTasks, setFilteredTasks] = useState<string | null>('')
  
  const [isModalVisible, setModalVisible] = useState<boolean>(false)
  const [modalType, setModalType] = useState<string | null>("")
  
  const [editModalText, setEditModalText] = useState<string>('')
  const [createModalText, setCreateModalText] = useState<string>('')

  const [idForModal, setIdForModal] = useState<number | string>('')
  const [todoForModal, setTodoForModal] = useState<string>('')

  const [tasksCreated, setTasksCreated] = useState<number>(0)

  let completedCounter : number = 0;
  
  

  useEffect(() => {
    setTimeout(() => {
      loadTasks();
    }, 1000)
  }, []);

  const loadTasks = async () => {
    const data : any = await getTasks();
    if (data) {
      setTasks(data.sort((a : any, b: any) => (a.completed === b.completed ? 0 : a.completed ? 1 : -1)))
      setTaskCounter(data.length)
      data.forEach((item : any) => {item.completed ? completedCounter +=1 : completedCounter += 0})
      setTaskCompletedCounter(completedCounter)
      setTaskCompleted(data.filter((item : any) => item.completed))


      const idArray : any[] = [] 
      data.forEach((item : any) => idArray.push(Number(item.id)))
      const maxSpread = Math.max(...idArray) + 1
      setTasksCreated(idArray.length > 0 ? maxSpread : 1)

      setLoaded(true)
    } else {
      setModalType("error")
      setModalVisible(true)
    }
    
  };

  const handleToggleCompleted = async (id:number, completed: boolean) => {
    await toggleTaskCompleted(id, !completed);
    loadTasks();
  };
  
  const handleDeleteTask = async (id: string | number) => {
    await deleteTask(id);
    loadTasks();
  };

  const handleCreateTask = async (id : string, todo : string, completed : boolean) => {
    loadTasks()
    await createTask(id, todo, completed)
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
    setCreateModalText("")
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

  const createTaskHandler = (id : string , todo : string, completed :  boolean) => {
    console.log(id, todo, completed);
    handleCreateTask(id, todo, completed);
    setTasksCreated(tasksCreated + 1)
    resetModalState();
  }

  const updateTaskHandler = (id : number | string, title : string) => {
    handleUpdateTask(id, title)
    resetModalState();
  }

  const reloadTasksHandler = () => {
    loadTasks();
    if (isLoaded) {
      setModalVisible(false);
    } else {
      setModalVisible(true);
    }
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
                    () => {
                      resetVisibility();
                      setFilteredTasks(tasks.filter((item : any) => item.todo.toLowerCase().includes(searchTask.toLowerCase())))}: 
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
                {isLoaded? 
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
            onPressCreateOrEdit={() => {modalType === "create"? createTaskHandler((tasksCreated).toString(), createModalText, false) : updateTaskHandler(idForModal, editModalText)}}
            taskId={idForModal}
            taskTodo={todoForModal}
            setToEdit={() => editModalHandler()}
            removeTask={() => removeModalHandler(idForModal)}
            onPressReload={reloadTasksHandler}
            createOrEditColor={modalType === "create"? createModalText? {backgroundColor:colors.principal.purpleDark} : {backgroundColor:colors.base.gray500} : editModalText? {backgroundColor:colors.principal.purpleDark} : {backgroundColor:colors.base.gray500}}
            isDisabled={modalType === "create"? createModalText? false : true : editModalText? false : true}
             />
      </MainContainer>
    );
}