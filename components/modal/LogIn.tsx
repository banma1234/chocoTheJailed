import React, { useState } from 'react';

function LogIn(){
    const [regiClick, setRegiClick] = useState(false);

    const openRegi = () => { setRegiClick(true) }
    const openLogIn = () => { setRegiClick(false) }
    if(regiClick){
        return(
          <>
            <div id = "Frame">
                <h1>Register</h1>
                <p>gang</p>
            </div>
            <hr/>
            <p>Arleady have an account?</p>
            <button id = "MoveBtn" onClick = { openLogIn }>Log in</button>
          </>  
        );
    }else{
        return (
            <>
            <div id = "Frame">
                <h1>Log in</h1>
                <input id = "Input" placeholder = "e-mail"></input>
                <input id = "Input" type = "password" placeholder = "password"></input>
                <p className = "forgot">forgot password</p>
                <button className = "Btn">Log In</button>
            </div>
            <hr/>
            <p>If you dont have any account for dive in</p>
            <button id = "MoveBtn" onClick = { openRegi }>Register</button>
            <style jsx>{`
                #Frame{
                    position: relative;
                    width: 270px;   height: 240px;
                    text-align: left;
                    left: 170px;    top: 10px;
                }

                #Input{
                    width: 250px;   height: 35px;
                    font-size: 16px;
                    border-style: solid;    border-width: 1px;
                    border-color: lightgray;
                    outline: none;
                }

                #MoveBtn{
                    width: 280px;   height: 50px;
                    font-size: 20px;
                    background-color: yellow;
                    border: none;
                    cursor: pointer;
                }

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
            `}</style>
            </>
        );
    }
}

export default LogIn;