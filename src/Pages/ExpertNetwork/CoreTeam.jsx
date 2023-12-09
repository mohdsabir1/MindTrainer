import React, { useRef } from 'react'
import { Ayush } from './Ayush/Ayush'
import { Keona } from './Keona/Keona'
import { Neil } from './NeilMoh/Neil'
import { useState } from 'react'
import { Joe } from './Joe/Joe'
import { John } from './John/John'
import { David } from './David/David'

export const CoreTeam = () => {
  const [activeButton, setActiveButton] = useState(1);
  const coreTeamRef = useRef(null);
  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
    coreTeamRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      <div ref={coreTeamRef} className='lg:flex lg:justify-around lg:mb-10 lg:h-[1050px] md:flex md:mt-24 md:mb-14  lg:border-b-[1px] md:border-b-[1px] border-gray-400'>
        <div className='lg:ml-24 md:ml-14 '>
          <h1 className='lg:text-2xl lg-text-start md:text-start md:mb-14 md:text-2xl text-center mb-5  text-gray-500 font-meduim uppercase ' >Meet the core team</h1>
          <div className='lg:w-96 lg:mt-8 lg:border-r-[1px] lg:border-t-[1px] lg:border-b-[1px] lg:border-gray-400 lg:p-4 md:w-72 md:mt-4 md:border-t-2 md:border-b-2 md:border-gray-400 md:p-5 md:mb-14 cursor-pointer  border-b-[1px] mb-5'>
            <h1 className={`lg:text-4xl lg:font-medium md:text-2xl text-gray-400 uppercase lg:text-start md:text-start text-center ${activeButton === 1 ? 'text-textcolor' : 'hover:text-textcolor'
              }`}
              onClick={() => handleButtonClick(1)}>Ayush Mittal</h1>
            <p className='lg:text-xl lg:font-medium lg:text-start md:text-start text-center'>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className='lg:w-96 lg:mt-8 lg:border-r-[1px] lg:border-t-[1px] lg:border-b-[1px] lg:border-gray-400 lg:p-4 md:w-72 md:mt-4 md:border-t-2 md:border-b-2 md:border-gray-400 md:p-5 md:mb-14 border-b-[1px] mb-5 cursor-pointer'>
            <h1 className={`lg:text-4xl lg:font-medium md:text-2xl text-gray-400 uppercase  lg:text-start md:text-start text-center ${activeButton === 2 ? 'text-textcolor' : 'hover:text-textcolor'
              }`} onClick={() => handleButtonClick(2)}>Keona</h1>
            <p className='lg:text-xl lg:font-medium lg:text-start md:text-start text-center'>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className='lg:w-96 lg:mt-8 lg:border-r-[1px] lg:border-t-[1px] lg:border-b-[1px] lg:border-gray-400 lg:p-4 md:w-72 md:mt-4 md:border-t-2 md:border-b-2 md:border-gray-400 md:p-5 md:mb-14 border-b-[1px] mb-5 cursor-pointer'>
            <h1 className={`lg:text-4xl lg:font-medium md:text-2xl text-gray-400 uppercase lg:text-start md:text-start text-center ${activeButton === 3 ? 'text-textcolor' : 'hover:text-textcolor'
              }`} onClick={() => handleButtonClick(3)}>Niel</h1>
            <p className='lg:text-xl lg:font-medium lg:text-start md:text-start text-center'>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className='lg:w-96 lg:mt-8 lg:border-r-[1px] lg:border-t-[1px] lg:border-b-[1px] lg:border-gray-400 lg:p-4 md:w-72 md:mt-4 md:border-t-2 md:border-b-2 md:border-gray-400 md:p-5 md:mb-14  border-b-[1px] mb-5 cursor-pointer'>
            <h1 className={`lg:text-4xl lg:font-medium md:text-2xl text-gray-400 uppercase lg:text-start md:text-start text-center ${activeButton === 4 ? 'text-textcolor' : 'hover:text-textcolor'
              }`} onClick={() => handleButtonClick(4)}>Joe</h1>
            <p className='lg:text-xl lg:font-medium lg:text-start md:text-start text-center'>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className='lg:w-96 lg:mt-8 lg:border-r-[1px] lg:border-t-[1px] lg:border-b-[1px] lg:border-gray-400 lg:p-4 md:w-72 md:mt-4 md:border-t-2 md:border-b-2 md:border-gray-400 md:p-5 md:mb-14 border-b-[1px] mb-5 cursor-pointer'>
            <h1 className={`lg:text-4xl lg:font-medium md:text-2xl text-gray-400 uppercase  lg:text-start md:text-start text-center ${activeButton === 5 ? 'text-textcolor' : 'hover:text-textcolor'
              }`} onClick={() => handleButtonClick(5)}>John</h1>
            <p className='lg:text-xl lg:font-medium lg:text-start md:text-start text-center'>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className='lg:w-96 lg:mt-8 lg:border-r-[1px] lg:border-t-[1px] lg:border-b-[1px] lg:border-gray-400 lg:p-4 md:w-72 md:mt-4 md:border-t-2 md:border-b-2 md:border-gray-400 md:p-5 md:mb-14 border-b-[1px] mb-5 cursor-pointer'>
            <h1 className={`lg:text-4xl lg:font-medium md:text-2xl text-gray-400 uppercase lg:text-start md:text-start text-center ${activeButton === 6 ? 'text-textcolor' : 'hover:text-textcolor'
              }`} onClick={() => handleButtonClick(6)}>David</h1>
            <p className='lg:text-xl lg:font-medium lg:text-start md:text-start text-center'>Lorem ipsum dolor sit amet.</p>
          </div>



        </div>

        <div className='lg:w-[698px] lg:p-10  lg:border-l-[1px] md:border-l-[1px] border-gray-400'>
          <div >
            {activeButton === 1 && <Ayush />}
            {activeButton === 2 && <Keona />}
            {activeButton === 3 && <Neil />}
            {activeButton === 4 && <Joe />}
            {activeButton === 5 && <John />}
            {activeButton === 6 && <David />}


          </div>
        </div>
      </div>
    </>
  )
}
