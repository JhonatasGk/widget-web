import { useContext, useState } from "react";
import bugImageUrl from "../../assets/bug.svg"
import ideaImageUrl from "../../assets/idea.svg"
import thoughtImageUrl from "../../assets/thought.svg"
import { AuthContext } from "../contexts/auth";
import { FeedbackAuthScreenStep } from "./Steps/FeedbackAuthScreenStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";
import { FeedbackTypeStep } from './Steps/FeedbackTypeStep';




export const feedbackTypes= {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImageUrl,
            alt: 'Imagem de um inseto',

        },
    },
    IDEA: {
        title: 'Ideia',
        image: {
            source: ideaImageUrl,
            alt: 'Imagem de uma lâmpada',

        },
    },
    OTHER: {
        title: 'Outro',
        image: {
            source: thoughtImageUrl,
            alt: 'Imagem de um blão de pensamento',

        },
    }
}

export type FeedbackType  = keyof typeof feedbackTypes;

/** Object.entries(feedbackTypes) => return array 
 *  [
 *  ['BUG', {title,image}]
 *  ['IDEA', {title,image}]
 *  ['OTHER', {title,image}]
 *  ]
 */

export function WidgetForm() {
    const {user} = useContext(AuthContext)
    
    

    const [feedbackType, setFeedbackType]  = useState<FeedbackType | null>(null)
    const [feedbackSent, setFeedbackSent]  = useState(false)

    function handleRestartFeedback(){
        setFeedbackSent(false);
        setFeedbackType(null);
    }

    return (
        <div className="dark:bg-dark-surface-primary dark:text-dark-surface bg-light-surface-primary 
        text-light-text-primary relative rounded-lg  p-4 mb-4 flex flex-col items-center shadow-200
          w-[calc(100vw-2rem)] md:w-auto">
            {feedbackSent ? (
                <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback}/>
            ):(
                <>
                 {!feedbackType ? (
                   !!user? <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType}/> 
                   : <FeedbackAuthScreenStep/>
                ) : (
                   <FeedbackContentStep 
                   feedbackType={feedbackType}
                   onFeedbackRestartRequested={handleRestartFeedback}
                   onFeedbackSent={() => setFeedbackSent(true)}
                   />
                )}
                </>
            )}
               
            <footer className="text-xs dark:text-neutral-400 text-light-text-secondary">
                Feito com ♥ pelo <a className="underline underline-offset-2"
                    href="https://www.instagram.com/grevinkart/">Grevinkart</a>
            </footer>
        </div>
    )
}