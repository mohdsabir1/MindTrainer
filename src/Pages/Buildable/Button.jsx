import React, { useState } from 'react';
import Hosting from './Hosting'
import { FaA} from "react-icons/fa6";
import { MdOutlinePermMedia } from "react-icons/md";
import { FaLightbulb } from "react-icons/fa";
import { LuMessageCircle } from "react-icons/lu";
import { CgWebsite } from "react-icons/cg";
import { SiBisecthosting } from "react-icons/si";
import Engagement from './Engagement';
import Strategy from './Strategy';
import Media from './Media';
import Applications from './Applications';
import Sites from './Sites';
function Button() {
    const [activeButton, setActiveButton] = useState(1);

    const handleButtonClick = (buttonNumber) => {
      setActiveButton(buttonNumber);
    };
  
  
    return (
        <div className='lg:flex'>
        <div className='lg:pl-40 lg:w-2/4 mt-10'>
            <h1 className='text-3xl text-gray-400 right-0 text-center'>Explore our buildable approach</h1>
              <div  className=' text-white  flex-col rounded-full mt-6 lg:ml-[1rem] '> 
    <div className=' flex border-y-2 border-r-2 p-4 lg:w-[320px]'><button onClick={() => handleButtonClick(1)} className='pushable w-fit border-2 rounded-xl  text-4xl'><span className='front'> <SiBisecthosting /></span></button><span className=' text-xl text-[#2d2d2d] hover:text-textcolor ml-2 flex items-center cursor-pointer'onClick={() => handleButtonClick(1)}>Hosting & Optimisation</span></div><br/>
    <div className=' flex border-y-2 border-r-2 p-4 lg:w-[320px]'><button onClick={() => handleButtonClick(2)} className='pushable bg-textcolor w-fit border-2 rounded-xl text-4xl '><span className='front'><LuMessageCircle/></span> </button><span className='text-xl text-[#2d2d2d] hover:text-textcolor ml-2 flex items-center cursor-pointer'onClick={() => handleButtonClick(2)}>Engagement Strategy</span></div><br/>
    <div className=' flex border-y-2 border-r-2 p-4 lg:w-[320px]'><button onClick={() => handleButtonClick(3)} className='pushable bg-textcolor w-fit border-2 rounded-xl text-4xl  '><span className='front'><FaLightbulb/></span> </button><span className='text-xl text-[#2d2d2d] hover:text-textcolor ml-2 flex items-center cursor-pointer'onClick={() => handleButtonClick(3)}>Learning Strategy </span></div><br/>
    <div className=' flex border-y-2 border-r-2 p-4 lg:w-[320px]'><button onClick={() => handleButtonClick(4)} className='pushable bg-textcolor w-fit border-2 rounded-xl text-4xl  '> <span className='front'> <MdOutlinePermMedia/></span></button><span className='text-xl text-[#2d2d2d] hover:text-textcolor ml-2 flex items-center cursor-pointer'onClick={() => handleButtonClick(4)}>Media Production</span></div><br/>
    <div className=' flex border-y-2 border-r-2 p-4 lg:w-[320px]'><button onClick={() => handleButtonClick(5)} className='pushable bg-textcolor w-fit border-2 rounded-xl text-4xl ' ><span className='front'> <CgWebsite/></span></button><span className='text-xl text-[#2d2d2d] hover:text-textcolor ml-2 flex items-center cursor-pointer'onClick={() => handleButtonClick(5)}>Learning Sites</span></div><br/>
    <div className=' flex border-y-2 border-r-2 p-4 lg:w-[320px]'><button onClick={() => handleButtonClick(6)} className='pushable bg-textcolor w-fit border-2 rounded-xl text-4xl  '><span className='front'> <FaA/></span>
     </button><span className='text-xl text-[#2d2d2d] hover:text-textcolor ml-2 flex items-center cursor-pointer'onClick={() => handleButtonClick(6)}>Custom Coding </span></div>
    
     </div>
     
     </div>
        {activeButton === 1 && <Hosting/>}  
        {activeButton === 2 && <Engagement/>}
        {activeButton === 3 && <Strategy/>}
        {activeButton === 4 && <Media/>}
        {activeButton === 5 && <Sites/>}
        {activeButton === 6 && <Applications/>}
        </div>
    )
}

export default Button
