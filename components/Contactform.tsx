"use client"

import React, { useState } from "react";
import { Button } from "./uifiles/button";
import Image from "next/image";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "", 
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log(formData);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="container mx-auto p-8 lg:px-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Section */}
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="relative w-8 h-8">
                <Image 
                  src="/location-icon.svg"
                  alt="Location icon"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <p className="font-medium text-gray-800">Address</p>
                <p className="text-gray-600">400 University Drive Suite 200 Coral Gables,<br/>FL 33134 USA</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative w-8 h-8">
                <Image 
                  src="/phone-icon.svg"
                  alt="Phone icon"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <p className="font-medium text-gray-800">Phone</p>
                <p className="text-gray-600">Mobile: +(84) 546-6789<br/>Hotline: +(84) 456-6789</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative w-8 h-8">
                <Image 
                  src="/time-icon.svg"
                  alt="Time icon"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <p className="font-medium text-gray-800">Working Time</p>
                <p className="text-gray-600">Monday-Friday: 9:00 - 22:00<br/>Saturday-Sunday: 9:00 - 21:00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-white shadow-md p-8 rounded-md">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your name</label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Abc"
                required
                className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-[#B88E2F] focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email address</label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Abc@def.com"
                required
                className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-[#B88E2F] focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
              <input
                id="subject"
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="This is an optional"
                className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-[#B88E2F] focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Hi! i'd like to ask about"
                rows={5}
                required
                className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-[#B88E2F] focus:outline-none"
              />
            </div>

            <div>
              <Button
                type="submit"
                className="w-full bg-[#B88E2F] text-white font-medium hover:bg-[#B88E2F]/80 transition"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
