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
            text: 'This pooja is performed for attaining all prosperity.'
        },
        {
            title: 'Aayur Sooktham Archana',
            text: 'This pooja is performed for the long life'
            
        },
        {
            title: 'Bhagavathi Seva',
            text: 'This pooja is performed for prosperity'
        },
        {
            title: 'Chuttuvilakku',
            text: 'This pooja is performed for redemption of sin, peace of mind'
            
        },
        {
            title: 'Kamba Vilakku',
            text: 'This pooja is performed for attaining what is desired'
        },
        {
            title: 'Ayilya Pooja',
            text: ' This pooja is performed for propitiating the serpents, alleviating skin ailments'
        },

    ]);
    const [officeBearers] = useState([
        { name: 'Sri S Venugopal', position: 'Chairman', image: SVenugopal  },
        { name: 'Smt V Sobha', position: 'President', image: Vsobha  },
        { name: 'Sri P.K. Krishnan Nair', position: 'Vice President', image: PKkrishnannair  },
        { name: 'Sri Sarat Kumar', position: 'Secretary', image: Saratkumar  },
        { name: 'Sri A.S. Anumodh', position: 'Join Secretary', image: ASanumodh  },
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

    useEffect(() => {
        const audio = new Audio(music);
        audio.play().catch(error => {
            console.error('Audio playback failed:', error);
        });

        return () => {
            audio.pause();
            audio.currentTime = 0;
        };
    }, []);

    const historyRef = useRef(null);
    useEffect(() => {
        const observer1 = new IntersectionObserver((entries1) => {
            entries1.forEach(entry => {
                if (entry.isIntersecting) {
                    // When the .amenities section comes into view, add the .animate-amenities class
                    entry.target.classList.add("animate-history");
                    // Disconnect the observer to improve performance
                    observer1.disconnect();
                }
            });
        }, { threshold: 0.5 });

        if (historyRef.current) {
            observer1.observe(historyRef.current);
        }

        // Clean up
        return () => {
            if (historyRef.current) {
                observer1.unobserve(historyRef.current);
            }
        };
    }, []);

    const vazhipadRef = useRef(null);
    useEffect(() => {
        const observer2 = new IntersectionObserver((entries2) => {
            entries2.forEach(entry => {
                if (entry.isIntersecting) {
                    // When the .amenities section comes into view, add the .animate-amenities class
                    entry.target.classList.add("animate-vazhipad");
                    // Disconnect the observer to improve performance
                    observer2.disconnect();
                }
            });
        }, { threshold: 0.5 });

        if (vazhipadRef.current) {
            observer2.observe(vazhipadRef.current);
        }

        // Clean up
        return () => {
            if (vazhipadRef.current) {
                observer2.unobserve(vazhipadRef.current);
            }
        };
    }, []);

    const officeRef = useRef(null);

    // Intersection Observer
    useEffect(() => {
        const observer4 = new IntersectionObserver((entries4) => {
            entries4.forEach(entry => {
                if (entry.isIntersecting) {
                    // When the .amenities section comes into view, add the .animate-amenities class
                    entry.target.classList.add("animate-office-bearers");
                    // Disconnect the observer to improve performance
                    observer4.disconnect();
                }
            });
        }, { threshold: 0.5 });

        if (officeRef.current) {
            observer4.observe(officeRef.current);
        }

        // Clean up
        return () => {
            if (officeRef.current) {
                observer4.unobserve(officeRef.current);
            }
        };
    }, []);
        
    const amenitiesRef = useRef(null);

    // Intersection Observer
    useEffect(() => {
        const observer3 = new IntersectionObserver((entries3) => {
            entries3.forEach(entry => {
                if (entry.isIntersecting) {
                    // When the .amenities section comes into view, add the .animate-amenities class
                    entry.target.classList.add("animate-amenities");
                    // Disconnect the observer to improve performance
                    observer3.disconnect();
                }
            });
        }, { threshold: 0.5 });

        if (amenitiesRef.current) {
            observer3.observe(amenitiesRef.current);
        }

        // Clean up
        return () => {
            if (amenitiesRef.current) {
                observer3.unobserve(amenitiesRef.current);
            }
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
                <video controls width="600">
                    <source src={attukalvideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div ref={historyRef} className="history-card">
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
            <div ref={vazhipadRef} className="vazhipad-container">
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


            <div ref={officeRef} className="office-bearers-container">
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




            <div ref={amenitiesRef} className="amenities">
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
            <div className="awards">
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

