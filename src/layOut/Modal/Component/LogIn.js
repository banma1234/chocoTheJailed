import React, { useState } from 'react';
import styled from 'styled-components';

const MoveBtn = styled.button`
    width: 280px;   height: 50px;
    font-size: 20px;
    background-color: yellow;
    border: none;
    cursor: pointer;
`;

const Input = styled.input`
    width: 250px;   height: 35px;
    font-size: 16px;
    border-style: solid;    border-width: 1px;
    border-color: lightgray;
    outline: none;
`;

const Frame = styled.div`
    position: relative;
    width: 270px;   height: 240px;
    text-align: left;
    left: 170px;    top: 10px;

    .forgot{
        text-align: right;
        font-size: 12.5px;
        padding-right: 14px;
        cursor: pointer;
    }

    .Btn{
        width: 260px;   height: 35px;
        border: none;
        background-color: lightblue;
        font-size: 17px;
        cursor: pointer;
    }
`;

function LogIn(){
    const [regiClick, setRegiClick] = useState(false);

    const openRegi = () => { setRegiClick(true) }
    const openLogIn = () => { setRegiClick(false) }
    if(regiClick){
        return(
          <>
            <Frame>
                <h1>Register</h1>
                <p>i'll take ur personal info</p>
            </Frame>
            <hr/>
            <p>Arleady have an account?</p>
            <MoveBtn onClick = { openLogIn }>Log in</MoveBtn>
          </>  
        );
    }else{
        return (
            <>
            <Frame>
                <h1>Log in</h1>
                <Input placeholder = "e-mail"></Input>
                <Input type = "password" placeholder = "password"></Input>
                <p className = "forgot">forgot password</p>
                <button className = "Btn">Log In</button>
            </Frame>
            <hr/>
            <p>If you don't have any account for dive in</p>
            <MoveBtn onClick = { openRegi }>Register</MoveBtn>
            </>
        );
    }
}

export default LogIn;