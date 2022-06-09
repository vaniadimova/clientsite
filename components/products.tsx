import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
    id: string
    name: string
    price: number
    description: string
    link: string
}
const Products: React.FC<Props>= ({ id, name, price, description, link}) => {
  return (
<div>
<Image
  src={`/assets/items/item_${id}.png`}
  alt={name}
  width={1366}
  height={1555} 
    />
    <div className='text-3xl xl:text-4xl'>{name}</div>
    <div className='text-red-500'>${price}</div>
    <div className='text-xl'>
    <Link href={link}>
    <a target="_blank">{description}</a>
    </Link>
    </div>
</div>
  )
}

export default Products