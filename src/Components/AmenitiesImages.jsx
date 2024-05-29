import ImageGallery from "react-image-gallery";
import 'react-image-gallery/styles/css/image-gallery.css';
import attukalbus from "../assets/attukalbus.jpg";
import  attukaltemple from "../assets/attukaltemple.jpg";
import prathishtaImage from "../assets/prathishta.jpg";
import './AmenitiesImages.css'


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

  

    // return (
    //     <ImageGallery items={images} 
    //       showPlayButton={false}
    //       showFullscreenButton={false}
    //       slideInterval={2000}
    //       showThumbnails={false}
    //       autoPlay={true}
    //       className={className}
    //     />

    // );


      return (
        <div className="amenities-gallery-child">
          <ImageGallery 
            items={images} 
            showPlayButton={false}
            showFullscreenButton={false}
            slideInterval={3000}
            showThumbnails={false}
            autoPlay={true}
            showIndex
            renderItem={(item) => (
              <div className="amenities-gallery-image">
                <img
                  src={item.original}
                  alt={item.originalAlt}
                  title={item.originalTitle}
                />
              </div>
            )}
          />
        </div>
      );
  }
  
  export default AmenitiesImages;