import React from 'react';
import logo from '../assets/img/logo/logo_header.svg';
import icons1 from '../assets/img/icons/Footer/Forma_1.svg'
import icons2 from '../assets/img/icons/Footer/Icon color.svg'
import icons3 from '../assets/img/icons/Footer/Icon color-1.svg'
import icons4 from '../assets/img/icons/Footer/Youtube.svg'



const Footer = () => {
  return (
    <footer className='footer'>
      <div className="conteiner">
        <div className='footer-block'>
          <div className="footer-top">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <div className="footer-btn">

              <div className='btn'><img src={icons1} alt="" /></div>
              <div className='btn'><img src={icons2} alt="" /></div>
              <div className='btn'><img src={icons3} alt="" /></div>
              <div className='btn'><img src={icons4} alt="" /></div>

            </div>
          </div>
          <div className="footer-main">
            <div className="site-map">
              <h5>Site map</h5>
              <nav>
                <ul className='map-list'>
                  <li><a>Home page</a></li>
                  <li><a>Blog</a></li>
                  <li><a>E-library</a></li>
                  <li><a>Company</a></li>
                  <li><a>Contacts</a></li>
                </ul>
              </nav>
            </div>
            <div className="solutions-map">
              <h4>Our Solutions:</h4>
              <div className='items-wrapper'>
                <div className="solutions-items">
                  <h5>by Service</h5>
                  <p>Enterprise Consulting</p>
                  <p>Expert Data Visualization
                    Coaching </p>
                  <p>Custom Data Engineering
                    Services</p>
                </div>
                <div className="solutions-items">
                  <h5>by Training</h5>
                  <p>Tableau Mastery Program </p>
                  <p>Private Classroom Training </p>
                  <p>Tableau Tutor</p>
                </div>
                <div className="solutions-items">
                  <h5>by Product</h5>
                  <p>Kleer Digital</p>
                  <p>Surgilytix </p>
                </div>
              </div >


            </div>
          </div>
          <div className="footer-bottom">
            <div className="privacy-conteiner">
              <div className="text-logo">
                <p>kleer@ 2020. All rights reserved </p>
              </div>
              <div className="privacy-list">
                <p>Privacy Policy </p>
                <p>Terms of Use</p>
              </div>
            </div>
          </div>
        </div >
      </div>
    </footer>
  )
}

export default Footer
