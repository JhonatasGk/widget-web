import { HeaderBar } from "../components/HeaderBar";
import { Widget } from "../components/Widget";



export function LandingPage(){

    const asToken=localStorage.getItem('@token:token')

    if (!asToken) {
        return document.location.reload()


    }


    return (
        <>
            <HeaderBar/>
            <Widget/>
        </>
    )
}