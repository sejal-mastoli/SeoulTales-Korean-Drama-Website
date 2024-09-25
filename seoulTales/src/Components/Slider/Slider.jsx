import React from 'react';
import './Slider.css';

// Importing images
import drama1 from '../../assets/image/drama1.jpg';
import drama2 from '../../assets/image/drama2.jpg';
import drama3 from '../../assets/image/drama3.jpg';
import drama4 from '../../assets/image/drama4.jpg';
import drama5 from '../../assets/image/drama5.jpg';
import drama6 from '../../assets/image/drama6.jpg';
import drama7 from '../../assets/image/drama7.jpg';
import drama8 from '../../assets/image/drama8.jpg';


const Slider = () => {
  return (
    <div className="slider-section" id='trending'>
      <h2 className="slider-heading">Must-Watch K-Dramas</h2>
    <div className="slider">
      <div className="slider-item">
        <img src={drama1} alt="Drama 1" />
        <div className="content">
        <h3>Business Proposal</h3>
            <p>2022 | Romance
            In disguise as her friend, Ha-ri shows up to a blind date to scare him away. But plans go awry when he turns out to be her CEO and makes a proposal.
            </p>
        </div>
      </div>
      <div className="slider-item">
        <img src={drama2} alt="Drama 2" />
        <div className="content">
            <h3>Destined with You</h3>
            <p>2023 | Romance
            A lawyer bound by a centuries-old curse becomes entangled with a civil servant who holds the key to his freedom — igniting an unexpected romance.</p>
        </div>
      </div>
      <div className="slider-item">
        <img src={drama3} alt="Drama 3" />
        <div className="content">
            <h3>King the Land</h3>
            <p>2023 | Romance
            Amid a tense inheritance fight, a charming heir clashes with his hardworking employee who's known for her irresistible smile — which he cannot stand.</p>
        </div>
      </div>
      <div className="slider-item">
        <img src={drama4} alt="Drama 4" />
        <div className="content">
            <h3>My Demon</h3>
            <p>2023 | Romance
            A pitiless demon becomes powerless after getting entangled with an icy heiress, who may hold the key to his lost abilities — and his heart.</p>
        </div>
      </div>
      <div className="slider-item">
        <img src={drama5} alt="Drama 5" />
        <div className="content">
            <h3>Queen of Tears</h3>
            <p>2024 | Romance
            The queen of department stores and her small-town husband weather a marital crisis until love miraculously begins to bloom again.</p>
        </div>
      </div>
      <div className="slider-item">
        <img src={drama6} alt="Drama 6" />
        <div className="content">
            <h3>Vincenzo</h3>
            <p>2021 | Drama
            During a visit to his motherland, a Korean-Italian mafia lawyer gives an unrivaled conglomerate a taste of its own medicine with a side of justice.</p>
        </div>
      </div>
      <div className="slider-item">
        <img src={drama7} alt="Drama 7" />
        <div className="content">
            <h3>Welcome to Samdal-ri</h3>
            <p>2023 | Romance
            After suffering a fall from grace, a photographer returns to her hometown and bumps into her childhood friend — rekindling an unfinished romance.</p>
        </div>
      </div>
      <div className="slider-item">
        <img src={drama8} alt="Drama 8" />
        <div className="content">
            <h3>Hometown Cha-Cha-Cha</h3>
            <p>2021 | Romance
            A big-city dentist opens up a practice in a close-knit seaside village, home to a charming jack-of-all-trades who is her polar opposite in every way.</p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Slider;

