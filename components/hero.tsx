import React from 'react'
import Image from 'next/image'
import { Button } from './uifiles/button'

const Hero = () => {
  return (
    <section className='relative w-full h-screen'>
      <Image
        src="/img.png" 
        alt="Hero banner"
        fill
        priority
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover object-bottom"
      />
      <div className='absolute right-12 top-36'>
        <div className='bg-[#FFF3E3] pt-10 pl-8 pr-8 pb-8'>
          <h4 className='font-bold text-lg'>New Arrival</h4>
          <div className='space-y-2'>
            <h1 className='text-3xl text-[#B88E2F]'>Discover Our</h1>
            <h1 className='text-4xl font-bold text-[#B88E2F]'>New Collection</h1>
          </div>
          <p className='text-sm mt-4 max-w-md'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            numquam quo, ipsa expedita eius voluptate
          </p>
          <Button 
            variant="default"
            className='mt-6 bg-[#B88E2F] hover:bg-[#B88E2F]/90'
          >
            Buy Now
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Hero;

