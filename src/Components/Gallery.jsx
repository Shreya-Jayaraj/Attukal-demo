import ImageGallery from "react-image-gallery";
import 'react-image-gallery/styles/css/image-gallery.css';
import nadaImage from "../assets/nada.avif";
import GopuramImage from "../assets/gopuram.webp";
import prathishtaImage from "../assets/prathishta.jpg";
import './Gallery.css';

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
      <h2>GALLERY</h2>
      <ImageGallery 
        items={images} 
        showPlayButton={false}
        showFullscreenButton={false}
        slideInterval={3000}
        showThumbnails={false}
        autoPlay={true}
        showIndex
        renderItem={(item) => (
          <div className="image-gallery-image">
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
};

export default Gallery;
