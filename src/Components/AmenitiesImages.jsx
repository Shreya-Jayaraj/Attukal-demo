import ImageGallery from "react-image-gallery";
import 'react-image-gallery/styles/css/image-gallery.css';
import attukalbus from "../assets/attukalbus.jpg";
import  attukaltemple from "../assets/attukaltemple.jpg";
import prathishtaImage from "../assets/prathishta.jpg";


const images = [
  {
    original: attukalbus,
    
  },
  {
    original: attukaltemple,
  },
  {
    original: prathishtaImage,
  },  
];

const AmenitiesImages = ( {className }) => {

  

    return (
        <ImageGallery items={images} 
          showPlayButton={false}
          showFullscreenButton={false}
          slideInterval={2000}
          showThumbnails={false}
          autoPlay={true}
          className={className}
        />

    );
  }
  
  export default AmenitiesImages;