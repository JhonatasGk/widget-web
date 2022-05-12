import { Route, BrowserRouter, Routes } from "react-router-dom";


import { LandingPage } from "./pages/landing";
import { DashboardPage } from "./pages/dashboard";


export function RoutesApp(){
   return(
       <BrowserRouter>
           <Routes>
               <Route element = { <LandingPage/> }  path="/"   />
               <Route element = { <DashboardPage/> }  path="/dashboard" />   
           </Routes>        
       </BrowserRouter>
   )
}

