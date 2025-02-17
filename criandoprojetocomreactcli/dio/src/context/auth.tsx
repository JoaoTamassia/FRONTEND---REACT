import { createContext } from 'react'
import { IAuthContext, IAuthContextProviderProps, ILoginData } from './types';
import { useState } from 'react';
import { IUser } from '../types/user';
import { Navigate, useNavigate } from 'react-router-dom';
import { api } from '../services/api';

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthContextProvider = ({children}: IAuthContextProviderProps) => {
    
    const [user, setUser] = useState<IUser>({} as IUser);

    const navigate = useNavigate();

    const handleLogin = async (loginData: ILoginData) => {
        try{
                    const { data } = await api.get(`users?email=${loginData.email}&password=${loginData.password}`)
                    if(data.length === 1){
                        setUser(data[0]);
                        navigate('/feed');}
                    else{
                        alert('Usuário ou senha inválidos')
                    }
                }catch{
                    alert('Erro ao fazer login')
                }
    };

    const handleSignOut = () => {
        setUser({} as IUser);
        navigate('/login');
    }

    return (<AuthContext.Provider value={{user, handleLogin, handleSignOut}}>{children}</AuthContext.Provider>);
}


