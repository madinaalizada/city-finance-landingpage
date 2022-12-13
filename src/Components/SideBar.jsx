import React from 'react';
import square from '../images/sidebar/squ.svg'
import ferrum from '../images/sidebar/ferrum.svg'
import down from '../images/sidebar/Vector.svg'
import questionIcon from '../images/sidebar/Icon.svg';
import './SideBar.css';

const SideBar = () => {
  return (
    <div className='sidebar'>
        <div className="header-logo">
            <img src={square} alt='square'/>
            <img src={ferrum} alt='ferrum'/>
        </div>
        <div className="list-sections">
            <div className='active list-sections-item'>
                <button>
                <span className='list-section-icon'></span>
                    Ana səhifə</button>
            </div>
            <div className='list-sections-item'>
                <button>
                <span className='list-section-icon'></span>
                    Müqavilələr</button>
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
                <button>
                <span className='list-section-icon'></span>
                    Zaminli portfel</button>
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
                <button>
                <span className='list-section-icon'></span>
                    Reports</button>
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
                <button>
                <span className='list-section-icon'></span>
                    Problematic Products</button>
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
