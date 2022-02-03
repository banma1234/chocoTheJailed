// import React, { useState, useEffect } from "react";
// import styled from "styled-components";

// import Modal from "./Portal/Modal";

// const Window = styled.div`
//     height: 600px;  width: 600px;
//     margin-top: 70px;
//     position: relative;
//     overflow: scroll;
//     background: white;
//     border-radius: 6%;
//     z-index: 1000;
// `;

// const Overlay = styled.div`
//     height: 100%;
//     width: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     position: fixed;
//     left: 0;
//     top: 0;
//     text-align: center;
//     background: rgba(0, 0, 0, 0.55);
// `;

// function handleScroll({ modalOpen }){
//     if({ modalOpen }){
//         document.body.style.overflow = "hidden"
//     }else{
//         document.body.style.overflow = "unset"
//     }
// }

// function Modal({ modalClick }){
//     const [modalOpen, setModalOpen] = useState(false)
//     const modalHandler = () => {
//       setModalOpen(current => !current)
//     }

//     useEffect( () => {
//         console.log(modalOpen);
//     }, [modalOpen])

//     return(
//         <Modal>
//             <Overlay>
//                 <Window>
//                     <button onClick = {modalHandler}>change 1</button>
//                     <button onClick = { () => setModalOpen(!modalOpen)}>change 2</button>
//                     { modalOpen? "hell yeh i made it!": null }
//                 </Window>
//             </Overlay>
//         </Modal>
//     );
// }

// export default Modal






import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

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
            <Overlay onClick = { closePortal }>
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









// import React, { useState, useEffect, useRef } from 'react';
// import { createPortal } from "react-dom";

// import styled from "styled-components";

// const Window = styled.div`
//     height: 600px;  width: 600px;
//     margin-top: 70px;
//     position: relative;
//     overflow: scroll;
//     background: white;
//     border-radius: 6%;
//     z-index: 1000;
// `;

// const Overlay = styled.div`
//     height: 100%;
//     width: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     position: fixed;
//     left: 0;
//     top: 0;
//     text-align: center;
//     background: rgba(0, 0, 0, 0.55);
// `;

// function Modal({ component, closePortal }){
//     const ref = useRef(null);
//     const [ isOpen, setModalOpen ] = useState(false);

//     useEffect(() => {
//         setModalOpen(true);
//         if(document){
//             const dom = document.getElementById('modal');
//             ref.current = dom;
//         }
//         return () => {
//             setModalOpen(false);
//         };
//     }, []);

//     if (ref.current && isOpen){
//         return createPortal(
//             <Overlay>
//                 <Window onClick = { closePortal }>
//                     { component }
//                 </Window>
//             </Overlay>,
//             // document.getElementById("modal"),
//             ref.current
//         );
//     }
// }

// export default Modal;