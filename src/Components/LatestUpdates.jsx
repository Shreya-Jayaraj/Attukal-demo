import React from 'react'
import './Scroll.css';
import Records from '../records.json';

const LatestUpdates = () => {
  return (
    <div className='announcements-parent'>
        <div className='heading'>
                <h3>LATEST UPDATES</h3>
            </div>
        <div className='announcements'>
            
            <div className='a-container'>
                {
                    Records.map( record => {
                        return(
                            <div className="box" key = {record.id}>
                                <strong>{record.title}</strong>
                                <p>{record.content}</p>
                            </div>
                        )
                    }
                    )
                }
            </div>
            
        </div>
    </div>
  )
}

export default LatestUpdates