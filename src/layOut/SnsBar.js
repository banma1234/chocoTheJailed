import styled from 'styled-components';

const Section = styled.div`
  position: relative;
  width: 100%;
  bottom: -150px;

  .Line{
    display: flex;
    flex-basis: 100%;
    align-items: center;
    color: gray;
    font-size: 16px;
    margin: 8px 0px;
  }
  .Line::before, .Line::after{
    content: "";
    flex-grow: 1;
    margin: 0 16px;
    background-color: gray;
    font-size: 0;
    height: 1px;      line-height: 0;
  }
`;

const Container = styled.div`
  display: inline-flex;
  position: relative;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  width: 70px;
  height: 70px;
  padding: 15px;
`;

function SnsBar() {

  const sns = {
    img: [
      { text: 'Instagram', file: '../img/instaImg.png', link: 'https://www.instagram.com/chocoham47/' },
      { text: 'Twitter', file: '../img/twitterImg.png', link: 'https://twitter.com/chocoham47' },
      { text: 'Youtube', file: '../img/youtubeImg.png', link: 'https://www.youtube.com/' }
    ]
  };

  return (
    <Section>
      <div className = "Line">Link to</div>
      <Container>
        {sns.img.map((e) =>
          <a href={e.link} target='_blank' rel="noreferrer">
            <Img src={e.file} alt={e.text}>
            </Img>
          </a>
        )}
      </Container>
    </Section>
    
  );
}

export default SnsBar;