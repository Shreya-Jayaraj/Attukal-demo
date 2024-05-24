import './Navbar.css';
import {NavLink, Link} from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState('false')
    return ( 
        <nav>
            <Link to='/' className='title'> Attukal Bhagavathy Temple
            </Link>  

            <div className='menu' onClick={() =>{
                setMenuOpen(!menuOpen)
            }}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            
            <ul className={menuOpen ? "open" : ""}>
                <li>
                    <NavLink to='/about'> About</NavLink>  
                </li>
                <li>  
                    <NavLink to='/services'> Services</NavLink>  
                </li>
                <li>  
                    <NavLink to='/contact'> Contact</NavLink>   
                </li>
            </ul>
        </nav>
     );
}
 
export default Navbar;