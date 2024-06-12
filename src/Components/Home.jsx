import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import devihome from "../assets/devihome.png";
import Announcements from "./Announcements";
import LatestUpdates from "./LatestUpdates";
import Gallery from "./Gallery";
import Modal from './Modal';
import AmenitiesImages from './AmenitiesImages';
import './Vazhipad.css';
import './Home.css';
import './History.css';
import './OfficeBearers.css';
import './LanguageSelector.css';
import attukalvideo2 from '../assets/attukalvideo2.mp4';
import guiness2 from '../assets/guinness2.png';
import music from '../assets/music.mp3';
import SVenugopal from '../assets/SVenugopal.png';
import Vsobha from '../assets/Vsobha.png';
import PKkrishnannair from '../assets/PKkrishnannair.png';
import Saratkumar from '../assets/Saratkumar.png';
import ASanumodh from '../assets/ASanumodh.png';
import Geethakumari from '../assets/Geethakumari.png';
import devi2 from '../assets/devi2.jpg';
import des from '../assets/des.png'
import annadhanm from '../assets/vzhipad/annadhanm1.jpeg';
import kunjoon from '../assets/vzhipad/kunjoon1.jpeg';
import pongala from '../assets/vzhipad/pongala1.jpeg';
import thulabharam from '../assets/vzhipad/thulabharam1.jpeg';
import vilakku_kett from '../assets/vzhipad/vilakku_kett1.jpeg';
import LanguageSelector from "./LanguageSelector";

const Home = () => {
  const { t, i18n } = useTranslation(['home', 'common', 'vazhipad', 'vazhipadcards', 'officebearers', 'impvazhipads']);
  const vazhipads = t('vazhipads', { ns: 'vazhipadcards', returnObjects: true });
  const isMalayalam = i18n.language === 'mal';

  const officeBearers = [
    { nameKey: '0.name', positionKey: '0.position', image: SVenugopal },
    { nameKey: '1.name', positionKey: '1.position', image: Vsobha },
    { nameKey: '2.name', positionKey: '2.position', image: PKkrishnannair },
    { nameKey: '3.name', positionKey: '3.position', image: Saratkumar },
    { nameKey: '4.name', positionKey: '4.position', image: ASanumodh },
    { nameKey: '5.name', positionKey: '5.position', image: Geethakumari },
  ];
  
  const galleryImages = [
    { titleKey: '0.title', descriptionKey: '0.description', image: annadhanm },
    { titleKey: '1.title', descriptionKey: '1.description',image: kunjoon },
    { titleKey: '2.title', descriptionKey: '2.description', image: pongala },
    { titleKey: '3.title', descriptionKey: '3.description',image: thulabharam },
    { titleKey: '4.title', descriptionKey: '4.description',image: vilakku_kett}, 
  ];

  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const navigate = useNavigate();

  const handleLearnMoreClick = () => {
    navigate("/learn-more");
  }

  const handleCardClick = (card) => {
    setModalContent(
      <div>
        <p>{card.text}</p>
      </div>
    );
    setShowModal(true);
  }

  const closeModal = () => {
    setShowModal(false);
    setModalContent(null);
  }
  const handleBookNowClick = ()  => {
    navigate("/home");
  }
  const handleReadMoreClick = () => {
    navigate("/origin&history");
  }

  const handleOfficeBearersClick = () => {
    navigate("/office-bearers");
  }

  const handleAmenitiesClick = () => {
    navigate("/amenities");
  }

  const handleAwardsClick = () => {
    navigate("/awards");
  }

  const cardsRef = useRef([]);
  const historyRef = useRef(null);
  const vazhipadRef = useRef(null);
  const officeRef = useRef(null);
  const amenitiesRef = useRef(null);
  const awardsRef = useRef(null);
  const vazhipad1Ref=useRef(null);

  useEffect(() => {
    const audio = new Audio(music);
    let playCount = 0;

    const handleAudioEnd = () => {
      playCount += 1;
      if (playCount < 2) {
        audio.play().catch(error => {
          console.error('Audio playback failed:', error);
        });
      } else {
        audio.removeEventListener('ended', handleAudioEnd);
      }
    };

    audio.addEventListener('ended', handleAudioEnd);
    audio.play().catch(error => {
      console.error('Audio playback failed:', error);
    });

    return () => {
      audio.pause();
      audio.currentTime = 0;
      audio.removeEventListener('ended', handleAudioEnd);
    };
  }, []);

  const setupIntersectionObserver = (ref, animationClass) => {
    const observerOptions = { threshold: 0.1 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(animationClass);
          entry.target.classList.remove('hidden');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (ref.current) {
      observer.observe(ref.current);
    }

    cardsRef.current.forEach(card => {
      if (card) {
        card.classList.add('hidden');
        observer.observe(card);
      }
    });

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
      cardsRef.current.forEach(card => {
        if (card) {
          observer.unobserve(card);
        }
      });
    };
  };

  useEffect(() => {
    setupIntersectionObserver(historyRef, 'animate-history');
    setupIntersectionObserver(vazhipad1Ref, 'animate-imp-vazhipad');
    setupIntersectionObserver(vazhipadRef, 'animate-vazhipad');
    setupIntersectionObserver(officeRef, 'animate-office-bearers');
    setupIntersectionObserver(amenitiesRef, 'animate-amenities');
    setupIntersectionObserver(awardsRef, 'animate-awards');
    
  }, [i18n.language]);

  return (
    <div className='home'>
      <div className="language-selector">
        <LanguageSelector/>
      </div>
      <div className="first-line-container">
        <div className='first-line'>
          <div className="left-side-container">
            <div className={`image-gallery-section ${isMalayalam ? 'malayalam-content' : ''}`}>
              <h2 className="gallery-heading" >{t('vazhipadstitle', { ns: 'impvazhipads' })}</h2>
              {galleryImages.map((images, i) => (
                <div key={i} className="image-card">
                  <img src={images.image} alt={t(`galleryImages.${i}.image`, { ns: 'impvazhipads' })} />
                    <div className="image-details">
                      <h3>{t(`galleryImages.${i}.title`, { ns: 'impvazhipads' })}</h3>
                      <p>{t(`galleryImages.${i}.description`, { ns: 'impvazhipads' })}</p>
                    </div>
                </div>
              ))}
              <div className="book-now-container">
                <button className="book-now-btn" onClick={handleBookNowClick}>
                  {t('booknow', { ns: 'common' })}
                </button>
              </div>
          </div>
            
          </div>
          <div className="image-flex">
              <img src={devihome} alt="devi-image"></img>
              
              <div className="slogam">
                  <p>സർവ്വമംഗള   മംഗല്യേ ശിവേ  സർവാർത്ഥ  സാധികേ।</p>
                  <p>ശരണ്യേ ത്രയംബകേ ഗൗരി  നാരായണീ നമോസ്തുതേ॥</p>
              </div>
          </div>
          <div className='right-side'>
            
            <div className='timings'>
              <div className="timings-text">
                <h4 className={` ${isMalayalam ? 'malayalam-content' : ''}`}> <strong>{t("t-heading")}</strong> </h4>
                <p>4:30 am - 12:30 pm</p>
                <p>5:00 pm - 8:30pm</p>
              </div>
            </div>

            <div className="announcements-home">
              <Announcements />
              </div>
          </div>
        </div>

        <div className="marquee-container">
          <div className="marquee-content">
            {t('annadhanam')}
          </div>
        </div>

      </div>


        <div className="gallery-container">
            <Gallery  />
        </div>

        <div className='attukal-video'>
            <video controls>
                <source src={attukalvideo2} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>

        <div ref={historyRef} className={`history-card hidden ${isMalayalam ? 'malayalam-content' : ''}`}>
                <div className="history-image-container">
                    <img src={devi2} alt='Devi' />
                </div>
                <div className="history-content">
                    <div className="history-title">
                        <h3>{t("oh-title", { ns: 'home' })}</h3>
                    </div>
                    <div className="history-body">
                        <p>{t("oh-content", { ns: 'home' })} </p>
                    </div>
                    <div className='btn'>
                        <button onClick={handleReadMoreClick}>
                            <a>{t("read", { ns: 'common' })}</a>
                        </button>
                    </div>
                </div>
            </div>
        
        
        
            

        <div ref={vazhipadRef} className={`vazhipad-container hidden ${isMalayalam ? 'malayalam-content' : ''}`}>
            <section>
                <div className="container">
                    <h2>{t('Vazhipadukal', { ns: 'home' })}</h2>
                    <div className="cards">
                        {vazhipads.map((card, i) => {
                            return (
                                <div key={i} className="card" onClick={() => handleCardClick(card)}>
                                    <h3>{card.title}
                                    </h3>
                                </div>
                            );
                        })}

                    </div>
                    <div className="learn-more-container">
                        <button className="learn-more-btn" onClick={handleLearnMoreClick}>{t("read", { ns: 'common' })}</button>
                    </div>
                </div>
            </section>
        </div>
        <Modal show={showModal} onClose={closeModal} content={modalContent}/>


        <div ref={officeRef} className={`office-bearers-container hidden ${isMalayalam ? 'malayalam-content' : ''}`}>
            <h2>{t('officeBearersTitle', { ns:'officebearers' })}</h2>
            <div className="office-bearers-cards">
                {officeBearers.map((bearer, i) => (
                <div key={i} className="office-bearer-card">
                    <img src={bearer.image} alt={t(`officeBearers.${i}.name`, { ns: 'officebearers' })} />
                    <div className="office-bearer-details">
                    <h3>{t(`officeBearers.${i}.name`, { ns: 'officebearers' })}</h3>
                    <p>{t(`officeBearers.${i}.position`, { ns: 'officebearers' })}</p>
                    </div>
                </div>
                ))}
            </div>
            <div className="office-bearers-button-container">
                <button className="office-bearers-btn" onClick={handleOfficeBearersClick}>
                {t('viewAll', { ns:'common' })}
                </button>
            </div>
        </div>
  
        <div ref={amenitiesRef} className={`amenities hidden ${isMalayalam ? 'malayalam-content' : ''}`}>
            <div className="amenities-gallery">
                <AmenitiesImages />
            </div>
            <div className='amenities-text'>   
                <h4>{t("amenities-title", { ns: 'home' })}</h4>
                <p>{t("amenities-content", { ns: 'home' })}
                </p>
                <div className='btn'>
                        <button onClick={handleAmenitiesClick}>
                            <a>{t("read", { ns: 'common' })}</a>
                        </button>
                </div>
            </div>
        </div>
        <div ref={awardsRef} className={`awards hidden ${isMalayalam ? 'malayalam-content' : ''}`} >
            <div className="award-image">
                <img  src={guiness2} alt="guiness-image"></img>
            </div>
            <div className='awards-content'>
                <h4>{t("aw-title", { ns: 'home' })}</h4>
                <p>
                {t("aw-content", { ns: 'home' })}
                </p>
            </div>
        </div>
    </div>
);
}

export default Home;
