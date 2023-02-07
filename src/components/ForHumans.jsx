import React from 'react'
import bell from '../assets/img/icons/bell.svg'

const ForHumans = () => {
   return (
      <section className='for-humans'>
         <div className="conteiner">
            <div className='for-humans-block'>
               <div className="humans-title gradient">
                  We Make Data Ready for Humans
               </div>
               <div className="humans-text">
                  We help organizations succeed in becoming data-driven competitors by focusing on human information needs.  We offer a variety of products and service that enable a natural and satisfying connection between your users and your data.
               </div>
               <div className="humans-btn-block">
                  <a className="humans-btn">Show case</a>
                  <a className="humans-btn">Read more</a>
               </div>
               <div className='bell-conteiner'>
                  <div className="bell-block">
                     <div className="bell-icon">
                        <img src={bell} alt="" />
                     </div>
                     <div className="bell-text">
                        New User Sessions were up <span>14%</span> from last month, mostly from Social Media sites.
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="sub-humans">
            <div className="sub-humans-text">
               Click here to watch a case study overview showing how we were able to improve user engagement  by 400%.
            </div>
         </div>
      </section>
   )
}

export default ForHumans
