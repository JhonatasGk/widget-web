
import { Popover} from '@headlessui/react'
import {UserCircle} from 'phosphor-react'
import { useContext} from 'react'

import { AuthContext } from './contexts/auth'


import { MenuDropDown } from './MenuDropDown'

const asToken = localStorage.getItem('@token:token')
 
 export function HeaderBar() {
  const user = useContext(AuthContext)
  
  
  return (
    <div className="mx-auto max-h-[70px] px-4 sm:px-6 lg:px-8 dark:bg-dark-surface-primary bg-light-surface-secondary h-16">
          
           <Popover className="absolute top-2 right-4 md:bottom-8 md:right-8 flex flex-col items-end ">
                
                <Popover.Panel className="absolute top-[57px]">
                 <MenuDropDown/>
                </Popover.Panel>
                
                <Popover.Button className="bg-brand-500 rounded-full px-1 h-12 text-white flex items-center group ">
                {!!asToken ? 
                 
                 <img src={user.user?.avatar_url} className=" w-10 h-10 rounded-full border-[2px] dark:border-dark-surface-secondary border-light-surface-secondary "/>
                
                : <UserCircle weight='thin' className=" w-10 h-10 "/>}
                    <span className="max-w-0 overflow-hidden group-hover:max-w-xl transition-all duration-500 ease-linear">
                        <span className="pl-2 mr-5"> ENTRAR </span>
                          
                        </span>
                </Popover.Button>
                
           </Popover>
    </div>
  )
}
