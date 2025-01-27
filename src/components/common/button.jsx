"use client";
import { ArrowIcon } from "@/src/app/app-constants"
import PopUp from "@/src/app/services/popup";
import { useState } from 'react'


const ButtonCommon = ({ color, txt }) => {
    const [modalShow, setModalShow] = useState(false);
    const handleClick = () => {
        setModalShow(true);
    };

    return (
        <>
            <div className={`catButton ${color ? 'white' : ''}`} onClick={() => handleClick()} >
                <div><span>{txt}</span> <ArrowIcon /></div>
            </div>
            <PopUp show={modalShow} onHide={() => setModalShow(false)} />
        </>
    )
}

export default ButtonCommon