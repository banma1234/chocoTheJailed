import styled from 'styled-components';

const Container = styled.div`
display: inline-flex;
position: absolute;
left: 920px;
bottom: -150px;
text-align: center;
align-items: center;
border: 5px solid #94b1c9;
border-radius: 15px;
background-color: #94b1c9;

`
const Img = styled.img`

width: 70px;
height: 70px;
padding: 15px;
`

function SnsBar() {

  const sns = {
    img: [
      { text: 'Instagram', file: '../img/instaImg.png', link: 'https://www.instagram.com/chocoham47/' },
      { text: 'Twitter', file: '../img/twitterImg.png', link: 'https://twitter.com/chocoham47' },
      { text: 'Youtube', file: '../img/youtubeImg.png', link: 'https://www.youtube.com/' }
    ]
  };

  return (

    <Container>
      {sns.img.map((e) =>
        <a href={e.link} target='_blank' rel="noreferrer">
          <Img src={e.file} alt={e.text}>
          </Img>
        </a>
      )}
    </Container>
  );
}

export default SnsBar;