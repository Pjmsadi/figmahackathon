import React from 'react'
import Image from 'next/image'

const Last = () => {
  return (
    <div className="relative w-full aspect-[1799/780]">
      <Image 
        fill
        className="object-cover"
        alt="Share section image" 
        src="/Share.png"
        sizes="100vw"
        priority
      />
    </div>
  )
}

export default Last;
