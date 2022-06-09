import React, { useState, useRef, useContext, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ScrollContext } from '../utils/scroll-observer'


const Masthead: React.FC = () => {
  const [ imageLoaded, setImageLoaded ] = useState(false)
  const refContainer = useRef<HTMLDivElement>(null)
  const { scrollY } = useContext(ScrollContext)

  let progress = 0

const { current: elContaier } = refContainer
if (elContaier) {
  progress = Math.min(1, scrollY / elContaier.clientHeight)
}

  const handleImageLoaded = useCallback(() => {
    setImageLoaded(true)
  }, [])

return (
<div
ref={refContainer}
className='sticky top-0 flex flex-col items-center justify-center min-h-screen -z-10' 
style={{
  transform: `translateY(-${progress * 20}vh)`
}}
> 
<video autoPlay loop muted playsInline 
  className='absolute object-cover w-full h-full ' >
    <source src="/assets/masthead-bg.m4v" type='video/mp4; codecs=hvc1' />
    <source src="/assets/masthead-bg.webm" type='video/webm; codecs=vp9' />
     </video>  
     <div className={`flex-grow-0 pt-10 transition-opacity duration-1000
      ${ imageLoaded ? 'opacity-100' : 'opacity-0'}`}
      >
      <Image 
      src="/assets/logo3.png"   
      width={228 / 3}  
      height={214 / 3} 
      alt='logo' />
      </div>
  <div className='p-12 font-bold z-10 drop-shadow-[0_3px_5px_white] text-white text-center flex-1 flex items-center justify-center flex-col'>
      <h1 className='mb-6 text-6xl xl:text-5xl' >Karlovo Inc </h1>     
      <h2 className='mb-6 text-8xl xl:text-3xl traking-tight'>
    <span className='mb-6 text-6xl text-green-600'>Shop OnLine </span> {' '}
    </h2>
     <h2 className='mt-6 text-5xl xl:text-3xl traking-tight' >     
     <span className='text-6xl text-red-600 '>You Ask - We Deliver</span>
      </h2>
    </div> 
    <div className={`flex-grow-0 pb-20 md:pb-10 transition-all duration-all duration-1000 
    ${imageLoaded ? 'opacity-100' : 'opacity-0 -tranlate-y-10'}`}>
      <Image 
      src="/assets/red-arrow.png" 
      width={188/ 3} 
      height={105 / 3} 
      alt='scroll down' 
     onLoad={handleImageLoaded} 
      />
    </div>
</div>
  )
}

export default Masthead