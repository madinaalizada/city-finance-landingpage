import React from 'react';
import square from '../images/sidebar/squ.svg'
import ferrum from '../images/sidebar/ferrum.svg'
import down from '../images/sidebar/Vector.svg'
import questionIcon from '../images/sidebar/Icon.svg';
import './SideBar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileContract } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faPassport } from '@fortawesome/free-solid-svg-icons'
import { faBug } from '@fortawesome/free-solid-svg-icons'
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'

const SideBar = () => {
  return (
    <div className='sidebar'>
        <div className="header-logo">
            <img src={square} alt='square'/>
            <img src={ferrum} alt='ferrum' className='header-logo-ferrum'/>
        </div>
        <div className="list-sections">
            <div className='active list-sections-item'>
            <FontAwesomeIcon icon={faHouse} className='font-awasome-icon'/>
                    Ana səhifə
            </div>
            <div className='list-sections-item'>
            <FontAwesomeIcon icon={faFileContract} className='font-awasome-icon'/>
                    Müqavilələr
                    <div className="dropdown">
                        <img src={down} alt='drop' className='dropbtn'/>
                        <div class="dropdown-content">
                            <a href="/">Link 1</a>
                            <a href="/">Link 2</a>
                            <a href="/">Link 3</a>
                        </div>
                    </div>
            </div>
            <div className='list-sections-item'>
            <FontAwesomeIcon icon={faPassport} className='font-awasome-icon'/>
                    Zaminli portfel
                    <div className="dropdown">
                        <img src={down} alt='drop' className='dropbtn'/>
                        <div class="dropdown-content">
                            <a href="/">Link 1</a>
                            <a href="/">Link 2</a>
                            <a href="/">Link 3</a>
                        </div>
                    </div>
            </div>
            <div className='list-sections-item'>      
            <FontAwesomeIcon icon={faBug} className='font-awasome-icon'/>          
                    Reports
                    <div className="dropdown">
                        <img src={down} alt='drop' className='dropbtn'/>
                        <div class="dropdown-content">
                            <a href="/">Link 1</a>
                            <a href="/">Link 2</a>
                            <a href="/">Link 3</a>
                        </div>
                    </div>
            </div>
            <div className='list-sections-item'>
            <FontAwesomeIcon icon={faCircleExclamation} className='font-awasome-icon'/>
                    Problematic Products
            </div>
        </div>
        <div className="shortcut-section">
            <img src={questionIcon} alt="question" />
            <p>Qısayol yarat</p>
            <p className='subTitle'>Vacib sənədlərə sürətli keçid</p>
            <button>Sənəd əlavə et</button>
        </div>
    </div>
  )
}

export default SideBar
