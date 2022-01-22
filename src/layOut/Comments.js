import styled from "styled-components";

function Comments(params) {
    const Section = styled.div`
    border: 1px black solid;
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