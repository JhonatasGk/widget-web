import { useContext, useEffect, useState } from "react"
import { api } from "../../libs/api"
import { AuthContext } from "../contexts/auth"
import { ArrowsClockwise, BookmarkSimple, Calendar, Timer } from 'phosphor-react'
import { Camera } from 'phosphor-react';
import {DialogScreenShot}  from './Steps/DashboardScreenshotModalStep'
import { Popover } from "@headlessui/react";
import { Navigate } from "react-router-dom";



type Feedbacks={
  id: string,
  type: string,
  comment: string,
  screenshot: string|null,
  created_at: Date,
  user: User

}
type User={
  id: string,
  name: string,
  login: string,
  avatar_url: string
}


export function Dashboard() {

  const asToken=localStorage.getItem('@token:token')

  if (!asToken) {
    return <Navigate replace to="/" />


  }

  const user=useContext(AuthContext)
  const user_id=user.user?.id
  const [feedbacks, setFeedbacks]=useState<Feedbacks[]>()
  async function getFeedBacks() {
    const response=await api.post<Feedbacks[]>('getfeedbacks', {
      user_id: user_id



    })
    setFeedbacks(response.data)
    console.log(response.data)

  }


useEffect(() => {
  getFeedBacks()
},[])

  return (

    <div>

      <div className="text-center top-0 absolute h-[64px] ml-[150px] flex justify-center items-center w-24 border-b-2 border-brand-500  ">
        <span className="text-lg dark:text-dark-text-primary text-light-text-primary">
          Dashboard

        </span>

      </div>

      <div className="mx-[150px] w-7/12 top-[20%] absolute  ">
        <div className="w-12/12  ">
          <header className="w-12/12  h-[100px] rounded-t-md bg-brand-500 grid auto-cols-auto grid-cols-2">
            <div className="flex flex-col justify-center items-start ml-[15px]">
              <span className="text-3xl ">Dashboard </span>
              <span className="text-light-stroke ">Feedbacks enviados</span>
            </div>
            <button className="flex flex-col justify-center items-end mr-[30px]" title="atualizar" onClick={getFeedBacks}><ArrowsClockwise size={32} className="hover:text-dark-text-secondary transition-colors" /></button>

          </header>
          <div></div>
          <div className="w-12/12 dark:bg-dark-surface-primary bg-light-surface-secondary  h-[400px] rounded-b-md ocus:border-x-brand-500 
                focus:ring-brand-500 focus:ring-1 resize-none focus:outline-none  dark:scrollbar-thumb-dark-stroke 
                scrollbar-thumb-light-stroke scrollbar-thin scrollbar-track-transparent">

            <ul className=" justify-center flex flex-col items-center p-5 gap-2  ">

              {feedbacks?.map(feedback => {

                const dateString=feedback.created_at.toString()
                const [date, time]=dateString.split('T')
                const [Y, Me, D]=date.split('-')
                const [H, Mi,]=time.split(':')

                return (


                  <li key={feedback.id} className="w-11/12 h-[180px] dark:bg-dark-surface-secondary bg-light-surface-primary shadow-200 rounded-lg hover:scale-[1.01] transition-all">
                    <header className="my-2 p-2 border-b ">
                      <span className="p-[22px] dark:text-dark-text-primary text-light-text-primary">ID: <span className="text-xs">{feedback.id}</span></span>
                    </header>
                    <div>
                      <div className="grid auto-cols-auto grid-cols-4 text-xs gap-y-4 gap-x-2 pl-[20px]
                          dark:text-dark-text-secondary text-light-text-secondary
                          ">
                        <span className="flex flex-row items-center gap-[4px]"> <BookmarkSimple size={18} /> TIPO: {feedback.type} </span>
                        <span className="flex flex-row items-center gap-[4px]"> <Calendar size={18} />DATA: {D}/{Me}/{Y} </span>
                        <span className="flex flex-row items-center gap-[4px]" > <Timer size={18} />HORA: {H}h-{Mi}m</span>
                        <span className="flex flex-row items-center gap-[4px]" > <Camera size={18} />SCREENSHOT</span>
                        <span className="col-start-1 col-end-4 ">COMENTARIO: <p className="dark:bg-dark-surface-primary bg-light-surface-secondary h-14 mt-1 rounded-lg p-3">{feedback.comment}</p> </span>
                        
                        <Popover>
                            <Popover.Panel>
                              <DialogScreenShot screenshot={feedback.screenshot} />
                            </Popover.Panel>
                            <Popover.Button><img className="w-30  self-start justify-self-start h-20 rounded-xl" src={`${feedback.screenshot}`} alt="" /></Popover.Button>
                        </Popover>




                       
                      </div>

                    </div>



                  </li>
                )
              })}

            </ul>

          </div>
        </div>

      </div>
    </div>)
}