import React, { useState, useEffect } from "react";
import styled from "styled-components";

import ModalPortal from "./Portal/ModalPortal";

const Window = styled.div`
    height: 600px;  width: 600px;
    margin-top: 70px;
    position: relative;
    overflow: scroll;
    background: white;
    border-radius: 6%;
    z-index: 1000;
`;

const Overlay = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    left: 0;
    top: 0;
    text-align: center;
    background: rgba(0, 0, 0, 0.55);
`;

// function handleScroll({ modalOpen }){
//     if({ modalOpen }){
//         document.body.style.overflow = "hidden"
//     }else{
//         document.body.style.overflow = "unset"
//     }
// }

function Modal({ modalClick }){
    const [modalOpen, setModalOpen] = useState(false)
    const modalHandler = () => {
      setModalOpen(current => !current)
    }

    useEffect( () => {
        console.log(modalOpen);
    }, [modalOpen])

    return(
        <ModalPortal>
            <Overlay>
                <Window>
                    <button onClick = {modalHandler}>change 1</button>
                    <button onClick = { () => setModalOpen(!modalOpen)}>change 2</button>
                    { modalOpen? "hell yeh i made it!": null }
                </Window>
            </Overlay>
        </ModalPortal>
    );
}

export default Modal