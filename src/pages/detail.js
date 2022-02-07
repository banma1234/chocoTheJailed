import styled from "styled-components";
import PriceCoin from '../layOut/PriceCoin';
import Comments from "../layOut/Comments";

const Container = styled.div`
position: absolute;
left: 300px;
top: 50px;
`
const Img = styled.img`
border: 1px solid;
width: 700px;
height: 600px;
float:left;
`
const Title = styled.h2`
`

function Detail() {
  return (
    <>
      <Container>
        <Title>Title of img</Title>
        <Img src='../img/slide_2.png'></Img>
        <PriceCoin></PriceCoin>
        
      </Container> 
      <Comments></Comments>
    </>

  )
}

export default Detail;