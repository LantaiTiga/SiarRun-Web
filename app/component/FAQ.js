'use client'
import React, { useState, forwardRef } from 'react'
import ArrowDown from '../public/IconArrowDown.svg'
import Image from 'next/image'

const FAQ = forwardRef((props, ref) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const questions = [
    "Bagaimana sistem lari virtual?",
    "Bagaimana cara mendaftar?",
    "Kapan saya bisa mulai berlari?",
    "Bagaimana cara mencatat jarak lari saya?",
    "Apakah saya bisa mengajak teman untuk ikut?",
    "Apakah semua peserta akan mendapatkan medali dan racepack?",
    "Bagaimana sistem lomba konten yang diadakan?"
  ];

  const answers = [
    "Peserta dapat berlari di lokasi dan waktu yang dipilih serta mencatat waktu serta jarak menggunakan aplikasi atau perangkat pelacak secara mandiri.",
    "Kamu bisa daftar melalui web resmi kami lho! Pilih menu Register Now lalu  pilih kategori lari yang ingin diikuti, isi formulir pendaftaran, dan lakukan pembayaran.",
    "Kamu bisa lari kapan saja! Tapi ingat ya runners, sesuaikan dengan jangka waktu berlari yang telah ditentukan yaitu pada 22 Desember - 25 Desember 2024.",
    "Runners dapat mencatat jarak dan waktu menggunakan aplikasi Strava.",
    "Tentu saja! Kamu dapat mengajak teman, pasangan atau keluarga untuk berlari bersama atau bahkan membuat tim untuk mengikuti group package and get a cheaper price!.",
    "Dont worry runners! Semua peserta akan mendapatkan medali finisher dan racepack sebelum tenggat waktu lari.",
    ""
  ];

  return (
    <div className="flex flex-col text-white py-[18px] px-[23px] sm:px-[58px] md:px-[64px] justify-center" ref={ref}>
        <section className='flex flex-col justify-center text-center items-center py-[10px] md:py-[70px]'>
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

              <div className={`regular-italic h-max overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-40' : 'max-h-0'}`}>
                {openIndex === index && (
                  <p className="text-[16px] sm:text-[32px] md:text-[40px] px-4 pb-4 border-t-0 rounded-t-none border border-white rounded-lg shadow-lg">
                    {answers[index]}
                  </p>
                )}
              </div>
            </div>
          ))}
        </section>
    </div>
  );
});

export default FAQ
