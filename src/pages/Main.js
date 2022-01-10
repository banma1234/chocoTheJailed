import React from 'react';
import styled from "styled-components";

const Slide = styled.div`
  width: 700px;
  height: 700px;
  font-size: 50px;
  background-color: yellow;
`;

function Main(){
    return(
        <Slide>Main이다 이새끼야</Slide>
    )
}

export default Main;