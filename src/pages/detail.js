import React from "react";
import styled from "styled-components";

const MainSection = styled.div`
  // common state
  position: relative;
  width: 100%; height: 1400px;
  text-align: center; align-items: center;
  background-color: gray; background-position: center;

  .Container{
    position: absolute;
    left: 50%;  transform: translateX(-50%);
    width: 1200px; height: 90%;
    padding: 10px;
    background-color: lightgray;
  }

  .Info{
    width: 270px; height: 878px;
    float:left;
    text-align: left; padding: 10px;
  }

  .Img{
    border: 0;  border-radius: 2%;
    width: 900px; height: 900px;
    float:left;
  }

  .Comment{
    width: 1190px; height: 300px;
    border: 1px solid;
    margin-top: 15px;
    float: left;
    text-align: left;
  }

  // 2nd state
  @media screen and (max-width: 1361px) {
    width: 1361px; height: 2000px;
    flex-wrap: wrap;

    .Container{
      position: absolute;
      width: 1000px; height: 80%;  left: 573px;
    }

    .Info {
      position: relative;
      flex-direction: column;
      width: 270px; height: 678px;
    }

    .Img {
      flex-direction: column;
      width: 700px; height: 700px;
    }

    .Comment{
      width: 990px;
    }
  }

  // 3rd state
  @media screen and (max-width: 800px){
    flex-wrap: wrap;

    .Container{
      position: absolute;
      width: 700px; height: 80%;  left: 423px;
    }

    .Info {
      position: relative;
      flex-direction: column;
      width: 628px; height: 300px;
    }

    .Img {
      flex-direction: column;
      width: 650px; height: 650px;
    }

    .Comment{
      width: 647px;
    }
  }
`;

function Detail(){
    return(
      <>
        <MainSection>
          <h1>Detail</h1>
          <div className = "Container">
            <img className = "Img" src = "/img/slide_1.png" alt = ""/>
            <div className = "Info">info</div>
            <div className = "Comment">
              <p>comment</p>
              <input/>
            </div>
          </div>
        </MainSection>
      </>
    );
}

export default Detail;