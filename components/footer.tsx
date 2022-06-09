import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer: React.FC = () => {
  return (
    <footer className='flex items-center justify-center gap-8 p-20 text-white bg-black'>
        <Image src='/assets/logo3.png' width={20} height={20} alt='logo' />
        <Link href='/terms'>Terms</Link>
        <Link href='/privacy'>Privacy Policy</Link>
    </footer>
  )
}

export default Footer