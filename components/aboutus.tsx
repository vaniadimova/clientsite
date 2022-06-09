import React from 'react'
import Products from './products'

const Aboutus:React.FC = () => {
  return (
<section className={`flex flex-col bg-white py-20 text-3xl md:text-4xl`}>
<div className='container mx-auto px-11'>
<strong>We are a Family Dry-Meats Deli Shop located in Toronto, Ontario </strong>
<hr />
<p className='max-w-5xl mx-auto text-4xl leading-tight tracking-tight'> 
Karlovo Inc was established in January 2001 by the family of Krassimir & Krassimira Tabakovi.
Specializing in locally maifactured produce of dry-meats and variety of imported goods from Bulgaria. 
</p>
<div className='container mx-auto text-center mt-28 px-11'>
    <h2 className='mb-8'><strong>Our Products </strong></h2>
<p className='mt-2 '>
You may order selected items directly from our website. Simply choose an item and complete 
your payment at checkout.
</p>
</div>
<div className='grid grid-cols-2 gap-6 mt-20 md:grid-cols-3 lg:grid-col-4 xl:grid-cols-5 lg:gap-20'>
    <Products  
    id="1" 
    name='Lukanka'  
    price={14.95} 
    description='reviwes 5 starts'  
    link='https://www.google.com/'
    />
    <Products  
    id="2" 
    name='Babek'  
    price={10.25} 
    description='reviews 5 stars' 
    link='https://www.google.com/'
    />
    <Products  
    id="3" 
    name='Pastarma'  
    price={20.00} 
    description='reviews 5 stars' 
    link='https://www.google.com/'
    />
    <Products  
    id="4" 
    name='Ambariza'  
    price={10.40} 
    description='reviews 5 stars' 
    link='https://www.google.com/'
    />
    <Products  
    id="5" 
    name='Trapezitsa'  
    price={13.50} 
    description='reviews 5 stars' 
    link='https://www.google.com/'
    />
    <Products  
    id="6" 
    name='ShpeckTurnovo '  
    price={14.00} 
    description='reviews 5 stars' 
    link='https://www.google.com/'
    />


</div>
</div>
</section>      

  )
}

export default Aboutus