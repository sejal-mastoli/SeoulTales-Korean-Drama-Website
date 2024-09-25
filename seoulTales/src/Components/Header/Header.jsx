import React from 'react';
import './Header.css';


const Header = () => {
  return (
    <div className='header' id='home'>
      <div className="header-text">
         <h1>Lovely Runner</h1>
         <h3>2024 | U/A 16+ | 1 Season | Romance</h3>
         <p>Years after a K-pop star saves her life, a fan learns of his death — 
            but when she's suddenly transported to the past, she sets out to change their fate.</p>
         <h3>Starring:Byeon Woo-seok, Kim Hye-yoon, Song Geon-hee</h3>
         <button className='btn'> ▶ Watch Now</button>
      </div>
    </div>
  )
}

export default Header
