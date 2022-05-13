import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion';

interface ScreenshotProps {
    screenshot:string | null;
}


export function DialogScreenShot({ screenshot}:ScreenshotProps) {
  let [isOpen, setIsOpen] = useState(true)
  
  return (
        
            <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
                
                <Dialog.Panel className="bg-brand-500/50 absolute flex flex-col transform-origin: 50% 50% 0px; items-center justify-center top-0 w-full h-full transition-all">
                <img className="w-9/12 h-34 rounded-full "src={`${screenshot}`} alt="" />
                <button className="bg-brand-500 px-3 h-12 text-white flex items-center group shadow-100 shadow-brand-500/25" onClick={() => setIsOpen(false)}>FECHAR</button>

                </Dialog.Panel>
            </Dialog>
            )
        
        }
      





