import styled from "styled-components";
import PriceCoin from '../layOut/PriceCoin';
import Comments from "../layOut/Comments";

const Container = styled.div`
  position: absolute;
  left: 300px;
  top: 50px;
`;

const Img = styled.img`
  border: 1px solid;
  width: 700px;
  height: 600px;
  float:left;
`;

function Detail(){
    return(
      <>
        <Container>
          <h1>Detail</h1>
          <PriceCoin/>
          <Comments/>
        </Container>
      </>
    );
}

export default Detail;