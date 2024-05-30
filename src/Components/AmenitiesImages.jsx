import ImageGallery from "react-image-gallery";
import 'react-image-gallery/styles/css/image-gallery.css';
import './AmenitiesImages.css'

import attukalbus from "../assets/amenities/attukalbus.jpg";
import ambaaudi from "../assets/amenities/ambaaudi.jpg";
import cashcounter from "../assets/amenities/cashcounter.jpg";
import deviaudi from "../assets/amenities/deviaudi.jpg";
import hospital from "../assets/amenities/hospital.jpg";
import karthikaaudi from "../assets/amenities/karthikaaudi.jpg";
import nadapandal from "../assets/amenities/nadapandal.jpg";
import parkingarea from "../assets/amenities/parkingarea.jpg";
import thaliket from "../assets/amenities/thaliket.jpg";
import visrama from "../assets/amenities/visrama.jpg";



const images = [
  {
    original: nadapandal,
  },  
  {
    original: visrama,
  },
  {
    original: ambaaudi,
  },
  {
    original: karthikaaudi,
  },
  {
    original: deviaudi,
  },  
  {
    original: hospital,
    
  },
  {
    original: attukalbus,
    
  },
  {
    original: parkingarea,
  },
  {
    original: cashcounter,
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