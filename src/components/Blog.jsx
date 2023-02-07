import React from 'react'
import next from '../assets/img/elemsOfDesign/next.svg'
import card1 from '../assets/img/blog/photo-1.png'
import card2 from '../assets/img/blog/photo-2.png'
import card3 from '../assets/img/blog/photo-3.png'

const Blog = () => {
   const blogCards = [
      {
         id: 1,
         title: 'Data management',
         txt: ' Data visualization formarketers: 6 steps to present data visually',
         data: ' с 3 марта 2020 года по 31 марта 2020',
         img: card1,
      },
      {
         id: 2,
         title: 'Data visualization',
         txt: 'Automated marketing mix modeling: a better way to grow your business with data',
         data: 'с 3 марта 2020 года по 31 марта 2020',
         img: card2,
      },
      {
         id: 3,
         title: 'Marketing analytics',
         txt: 'Influencer affiliate marketing: how influencers can grow your affiliate program',
         data: 'с 3 марта 2020 года по 31 марта 2020',
         img: card3,
      }
   ]

   return (
      <section className='blog'>
         <div className='conteiner'>
            <div className="blog-header">
               <h2>Blog</h2>
               <p><a href="#">See all articels</a></p>
            </div>
            <div className="blog-slider-conteiner">
               <div className="slider-cards-conteiner">
                  {blogCards.map(card =>

                     <div key={card.id} className="slider-block">
                        <div className="slider-img">
                           <img src={card.img} alt="" />
                        </div>
                        <div className="slider-title">
                           <p>{card.title}</p>
                        </div>
                        <div className='slider-txt'>
                           <p >
                              {card.txt}</p>
                        </div >
                        <span className="slider-data">
                           {card.data}
                        </span>


                     </div>)}
               </div>
               <div className="navigations">
                  <div className="num-pages">
                     <p>3 of 12</p>
                  </div>
                  <div className="arrows">
                     <div className="arrow next">
                        <img src={next} alt="" />
                     </div>
                     <div className="arrow prev">
                        <img src={next} alt="" />
                     </div>
                  </div>
               </div>
            </div>


         </div>
      </section>
   )
}

export default Blog
