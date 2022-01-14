import styled from 'styled-components';
import './snsBar.css';



function SnsBar() {

  const sns = {
    img: [
      { text: 'Instagram', file: 'img/instaImg.png', link: 'https://www.instagram.com/chocoham47/' },
      { text: 'Twitter', file: 'img/twitterImg.png', link: 'https://twitter.com/chocoham47' },
      { text: 'Youtube', file: 'img/youtubeImg.png', link: 'https://www.youtube.com/' }
    ]
  };

  return (
    <div className="snsBar-container">
      {sns.img.map((e) =>
        <a href={e.link} target='_blank'>
          <img className="snsImg" src={e.file} alt={e.text}>
          </img>
        </a>
      )}
    </div>
  );
}

export default SnsBar;