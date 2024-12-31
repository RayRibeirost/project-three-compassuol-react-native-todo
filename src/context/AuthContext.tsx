import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import * as SecureStore from 'expo-secure-store';

interface AuthProps {
    authState?: {token : string | null; authenticated: boolean | null};
    onLogin?: (username: string, password: string) => Promise<any>;
    onLogout?: () => Promise<any>;
}

const TOKEN_KEY = 'my-jwt';
export const API_URL = axios.create({ baseURL: "https://dummyjson.com/users" });
export const todos_api = axios.create({ baseURL: "https://dummyjson.com" });
const AuthContext = createContext<AuthProps>({})

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({children} : any) => {
    const [authState, setAuthState] = useState<{token : string | null; authenticated: boolean | null}>({
        token : null, 
        authenticated : null,
    })

    useEffect(() => {
        const loadToken = async () => {
            const token = await SecureStore.getItemAsync(TOKEN_KEY)
            console.log(token)
            if (token) {
              axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                setAuthState({
                    token: token,
                    authenticated: true
                })  
            }
        }
        loadToken ();
    }, [])

    const login = async (username: string, password: string) => {
        try {
            const result = await API_URL.post(`/login`, {username : username, password : password});
            
            console.log(result)

            setAuthState({
                token: result.data.token,
                authenticated: true
            })

            axios.defaults.headers.common['Authorization'] = `Bearer ${result.data.msg}`

            await SecureStore.setItemAsync(TOKEN_KEY, result.data.token)

            return result;
        } catch (e) {
            return {error: true, msg: (e as any).response.data.msg}
        }
    }

    const logout = async () => {
        await SecureStore.deleteItemAsync(TOKEN_KEY)
        axios.defaults.headers.common['Authorization'] = '';
        setAuthState({
            token: null,
            authenticated: null
        })
    }

    const value = {
        onLogin: login,
        onLogout: logout,
        authState

    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const getTasks = async() => {
    const response = await todos_api.get('/todos/');
    return response.data
}

export const createTask = async(title:string) => {
    const response = await todos_api.post('todo/add', {title});
    return response.data;
}

export const updateTask = async(id: number, title: string) => {
    const response = await todos_api.put(`/todos/${id}`, {title});
    return response.data
}

export const toggleTaskCompleted = async (id:number, completed:boolean) => {
    const response = await todos_api.patch(`todos/${id}/completed`, {completed})
    return response.data
}

export const deleteTask = async(id: number) => {
    await todos_api.delete(`/todos/${id}`)
}