import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import 'justifiedGallery/dist/css/justifiedGallery.css';
import 'justifiedGallery/dist/js/jquery.justifiedGallery.js';
import { saveAs } from 'file-saver';

//styles
import './JustifiedGallery.scss';

//import icon
import DownloadIcon from '../../image/download.svg';

// //import gifs
import Gif1 from '../../image/GIF/send+it+lol.gif'
import Gif2 from '../../image/GIF/PAPER+vs+jeets.gif'
import Gif3 from '../../image/GIF/PAPER+Trending.jpg'
import Gif4 from '../../image/GIF/PAPER+Marketing.gif'
import Gif5 from '../../image/GIF/PAPER+Holders.gif'
import Gif6 from '../../image/GIF/paper+flash.gif'
import Gif7 from '../../image/GIF/missing+out.jpg'
import Gif8 from '../../image/GIF/ATH.gif'
import Gif9 from '../../image/GIF/BUYING+PAPER.jpg'
import Gif10 from '../../image/GIF/EAT+THE+PAPER.gif'
import Gif11 from '../../image/GIF/get+in+paper.gif'
import Gif12 from '../../image/GIF/jeets+gone+lol.gif'
import Gif13 from '../../image/GIF/loading+up+on+paper.gif'
import Gif14 from '../../image/GIF/SPANK.gif'

const IMAGES = [
  { src: Gif1, alt: 'send+it+lol' },
  { src: Gif2, alt: 'PAPER+vs+jeets' },
  { src: Gif3, alt: 'PAPER+Trending' },
  { src: Gif4, alt: 'PAPER+Marketing' },
  { src: Gif5, alt: 'PAPER+Holders' },
  { src: Gif6, alt: 'paper+flash' },
  { src: Gif7, alt: 'missing+out' },
  { src: Gif8, alt: 'ATH' },
  { src: Gif9, alt: 'BUYING+PAPER' },
  { src: Gif10, alt: 'EAT+THE+PAPER' },
  { src: Gif11, alt: 'get+in+paper' },
  { src: Gif12, alt: 'jeets+gone+lol' },
  { src: Gif13, alt: 'loading+up+on+paper' },
  { src: Gif14, alt: 'SPANK' },
]

const JustifiedGallery = () => {
  const [showButton, setShowButton] = useState(null);

  useEffect(() => {
    $('#mygallery').justifiedGallery({
      rowHeight: 340,
      lastRow: 'justify',
      margins: 20,
    });
  }, []);

  const downloadImage = (imageUrl, imageName) => {
    fetch(imageUrl)
      .then((response) => response.blob())
      .then((blob) => saveAs(blob, imageName))
      .catch((error) => console.error('Download error:', error));
  };
  
  return (
    <div id="mygallery">
      {IMAGES.map((image, index) => (
        <div 
          key={index}
          onMouseEnter={() => setShowButton(index)}
          onMouseLeave={() => setShowButton(null)}
        >
          <img src={image.src} alt={image.alt} />
          {showButton === index && (
            <button 
              type="button"
              className={`mygallery__download ${showButton === index ? 'visible' : ''}`}
              onClick={() => downloadImage(image.src, image.alt)}
            >
              <img
                src={DownloadIcon} 
                alt="download-icon" 
              />
            </button>
            )}
        </div>
      ))}
    </div>
  );
};

export default JustifiedGallery;
