"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import './Retings.css';


export default function busting () {
  const [balance, setBalance] = useState<number | null>(1500);
  const [limitClicks, setLimitClicks] = useState<number | null>(2000);
  const [newClicks, setNewClicks] = useState(0);
  const [userId, setUserId] = useState<number | undefined>(1111111111);
  const [userName, setUserName] = useState<string | undefined>("vlad");

  // Логика кликера
  
  return (
    <div className='section'>
     <section className="section-earn">
     <img className='img-reating' 
          src='./images/жетон прозрачный.png' 
          alt='Монета' 
          height={95}
          width={100}
          />   
          <div className='backgrounds'>

          </div>
          <div className='backgrounds2'>

         </div>
         <div className='backgrounds3'>

        </div>
    </section>
    </div>
  );
}
