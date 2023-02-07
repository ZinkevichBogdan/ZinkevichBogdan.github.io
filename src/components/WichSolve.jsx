import React from 'react'
import comand from '../assets/img/photo/Photo-Comand.png'
import graph1 from '../assets/img/elemsOfDesign/Graph-violet.svg'
import graph2 from '../assets/img/elemsOfDesign/Graph-green.svg'
import graph3 from '../assets/img/elemsOfDesign/Graph-orange.svg'
import percent from '../assets/img/elemsOfDesign/Circle-per.svg'
import cases from '../assets/img/elemsOfDesign/CaseImprove.svg'
import n1 from '../assets/img/service/1.svg'
import n2 from '../assets/img/service/2.svg'
import n3 from '../assets/img/service/3.svg'
import n4 from '../assets/img/service/4.svg'
import n5 from '../assets/img/service/5.svg'
import n6 from '../assets/img/service/6.svg'
import n7 from '../assets/img/service/7.svg'

const WichSolve = () => {
   return (
      <section className='wich-solve'>
         <div className='conteiner'>
            <div className="wich-solve-block ">
               <div className="solve-text">
                  <h2>Which global problem do we solve</h2>
                  <p>We specialize in helping firms that are struggling to get users to engage with their data content and/or to execute on their data strategy.  We do this by strengthening analytical teams through coaching, training and consultation.</p>
               </div>
               <div className="solve-img-block">
                  <div className='solve-img'>
                     <img src={comand} alt="" />
                  </div>
                  <div className="solve-graph-block">
                     <div className="graph">
                        <span>Instagram</span>
                        <span>Facebook</span>
                        <span>Twitter</span>
                     </div>
                     <div className="graph">
                        <span>862</span>
                        <span>753</span>
                        <span>553</span>
                     </div>
                     <div className="graph">
                        <img src={graph1} alt="" />
                        <img src={graph2} alt="" />
                        <img src={graph3} alt="" />
                     </div>
                  </div>
                  <div className="solve-percent">
                     <div className="percent-img">
                        <img src={percent} alt="" />
                     </div>
                     <div className="percent-text">
                        <p className='percnet-title'>Organic Search Traffic</p>

                        <div className='percent-num'>
                           <p className='n'>45% </p>
                           <p className='green'>25%</p>
                        </div >

                     </div>
                  </div>
               </div>
            </div>


            <div className='solutions'>
               <div className='solutions-text'>
                  <h2>Our solutions</h2>
               </div >
               <div className="img-solutions">
                  <img src={cases} alt="" />
               </div>
            </div >

            <div className="by-service">
               <div className="by-service-title gradient-2">
                  by Service
               </div>

               <div className="be-service-row">
                  <div className="list">
                     <img src={n1} alt="" />
                     <div className='list-txt-1'>
                        <p>Enterprise Tableau and Data Strategy Consulting</p>
                     </div>
                  </div>
                  <div className="list">

                     <img src={n2} alt="" />
                     <div className='list-txt-2'>
                        <p>Expert Data Visualization Coaching and Humanized Data Foundation</p>
                     </div>
                  </div>
                  <div className="list">
                     <img src={n3} alt="" />
                     <div className='list-txt-3'>
                        <p>Custom Data Engineering Services</p>
                     </div>
                  </div>
               </div>
            </div>
            <div className="by-training">
               <div className="by-service-title gradient-2">
                  by Training
               </div>
               <div className='by-training-row'>
                  <div className="list">
                     <img src={n4} alt="" />
                     <div className='training-txt-1'> <p>Tableau Mastery Program </p>
                     </div >
                  </div>
                  <div className="list">

                     <img src={n5} alt="" />
                     <div className='training-txt-2' >   <p>viii.	Private Classroom Training and Tutoring</p></div >
                  </div>
               </div >
            </div>
            <div className="by-training">
               <div className="by-service-title gradient-2">
                  by Product
               </div>
               <div className='by-training-row'>
                  <div className="list">
                     <img src={n6} alt="" />
                     <div className='training-txt-1'> <p>Kleer Digital </p>
                     </div >
                  </div>
                  <div className="list">

                     <img src={n7} alt="" />
                     <div className='training-txt-2' >   <p>Surgilytix</p></div >
                  </div>
               </div >
            </div>
         </div>

      </section>
   )
}

export default WichSolve
