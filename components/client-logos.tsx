import React from 'react'
import Image from 'next/image'
import SliderContainer from './slider'
import {SliderItem} from './slider'

const ClientLogos: React.FC = () => (
  <>
    <SliderContainer className='' contentWidth={1290} initialOffsetX={0}>
      <SliderItem width={350}>
        <Image 
        src='/assets/trustedby/slider1.jpeg' 
        width={350} 
        height={250}
         alt="product" 
         objectFit='contain'
         />
         </SliderItem>
          <SliderItem width={350}>
        <Image 
        src='/assets/trustedby/slider2.jpeg' 
        width={350} 
        height={250}
         alt="product" 
         objectFit='contain'
         />
          </SliderItem>
          <SliderItem width={350}>
        <Image 
        src='/assets/trustedby/slider3.jpeg' 
        width={350} 
        height={250}
         alt="product" 
         objectFit='contain'
         />
          </SliderItem>
          <SliderItem width={350}>
        <Image 
        src='/assets/trustedby/slider5.jpeg' 
        width={350} 
        height={250}
         alt="product" 
         objectFit='contain'
         />
          </SliderItem>
          <SliderItem width={350}>
        <Image 
        src='/assets/trustedby/slider1.jpeg' 
        width={350} 
        height={250}
         alt="product" 
         objectFit='contain'
         />
          </SliderItem>
          <SliderItem width={350}>
        <Image 
        src='/assets/trustedby/slider7.jpeg' 
        width={350} 
        height={250}
         alt="product" 
         objectFit='contain'
         />
          </SliderItem>
          <SliderItem width={350}>
        <Image 
        src='/assets/trustedby/slider8.jpeg' 
        width={350} 
        height={250}
         alt="product" 
         objectFit='contain'
         />
          </SliderItem>
          <SliderItem width={350}>
        <Image 
        src='/assets/trustedby/slider9.jpeg' 
        width={350} 
        height={250}
         alt="product" 
         objectFit='contain'
         />
          </SliderItem>
          <SliderItem width={350}>
        <Image 
        src='/assets/trustedby/slider10.jpeg' 
        width={350} 
        height={250}
         alt="product" 
         objectFit='contain'
         />
          </SliderItem>
          <SliderItem width={350}>
        <Image 
        src='/assets/trustedby/slider12.jpeg' 
        width={350} 
        height={250}
         alt="product" 
         objectFit='contain'
         />
          </SliderItem>
    </SliderContainer>
  </>
)

export default ClientLogos