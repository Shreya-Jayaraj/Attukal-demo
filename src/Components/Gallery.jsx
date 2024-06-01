import ImageGallery from "react-image-gallery";
import 'react-image-gallery/styles/css/image-gallery.css';
import nadaImage from "../assets/nada.avif";
import GopuramImage from "../assets/gopuram.webp";
import prathishtaImage from "../assets/prathishta.jpg";
import './Gallery.css';
import { useTranslation } from 'react-i18next';

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

  const {t, i18n} = useTranslation('home') 
  const isMalayalam = i18n.language === 'mal';

  return (
    <div className={`gallery ${isMalayalam ? 'malayalam-content' : ''}`}>
      <h2>{t("gallery")}</h2>
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
