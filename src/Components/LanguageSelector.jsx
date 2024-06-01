import React from "react";
import {useTranslation} from 'react-i18next';
import './LanguageSelector.css'
const languages = [
    {code:"en", lang: "English"},
    {code:"mal", lang: "Malayalam"}
];

const LanguageSelector = () => {
  const {i18n} = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    console.log(`Language changed to: ${lng}`);
  };
  return (
    <div className="lang-btn">
      {languages.map((lng) => {
        return <button 
        className={lng.code==i18n.language? "selected":""}
        key={lng.code}
        onClick={()=>changeLanguage(lng.code)
        }>
          {lng.lang}
        </button>
      })}
    </div>
  )
}

export default LanguageSelector