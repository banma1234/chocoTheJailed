import styled from "styled-components";

function PriceCoin(params) {
    const Section = styled.div`
    border: 1px solid;
    width: 400px;
    height: 600px;
    float:left;
    margin-left: 45px;
    `
    const Price = styled.div`
    `
    const Share = styled.div`
    `
    return (
        <Section>
            <Price>price : {"params price"} ({"params Dollar"})</Price>
            <div>explain this img</div>
            <Share>"heart", "comment", "views", "share"</Share>
        </Section>
    )

}
export default PriceCoin;