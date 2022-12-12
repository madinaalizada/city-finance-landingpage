import React from 'react';
import logo from '../images/companycard/cflogo.png';
import call from '../images/companycard/call.png';
import facebook from '../images/companycard/facebook.png';
import global from '../images/companycard/global.png';
import instagram from '../images/companycard/instagram.png';
import sms from '../images/companycard/sms.png';
import whatsapp from '../images/companycard/whatsapp.png';
import map from '../images/companycard/map.png';
import './CompanyCard.css';

const CompanyCard = () => {
  return (
    <div className='company-card'>
      <div className="card-header">
        <p className='card-header-title'>QIZIL PARTNYOR</p>
        <img src={logo} alt="logo" className='logo'/>
      </div>
      <div className="card-body">
        <p className='header-text'>City Finance</p>
        <div className="company-body-icons">
            <img src={facebook} alt='icon'/>
            <img src={whatsapp} alt='icon'/>
            <img src={instagram} alt='icon'/>
            <img src={map} alt='icon'/>
            <img src={global} alt='icon'/>
        </div>
        <p className='info-company'>Şirkət haqqında</p>
        <p className='info-company-content'>“City Finance” bank olmayan kredit təşkilatıdır. BOKT  2014-cü ildən Azərbaycan Respublikası Mərkəzi Bankı tərəfindən verilmiş lisenziya əsasında fəaliyyətə başlayaraq müxtəlif növ kreditlərin verilməsi xidmətini göstərir.</p>
        <p className='info-contact-header'>Əlaqə məlumatları</p>
        <div className="info-contact-container">
          <img src={call} alt="call" className='info-icons'/> <p>+994 12 000 00 00</p>
        </div>
        <div className="info-contact-container">
          <img src={sms} alt="sms" className='info-icons'/> <p>info@cityfinance.com</p>
        </div>
      </div>
    </div>
  )
}

export default CompanyCard
