'use client';

import React, { useEffect, useState } from 'react';
import './progress-bar.css';

interface ProgressBarProps {
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <main>
      <p className="limit_clicks">{progress}/2000</p>
      <div   className='bar'>
       
      <img className='img-four' 
          src='./images/искры.png' 
          alt='Монета' 
          height={86}
          width={86}
          />
     <p className='store'>Задание</p>
     <div className='green-progress'>
     <span className='number'>5</span>
     </div>
     <img className='img-theree' 
          src='./images/подарок 2.png' 
          alt='Монета' 
          height={86}
          width={86}
          />
          <img className='img-four-1' 
          src='./images/искры.png' 
          alt='Монета' 
          height={86}
          width={86}
          />
        
<svg className='icons-store' xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" style={{ fill: 'rgba(225, 225, 225, 1)', transform: '', msFilter: '' }}><path d="M19 4h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-1 15h-6v-6h6v6zm1-10H5V7h14v2z"></path></svg>
     
     </div>
     <svg className='progress' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: 'rgba(225, 225, 225, 1)', transform: '', msFilter: '' }}>
  <path d="M20 10V8a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2h2v-4h-2zM9 17l2-3.89L7 12l6-5-1 3.89L16 12l-7 5z"></path>
</svg>
      <div className="progress-bar" data-testid="ProgressBar">
        <div
          className="progress-bar-inner"
          style={{ width: `${(progress / 6000) * 100}%` }}
        ></div>
       
      </div>
    </main>
  );
};

export default ProgressBar;
