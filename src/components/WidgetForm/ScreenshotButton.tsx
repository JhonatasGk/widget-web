import html2canvas from "html2canvas";
import { Camera, Trash } from "phosphor-react";
import { useState } from "react";
import { LoadingIcon } from "./LoadingIcon";

interface ScreenshotButtonProps{
    screenshot:string | null;
    onScreenshotTook : (screenshot: string | null) => void;
}
export function ScreenshotButton({ screenshot, onScreenshotTook}: ScreenshotButtonProps){
    const [isTakingScreenshot, setIsTakingScreenshot] = useState(false)

    async function handleTakeScreenshot(){
        setIsTakingScreenshot(true)

        const canvas = await html2canvas(document.querySelector('html')!)
        const base64image = canvas.toDataURL('image/png')

        onScreenshotTook(base64image)
        setIsTakingScreenshot(false)
    }
    if( screenshot){
        return (
            <button 
                type="button"
                onClick={() => onScreenshotTook(null)}
                className="p-1 w-10 h-10 rounded-md  border-transparent flex justify-end items-end
                text-light-text-secondary hover:text-light-text-primary transition-colors
                dark:text-dark-text-secondary dark:hover:text-dark-text-primary
                "
                style={{
                    backgroundImage: `url(${screenshot})`,
                    
                }}
            >   
                <Trash weight="fill"/>
            </button>
        )
    }
    return(
        <button
            onClick={handleTakeScreenshot}
            type="button"
            
            className="p-2 dark:bg-dark-surface-secondary bg-light-surface-secondary rounded-md border-transparent hover:bg-zinc-400 focus:ring-2 
            transition-colors focus:outline-none focus:ring-offset-2  focus:ring-offset-light-surface-primary 
            dark:focus:ring-offset-dark-surface-primary 
            focus:ring-brand-500"
        >
        { isTakingScreenshot ? <LoadingIcon/>  : <Camera className="w-6 h-6 dark:text-dark-text-primary text-light-text-primary "/>}
        </button>
    )
}