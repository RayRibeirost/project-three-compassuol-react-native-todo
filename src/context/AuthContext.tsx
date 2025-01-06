import { createContext, useEffect, useState } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";


interface AuthProps {
    authState?: {token: string | null; authenticated: boolean | null};
    onLogin?: (username: string, password: string) => Promise<any>;
    onLogout?: () => void;
    getTasks : () => Promise<any>;
    createTask: (title : string) => Promise<any>;
    updateTask: (id : number | string, title: string) => Promise<any>;
    toggleTaskCompleted: (id : number | string, completed: boolean) => Promise<any>;
    deleteTask: (id: number | string) => Promise<any> ;
}

const tokenKey = 'my-jwt';
export const api = axios.create({ baseURL: "https://dummyjson.com/" });

export const GlobalContext = createContext<AuthProps>({})

export const GlobalProvider = ({children} : any) => {
    
    const [authState, setAuthState] = useState<{token : string | null; authenticated: boolean | null}>({
        token : null, 
        authenticated : null,
    })

    const tokenValidation = async (token: string) => {
        try {
            const response = await api.get(`/auth/me`, {
                headers : {Authorization : `Bearer ${token}`}
            })
            return response.data
        } catch(error) {
            console.error("Invalid Token", error)
            return false
        }
    }


    useEffect(() => {
        const loadToken = async () => {
            try {
                const token = await AsyncStorage.getItem(tokenKey)
                if (token) {
                    const validToken = await tokenValidation(token);
                    if (validToken) {
                        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

                        setAuthState({
                            token: token,
                            authenticated: true
                        })  

                    } else {
                        await AsyncStorage.removeItem(tokenKey)
                    }
                }
            } catch(error) {
                console.error("Loading token error", error)
            }
        }
        loadToken ();
    }, [])

    const login = async (username: string, password: string) => {
        try {
            const response = await api.post(`/auth/login`, {username : username, password : password});

            setAuthState({
            token: response.data.accessToken,  
            authenticated: true         
            });

            axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.accessToken}`;
            await AsyncStorage.setItem(tokenKey, response.data.accessToken);
            return response;

        } catch (e: any) {
            console.error("Login Error", e)
            return {error: true, msg: e.response?.data?.msg || "unknown error"}
        }
    }
    
    

    const logout = async () => {
        await AsyncStorage.removeItem(tokenKey)
        axios.defaults.headers.common['Authorization'] = '';        
        setAuthState({
            token: null,  
            authenticated: null         
            });
    }
    
    const getTasks = async() => {
        const response = await api.get('/todos');
        return response.data
    }
    
    const createTask = async(title:string) => {
        console.log(`Task "${title}" created`)
        const response = await api.post('/todos/add', {title});
        console.log(response.data)
        return response.data;
    }
    
    const updateTask = async(id: number | string, title: string) => {
        console.log(`Task ${id} updated to ${title}`)
        const response = await api.put(`/todos/${id}`, {title});
        console.log(response.data)
        return response.data
    }
    
    const toggleTaskCompleted = async (id:number | string, completed:boolean) => {
        console.log(`Task ${id} toggled to ${completed}`)
        const response = await api.put(`/todos/${id}/completed`, {completed})
        console.log(response.data)
        return response.data;
    }
    
    const deleteTask = async(id: number | string) => {
        console.log(`Task ${id} deleted`)
        await api.delete(`/todos/${id}`)
    }
    
    const value = {
        onLogin: login,
        onLogout: logout,
        getTasks : getTasks,
        createTask : createTask,
        updateTask : updateTask,
        toggleTaskCompleted : toggleTaskCompleted,
        deleteTask : deleteTask,
        authState
    };

    return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
}
