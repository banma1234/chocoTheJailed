import React from "react";
import styled from "styled-components";

function Cards() {
    const card = [
        {
            title: "Im title of img!!", 
            img: "img/slide_1.png", 
            expalin: "explain about this img", 
            date: "2022/01/14"
        }
    ];

    return (
        <div className="cards-container">
            <img src={card.img}></img>
            <strong>{card.title}</strong>
            <div>{card.expalin}</div>
            <div>{card.date}</div>
        </div>
    )
}

export default Cards;