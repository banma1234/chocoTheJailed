import React from 'react';
import { createPortal } from "react-dom";

function ModalPortal({ children }){
    return createPortal(
        <div className = "modalSpace">
            <span className = "dimmed">
                { children }
            </span>
        </div>,
        document.getElementById("modal")
    );
}

export default ModalPortal;