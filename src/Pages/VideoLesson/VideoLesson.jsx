import React from 'react'
import Card from './Card'
import Image from '../../assets/1.jpg'
import Craft from './Craft'
import Faq from './Faq'
import { TbFlower } from "react-icons/tb";
function VideoLesson() {
    return (
        <>
        <div className='bg-bgcolor p-2'>
            <div className=' lg:w-2/4 text-white lg:pl-16 lg:pt-16' >
                 <h1 className='lg:text-4xl md:text-3xl text-2xl lg:w-fit md:w-fit w-fit bg-textcolor rounded-lg lg:p-1 px-1'>Deliver Transformational Online</h1>
                 <h1 className='lg:text-2xl md:text-xl text-xl mt-1'>Lessons with The Learnbase Video Lesson Maker</h1>
                 <div className='animate-spin1  sticky w-fit h-fit mt-3'>
                 <TbFlower className='h-16 w-20' id='flower'/>
                 </div>
                <div className='mt-6 text-xl'><p>Are you an organization aiming for transformational educational outreach aimed at guiding you audience in change through questioning, self reflection and reframing?</p>
              </div>
            </div>

            <div className=''>
   <img className='lg:block hidden w-[400px] md:hidden top-40 absolute right-20 rounded-xl  'id='none' src={Image} alt="" />
   </div>
           <div className=' flex justify-center mt-1'>
            <Card/></div>
            
        </div>
           <Craft/>
           <div className=' flex justify-center pt-6 bg-bgcolor'>
           <Faq/>
           </div>
        </>
    )
}

export default VideoLesson
