import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import pongala2 from '../assets/festivals/pongala2.jpg';
import pongala4 from '../assets/festivals/pongala4.jpg';
import realcharm1 from '../assets/festivals/realcharm1.jpg';
import realcharm2 from '../assets/festivals/realcharm2.jpg';
import kuthiyottam1 from '../assets/festivals/kuthiyottam1.jpg';
import kuthiyottam2 from '../assets/festivals/kuthiyottam2.jpg';
import kuthiyottam3 from '../assets/festivals/kuthiyottam3.jpg';
import thalapoli from '../assets/festivals/thalapoli.jpg';
import './Festivals.css';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Festivals = () => {
  return (
    <div className='festivals-container'>
      <h1>Festivals</h1>
      <div className='festival-card'>
        <h2>Pongala Mahotsavam</h2>
        <Carousel responsive={responsive}>
          <div className='page'>
            <div className='festivals-images'>
              <img src={pongala2} alt='Pongala 2' />
            </div>
            <p>
              'Pongala' is the most important festival of Attukal Bhagavathy Temple. The offering of Pongala is a very special temple practice in the southern part of Kerala. The ten-day- long celebration commences in the Malayalam month of Makaram-Kumbham (Feb - March)on the Karthika star. Pongala ceremony is on the auspicious day of Pooram star which coincides with full moon. The festival commences with the musical rendering of the story of the Goddess (Kannaki Charitam) during the "Kappukettu ceremony". The musical renderinngs are conducted by the families authorised for this purpose. The story invokes the presence of Kodungallur Bhagavathy and the slaying of the Pandyan King. The song will continue for all the nine days preceding Pongala.
            </p>
          </div>
          <div className='page'>
            <div className='festivals-images'>
              <img src={pongala4} alt='Pongala 4' />
            </div>
            <p>
              The event of the Goddess annihilating the Pandyan King is accompanied by much sound and fury of the temple drums and "Vaykurava" by devotees, immediately followed by the lighting of the hearths for the preparation of the offering for the Goddess. This festival commemorates the victory of Good over Evil, by the slaying of Pandyan King. Throughout the festival an atmosphere of celebration and festivity prevails and there are the solemn observances such as regular conduct of Bhajans, musical concerts, ballets depicting folk and temple arts etc. in the temple premises. This is symbolic of the philosophy that human and divine affairs are inter-woven so minutely in all its disquisitions. Processions of colourful floats of the deity from all around, carried with pomp and devotion by the devotees congregating in the temple premises provides a pleasing experience.
            </p>
          </div>
          <div className='page'>
            <div className='festivals-images'>
              <img src={realcharm1} alt='Real Charm 1' />
            </div>
            
            <p>
            <h3>A rare charm of the festival</h3>
              On the 9th day of the festival, it would appear as though all roads in and around Thiruvananthapuram city lead to the Attukal Temple. The entire area of about 7 Kilometres radius around the temple, with houses of people of all caste, creed and religion open fields, roads and commercial institutions emerge as a consecrated ground for observing Pongala ritual for the lakhs women devotees assembling from different parts of Kerala and outside. This ceremony is exclusively confined to women folk. It is a delightful sight to see waves after waves of women of all age groups without caste, colour and creed surging into this area well in advance mostly carrying on their head materials such as firewood, earthern pots rice, jaggery, coconut etc. to mark out specific spots for the preparation of their offerings to the Goddess. 
            </p>
          </div>
          <div className='page'>
            <div className='festivals-images'>
              <img src={realcharm2} alt='Real Charm 2' />
            </div>
            <p>
              The important ritual in the 'Pongala' is the preparation of rice or varieties of sweet rice using hearths and the earthern pots in the open. The signal for lighting -the hearth is given by the chief priest of the temple at a prefixed auspicious time followed by the humming of the temple at Thidappally. Lightining of hearth at Thidappally is done by Melsanthi and at Panadara aduppu and Saha melsanthi.
              The ceremony concludes with the sprinkling of holy water by temple priests at the appointed time in the evening accompanied by an aerial showering of flowers to the honour and glory of the Goddess Almighty. The temple authorities make all necessary arrangements for the welfare of this huge congregation with the active participation of the voluntary agencies, local people, members of the festival committee and the various government departments. They ensure law and order in the area with the support of the police and the volunteers specially detailed for the purpose. The enormous crowd which gathers here is reminiscent of the huge gatherings of the Kumbha Mela festival of North India.
            </p>
          </div>
        </Carousel>
      </div>

      <div className='festival-card'>
        <h2>Kuthiyottam</h2>
        <Carousel responsive={responsive}>
          <div className='page'>
            <div className='festivals-images'>
              <img src={kuthiyottam1} alt='Kuthiyottam 1' />
            </div>
            <p>
              Kuthiyottam performed by boys with the hope that the Goddess almighty would be pleased to bestow on them beauty inward and outward, health, wealth and happiness. Boys below the age of 12years make the offering of Kuthiyottam. 
            </p>
          </div>
          <div className='page'>
            <div className='festivals-images'>
              <img src={kuthiyottam2} alt='Kuthiyottam 2' />
            </div>
            <p>
              These young boys represent the wounded soldiers of the Goddess Mahishasura Marddini. On the third day of the festival these young boys receive the prasadam (offering) from the temple priest and start a seven day penance to purify their body and mind.
            </p>
          </div>
          <div className='page'>
            <div className='festivals-images'>
              <img src={kuthiyottam3} alt='Kuthiyottamm 3' />
            </div>
            <p>
              For the purpose they have to pass through rigorous physical and mental discipline such as sleeping in mat, observing strict diet restrictions, staying in the temple etc. Besides these, the boys have to undergo such disciplines like prostrating 1008 times before the deity after their morning and evening oblations.
            </p>
          </div>
          </Carousel>
        </div>

        <div className='festival-card'>
        <h2>Thalapoli</h2>
        <Carousel responsive={responsive}>
          <div className='page'>
            <div className='festivals-images'>
              <img src={thalapoli} alt='thalapoli' />
            </div>
            <p>
              Thalappoli by girls are popular rituals made on the pongala day. A stream of young girls below 12 years. dressed in traditional attire holding Thalappoli starts very early in the morning with the hope that the Goddess almighty would be pleased to bestow on them beauty inward and outward, health, wealth and happiness.
            </p>
          </div>
          
          
          </Carousel>
        </div>
    </div>
  );
}

export default Festivals;
