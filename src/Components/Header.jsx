import React, {useState} from 'react';
import bellIcon from '../images/header/notification.svg';
import calendar from '../images/header/note-text.svg';
import mail from '../images/header/sms.svg';
import mountain from '../images/header/mountain.svg'
import vector from '../images/header/Vector.svg'
import './Header.css'; 

const Header = () => {
  return (
    <div className='header'>
        <div className="header-icons">
            <h6>Ana səhifə</h6>
        </div>
        <div className="profile">
            <div className="icons">
                <img src={bellIcon} alt="icon" className='icon'/>
                <img src={calendar} alt="icon" className='icon'/>
                <div className='mail-icon'>
                  <img src={mail} alt="icon" className='icon'/>
                  <div className="mail-messages">12</div>
                </div>
            </div>
            <div className="info">
              <p className='info-name'>Partnyor adı</p>
              <p className='info-subtitle'>Hesabım</p>
            </div>
            <div className="profile-photo">
              <img src={mountain} alt="profile" className='prof-photo'/>
              <img src={vector} alt="profile" className='vector'/>
            </div>

        </div>
    </div>
  )
}

export default Header
