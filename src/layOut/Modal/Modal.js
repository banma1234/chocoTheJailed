import React from "react";
import styled from "styled-components";

import ModalPortal from "./Portal/ModalPortal";

const Window = styled.div`
    height: 600px;  width: 600px;
    margin-top: 70px;
    position: relative;
    overflow: scroll;
    background: white;
    border-radius: 10%;
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

function Modal({ state }){
    return(
        <ModalPortal>
            <Overlay>
                <Window>
                    Mfker Im Ballin'
                </Window>
            </Overlay>
        </ModalPortal>
    );
}

export default Modal