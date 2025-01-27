"use client";
import { ArrowIcon } from "@/src/app/app-constants"


const ButtonCommon = ({ color, txt, setModalShow }) => {
    const handleClick = () => {
        setModalShow(true);
    };
    return (
        <div className="catButton" onClick={handleClick}>
            <div><span>Free Consultation</span> <ArrowIcon /></div>
        </div>
    )
}

export default ButtonCommon