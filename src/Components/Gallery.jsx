// const Gallery = () => {

//   const {t, i18n} = useTranslation('home') 
//   const isMalayalam = i18n.language === 'mal';

//   const images = [
//     {
//       original: prathishtaImage,
//     },
//     {
//       original: GopuramImage,
//     },
//     {
//       original: nadaImage,
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const prevImage = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
//   };

//   const nextImage = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
//   };

//   return (
//     <div className={`gallery ${isMalayalam ? 'malayalam-content' : ''}`}>
//       <h2>{t("gallery")}</h2>
//       <div className="image-gallery">
//         <button onClick={prevImage}>Prev</button>
//         <div className="image-gallery-image">
//           <img src={images[currentIndex].original} alt={`Image ${currentIndex}`} />
//         </div>
//         <button onClick={nextImage}>Next</button>
//       </div>
//     </div>
//   );
// };

// export default Gallery;

// import React, { useState, useEffect } from 'react'
// import 'react-image-gallery/styles/css/image-gallery.css';
// import nadaImage from "../assets/nada.avif";
// import GopuramImage from "../assets/gopuram.webp";
// import prathishtaImage from "../assets/prathishta.jpg";
// import kuthiyottam1 from "../assets/festivals/kuthiyottam1.jpg";
// import pongala1 from "../assets/festivals/pongala1.jpg";
// import realcharm1 from "../assets/festivals/realcharm1.jpg";

// import './Gallery.css';
// import { useTranslation } from 'react-i18next';

// const Gallery = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const {t, i18n} = useTranslation('home') 
//   const isMalayalam = i18n.language === 'mal';

//   const images = [
//     {
//       original: prathishtaImage,
//     },
//     {
//       original: GopuramImage,
//     },
//     {
//       original: nadaImage,
//     },
//     {
//       original: kuthiyottam1,
//     },
//     {
//       original: pongala1,
//     },
//     {
//       original: realcharm1,
//     },
//   ];


//   const [translateValue, setTranslateValue] = useState(0);

//   const nextImage = () => {
//     if (currentIndex === images.length - 1) {
//       setCurrentIndex(0);
//     } else {
//       setCurrentIndex(currentIndex + 1);
//     }
//   };

//   const prevImage = () => {
//     if (currentIndex === 0) {
//       setCurrentIndex(images.length - 1);
//     } else {
//       setCurrentIndex(currentIndex - 1);
//     }
//   };

//   useEffect(() => {
//     setTranslateValue(-currentIndex * 100);
//   }, [currentIndex]);

//   return (
//     <div className={`gallery ${isMalayalam ? 'malayalam-content' : ''}`}>
//       <h2>{t("gallery")}</h2>
//       <div className="image-slider">
//         <div className="gal-images" style={{ transform: `translateX(${translateValue}%)` }}>
//           {images.map((image, index) => (
//             <img key={index} src={image.original} alt={`Image ${index}`} />
//           ))}
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Gallery;
// import React, { useState, useEffect } from 'react';
// import './Gallery.css'; // Import your CSS file
// import { useTranslation } from 'react-i18next';

// import nadaImage from "../assets/nada.avif";
// import GopuramImage from "../assets/gopuram.webp";
// import prathishtaImage from "../assets/prathishta.jpg";
// import kuthiyottam1 from "../assets/festivals/kuthiyottam1.jpg";
// import pongala1 from "../assets/festivals/pongala1.jpg";
// import realcharm1 from "../assets/festivals/realcharm1.jpg";

// const Gallery = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const { t, i18n } = useTranslation('home');
//   const isMalayalam = i18n.language === 'mal';

//   const images = [
//     {
//       original: prathishtaImage,
//     },
//     {
//       original: GopuramImage,
//     },
//     {
//       original: nadaImage,
//     },
//     {
//       original: kuthiyottam1,
//     },
//     {
//       original: pongala1,
//     },
//     {
//       original: realcharm1,
//     },
//   ];

//   const [translateValue, setTranslateValue] = useState(0);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000); // Change the interval duration as needed
//     return () => clearInterval(intervalId);
//   }, [images.length]);

//   useEffect(() => {
//     const slidesInView = 3;
//     const slideWidth = 300; // Adjust the width of each slide as needed
//     const totalWidth = images.length * slideWidth;
//     const maxTranslateValue = -(totalWidth - slidesInView * slideWidth);
//     setTranslateValue(-currentIndex * slideWidth > maxTranslateValue ? -currentIndex * slideWidth : maxTranslateValue);
//   }, [currentIndex, images.length]);

//   return (
//     <div className={`gallery ${isMalayalam ? 'malayalam-content' : ''}`}>
//       <h2>{t("gallery")}</h2>
//       <div className="image-slider">
//         <div className="gal-images" style={{ transform: `translateX(${translateValue}px)` }}>
//           {[...images, ...images, ...images].map((image, index) => (
//             <img key={index} src={image.original} alt={`Image ${index}`} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// // export default Gallery;


// import React from 'react';
// import Slider from 'react-slick';
// import './Gallery.css'; // Import your CSS file
// import { useTranslation } from 'react-i18next';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import nadaImage from "../assets/nada.avif";
// import GopuramImage from "../assets/gopuram.webp";
// import prathishtaImage from "../assets/prathishta.jpg";
// import kuthiyottam1 from "../assets/festivals/kuthiyottam1.jpg";
// import pongala1 from "../assets/festivals/pongala1.jpg";
// import realcharm1 from "../assets/festivals/realcharm1.jpg";

// const Gallery = () => {
//   const { t, i18n } = useTranslation('home');
//   const isMalayalam = i18n.language === 'mal';

//   const images = [
//     {
//       original: prathishtaImage,
//     },
//     {
//       original: GopuramImage,
//     },
//     {
//       original: nadaImage,
//     },
//     {
//       original: kuthiyottam1,
//     },
//     {
//       original: pongala1,
//     },
//     {
//       original: realcharm1,
//     },
//   ];

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
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
import './Gallery.css'; 
import { useTranslation } from 'react-i18next';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from '../assets/gallery/1.JPG';
import image2 from '../assets/gallery/2.JPG';
import crowd from '../assets/gallery/CROWD.JPG';
import ezhunnalipp from '../assets/gallery/EZHUNNALIPP.JPG';
import firstDayKappuKett from '../assets/gallery/FIRST DAY- KAPPU KETT.JPG';
import kathirKalaPic2 from '../assets/gallery/KATHIR KALA PIC 2.JPG';
import kuthiyottam from '../assets/gallery/KUTHIYOTTAM.JPG';
import lights from '../assets/gallery/LIGHTS.JPG';
import pongalaDay from '../assets/gallery/PONGALA DAY.JPG';
import vilakkuKett from '../assets/gallery/VILAKKU KETT.JPG';

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
    {
      original: kathirKalaPic2,
    },
    {
      original: kuthiyottam,
    },
    {
      original: lights,
    },
    {
      original: pongalaDay,
    },
    {
      original: vilakkuKett,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <div className={`gallery ${isMalayalam ? 'malayalam-content' : ''}`}>
      <h2>{t("gallery")}</h2>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="gallery-image-container">
            <img src={image.original} alt={`Image ${index}`} className="gallery-image"/>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Gallery;
