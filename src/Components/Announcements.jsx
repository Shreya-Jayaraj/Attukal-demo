import React from 'react';
import './Scroll.css';
import Records from '../announcements.json';
import { useTranslation } from 'react-i18next';


const Announcements = () => {
  const {t} = useTranslation('announcementstrans') 
  return (
    <div className='announcements-parent'>
      <div className='heading'>
        <h3>{t("announcements")}</h3>
      </div>
      <div className='announcements'>
        <div className='a-container'>
          {Records.map(record => (
            <div className="box" key={record.id}>
              <strong>{record.title}</strong>
              <p>{record.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Announcements;
