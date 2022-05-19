import { useContext } from "react";
import { AuthContext } from "../contexts/auth";
import { MenuAuthScreenStep } from "./Steps/MenuAuthScreenStep";
import { MenuOptionsScreenStep } from "./Steps/MenuOptionsScreenStep";

/* const {user} = useContext(AuthContext) */

const asToken = localStorage.getItem('@token:token')


export function MenuDropDown(){
    return(
        <div className="dark:bg-dark-surface-primary dark:text-dark-surface bg-light-surface-primary 
        text-light-text-primary relative rounded-lg  p-4 mb-4 flex flex-col items-center shadow-200
          w-[calc(100vw-2rem)] md:w-auto">
            { asToken ? <MenuOptionsScreenStep/> : <MenuAuthScreenStep/>  }
        </div>
    )
}