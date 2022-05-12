
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/auth";
import {
    UserList,
    SignOut
} from 'phosphor-react'
import { SwitchModes } from "../../SwitchModes";
import { Link } from "react-router-dom";


export function MenuOptionsScreenStep() {
    
    const user = useContext(AuthContext)
    const { signOut }=useContext(AuthContext)
    
    
    

    return (
        <>
            
            <div className="flex flex-col  items-center  w-[230px]">
                <header className="flex justify-center items-center flex-col h-[200px]
                border-b-[1px] border-light-stroke dark:border-dark-stroke w-[230px]
                ">
                   
                        <img  src={user.user?.avatar_url} alt="user avatar" className="
                        rounded-[50%] w-24 h-24 self-center display flex 
                        " />
                        
                        
                    
                    
                    <span className=" dark:text-dark-text-primary text-light-text-primary text-xl mt-3"> {user.user?.name}</span>
                </header>

                <div className="grid grid-cols-1 dark:text-dark-text-secondary text-light-text-secondary w-[230px] text-base  hover:bg-opacity-50 ">
                    <Link  to="/dashboard" className="  py-2 flex flex-row justify-start items-center dark:hover:bg-dark-stroke hover:bg-light-surface-secondary pl-2 transitions-colors focus:ring-2 focus:outline-none                
                    focus:ring-offset-2  dark:focus:ring-offset-dark-surface-primary rounded-md focus:ring-brand-500">

                        <UserList className="w-5 h-5"/>
                        <p className="pl-7">Dashboard</p>
                    </Link>
                    <div  className=" py-2 flex flex-row justify-between items-center pl-2 transitions-colors focus:ring-2 focus:outline-none                
                    focus:ring-offset-2  dark:focus:ring-offset-dark-surface-primary rounded-md focus:ring-brand-500">
                        
                        
                        <SwitchModes />
                    </div>
                    <Link to="/" onClick={signOut} className=" py-2 flex flex-row justify-start items-center dark:hover:bg-dark-stroke hover:bg-light-surface-secondary pl-2 transitions-colors focus:ring-2 focus:outline-none                
                    focus:ring-offset-2  dark:focus:ring-offset-dark-surface-primary rounded-md focus:ring-brand-500">
                        <SignOut className="w-5 h-5"/>
                        <p className="pl-7">Sair</p>
                    </Link>
                </div>
                
                              
               
            </div>
        </>
    )
}