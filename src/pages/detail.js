import React from "react";
import styled from "styled-components";

const MainSection = styled.div`
  // common state
  position: relative;
  width: 100%; height: 1400px;
  text-align: center; align-items: center;
  background-position: center;

  .Container{
    border-radius: 1%;
    position: absolute;
    left: 42%;  transform: translateX(-50%);
    width: 900px; height: 90%;
    padding: 10px;
    background-color: lightgray;
  }

  .Img{
    border: 0;  border-radius: 2%;
    width: 900px; height: 900px;
    float:left;
  }

  .Comment{
    width: 900px; height: 340px;
    // border: 1px solid;
    margin-top: 15px;
    float: left;
    text-align: left;
  }

  // 2nd state
  @media screen and (max-width: 1361px) {
    width: 1361px;
    flex-wrap: wrap;

    .Container{
      position: absolute;
      width: 700px;  left: 616px;
    }

    .Img {
      flex-direction: column;
      width: 700px; height: 700px;
    }

    .Comment{
      width: 700px;
    }
  }

  // 3rd state
  @media screen and (max-width: 800px){
    flex-wrap: wrap;
    height: 1700px;

    .Container{
      position: absolute;
      width: 650px; height: 90%;  left: 423px;
    }

    .Img {
      flex-direction: column;
      width: 650px; height: 650px;
    }

    .Comment{
      position: absolute;
      top: 990px;
      width: 650px;
    }
  }
`;

const Info = styled.div`
  // common state
  left: 920px;  margin-top: -10px;
  position: absolute;
  width: 270px; height: 1260px;
  float:left;
  text-align: left; padding: 10px;
  margin-left: 10px;
  background-color: yellow;

  // 2nd state
  @media screen and (max-width: 1361px) {
    left: 720px;
    flex-direction: column;
    width: 270px;
  }

  // 3rd state
  @media screen and (max-width: 800px) {
    left: 0px;  top: 680px;
    flex-direction: column;
    width: 628px; height: 300px;
  }
`;

const CommentInput = styled.input`
  position: relative;
  outline: none;
  font-size: 17px;  padding-left: 10px;
  border: 0;
  width: 82%; height: 35px;
  margin-left: 20px;
`;

const Btn = styled.button`
  width: 65px;  height: 35px;
  border: 0;
  background-color: skyblue;
  cursor: pointer;
  margin-left: 10px;
`;

const Output = styled.div`
  width: 94%; height: 220px;
  border: 0;
  background-color: white;
  margin-left: 20px;
`;

function Detail(){
    return(
      <>
        <MainSection>
          <h1>Detail</h1>
          <div className = "Container">
            <img className = "Img" src = "/img/profile.jpg" alt = ""/>
            <div className = "Comment">
            <hr/>
            <p>comment</p>
              <Output></Output>
              <hr/>
              <CommentInput placeholder = "write your comment"></CommentInput>
              <Btn>Submit</Btn>
            </div>
            <Info>info</Info>
          </div>
        </MainSection>
      </>
    );
}

export default Detail;