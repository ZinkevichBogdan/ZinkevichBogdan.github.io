import React from 'react'
import ava1 from '../assets/img/users/Avatar-1.png'
import ava2 from '../assets/img/users/Avatar-2.png'
import ava3 from '../assets/img/users/Avatar-3.png'
import prev from '../assets/img/elemsOfDesign/prev.svg'
import photoCard1 from '../assets/img/cards-teams/Photo-1.png'
import photoCard2 from '../assets/img/cards-teams/Photo-2.png'
import photoCard3 from '../assets/img/cards-teams/Photo-3.png'
import Lin from '../assets/img/icons/in.svg'
import facebook from '../assets/img/icons/face.svg'

let workers = [
   {
      id: 1,
      fullName: 'Yehor Haiduk',
      place: 'Senior Director',
      img: ava2
   },
   {
      id: 2,
      fullName: 'Michail Hrischuk',
      place: 'Business System Analyst ',
      img: ava1
   },
   {
      id: 3,
      fullName: 'Anna Haiduk',
      place: 'CEO ',
      img: ava3
   },


]

let workersCards = [
   {
      id: 1,
      fullName: 'Thomas Williams',
      place: 'CEO',
      img: photoCard1,
 
   },
   {
      id: 2,
      fullName: 'Jack Harrington',
      place: 'Associate Data Scientist',
      img: photoCard2
   },
   {
      id: 3,
      fullName: 'Gary Fowler',
      place: 'WS Serverless Architect ',
      img: photoCard3
   },
   {
      id: 4,
      fullName: 'Jack Harrington',
      place: 'Associate Data Scientist',
      img: photoCard2
   },
   {
      id: 5,
      fullName: 'Gary Fowler',
      place: 'WS Serverless Architect ',
      img: photoCard3
   },
   {
      id: 6,
      fullName: 'Thomas Williams',
      place: 'CEO',
      img: photoCard1
   },


]



const Teams = () => {
   return (
      <section className='teams'>
         <div className="conteiner">
            <div className='teams-block-text'>
               <div className="team-title">
                  <h2>Winning Teams choose Kleer</h2>
               </div>

               <div className='sub-title'>
                  <h5>Kaleida Health</h5>
               </div >
               <div className="team-txt">
                  <p>
                     Implemented a really elegant message queue-based design for handling rapid API calls in fault-tolerant way.

                  </p>
               </div>
            </div >
            <div className='slider-conteiner'>
               <div className="slider-team">
                  {workers.map((worker) =>
                     <div key={worker.id} className='worker-block'>
                        <div className='worker-conteiner'>
                           <div className='worker-img'>
                              <img src={worker.img} alt="" />
                           </div>
                           <div className="worker-info">
                              <p className='worker-name'>{worker.fullName}</p>
                              <p className='worker-place'>{worker.place}</p>
                           </div>
                        </div >
                     </div>)}
               </div>
               <div className="navigations">
                  <div className="num-pages">
                     <p>3 of 12</p>
                  </div>
                  <div className="arrows">
                     <div className="arrow prev">
                        <img src={prev} alt="" />
                     </div>
                     <div className="arrow next">
                        <img src={prev} alt="" />
                     </div>
                  </div>
               </div>
            </div >

            <div className="team-cards-conteiner">
               <h2>Our Team</h2>
               <div className='worker-cards-conteiner'>
                  {workersCards.map(card =>
                     <div key={card.id} className="worker-card-block">
                     <div className='card-img'>
                        <img src={card.img} alt="" />
                     </div>
                     <p className='card-name'>{card.fullName}</p>
                     <p className='card-place'>{card.place}</p>
                     <div className="card-social-icons">
                        <div className="icon">
                           <img src={Lin} alt="" />
                        </div>
                        <div className="icon">
                           <img src={facebook} alt="" />
                        </div>
                     </div>
                  </div>)}

               </div >
            </div>

         </div>

      </section>
   )
}

export default Teams
