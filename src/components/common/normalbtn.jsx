
"use client";
import PopUp from "@/src/app/services/popup";
import { useState } from 'react'

const NormalBtn = ({ link, text, bgcolor, txtcolor }) => {
    // Chat Code
    // const handleChatOpen = (e) => {
    //     e.preventDefault();
    //     if (typeof $zopim !== 'undefined' && $zopim.livechat && $zopim.livechat.window) {
    //         $zopim.livechat.window.show();
    //     }
    // };
    const [modalShow, setModalShow] = useState(false);

    const handleClick = () => {
        setModalShow(true);
    };

    return (
        <>
            <div className="normalButton" style={{ background: bgcolor }} onClick={() => handleClick()}>
                <div className="linksBtn" style={{ color: txtcolor }}>{text}</div>
            </div>
            <PopUp show={modalShow} onHide={() => setModalShow(false)} />
        </>
    )
}

export default NormalBtn