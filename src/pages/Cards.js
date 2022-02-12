import React from 'react';
import styled from "styled-components";
import { NavLink } from "react-router-dom";

// const MainSection = styled.div`
//     position: relative;
//     width: 85vw; height: 100vh;    left: 100px;  right: 250px;
//     text-align: center;
//     align-items: center;
// `;

const Container = styled.div`
    border: 2px solid black;
    border-radius: 5px;
    width: 250px;
    height: 300px;
    position: relative;
    left: 300px;
`;

const Title = styled.div`
    padding-top: 3px;
    width: 70px;
    height: 30px;
    text-align: center;
`;

const Img = styled.img`
    border: 1px solid black;
    width: 248px;
    height: 200px;
`;

const Sort = styled.div`
    height: 20px;
    margin-top: 20px;
    position: relatvie;
    font-size: 14px;
    text-align: right;
    cursor: pointer;
`;

function Cards() {
    const card = [
        { title: "RedSunglasses",
        img: "../img/slide_1.png",
        info: "explain about this img",
        date: "220114" },
        { title: "M.A.D man",
        img: "../img/slide_2.png",
        info: "a mad man who lives in tarcov, scav.",
        date: "220207" }
    ];

    return (
        <>
            <Sort>
                <span>updates</span>&nbsp;&nbsp;&nbsp;
                <span>most liked</span>&nbsp;&nbsp;&nbsp;
                <span>of a word</span>
            </Sort>
            <hr/>
            <NavLink to = "../pages/Detail" exact style = { {color: "gray"} }>
                {card.map((e) =>
                    <>
                    <Container>
                        <Title>
                            {e.title}
                        </Title>
                        <Img src={e.img} alt="gg"></Img>
                        <div>{e.info}</div>
                    </Container>
                    </>
                )}
            </NavLink>
        </>
    )
}

export default Cards;