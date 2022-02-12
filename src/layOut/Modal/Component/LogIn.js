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
    width: 100%;
    // border: 1px solid gray;
    outline: none;
    line-height: 2.5rem;
    font-size: 1.2rem;
    padding-left: 0.5rem;   padding-right: 0.5rem;
`;

const Label = styled.div`
    font-size: 1rem;
    color: gray;
    margin-bottom: 0.25rem;
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
            <InputWithLabel label = "이메일" name = "email" placeholder = "이메일"/>
            <InputWithLabel label = "비밀번호" name = "password" placeholder = "비밀번호"/>
            <hr/>
            <p>If you don't have any account for dive in</p>
            <MoveBtn onClick = { openRegi }>Register</MoveBtn>
            </>
        );
    }
}

function InputWithLabel({ label }){
    <>
    <Label>{ label }</Label>
    <Input/>
    </>
}

export default LogIn;