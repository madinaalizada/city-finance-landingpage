import React from 'react';
import './StatisticTable.css';

const StatisticTable = ({headerTitle, month, p1icon, p1text, p1percent, p2icon, p2text, p2percent }) => {
    //deminus 1 enminus 2 enplus 3
  return (
    <div className='statistic-table-container'>
        <div className='statistic-table-header'>
            <p className='statistic-table-header-title'>{headerTitle}</p>
            <p className='statistic-table-header-text'>{month}</p>
        </div>
        <div className="table-part">
            <img src={p1icon} alt='minus'/>
            <div className="table-part-1-info">
                <p className='table-part-1-info-text'>{p1text}</p>
                <p className='table-part-1-info-'>{p1percent}</p>
            </div>
        </div>
        <div className='table-part-line'></div>
        <div className="table-part">
            <img src={p2icon} alt='minus'/>
            <div className="table-part-1-info">
                <p className='table-part-1-info-text'>{p2text}</p>
                <p className='table-part-1-info-'>{p2percent}</p>
            </div>
        </div>
    </div>
  )
}

export default StatisticTable