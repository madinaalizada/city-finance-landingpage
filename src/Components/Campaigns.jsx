import React from 'react';
import './Campaigns.css';
import kam1 from '../images/price/kampaniya1.svg';
import back from '../images/mercedes/background.svg';
import mercedes from '../images/mercedes/mercedesimg.svg';

const Campaigns = () => {
  return (
    <div className='campaigns'>
        <div className='campaign-header-text'>
            <p className='campaign-header-title'>Kampaniyalar</p>
            <p className='campaign-header-more'>Hamısı {">"}</p>
        </div>
        <img src={kam1} alt="campaign"/>
        <div className="campaign-mercedes">
          <div className="mercedes-info-container">
              <p className='campaignn'>KAMPANİYA</p>
              <p className='campaign-title'>Mercedes mövsümü</p>
              <div className='pop'>
                <p className='pop-item'>İlkin ödəniş 30%</p>
                <p className='pop-item'>*Sərfəli Lizinq</p>
              </div>
              <button className='btn-more'>ƏTRAFLI</button>
          </div>
          <div className="mercedes-photo-container">
            <img src={back}/>
            <img src={mercedes} className="car-image"/>
          </div>
        </div>
    </div>
  )
}

export default Campaigns