import React from 'react';
import styled from "styled-components";


const Container = styled.div`
border: 2px solid black;
border-radius: 8px;
width: 250px;
height: 300px;
position: absolute;
left: 300px;
`
const Title = styled.div`

padding-top: 3px;
width: 70px;
height: 30px;
text-align: center;
`
const Img = styled.img`
border: 1px solid black;
width: 248px;
height: 200px;
object-fit: contain;



`

function Cards() {
    const cards = {
        card: [
            {
                title: "RedSunGlasses",
                img: "../img/slide_1.png",
                expalin: "explain about this img",
                date: "2022/01/14"
            }
        ]
    }
    return (
        <Container>
            {cards.card.map((e) =>
            <>
            <Title>
                {e.title}
            </Title>
            <Img src={e.img} alt="gg"></Img>
                <div>{e.expalin}</div>
                
            </>
            )}
        </Container>
    )
}

export default Cards;