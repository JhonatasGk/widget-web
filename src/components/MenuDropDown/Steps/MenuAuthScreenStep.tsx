
import { IoLogoGithub } from 'react-icons/io5'
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import { SwitchModes } from '../../SwitchModes';





export function MenuAuthScreenStep() {

    const { signInUrl }=useContext(AuthContext)
   
    return (
        <>
            
            <div className="flex flex-col  items-center py-10 w-[230px]">
                 <SwitchModes />
                <span className="text-base text-center  mt-2 dark:text-dark-text-primary text-light-text-primary max-w-[230px] ">Faça a autenticação pelo Github
                     e vizualize todos os seus feedbacks eviados.
                </span>
                <a
                    type="button"
                    href={signInUrl}
                    className="py-2 px-6 mt-6 bg-light-stroke/75 dark:bg-dark-surface-secondary rounded-md border-transparent text-sm
                leading-6 hover:bg-light-stroke transitions-colors focus:ring-2 focus:outline-none 
                dark:text-dark-text-primary text-light-text-primary flex flex-row items-center 
                focus:ring-offset-2  focus:ring-offset-zinc-900 focus:ring-brand-500"
                >
                    <IoLogoGithub className="w-6 h-6 mr-4" />Entrar com GitHub
                </a>
               
            </div>
        </>
    )
}