import React from 'react'
import Image from 'next/image'
import { Button } from './uifiles/button'

const Hero = () => {
  return (
    <section className='bg-bannerImg relative bg-no-repeat bg-cover bg-bottom w-full h-screen'>
      <div className='absolute right-12 top-36'>
        <div className='bg-[#FFF3E3] pt-10 pl-8'>
          <h4 className='font-bold'>New Arrival</h4>
          <h1 className='pt-2 text-3xl text-[#B88E2F]'>Discover Our</h1>
          <h1 className='text-4xl mb-3 font-bold text-[#B88E2F]'>New Collection</h1>
          <p className='text-sm pr-1'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            numquam quo, ipsa expedita eius voluptate
          </p>
          <Button className='text-white bg-[#B88E2F] mt-5 mb-5'>Buy Now</Button>
        </div>
      </div>
    </section>
  )
}

export default Hero;

