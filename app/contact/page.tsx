"use client";

import ContactForm from '@/components/Contactform'; // Corrected casing in import name
import { HeroHeader } from '@/components/hero-header';
import React from 'react';
import Image from 'next/image';
import { FaMapMarkerAlt, FaPhoneAlt, FaClock, FaEnvelope } from 'react-icons/fa';

const contactInfo = [
  {
    icon: FaMapMarkerAlt,
    title: "Address",
    details: ["123 Main St", "City, State, ZIP"],
  },
  {
    icon: FaPhoneAlt,
    title: "Phone",
    details: ["(123) 456-7890"],
  },
  {
    icon: FaClock,
    title: "Hours",
    details: ["Mon-Fri: 9am - 5pm", "Sat: 10am - 4pm"],
  },
  {
    icon: FaEnvelope,
    title: "Email",
    details: ["info@example.com"],
  },
];

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
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-4">Get In Touch With Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            For more information about our products and services, please feel free to drop us an email. Our staff are always there to help you out. Do not hesitate!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <div key={index} className="text-center">
              <info.icon className="w-8 h-8 mx-auto mb-4 text-[#B88E2F]" />
              <h3 className="font-semibold mb-2">{info.title}</h3>
              {info.details.map((detail, idx) => (
                <p key={idx} className="text-gray-600">{detail}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
      <ContactForm />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-8 bg-white">
        <div className="text-center">
          <h3 className="font-semibold mb-2">High Quality</h3>
          <p className="text-sm text-gray-600">Crafted from top materials</p>
        </div>
        <div className="text-center">
          <h3 className="font-semibold mb-2">Warranty Protection</h3>
          <p className="text-sm text-gray-600">Over 2 years</p>
        </div>
        <div className="text-center">
          <h3 className="font-semibold mb-2">Free Shipping</h3>
          <p className="text-sm text-gray-600">Order over $150</p>
        </div>
        <div className="text-center">
          <h3 className="font-semibold mb-2">24/7 Support</h3>
          <p className="text-sm text-gray-600">Dedicated support</p>
        </div>
      </div>
      <div className="relative w-full h-[270px]">
        <Image
          src="/fr.png"
          alt="Footer banner"
          fill
          sizes="100vw"
          quality={90}
          priority
          className="object-cover"
        />
      </div>
    </div>
  );
}

export default ContactPage;
