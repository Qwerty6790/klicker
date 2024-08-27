
import React from 'react';
import './buster-card.css';

interface MiningCardI {
  name: string;
  level: number;
  profit: number;
  price: number;
  title: string;
  image: string;
  onprogress: number;
}

const BusterCard= ({ image, onprogress, name, level, profit, price, title }: MiningCardI) => {
  return (
      
   
    <><div className='buster-card'><h3 className='hero-main-title'>{name}</h3><div className='boxing'>
      <img className='img-6'
        src={`./images/${image}.png`} alt={image}
        height={95}
        width={100} />
      <p className='boxing-one'>{title}</p>
      <div className='boxing-span'>
        <p className='boxing-two'>{onprogress}из{onprogress}</p>
        <p className='boxing-three'>Доступно</p>
        <button className='buttons'>
          <p className='title-buttons'>Применить</p>
        </button>
      </div>
    </div></div></>
  
  );
};

export default BusterCard;