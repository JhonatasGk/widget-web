import { useState } from 'react'
import { Switch } from '@headlessui/react'
import {SunDim, Moon, MoonStars} from 'phosphor-react'


export function SwitchModes() {
  const [enabledMode, setEnabledMode] = useState(false)
  
  if (enabledMode) {
    document.documentElement.classList.remove('dark')
  }else{
    document.documentElement.classList.add('dark')
  }
  localStorage.theme = 'light'
  
    localStorage.theme = 'dark'
  
    localStorage.removeItem('theme')
  return (

    <div className="flex flex-row justify-between w-[230px] items-center">
      <span> 

        { enabledMode 
        ?
          <div className="flex flex-row items-center">
            <SunDim className="w-5 h-5"/>

            <span className="pl-7">Tema Claro</span></div> 
        : 
              
          <div className="flex flex-row items-center">
            <MoonStars className="w-5 h-5"/>

            <span className="pl-7">Tema Escuro</span></div> 
        }

      </span>
      <Switch
        checked={enabledMode}
        onChange={setEnabledMode}
        className={` ${
          enabledMode ? 'border-yellow-500 '  : ' border-brand-500  '
        }  md:top-8 md:right-8 inline-flex h-5 w-10 items-center rounded-full
          border-2 transition-colors duration-100 ease-linear  
        `}
      >
        
        <span
          className={`${
            enabledMode ? 'translate-x-4' : 'translate-x-1 '
          } inline-block h-4 w-4 transform rounded-full  transition-all   duration-300 ease-linear
          align-middle items-center`}
        >
            { enabledMode ? 
            <SunDim weight="bold" className="w-4 h-4 self-center absolute  text-yellow-300 "/>
              :
            <Moon weight="bold" className="w-4 h-4 self-center absolute  text-brand-500 "/>  
          }
          
        </span>
                 
          
      </Switch>
    </div>
  )
}