import React, { useState } from 'react';
import styled from 'styled-components';

const MoveBtn = styled.button`
    width: 280px;   height: 50px;
    font-size: 20px;
    background-color: yellow;
    border: none;
    cursor: pointer;
`;

function LogIn(){
    const [regiClick, setRegiClick] = useState(false);

    const openRegi = () => { setRegiClick(true) }
    const openLogIn = () => { setRegiClick(false) }
    if(regiClick){
        return(
          <>
            <h1>Register</h1>
            <p>i'll take ur personal info</p>
            <hr/>
            <p>Arleady have an account?</p>
            <MoveBtn onClick = { openLogIn }>Log in</MoveBtn>
          </>  
        );
    }else{
        return (
            <>
            <h1>Log in</h1>
            <p>ID: <input></input></p>
            <hr/>
            <p>If you don't have any account for dive in</p>
            <MoveBtn onClick = { openRegi }>Register</MoveBtn>
            </>
        );
    }
}

export default LogIn;