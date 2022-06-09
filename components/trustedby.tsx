import React from 'react'
import ClientLogos from './client-logos'
import Testimonials from './testimonials'
import s from  '../styles/trustedby.module.css'

const TrustedBy: React.FC = () => {
  return (
    <section className={`flex flex-col justify-center min-h-screen gap-16 bg-white md:gap-32 ${s.bg}`}>
     <div className='flex-1 bg-black'></div>
        <div className='flex flex-col items-center justify-center'>
            <h3 className='mb-10 text-2xl font-bold text-center'>
                <span className='whitespace-nowrap'>Order Online</span>{' . '}
                <span className='whitespace-nowrap'> Track Your Order </span>
            </h3>
            <ClientLogos />
        </div>
        <div className='flex flex-col items-center justify-center'>
        <div className='container mx-auto lg:max-w-[70%] lg:px-10'>
            <h3 className='px-10 text-3xl tracking-tight text-center lg:text-4xl !leading-[3.5rem]'>
                We Believe in communication more  text is supposed to eneter here probably a good idea about information on delivery
             </h3>
         </div>
        </div>
     <Testimonials />    
<div className='flex-1 bg-black'></div>
     </section>
  )
}

export default TrustedBy