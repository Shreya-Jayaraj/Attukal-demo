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
import attukalvideo from '../assets/attukalvideo.mp4';
import guiness from '../assets/guinness.png'


import SVenugopal from '../assets/SVenugopal.png';
import Vsobha from '../assets/Vsobha.png';
import PKkrishnannair from '../assets/PKkrishnannair.png';
import Saratkumar from '../assets/Saratkumar.png';
import ASanumodh from '../assets/ASanumodh.png';
import Geethakumari from '../assets/Geethakumari.png';
import music from '../assets/music.mp3';

const Home = () => {


    const [cards] = useState([
        {
            title: 'Udayasthamana Pooja',
            text: 'This pooja is performed for attaining all prosperity. More Info about the vazhipad will be put up here'
        },
        {
            title: 'Aayur Sooktham Archana',
            text: 'This pooja is performed for the long life. More Info about the vazhipad will be put up here'
            
        },
        {
            title: 'Bhagavathi Seva',
            text: 'This pooja is performed for prosperity. More Info about the vazhipad will be put up here'
        },
        {
            title: 'Chuttuvilakku',
            text: 'This pooja is performed for redemption of sin, peace of mind. More Info about the vazhipad will be put up here'
            
        },
        {
            title: 'Kamba Vilakku',
            text: 'This pooja is performed for attaining what is desired. More Info about the vazhipad will be put up here'
        },
        {
            title: 'Ayilya Pooja',
            text: ' This pooja is performed for propitiating the serpents, alleviating skin ailments. More Info about the vazhipad will be put up here'
        },

    ]);
    const [officeBearers] = useState([
        { name: 'Sri S Venugopal', position: 'Chairman', image: SVenugopal  },
        { name: 'Smt V Sobha', position: 'President', image: Vsobha  },
        { name: 'Sri P.K. Krishnan Nair', position: 'Vice President', image: PKkrishnannair  },
        { name: 'Sri Sarat Kumar', position: 'Secretary', image: Saratkumar  },
        { name: 'Sri A.S. Anumodh', position: 'Joint Secretary', image: ASanumodh  },
        { name: 'Smt Geetha Kumari.A', position: 'Treasurer', image: Geethakumari  },
        
    ]);

    const [showModal, setShowModal ] = useState(false);
    const [modalContent, setModalContent ] = useState(null);
    

    const navigate=useNavigate();
    const handleLearnMoreClick=()=>  {
        navigate("/learn-more");
    }
    
    const handleCardClick = (card) => {
        setModalContent(
            <div>
                {/* <h3>{card.title}</h3> */}
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
                    <source src={attukalvideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <div ref={historyRef} className="history-card hidden">
                    <div className="image-container">
                        <img src={devi2} alt='Devi' />
                    </div>
                    <div className="history-content">
                        <div className="history-title">
                            <h3>Origin & History</h3>
                        </div>
                        <div className="history-body">
                            <p>The story goes that the Goddess Bhagavathy revealed herself to a fervent devotee of a notable family viz. Mulluveettil family. It is said that one evening a young girl appeared before the head of the family while he was performing his oblations in the Killi river and requested him to help her cross the river. Impressed by her charismatic demeanour, the- old man bent before her with awe and reverence and not only helped her cross the river but took her to his house nearby. </p>
                        </div>
                        <div className='btn'>
                            <button onClick={handleReadMoreClick}>
                                <a>Read More</a>
                            </button>
                        </div>
                    </div>
                    
                </div>


                <div>
            <div ref={vazhipadRef} className="vazhipad-container hidden">
                <section>
                    <div className="container">
                        <h2>Vazhipadukal</h2>
                        <div className="cards">
                            {cards.map((card, i) => {
                                return (
                                    <div key={i} className="card" onClick={() => handleCardClick(card)}>
                                        <h3>{card.title}
                                        </h3>
                                        {/* <p>

                                            {card.text}
                                        </p> */}
                                    </div>


                                );
                            })}

                        </div>
                        <div className="learn-more-container">
                            <button className="learn-more-btn" onClick={handleLearnMoreClick}>Learn More</button>
                        </div>
                    </div>

                </section>

            </div>
            <Modal show={showModal} onClose={closeModal} content={modalContent}/>
            

            </div>


            <div ref={officeRef} className="office-bearers-container hidden">
                <h2>Office Bearers</h2>
                <div className="office-bearers-cards">
                    {officeBearers.map((bearer, i) => (
                        <div key={i} className="office-bearer-card">
                            <img src={bearer.image} alt={bearer.name} />
                            <div className="office-bearer-details">
                                <h3>{bearer.name}</h3>
                                <p>{bearer.position}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="office-bearers-button-container">
                    <button className="office-bearers-btn" onClick={handleOfficeBearersClick}>View All</button>
                </div>
            </div>

            <div ref={amenitiesRef} className="amenities hidden">
                <div className="amenities-gallery">
                    <AmenitiesImages />
                </div>
                <div className='amenities-text'>   
                    <h4>AMENITIES</h4>
                    <p>Attukal Temple offers a variety of facilities for devotees, including Nadapandal for shelter and events, Visrama Sanketham for rest and meals, and various dormitory and room options. The temple also features three auditoriums for events, a hospital building leased for medical services, and tourist bus services for pilgrim tourism. Additional amenities include online booking for services and divine gold lockets available for purchase.
                    </p>
                    <div className='btn'>
                            <button onClick={handleAmenitiesClick}>
                                <a>Read More</a>
                            </button>
                    </div>
                </div>
            </div>
            <div ref={awardsRef} className="awards hidden">
                <div className="award-image">
                    <img  src={guiness} alt="guiness-image"></img>
                </div>
                <div className='awards-content'>
                    <h4>GUINNESS BOOK OF WORLD RECORDS</h4>
                    <p>
                        The Pongala festival of the Temple is the largest women gathering festival in the world. This entered in the Guinness Book of World Records in 1997 and 2009 for participating 15 lakhs and 25 lakhs respectively.
                    </p>
                </div>
            </div>
            
        </div>
    );
}

export default Home;