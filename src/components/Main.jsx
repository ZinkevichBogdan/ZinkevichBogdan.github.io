import React from 'react'
import '../scss/App.scss'
import Blog from './Blog'
import Brands from './Brands'
import ContactUs from './ContactUs'
import Data from './Data'
import ForHumans from './ForHumans'
import Teams from './Teams'
import WichSolve from './WichSolve'
const Main = () => {
  return (
    <main className='main'>
      <ForHumans />
      <Brands />
      <WichSolve />
      <Teams />
      <Blog />
      <Data />
      <ContactUs />
    </main>
  )
}

export default Main
