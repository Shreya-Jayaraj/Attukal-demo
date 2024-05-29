// import ImageGallery from "react-image-gallery";
// import 'react-image-gallery/styles/css/image-gallery.css';
// import nadaImage from "../assets/nada.avif";
// import  GopuramImage from "../assets/gopuram.webp";
// import prathishtaImage from "../assets/prathishta.jpg";


// const images = [
//   {
//     original: prathishtaImage,
//   },
//   {
//     original: GopuramImage,
//   },
//   {
//     original: nadaImage,
//   },  
// ];

// const Gallery = () => {

//     return (
//         <ImageGallery items={images} 
//           showPlayButton={false}
//           showFullscreenButton={false}
//           slideInterval={2000}
//           showThumbnails={false}
//           autoPlay={true}

//         />
//     );
//   }
  
//   export default Gallery;

import ImageGallery from "react-image-gallery";
import 'react-image-gallery/styles/css/image-gallery.css';
import nadaImage from "../assets/nada.avif";
import GopuramImage from "../assets/gopuram.webp";
import prathishtaImage from "../assets/prathishta.jpg";

const images = [
  {
    original: prathishtaImage,

  },
  {
    original: GopuramImage,
  },
  {
    original: nadaImage,
  },
];

const Gallery = () => {
  return (
    <div className="gallery">
      <h2>PHOTO GALLERY</h2>
      <ImageGallery 
        items={images} 
        showPlayButton={false}
        showFullscreenButton={false}
        slideInterval={2500}
        showThumbnails={false}
        autoPlay={true}
        showIndex
      />
    </div>
  );
};

export default Gallery;
