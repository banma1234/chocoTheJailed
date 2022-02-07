import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Window = styled.div`
    height: 600px;  width: 600px;
    margin-top: 70px;
    position: relative;
    overflow: scroll;
    background: white;
    border-radius: 6%;
    text-align: center;
    z-index: 1000;
`;

const Overlay = styled.div`
    top: 0; left: 0;    bottom: 0;  right: 0;
    display: flex;
    position: fixed;
    background: rgba(0, 0, 0, 0.55);
    align-items: center;
    justify-content: center;
    z-index: 999;
`;

function Modal({ component, closePortal }){
    const [modalOpen, setModalOpen] = useState(false)
    const ref = useRef(null);

    const exit = (e) => {
        if(e.target === e.currentTarget){
            closePortal()
        }
    }

    useEffect(() => {
        setModalOpen(true);
        document.body.style.overflow = "hidden";
        if(document){
            const dom = document.getElementById('modal');
            ref.current = dom;
        }
        return () => {
            setModalOpen(false);
            document.body.style.overflow = "unset"
        };
    }, []);

    if(ref.current && modalOpen){
        return createPortal(
            <Overlay onClick = { exit }>
                <Window>
                    <p>{ component }</p>
                </Window>
            </Overlay>,
            ref.current
        );
    }
    return null;
};

export default Modal