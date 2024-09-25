import React from 'react'
import './dramalist1.css';


//import dramalist1 images
import dramalist1 from '../../assets/dramalist/dramalist1.jpg';
import dramalist2 from '../../assets/dramalist/dramalist2.jpg';
import dramalist3 from '../../assets/dramalist/dramalist3.jpg';
import dramalist4 from '../../assets/dramalist/dramalist4.jpg';
import dramalist5 from '../../assets/dramalist/dramalist5.jpg';
import dramalist6 from '../../assets/dramalist/dramalist6.jpg';
import dramalist7 from '../../assets/dramalist/dramalist7.jpg';
import dramalist8 from '../../assets/dramalist/dramalist8.jpg';

const Dramalist = () => {
  return (
    
    <div className="dramalist1-section">
      <h2 className="dramalist1-heading">Award-Winning Dramas</h2>
    <div className="dramalist1">
      <div className="dramalist1-item">
        <img src={dramalist1} alt="Drama 1" />
        <div className="content">
        <h3>It's okay to not to be okay</h3>
            <p>2020 | Romance</p>
        </div>
      </div>
      <div className="dramalist1-item">
        <img src={dramalist2} alt="Drama 2" />
        <div className="content">
            <h3>The King's Affection</h3>
            <p>2021 | Romance</p>
        </div>
      </div>
      <div className="dramalist1-item">
        <img src={dramalist3} alt="Drama 3" />
        <div className="content">
            <h3>Reply 1988</h3>
            <p>2015 | Drama</p>
        </div>
      </div>
      <div className="dramalist1-item">
        <img src={dramalist4} alt="Drama 4" />
        <div className="content">
            <h3>I Can Hear Your Voice</h3>
            <p>2013 | Drama</p>
        </div>
      </div>
      <div className="dramalist1-item">
        <img src={dramalist5} alt="Drama 5" />
        <div className="content">
            <h3>Twenty Five Twenty One</h3>
            <p>2022 | Drama</p>
        </div>
      </div>
      <div className="dramalist1-item">
        <img src={dramalist6} alt="Drama 6" />
        <div className="content">
            <h3>Sweet Home</h3>
            <p>2020 | Drama</p>
        </div>
      </div>
      <div className="dramalist1-item">
        <img src={dramalist7} alt="Drama 7" />
        <div className="content">
            <h3>Little Women</h3>
            <p>2022 | Drama</p>
        </div>
      </div>
      <div className="dramalist1-item">
        <img src={dramalist8} alt="Drama 8" />
        <div className="content">
            <h3>The Uncanny Counter</h3>
            <p>2021 | Drama</p>
        </div>
      </div>
    </div>
    </div>
     )
}

export default Dramalist

