import React, { useState } from 'react';
import { FaBars, FaXmark } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';
export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
           <div className='bg-bgcolor lg:h-fit  lg:w-full lg:shadow-lg '>
        <div className='md:flex justify-between items-center relative'>
          
            <div className={`md:p-0 lg:ml-4 p-4  ${isMenuOpen ? 'md:absolute md:left-4 md:top-4 md:w-fit w-fit' : 'md:ml-4 md:mt-4'}`}>
            <NavLink to="/"> <p className='md:text-4xl font-bold text-textcolor w-fit '> Mind</p>
            <p className='lg:mb-4 md:text-4xl md:ml-3 text-white font-bold w-fit'>trainer</p></NavLink>
          </div>
          
          <div className={`lg:block  ${isMenuOpen ? ' hidden' : 'lg:hidden '} absolute top-0 right-0 mt-8 mr-4`}>
            <FaBars
              className='text-2xl text-white cursor-pointer'
              onClick={handleToggle}
            />
          </div>

          <div className={`lg:block  lg:ml-4 lg:mt-0 md:mt-14 md:ml-96 md:w-fit   ${isMenuOpen ? 'lg:hidden '  : 'hidden '}`}>
            <ul className='lg:flex lg:flex-row md:flex md:flex-col items-center' >
             
              <NavLink to="/BuildableApproach"><li className='lg:py-0 md:py-3 md:mr-8 md:text-md md:text-start md:w-full py-2 text-center text-white font-medim  hover:text-textcolor cursor-pointer '>
                Buildable Approach
              </li></NavLink>
              <NavLink to="/ExpertNetwork"><li className='lg:py-0 md:py-3 md:text-md md:text-start md:w-full py-2 text-center text-white font-medim  hover:text-textcolor cursor-pointer '>
              Expert Network
              </li></NavLink>
              
              <NavLink to="/ExpertNetwork"><li className='lg:py-0 md:py-3 md:mr-8 md:text-md md:text-start md:w-full py-2 text-center text-white font-medim  hover:text-textcolor cursor-pointer '></li>
              </NavLink>

              <NavLink to="/VideoLessonMaker"><li className='lg:py-0 md:py-3 md:mr-8 md:text-md md:text-start md:w-full py-2 text-center text-white font-medim  hover:text-textcolor cursor-pointer '>
              Video Lesson Maker
              </li>
              </NavLink>


              <NavLink to="/IntegralLearning"><li className='lg:py-0 md:py-3 md:mr-8 md:text-md md:text-start md:w-full py-2 text-center text-white font-medim  hover:text-textcolor cursor-pointer '>
              Integral Learning
              </li></NavLink>
              
              <NavLink to="/Impact" > <li className='lg:py-0 md:py-3 md:mr-8 md:text-md md:text-start py-2 md:w-full text-center text-white font-medim  hover:text-textcolor cursor-pointer '>
              Impact
              </li></NavLink>
             
             <NavLink to="/Blog"><li className='lg:py-0 md:py-3 md:mr-8 md:text-md md:text-start py-2 text-center text-white font-medim  hover:text-textcolor cursor-pointer '>
              Blog
              </li></NavLink>
              
             
            </ul>
          </div>
          <div className=''>
            <NavLink to='/Contact'>  <button
              className={`lg:block lg:px-5  lg:py-1 md:py-0 lg:w-full   md:w-fit  hidden md:mb-4 md:mt-3  md:mr-5 md:px-2  font-medium bg-white text-textcolor border-none hover:text-white animated-button hover:bg-textcolor rounded-lg  ${
                isMenuOpen ? 'hidden' : 'lg:block'
              }`}
            >
              Connect Now
            </button></NavLink>
          
           
          </div>
          <div className={`lg:block ${isMenuOpen ? 'lg:hidden' : 'hidden'}`}>
            <FaXmark
              className=' lg:hidden block text-2xl text-white cursor-pointer absolute top-0 right-0 mt-8 mr-4'
              onClick={handleToggle}
            />
          </div>
        </div>
      </div>
    </>
  );
};
