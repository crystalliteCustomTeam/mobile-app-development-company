"use client";
import { ArrowIcon } from "@/src/app/app-constants"


const ButtonCommon = ({ color, txt, href }) => {

    return (
        <>
            <a href={href} className={`catButton ${color ? 'white' : ''}`} >
                <div><span>{txt}</span> <ArrowIcon /></div>
            </a>
        </>
    )
}

export default ButtonCommon