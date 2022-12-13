import React from 'react';
import bellIcon from '../images/header/notification.svg';
import calendar from '../images/header/calendar.svg';
import mail from '../images/header/message.svg';
import mountain from '../images/header/mountain.jpg'
import vector from '../images/header/Vector.svg'
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
        <div className="header-icons">
            <h6>Ana səhifə</h6>
            <div className="icons">
                <img src={bellIcon} alt="icon" className='icon'/>
                <img src={calendar} alt="icon" className='icon'/>
                <img src={mail} alt="icon" className='icon'/>
            </div>
        </div>
        <div className="profile">
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
