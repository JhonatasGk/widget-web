import { CodesandboxLogo } from "phosphor-react";
import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../../libs/api";

type User = {
    id: string,
    name: string,
    login: string,
    avatar_url: string
}

type AuthContextData={
    user:User | null,
    signInUrl: string,
    signOut: () => void;
    guestIn: () => void;
    
    
    
    

}
type AuthResponse = {
    token:string,
    user:{
        id:string,
        avatar_url:string,
        name:string,
        login:string

    }
}
type AuthGuest = {
    user:{
        id:string,
        avatar_url:string,
        name:string,
        login:string

    }
}
type Message = {
    id:string,
    type:string,
    comment:string,
    screenshot:string | null,
    created_at: Date,
    user:User
    
}

export const AuthContext  = createContext({} as AuthContextData)

type AuthProvider = {
    children: ReactNode
}
export function AuthProvider(props:AuthProvider){

    const [user, setUser] = useState<User | null>(null)

    const signInUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=1250b64ae965f1a4d068`
    
    async function signIn(urlCode: string){
        const response = await api.post<AuthResponse>('authenticate',{
            code: urlCode
        })

        const {token, user} = response.data

        localStorage.setItem('@token:token',token)
        

        setUser(user)
        
        document.location.reload()
    }

    async function guestIn(){
        
       const response = await api.get('guest');

       const user = response.data
       
        setUser(user)
    }

   

    
    

    function signOut(){
        setUser(null)
        localStorage.removeItem('@token:token')
        document.location.reload()
    }

    useEffect(() => {
        const token = localStorage.getItem('@token:token')

        if(token) {
            api.defaults.headers.common.authorization = `Bearer ${token}`

            
            api.get<User>('profile').then(response => {
                setUser(response.data)
            })
        }
    },[])

    
    useEffect(() =>{
        const url = window.location.href;
        const hasGitCode = url.includes('?code=')

        if(hasGitCode){
            const[urlWithoutCode, urlCode] = url.split('?code=')

            /* window.history.pushState({},'', urlWithoutCode) */

            signIn(urlCode)
        }
    })
    return(<AuthContext.Provider value={{signInUrl, user, signOut, guestIn }} >
        {props.children}
    </AuthContext.Provider>)
}