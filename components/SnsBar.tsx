function SnsBar() {

  const sns = {
    img: [
      { text: 'Instagram', path: "/img/instaImg.png", link: 'https://www.instagram.com/chocoham47/' },
      { text: 'Twitter', path: "/img/twitterImg.png", link: 'https://twitter.com/chocoham47' },
      { text: 'Youtube', path: "/img/youtubeImg.png", link: 'https://www.youtube.com/' }
    ]
  };

  return (
    <div id = "Section">
      <div className = "Line">Link to</div>
      <div id = "Container">
        {sns.img.map((e, index) =>
          <a href={e.link} key = { index } target='_blank' rel="noreferrer">
            <img id = "slide" src={e.path} alt={e.text}>
            </img>
          </a>
        )}
      </div>
      <style jsx>{`
        #slide{
          width: 120px; height: 120px;
          padding: 20px;
          text-align: center;
        }

        #Container{
          display: inline-flex;
          position: relative;
          width: 100%;
          align-items: center;
          justify-content: center;
        }

        #Section{
          position: relative;
          width: 100%;
          bottom: -150px;
        }

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
      `}</style>
    </div>
    
  );
}

export default SnsBar;