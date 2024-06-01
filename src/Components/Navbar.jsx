import './Navbar.css';
import {NavLink, Link} from 'react-router-dom';
import { useState } from 'react';
import home from '../assets/home.png';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
    
    const {t, i18n} = useTranslation('navbar') 
    const isMalayalam = i18n.language === 'mal';
    const [menuOpen, setMenuOpen] = useState(false)
    return ( 
        <nav>
            <div className='left-section'>
                <img src={home} alt="Home" className='home-icon' />
                <Link to='/' className={`title ${isMalayalam ? 'malayalam-content' : ''}`}>
                    {t("title")}
                </Link>
            </div>  

            <div className='menu' onClick={() =>{
                setMenuOpen(!menuOpen)
            }}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            
            <ul className={`${menuOpen ? "open" : ""} ${isMalayalam ? 'malayalam-content' : ''}`}>
                <li>
                    <NavLink to='/origin&history'> {t("origin_history")}</NavLink>  
                </li>
                <li>
                    <NavLink to='/upadevas'> {t("upadevas")}</NavLink>
                </li>
                <li>  
                    <NavLink to='/activities'> {t("activities")}</NavLink>   
                </li>
                <li>  
                    <NavLink to='/festivals'> {t("festivals")}</NavLink>   
                </li>
                <li>  
                    <NavLink to='/office-bearers'> {t("office_bearers")}</NavLink>  
                </li>
                <li>  
                    <NavLink to='/amenities'> {t("amenities")}</NavLink>   
                </li>
            </ul>
        </nav>
     );
}
 
export default Navbar;