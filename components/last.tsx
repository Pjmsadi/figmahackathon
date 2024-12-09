import React from 'react'
import Image from 'next/image'

const Last = () => {
  return (
    <div>
      <Image 
        height={780} 
        width={1799} 
        className='bg-center'
        alt="logo" 
        src='/Share.png'
        priority
      />
    </div>
  )
}

export default Last;
