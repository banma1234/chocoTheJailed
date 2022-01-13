import './snsBar.css';

export function SnsBar() {

  const sns = {
    img: [
      { text: 'Instagram', file: 'img/instaImg.png', link: 'https://www.instagram.com/chocoham47/' },
      { text: 'Twitter', file: 'img/twitterImg.png', link: 'https://twitter.com/chocoham47' },
      { text: 'Youtube', file: 'img/youtubeImg.png', link: 'https://www.twitch.tv/' }
    ]
  };

  return (
    <div className="snsBar-container">
      {sns.img.map((i) => 
        <a href = {i.link} target='_blank'>
          <img className = "snsImg" src = {i.file} alt = {i.text}>
          </img>
        </a>
      )}
    </div>
  );
}

export default SnsBar;