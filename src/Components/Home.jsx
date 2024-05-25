import devihome from "../assets/devihome.png";
import Announcements from "./Announcements";
import LatestUpdates from "./LatestUpdates";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Vazhipad.css';
import './Home.css';
import Gallery from "./Gallery";
import devi2 from '../assets/devi2.jpg';
import './History.css'
import Modal from './Modal';
import AmenitiesImages from './AmenitiesImages';
import './OfficeBearers.css';

const Home = () => {


    const [cards] = useState([
        {
            title: 'Vazhipad -1',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
        },
        {
            title: 'Vazhipad -2',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
        },
        {
            title: 'Vazhipad -3',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
        },
        {
            title: 'Vazhipad -4',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
        },
        {
            title: 'Vazhipad -5',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
        },
        {
            title: 'Vazhipad -6',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
        },

    ]);

    const [officeBearers] = useState([
        { name: 'John Doe', position: 'President', image: devi2, description: 'John Doe is the president.' },
        { name: 'Jane Smith', position: 'Vice President', image: devi2, description: 'Jane Smith is the vice president.' },
        { name: 'Jim Brown', position: 'Secretary', image: devi2, description: 'Jim Brown is the secretary.' },
        { name: 'Jill White', position: 'Treasurer', image: devi2, description: 'Jill White is the treasurer.'},
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


    return (
        <div className='home'>
            <div className='first-line'>
                <Announcements />
                <div className="image-flex">
                    <img className="image" src={devihome} alt="devi-image"></img>
                    <div className="slogam">
                        <p>സർവമങ്ഗലമാങ്ഗല്യേ ശിവേ സർവാർത്തസാധികേ ।</p>
                        <p>ശരണ്യേ ത്ര്യംബകേ ഗൗരി നാരായണി നമോയസ്തു തേ ॥</p>
                    </div>
                </div>
                <LatestUpdates />
            </div>

            <section className="gallery">
                <h2>PHOTO GALLERY</h2>
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
                                <p>{bearer.description}</p>
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

