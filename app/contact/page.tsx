"use client";

import ContactForm from '@/components/Contactform' // Fixed casing in import
import { HeroHeader } from '@/components/hero-header'
import React from 'react'
import Image from 'next/image'

const ContactPage = () => {
  return (
    <div>
      <HeroHeader
        backgroundImage="/Rectangle 1.png"
        breadcrumbItems={[
          { href: "/", label: "Home" },
          { href: "/contact", label: "Contact" },
        ]}
        title="Contact"
      />
      <ContactForm />
      <div className="relative w-full h-[270px]">
        <Image
          fill
          alt="Footer banner"
          src="/fr.png"
          className="object-cover"
          priority
        />
      </div>
    </div>
  )
}

export default ContactPage
