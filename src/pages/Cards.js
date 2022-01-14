import React from "react";
import styled from "styled-components";

function Cards() {
    const cards = {
        card: [
            {
                title: "Im title of img!!",
                img: "img/slide_1.png",
                expalin: "explain about this img",
                date: "2022/01/14"
            }
        ]
    }
    return (
        <div className="cards-container">
            <img src={cards.card.img}></img>
            <strong>{cards.card.title}</strong>
            <div>{cards.card.expalin}</div>
            <div>{cards.card.date}</div>
        </div>
    )
}

export default Cards;