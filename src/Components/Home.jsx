import devihome from "../assets/devihome.png";
import Announcements from "./Announcements";
import LatestUpdates from "./LatestUpdates";
import { useState ,useEffect , useRef } from "react";   
import { useNavigate } from "react-router-dom";
import './Vazhipad.css';
import './Home.css';
import Gallery from "./Gallery";
import devi2 from '../assets/devi2.jpg';
import './History.css'
import Modal from './Modal';
import AmenitiesImages from './AmenitiesImages';
import './OfficeBearers.css';
import attukalvideo2 from '../assets/attukalvideo2.mp4';
import guiness2 from '../assets/guinness2.png'
import music from '../assets/music.mp3';
import { useTranslation } from 'react-i18next';

import SVenugopal from '../assets/SVenugopal.png';
import Vsobha from '../assets/Vsobha.png';
import PKkrishnannair from '../assets/PKkrishnannair.png';
import Saratkumar from '../assets/Saratkumar.png';
import ASanumodh from '../assets/ASanumodh.png';
import Geethakumari from '../assets/Geethakumari.png';


const Home = () => {
    const {t, i18n} = useTranslation(['home','common','vazhipad','vazhipadcards','officebearers']);
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

    const [showModal, setShowModal ] = useState(false);
    const [modalContent, setModalContent ] = useState(null);
    

    const navigate=useNavigate();
    const handleLearnMoreClick=()=>  {
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

    const handleReadMoreClick=()=>  {
        navigate("/origin&history");
    }

    const handleOfficeBearersClick = () => {
        navigate("/office-bearers");
    }

    const handleAmenitiesClick = () => {
        navigate("/amenities");
    }
    const cardsRef = useRef([]);

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


    const historyRef = useRef(null);
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
        };

        

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-history');
                    entry.target.classList.remove('hidden');
                    observer.unobserve(entry.target);
                    
                }
            });
        }, observerOptions);
        

        if (historyRef.current) {
            observer.observe(historyRef.current);
        }

        cardsRef.current.forEach(card => {
            if (card) {
                card.classList.add('hidden');
                observer.observe(card);
            }
        });

        

        return () => {
            if (historyRef.current) {
                observer.unobserve(historyRef.current);
            }
            cardsRef.current.forEach(card => {
                if (card) {
                    observer.unobserve(card);
                }
            });
            
        };
    }, []);

    const vazhipadRef = useRef(null);
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
        };

        

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-vazhipad');
                    entry.target.classList.remove('hidden');
                    observer.unobserve(entry.target);
                    
                }
            });
        }, observerOptions);
        

        if (vazhipadRef.current) {
            observer.observe(vazhipadRef.current);
        }

        

        cardsRef.current.forEach(card => {
            if (card) {
                card.classList.add('hidden');
                observer.observe(card);
            }
        });

        return () => {
            if (vazhipadRef.current) {
                observer.unobserve(vazhipadRef.current);
            }
            cardsRef.current.forEach(card => {
                if (card) {
                    observer.unobserve(card);
                }
            });
            
        };
    }, []);

    const officeRef = useRef(null);

    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
        };

        
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-office-bearers');
                    entry.target.classList.remove('hidden');
                    observer.unobserve(entry.target);
                    
                }
            });
        }, observerOptions);
        

        if (officeRef.current) {
            observer.observe(officeRef.current);
        }

        cardsRef.current.forEach(card => {
            if (card) {
                card.classList.add('hidden');
                observer.observe(card);
            }
        });

        

        return () => {
            if (officeRef.current) {
                observer.unobserve(officeRef.current);
            }
            cardsRef.current.forEach(card => {
                if (card) {
                    observer.unobserve(card);
                }
            });
            
        };
    }, []);
        
    const amenitiesRef = useRef(null);
    
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-amenities');
                    entry.target.classList.remove('hidden');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        if (amenitiesRef.current) {
            observer.observe(amenitiesRef.current);
        }

        cardsRef.current.forEach(card => {
            if (card) {
                card.classList.add('hidden');
                observer.observe(card);
            }
        });

        return () => {
            if (amenitiesRef.current) {
                observer.unobserve(amenitiesRef.current);
            }
            cardsRef.current.forEach(card => {
                if (card) {
                    observer.unobserve(card);
                }
            });
        };
    }, []);

    const awardsRef = useRef(null);

    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-awards');
                    entry.target.classList.remove('hidden');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        if (awardsRef.current) {
            observer.observe(awardsRef.current);
        }

        cardsRef.current.forEach(card => {
            if (card) {
                card.classList.add('hidden');
                observer.observe(card);
            }
        });

        return () => {
            if (awardsRef.current) {
                observer.unobserve(awardsRef.current);
            }
            cardsRef.current.forEach(card => {
                if (card) {
                    observer.unobserve(card);
                }
            });
        };
    }, []);

    
    return (
        <div className='home'>
            <div className='first-line'>
                <div className="announcement-flex">
                    <Announcements />
                </div>
                <div className="image-flex">
                    <img className="image" src={devihome} alt="devi-image"></img>
                    <div className="slogam">
                        <p>സർവ്വമംഗള   മംഗല്യേ ശിവേ  സർവാർത്ഥ  സാധികേ।</p>
                        <p>ശരണ്യേ ത്രയംബകേ ഗൗരി  നാരായണീ നമോസ്തുതേ॥</p>
                        
                    </div>
                    
                </div>
                <div className="announcement-flex">
                    <LatestUpdates />
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
            <div>

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
            </div>

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