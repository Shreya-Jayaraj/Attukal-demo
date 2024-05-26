import './Navbar.css';
import {NavLink, Link} from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false)
    const [toggleOpen, setToggleOpen] = useState(false)
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
                    <NavLink to='/origin&history'> Origin & History</NavLink>  
                </li>
                <li>  
                    <NavLink to='/office-bearers'> Office Bearers</NavLink>  
                </li>
                <li>  
                    <NavLink to='/activities'> Activities</NavLink>   
                </li>
                <li>  
                    <NavLink to='/festivals'> Festivals</NavLink>   
                </li>
            </ul>
        </nav>
     );
}
 
export default Navbar;