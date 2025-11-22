import React, { useState, useEffect } from 'react'
import logo from '../assets/logo.png'
import { BiSolidHome } from "react-icons/bi";
import { FaRegCircleUser } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Nabvbar({ interval = 5000 }) {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const quotes = [
    "Where words fail, music speaks. – Hans Christian Andersen",
    "Music is the universal language of mankind. – Henry Wadsworth Longfellow",
    "Without music, life would be a mistake. – Friedrich Nietzsche",
    "Music expresses that which cannot be put into words. – Victor Hugo",
    "Life is a song, love is the music. – Anonymous",
    "Music can change the world because it can change people. – Bono",
    "Let the music heal your soul. – Anonymous",
    "Turn your music up and your problems down. – Anonymous",
    "Good music doesn’t have an expiration date. – Anonymous",
    "Music gives a soul to the universe, wings to the mind, flight to the imagination, and life to everything. – Plato"
  ];


  // Generating Random Quotes 
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, interval);

    return () => clearInterval(timer);
  }, [interval]);



  return (
    <nav className=" bg-black  flex flex-wrap  justify-between  items-center  px-4 py-3  gap-4  fixed  top-0 w-full z-50 ">

      {/* Left Side Content  */}
      <div className="flex flex-wrap items-center gap-4 flex-1 sm:flex-none">
        <img src={logo} alt="logo" className="w-12 h-12 hover:cursor-pointer " onClick={() => navigate('/')} />
        <h1 className='text-white italic text-3xl flex items-end '><span className='text-red-600'>ME</span>LO <span className='text-xs hidden sm:block '>Enjoy Every Beat ..</span></h1>
      </div>


      {/* Right Side Content  */}
      <ul className='flex gap-10'>
        <li className="hidden sm:block">
          <p className="text-white">{quotes[currentIndex]}</p>
        </li>
        <li><BiSolidHome className="w-9 h-9 bg-red-700 rounded-2xl p-2 hover:cursor-pointer " onClick={() => navigate('/')} /> </li>
      </ul>



    </nav>
  )
}
