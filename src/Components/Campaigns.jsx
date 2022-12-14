import React from 'react';
import './Campaigns.css';
import kam1 from '../images/price/kampaniya1.svg';
import back from '../images/mercedes/background.svg';
import mercedes from '../images/mercedes/mercedesimg.svg';
import addCircle from '../images/price/add-circle.svg';
import videoCircle from '../images/price/video-circle.svg';

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
            <img src={back} className="car-back" alt='car-background'/>
            <img src={mercedes} className="car-image" alt='car-images'/>
          </div>
        </div>
        <div className="create-campaign-container">
            <div className="campaign-container-context">
              <p className='campaign-container-context-title'>Salam, City Finance</p>
              <p className='campaign-container-context-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
              <p className='campaign-container-context-subtitle'>*Kampaniya istiqamətləri: Lorem ipsum</p>
            </div>
            <div className="campaign-container-buttons">
              <div className="campaign-container-button">
                <img src={addCircle} alt="logo"/>
                <p>Kampaniya yarat </p>
              </div>
              <div className="campaign-container-button">
                <img src={videoCircle} alt="logo-video" />
                <p>Necə etməli?</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Campaigns