import React, { useContext, useRef } from 'react'
import s from '../styles/madeof.module.css'
import { ScrollContext } from '../utils/scroll-observer'

const opacityForBlock = (sectionProgress: number, blockNo: number) => {
    const progress = sectionProgress - blockNo
    if (progress >= 0 && progress < 1) return 1
    return 0.2
}

const Madeof: React.FC  = () => {
    const { scrollY} = useContext(ScrollContext)
    const refContainer = useRef<HTMLDivElement>(null)

    const numOfPages = 3
    let progress = 0
    
    const  { current: elContainer } = refContainer
    if (elContainer) {
        const { clientHeight, offsetTop } = elContainer
        const screenH = window.innerHeight
        const halfH = screenH / 2
        const percentY = Math.min(clientHeight + halfH, Math.max(-screenH, scrollY - offsetTop) + halfH) / clientHeight
        progress = Math.min(numOfPages - 0.5, Math.max(0.5, percentY * numOfPages))
    }
    
  return (
<div ref={refContainer} className='text-white bg-black'>
        <div className='flex flex-col items-center justify-center max-w-5xl min-h-screen px-10 py-24 mx-auto text-4xl font-semibold tracking-tight lg:px-20 md:py-28 lg:py-36 md:text-6xl lg:text-7xl'>
         <div className='leading-[1.5]'>
        <div className={s.madeOf}   style={{ opacity: opacityForBlock(progress, 0) }}> INGREDIENTS   IN OUR MEAT PRODUCTS</div>
          <span className={`${s.madeOf} text-green-600 inline-block after:content-['_]`} style={{ opacity: opacityForBlock(progress, 1) }}>Our Meat Products Are Made Of:Lactose Free Gluten 
          Free Binder Free Dairy Free Beer Free</span>
          <span className={`${s.madeOf} text-red-600 inline-block`} style={{opacity: opacityForBlock(progress, 2)}} > We use High Quality and NO Additives in our products. Modern cuisine 
          is heavily laced with additives for coloring, </span>
           </div>
    </div> 
</div>
  )
}

export default Madeof