import devihome from "../assets/devihome.png";
import Announcements from "./Announcements";
import LatestUpdates from "./LatestUpdates";
import { useState ,useEffect} from "react";   
import { useNavigate } from "react-router-dom";
import './Vazhipad.css';
import './Home.css';
import Gallery from "./Gallery";
import devi2 from '../assets/devi2.jpg';
import './History.css'
import Modal from './Modal';
import AmenitiesImages from './AmenitiesImages';
import './OfficeBearers.css';


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

            <section className="gallery-container">
                <Gallery  />
            </section>

            <div className="history-card">
                    <div className="image-container">
                        <img src={devi2} alt='Devi' />
                    </div>
                    <div className="history-content">
                        <div className="history-title">
                            <h3>Origin & History</h3>
                        </div>
                        <div className="history-body">
                            <p>The story goes that the Goddess Bhagavathy revealed herself to a fervent devotee of a notable family viz. Mulluveettil family. It is said that one evening a young girl appeared before the head of the family while he was performing his oblations in the Killi river and requested him to help her cross the river. Impressed by her charismatic demeanour, the- old man bent before her with awe and reverence and not only helped her cross the river but took her to his house nearby. Strangely enough, while the household members were amidst preparations for intending a warm welcome to the young girl, she vanished. That very night she appeared as an icon before the old man in his dream and demanded that he should establish an abode for her in the nearby sacred ground of shrubs and herbs (kavu), at a consecrated spot marked by three lines. The next morning the old man went to the spot revealed to him in the dream and to his great surprise he did find three marks indented on the ground.</p>
                        </div>
                        <div className='btn'>
                            <button onClick={handleReadMoreClick}>
                                <a>Read More</a>
                            </button>
                        </div>
                    </div>
                    
                </div>


                <div>
            <div className="vazhipad-container">
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


            <div className="office-bearers-container">
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




            <div className="amenities">
                <div className="amenities-gallery">
                    <AmenitiesImages />
                </div>
                <div className='amenities-text'>   
                    <h4>AMENITIES</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quam sequi enim magni, ad nihil autem deserunt voluptas? Corrupti beatae, 
                    illum consequuntur impedit ab aliquid reprehenderit veniam minus omnis unde perspiciatis.
                    </p>
                </div>
            </div>
            
        </div>
    );
}

export default Home;

