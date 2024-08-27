'use client';
import "./friends_page_style.css";
import Friend from '@/components/friend/friend';
import BackBtn from '@/components/back-btn/back-btn';
import { IFriendData } from "@/types/items.interface";
import React, { useState, useEffect } from 'react';
import { Toaster, toast } from "sonner";

export default function FriendsPage() {
  const [friends, setFriends] = useState<IFriendData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [linkToCopy, setLinkToCopy] = useState<string>(`https://t.me/bot_name?start=1111111111`);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(linkToCopy);
    toast.success("Link copied to clipboard!");
  };

  return (
    <div  >
      <Toaster position="top-center" richColors />
      <div className="gradient">

        </div>
      <div>
        
      
          </div>
      <img className='img-two-two-two' 
          src='./images/жетон прозрачный.png' 
          alt='Монета' 
          height={95}
          width={100}
          />
      <div className='main-message'>
        <h1>Плучай 20% </h1>
      </div>
      <p className="list-message">от дохода друзей</p>
   <div className="main">
   <p className="main-p">Пригласить друга</p>
          <div className="box">
          <p className="box-items">+50 000</p>
          <p className="box-item">для тебя и твоего друга</p>
          <img className='img-two-img' 
          src='./images/жетон.png' 
          alt='Монета' 
          height={48}
          width={48}
          />
          </div>
          <img className='img-theree-three' 
          src='./images/подарок.png' 
          alt='Монета' 
          height={186}
          width={196}
          />
          <div className='box-2'>
           <p className="main-p-p">Пригласить друга</p>
           <svg className="svg-box" xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 24 24" style={{ fill: 'rgba(225, 225, 225, 1)' }}>
  <path d="M4.5 8.552c0 1.995 1.505 3.5 3.5 3.5s3.5-1.505 3.5-3.5-1.505-3.5-3.5-3.5-3.5 1.505-3.5 3.5zM19 8h-2v3h-3v2h3v3h2v-3h3v-2h-3zM4 19h10v-1c0-2.757-2.243-5-5-5H7c-2.757 0-5 2.243-5 5v1h2z"></path>
</svg>
          </div>
          <div className="box-3">
          <svg className="svg-box-2" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" style={{ fill: 'rgba(225, 225, 225, 1)' }}>
  <path d="M14 3H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"></path>
  <path d="M21 19v-9a2 2 0 0 0-2-2h-1v8a2 2 0 0 1-2 2H8v1a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2z"></path>
</svg>
          </div>
   </div>
     
     
    </div>
  );
}
