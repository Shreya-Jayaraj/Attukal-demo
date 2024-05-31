import './Navbar.css';
import {NavLink, Link} from 'react-router-dom';
import { useState } from 'react';
import home from '../assets/home.png';

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false)
    return ( 
        <nav>
            <div className='left-section'>
                <img src={home} alt="Home" className='home-icon' />
                <Link to='/' className='title'>Attukal Bhagavathy Temple</Link>
            </div>  

            <div className='menu' onClick={() =>{
                setMenuOpen(!menuOpen)
            }}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            
            <ul className={menuOpen ? "open" : ""}>
                <li>
                    <NavLink to='/origin&history'> Origin & History</NavLink>  
                </li>
                <li>
                    <NavLink to='/upadevas'> Upadevas</NavLink>
                </li>
                <li>  
                    <NavLink to='/activities'> Activities</NavLink>   
                </li>
                <li>  
                    <NavLink to='/festivals'> Festivals</NavLink>   
                </li>
                <li>  
                    <NavLink to='/office-bearers'> Office Bearers</NavLink>  
                </li>
                <li>  
                    <NavLink to='/amenities'> Amenities</NavLink>   
                </li>
            </ul>
        </nav>
     );
}
 
export default Navbar;