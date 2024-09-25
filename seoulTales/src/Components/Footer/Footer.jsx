import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h4>SeoulTales</h4>
          <p>Enjoy your favorite Korean dramas and TV shows.</p>
          <p>&copy; 2024 SeoulTales. All rights reserved.</p>
        </div>
        <div className="footer-right">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
            <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
