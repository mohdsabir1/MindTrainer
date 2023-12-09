import React from 'react'
import Expert from '../../assets/expert/expertbanner.jpg'
export const Expertbanner = () => {
  return (
    <div className='bg-bgcolor lg:h-[500px] h-fit lg:mb-14 md:py-4 py-4 md:mb-8 mb-8'>
    <div className='lg:flex'> 
        <div className='lg:py-14'>
            <h1 className='lg:text-5xl lg:ml-24 lg:font-medium md:text-3xl text-4xl mb-2 ml-4  text-white'>Meet Your</h1>
            <h1 className='lg:text-5xl lg:ml-24 lg:mt-3 bg-textcolor lg:w-fit lg:px-2 md:text-2xl text-2xl md:px-2  px-2 rounded-xl w-fit ml-3 text-black'>Expert Netwrok</h1>
            <p className='lg:text-xl lg:ml-24 lg:mt-4  ml-4 mt-2 text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem quaerat sapiente iure, quia aliquam quam ea neque ut laboriosam aperiam?</p>
        </div>
        <div className='lg:w-3/4 lg:p-4  lg:block hidden '>
            <img className='lg:rounded-lg' src={Expert} alt="" />
        </div>
    </div>
    </div>
  )
}
