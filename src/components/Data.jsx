import React from 'react'
import graph from '../assets/img/photo/Graph.png'

const Data = () => {
   return (
      <section className='data'>
         <div className="conteiner">
            <div className="data-conteiner">
               <div className="data-info">
                  <div className='data-title'>
                     <h2>We Make Data
                        Ready for Humans</h2>
                  </div >
                  <div className='data-txt'>
                     <p>
                        Click here to watch a case study overview showing how we were able to improve user engagement by 400%.
                     </p>
                  </div >
                  <div className="data-btn">
                     <a href="">
                        Get in touch
                     </a>
                  </div>
               </div>
               <div className="data-dashbord">
                  <img src={graph} alt="" />
               </div>
            </div>
         </div>
         

      </section>
   )
}

export default Data
