import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ closePortal, component, selector }: any) => {
    const [modalOpen, setModalOpen] = useState(false);
    const ref = useRef<any>();

    useEffect(() => {
        setModalOpen(true);
        document.body.style.overflow = "hidden";
        if(document){
            console.log("plz help me");
            ref.current = document.querySelector(selector);
        }
        return () => {
            setModalOpen(false);
            document.body.style.overflow = "unset"
        };
    }, [selector]);
  
    const exit = (e: any) => {
        if(e.target === e.currentTarget){
            closePortal()
        }
    }

    if(modalOpen){
        return createPortal(
            <div id = "Overlay" onClick = { exit }>
                <div id = "Window">
                <img id = "Banner" src = "/public/img/banner.jpg"/>
                    <p>{ component }</p>
                </div>
                <style jsx>{`
                    #Overlay{
                        top: 0; left: 0;    bottom: 0;  right: 0;
                        display: flex;
                        position: fixed;
                        background: rgba(0, 0, 0, 0.55);
                        align-items: center;
                        justify-content: center;
                        z-index: 999;
                    }
    
                    #Window{
                        height: 600px;  width: 600px;
                        margin-top: 70px;
                        position: relative;
                        overflow: scroll;
                        background: white;
                        border-radius: 6%;
                        text-align: center;
                        z-index: 1000;
                    }
        
                    #Banner{
                        width: 350px;    height: 100px;
                    }
                `}</style>
            </div>,
            ref.current
        )
    }else return null;
};

export default Modal