import styled from "styled-components";
import { FaEthereum, FaHeart, FaCommentDots, FaRegEye, FaShare } from "react-icons/fa";

function PriceCoin(params) {
    const Section = styled.div`
    border: 1px solid;
    width: 400px;
    height: 600px;
    float:left;
    margin-left: 45px;
    text-align: center;
    `
    const Price = styled.div`
    `
    const Share = styled.div`
    `
    return (
        <Section>
            <Price> price : {"params price"} <FaEthereum /> ({"params Dollar"})
            </Price>
            <div>explain this img</div>
            <Share>
                <FaHeart /><FaCommentDots /><FaRegEye /><FaShare />
            </Share>
        </Section>
    )

}
export default PriceCoin;