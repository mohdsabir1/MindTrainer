import React from 'react'
// import Image from '../assets/Image.jpg'
import { TbFlower } from "react-icons/tb";
export const Contact = () => {
  return (
    <>
            <div className='bg-bgcolor  '>
                <div className='lg:w-1/2 lg:p-16 p-6'>
                <h1 className='bg-textcolor w-fit rounded-lg p-3 text-4xl'>Contact Us</h1>
                <div className='animate-spin1  sticky w-fit h-fit mt-3 text-white'>
                 <TbFlower className='h-16 w-20' id='flower'/>
                 </div>
                 <div className='text-2xl'>
                 <h3 className='text-white'>Learnbase Training Technologies
Vancouver, Canada</h3><br/>
<h3 className='text-white'>E:<span className=' hover:text-textcolor cursor-pointer'>info@learnbase.com</span></h3><br/>
<h3 className='text-white'>T:<span className='hover:text-textcolor cursor-pointer'>1.604.880.7522</span> </h3>
            </div>
            </div>
            <div className=''>
   <img className='lg:block hidden w-[500px]  top-36 absolute right-16 rounded-lg  'id='none' src={Image} alt="" />
   </div>
         
            </div>
            <div className='bg-bgcard mt-3 lg:mx-36 lg:mt-10 lg:mb-10 px-16 pt-16 pb-5 rounded-xl border-2 '>
            <h1 className='text-center text-4xl uppercase font-semibold text-textcolor'>How can we help you?</h1>
            <div className=' grid lg:grid-cols-2 grid-cols-1 '>
            <input type="text" placeholder='First Name'className='mx-2 my-6 rounded-xl '/>
            <input type="text" placeholder='Last Name' className='mx-2 my-6 rounded-xl '/>
            <input type="text" placeholder='Phone'     className='mx-2 my-6 rounded-xl '/>
            <input type="text" placeholder='Subject'   className='mx-2 my-6 rounded-xl '/>
            <input type="email" placeholder='Email'     className='mx-2 my-6 rounded-xl '/>
            <input type="text" placeholder='Text Area' className='mx-2 my-6 rounded-xl '/>
           <div className='flex mt-5 '><button className='rounded-xl pushable'>
            <span className='front'>Submit</span></button></div>
            </div></div>
        </>
  )
}
