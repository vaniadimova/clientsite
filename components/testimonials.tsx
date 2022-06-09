import React from 'react'
import Carousel from './carousel'
import CarouselItem from './carousel-item'
import Review from './review'

const Testimonials: React.FC = () => {
  return (
   <Carousel className='py-10 text-white bg-black lg:py-20'>
       <CarouselItem index={1}>
          <Review by='John Doe'>
                ONE ipsum dolor sit amet, consectetur adipiscing elit, sed 
                do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
           </Review>
       </CarouselItem>
       
       <CarouselItem index={2}>
          <Review by='John Doe'>
                Two ipsum dolor sit amet, consectetur adipiscing elit, sed 
                do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
           </Review>
       </CarouselItem>
       <CarouselItem index={3}>
          <Review by='John Doe'>
                Three ipsum dolor sit amet, consectetur adipiscing elit, sed 
                do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
           </Review>
       </CarouselItem>
       <CarouselItem index={4}>
          <Review by='John Doe'>
                FOUR ipsum dolor sit amet, consectetur adipiscing elit, sed 
                do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
           </Review>
       </CarouselItem>
   </Carousel>
  )
}

export default Testimonials