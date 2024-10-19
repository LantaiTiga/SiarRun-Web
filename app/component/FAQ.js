'use client'
import React, { useState } from 'react'
import ArrowDown from '../public/IconArrowDown.svg'
import Image from 'next/image'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const questions = [
    "Kapan hari terakhir pendaftaran?",
    "Kapan hari terakhir pendaftaran?",
    "Kapan hari terakhir pendaftaran?",
    "Kapan hari terakhir pendaftaran?",
    "Kapan hari terakhir pendaftaran?"
  ];


  return (
    <div className="flex flex-col text-white py-[18px] px-[23px] sm:px-[58px] md:px-[64px] bg-[#181818] justify-center">
        <section className='flex flex-col justify-center text-center items-center'>
            <h1 className='extrabold text-[32px] sm:text-[56px] md:text-[64px]'>FREQUENTLY ASKED</h1>
            <h2 className='extrabold text-[32px] sm:text-[56px] md:text-[64px] bg-gradient-to-r from-[#E950A0] to-[#FFDE59] py-[10px] w-[258px] sm:w-[390px] md:w-[433px]'>QUESTIONS</h2>
        </section>
        <section >
          {questions.map((question, index) => (
            <div key={index} className="my-2 py-[10px] md:px-[30px]">
              <button 
                className={`flex justify-between items-center semi-bold text-[16px] sm:text-[32px] md:text-[40px] w-full text-left p-4 border border-white rounded-lg ${openIndex === index ? 'border-b-0 rounded-b-none' : ''}`}
                onClick={() => toggleDropdown(index)}
              >
                {question}
                
             <Image
              src={ArrowDown}
              alt="Arrow Logo" 
              width={42} 
              height={42} 
               />
              </button>

              <div className={`regular-italic overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-40' : 'max-h-0'}`}>
                {openIndex === index && (
                  <p className="text-[16px] sm:text-[32px] md:text-[40px] px-4 pb-4 border-t-0 rounded-t-none border border-white rounded-lg shadow-lg">
                    asdasdasid
                  </p>
                )}
              </div>
            </div>
          ))}
        </section>
    </div>
  )
}

export default FAQ
