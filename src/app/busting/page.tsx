"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import './busting.css';
import BusterCard from '@/components/buster-card/page';


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
    <div className="container">
      <div className="svg-img">
        <div className="block-section">
        <img className='img-two-img-two' 
          src='./images/жетон.png' 
          alt='Монета' 
          height={48}
          width={48}
          />
          <p className="items-section">Баланс</p>
          <p className="items-section-two">10.5k</p>
          </div>
          <div className="block-section-two">
        <img className='img-two-img-two-img' 
          src='./images/доллар.png' 
          alt='Монета' 
          height={85}
          width={85}
          />
          <p className="items-section">доход/в час</p>
          <p className="items-section-two-two">50</p>
          </div>
          <div className="block-section-two-two">
       <svg className='img-two-img-two-img-img' clip-rule="evenodd" width="28" height="28" fill-rule="evenodd" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 43.3492 43.3492" xmlns="http://www.w3.org/2000/svg"><g id="Layer_x0020_1"><circle cx="21.675" cy="21.675" fill="#32CD32" r="21.675"/><g id="_276461232" fill="#000"><path id="_276461928" d="m13.3177 20.9283c-.2666 0-.5369.0678-.7839.2106-.7517.4338-1.0101 1.3982-.5764 2.1498l2.6676 4.6202 1.5783 2.8058c1.4922 2.6522 3.7505 4.2356 6.041 4.2356l4.6764-.0002c2.5815 0 4.6814-2.0997 4.6814-4.6808v-14.9965c0-.8678-.7065-1.5738-1.5739-1.5738-.8673 0-1.5732.7054-1.5739 1.5724.0001.1331-.1081.2412-.2413.2412-.1333-.0001-.2414-.1081-.2414-.2414v-2.4871c0-.8678-.7058-1.5736-1.5739-1.5736-.8673-.0002-1.5739.7059-1.5739 1.5737.0001.1333-.1081.2414-.2413.2414-.1332-.0001-.2414-.1081-.2414-.2414v-2.8116c0-.8678-.7059-1.5737-1.5733-1.5737-.8679-.0001-1.5738.706-1.5738 1.5738v3.5216c0 .1334-.1081.2415-.2414.2415-.1332 0-.2414-.1079-.2414-.2411-.0006-.8671-.7071-1.5725-1.5738-1.5725-.8681-.0001-1.5739.706-1.5739 1.5738v11.8508c0 .1069-.0704.2012-.1729.2315-.1024.0303-.2131-.0105-.2709-.1003l-2.43-3.7527c-.0019-.0034-.0044-.0068-.0063-.0104-.2909-.5043-.8215-.7866-1.3657-.7866zm13.603 14.5047h-4.6764c-2.4677 0-4.8832-1.6754-6.4615-4.4815l-1.577-2.8035-2.6663-4.618c-.567-.982-.2295-2.2422.7529-2.8092.98-.566 2.237-.2305 2.8059.7473l1.9824 3.0618v-11.034c0-1.1339.9227-2.0564 2.0567-2.0564.6304 0 1.1961.2856 1.5738.7343l.0001-2.2012c0-1.1339.922-2.0564 2.0565-2.0564 1.134 0 2.056.9226 2.056 2.0565l.0001 1.4891c.3777-.4486.9428-.7341 1.5738-.7341 1.134 0 2.0566.9226 2.0566 2.0565l.0001 1.1664c.3777-.4488.9427-.7343 1.5738-.7343 1.1339-.0001 2.0566.9225 2.0566 2.0565l.0001 14.9964c0 2.8473-2.3169 5.1638-5.1642 5.1638z"/><path id="_276461424" d="m20.9526 20.3497c-.1332 0-.2414-.1079-.2414-.2413l.0001-6.6141c0-.1332.108-.2412.2413-.2412s.2414.1081.2414.2414v6.6138c0 .1334-.1081.2415-.2414.2414z"/><path id="_276460800" d="m24.5825 20.3497c-.1332 0-.2414-.1079-.2414-.2413v-7.3243c0-.1332.1081-.2412.2414-.2412.1333-.0001.2413.108.2413.2413l.0001 7.3241c0 .1334-.1082.2415-.2414.2414z"/><path id="_276461112" d="m28.213 20.3497c-.1333 0-.2414-.1079-.2414-.2413v-4.8372c0-.1334.1081-.2413.2414-.2413.1333-.0001.2413.108.2413.2413l.0001 4.8371c0 .1334-.1082.2415-.2414.2414z"/></g></g></svg>
       <p className="items-section-svg">доход/в тап</p>
          <p className="items-section-two-svg">1</p>
       </div>
          </div>
      <div className="Cards">
      <h2 className='hero-title'>Покупай улучшение прокачивайся зарабатывай </h2>
      <BusterCard name={'Бесплатные ежеденвные усилители'} level={0} profit={0} price={0} title={'Полный запас энерегии'} onprogress={55} image={'energy'} />
      </div>
    </div>
    </section>
    </div>
  );
}