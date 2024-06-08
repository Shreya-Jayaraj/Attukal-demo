// import React from 'react';
// import Slider from 'react-slick';
// import './Gallery.css'; 
// import { useTranslation } from 'react-i18next';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import image1 from '../assets/gallery/1.JPG';
// import image2 from '../assets/gallery/2.JPG';
// import crowd from '../assets/gallery/CROWD.JPG';
// import ezhunnalipp from '../assets/gallery/EZHUNNALIPP.JPG';
// import firstDayKappuKett from '../assets/gallery/FIRST DAY- KAPPU KETT.JPG';
// import kathirKalaPic2 from '../assets/gallery/KATHIR KALA PIC 2.JPG';
// import kuthiyottam from '../assets/gallery/KUTHIYOTTAM.JPG';
// import lights from '../assets/gallery/LIGHTS.JPG';
// import pongalaDay from '../assets/gallery/PONGALA DAY.JPG';
// import vilakkuKett from '../assets/gallery/VILAKKU KETT.JPG';

// const Gallery = () => {
//   const { t, i18n } = useTranslation('home');
//   const isMalayalam = i18n.language === 'mal';

//   const images = [
//     {
//       original: image1,
//     },
//     {
//       original: image2,
//     },
//     {
//       original: crowd,
//     },
//     {
//       original: ezhunnalipp,
//     },
//     {
//       original: firstDayKappuKett,
//     },
//     {
//       original: kathirKalaPic2,
//     },
//     {
//       original: kuthiyottam,
//     },
//     {
//       original: lights,
//     },
//     {
//       original: pongalaDay,
//     },
//     {
//       original: vilakkuKett,
//     },
//   ];

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000, 
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           initialSlide: 1
//         }
//       }
//     ]
//   };

//   return (
//     <div className={`gallery ${isMalayalam ? 'malayalam-content' : ''}`}>
//       <h2>{t("gallery")}</h2>
//       <Slider {...settings}>
//         {images.map((image, index) => (
//           <div key={index} className="gallery-image-container">
//             <img src={image.original} alt={`Image ${index}`} className="gallery-image"/>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default Gallery;

import React from 'react';
import Slider from 'react-slick';
import LazyLoad from 'react-lazyload';
import './Gallery.css'; 
import { useTranslation } from 'react-i18next';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import image1 from '../assets/gallery/1.JPG';
// import image2 from '../assets/gallery/2.JPG';
// import crowd from '../assets/gallery/CROWD.JPG';
// import ezhunnalipp from '../assets/gallery/EZHUNNALIPP.JPG';
// import firstDayKappuKett from '../assets/gallery/FIRST DAY- KAPPU KETT.JPG';
// import kathirKalaPic2 from '../assets/gallery/KATHIR KALA PIC 2.JPG';

import image1 from '../assets/gal5/1.png';
import image2 from '../assets/gal5/2.png';
import crowd from '../assets/gal5/CROWD.png';
import ezhunnalipp from '../assets/gal5/EZHUNNALIPP.jpg';
import firstDayKappuKett from '../assets/gal5/FIRST DAY- KAPPU KETT.png';
// import kathirKalaPic2 from '../assets/gal3/KATHIR KALA PIC 2.jpg';


const Gallery = () => {
  const { t, i18n } = useTranslation('home');
  const isMalayalam = i18n.language === 'mal';

  const images = [
    {
      original: image1,
    },
    {
      original: image2,
    },
    {
      original: crowd,
    },
    {
      original: ezhunnalipp,
    },
    {
      original: firstDayKappuKett,
    },
    // {
    //   original: kathirKalaPic2,
    // },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
    lazyLoad: 'ondemand'
  };

  return (
    <div className={`gallery ${isMalayalam ? 'malayalam-content' : ''}`}>
      <h2>{t('gallery')}</h2>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="gallery-image-container">
            <LazyLoad height={200} offset={100}>
              <img src={image.original} alt={`Image ${index}`} className="gallery-image" />
            </LazyLoad>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Gallery;
