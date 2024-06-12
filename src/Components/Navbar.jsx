import './Navbar.css';
import { NavLink, Link } from 'react-router-dom';
import { useState } from 'react';
import home from '../assets/home.png';
import { useTranslation } from 'react-i18next';
import languageIcon from '../assets/languageIcon.png';

const Navbar = () => {
  const { t, i18n } = useTranslation('navbar');
  const isMalayalam = i18n.language === 'mal';
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
    setDropdownOpen(false);
  };

  return (
    <nav>
      <div className='left-section'>
        <Link to='/'><img src={home} alt="Home" className='home-icon' /></Link>
        <Link to='/' className={`title ${isMalayalam ? 'malayalam-content' : ''}`}>
          {t("title")}
        </Link>
        {/* <div className="language-selector" onClick={() => setDropdownOpen(!dropdownOpen)}>
          <button className="language-btn">
            <img src={languageIcon} alt="Language" className="language-icon" />
          </button>
          {dropdownOpen && (
            <div className="language-dropdown">
              <button onClick={() => handleLanguageChange('en')}>English</button>
              <button onClick={() => handleLanguageChange('mal')}>Malayalam</button>
            </div>
          )}
        </div> */}
      </div>  

      <div className='menu' onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      
      <ul className={`${menuOpen ? "open" : ""} ${isMalayalam ? 'malayalam-content' : ''}`}>
        <li><NavLink to='/origin&history'>{t("origin_history")}</NavLink></li>
        <li><NavLink to='/upadevas'>{t("upadevas")}</NavLink></li>
        <li><NavLink to='/activities'>{t("activities")}</NavLink></li>
        <li><NavLink to='/festivals'>{t("festivals")}</NavLink></li>
        <li><NavLink to='/office-bearers'>{t("office_bearers")}</NavLink></li>
        <li><NavLink to='/amenities'>{t("amenities")}</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
