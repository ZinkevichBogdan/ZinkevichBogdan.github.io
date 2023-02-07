import React from 'react'
import logo from  '../assets/img/logo/logo_header.svg'

const Header = () => {
   return (
      <header className='header'>
         <div className='conteiner'>
            <div className="header-block">
               <div className="header-logo">
                  <img src={logo} alt="" />
               </div>
               <nav className="header-menu">
                  <ul className="menu-list">
                     <li className="list-item"><a href=''>Our Solutions</a></li>
                     <li className="list-item"><a href=''>Resources</a></li>
                     <li className="list-item"><a href=''>Company</a></li>
                     <li className="list-item"><a href=''>Contacts</a></li>
                  </ul>
               </nav>
               <div className="header-btn">
                  <a href="#" className='header-link'>
                  Get Started
                  </a>
               </div>
            </div>
         </div>
      </header>
   )
}

export default Header
