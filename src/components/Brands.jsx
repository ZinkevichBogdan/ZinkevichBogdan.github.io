import React from 'react'
import n1 from '../assets/img/brands/1.svg'
import n2 from '../assets/img/brands/2.svg'
import n3 from '../assets/img/brands/3.svg'
import n4 from '../assets/img/brands/4.svg'
import n5 from '../assets/img/brands/5.svg'
import n6 from '../assets/img/brands/6.svg'
import n7 from '../assets/img/brands/7.svg'
import n8 from '../assets/img/brands/8.svg'
import n9 from '../assets/img/brands/9.svg'
import n10 from '../assets/img/brands/10.svg'

const Brands = () => {
   return (
      <section className='brands'>
         <div className="conteiner">
            <div className='brands-conteiner'>
               <h2 className="brands-title">
                  Brands who work with us
               </h2>

               <div className='brands-wrapper'>
                  <div className="brands-block">
                     <h4>Financial Services</h4>
                     <div className="brand-wrapper">
                        <div className="brand-block">
                           <div className='brand-img'><img  src={n1} alt="" /></div>
                           <p>The Palisades Group</p>
                        </div>

                        <div className="brand-block">
                           <div className='brand-img'>
                              <img src={n2} alt="" />
                           </div>
                           <p>Sabal Financial</p>
                        </div>
                     </div>

                  </div>
                  <div className="brands-block">
                     <h4>Mobile Communications and Media</h4>
                     <div className="brand-wrapper">
                        <div className="brand-block">
                           <div className='brand-img'><img   src={n3} alt="" /></div>
                           <p>Mobilitie </p>
                        </div>

                        <div className="brand-block">
                           <div className='brand-img'>
                              <img src={n4}   alt="" />
                           </div>
                           <p>Sabal Financial</p>
                        </div>
                     </div>

                  </div>
                  <div className="brands-block z-index">
                     <h4>Financial Services</h4>
                     <div className="brand-wrapper">
                        <div className="brand-block">
                           <div className='brand-img'><img src={n5} alt="" /></div>
                           <p>Healthshare Oregon</p>
                        </div>

                        <div className="brand-block">
                           <div className='brand-img'>
                              <img src={n6} alt="" />
                           </div>
                           <p>Myriad</p>
                        </div>
                     </div>

                  </div>
                  <div className="brands-block">
                     <h4>Mobile Communications and Media</h4>
                     <div className="brand-wrapper">
                        <div className="brand-block">
                           <div className='brand-img'><img src={n7} alt="" /></div>
                           <p>Kaleida Health</p>
                        </div>

                        <div className="brand-block">
                           <div className='brand-img'>
                              <img src={n8} alt="" />
                           </div>
                           <p>Cosmeticare</p>
                        </div>
                     </div>

                  </div>
                  <div className="brands-block">
                     <h4>Financial Services</h4>
                     <div className="brand-wrapper">
                        <div className="brand-block ">
                           <div className='brand-img-big '><img src={n9} alt="" /></div>
                           <p>Department of Defense Naval Surface Warfare Center</p>
                        </div>

                        <div className="brand-block ">
                           <div className='brand-img-big '>
                              <img src={n10} alt="" />
                           </div>
                           <p>Lockheed Martin</p>
                        </div>
                     </div>

                  </div>
               </div>


            </div>
         </div>
      </section>
   )
}

export default Brands
