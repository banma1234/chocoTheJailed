import styled from "styled-components";

function Comments(params) {
    const Section = styled.div`
    position: absolute;
    border: 1px black solid;
    padding: 10px;
    width: 1120px;
    left:300px;
    top: 750px;
    text-align: center;
    `
    return (
        <Section>
            <div>emote icon, nick name : , {"comment"}</div>
            <div>input name</div>
            <div>input comment</div>
        </Section>
    )
}
export default Comments;