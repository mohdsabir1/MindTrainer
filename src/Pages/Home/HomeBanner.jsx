import React from 'react'
import Banner from '../../assets/Home/about.png'
export const HomeBanner = () => {
  return (
    <>
      <div className='bg-bgcolor md:mb-10'>
        <div className='md:flex  justify-between '>
          <div className='lg:ml-10 lg:mr-10 lg:mt-8 lg:w-1/2 lg:py-0 md:py-0  md:w-1/2 h-fit py-5  '>
            <p className='lg:text-4xl  lg:px-3 lg:py-2 lg:font-medium lg:w-fit lg:ml-3   md:w-fit md:text-3xl md:mt-4   bg-textcolor px-1  text-white text-2xl w-fit ml-3 py-3 rounded-2xl  '>Welcome to Mind Trainer</p>
              <p className=' lg:ml-4 md:text-2xl lg:text-start  text-white mt-2 ml-4'>Unlock Your Learning Potential</p> 
            <div>
              <p className=' lg:text-xl lg:px-4 text-white p-3'>At <span className='lg:font-semibold text-textcolor '>Mind Trainer,</span>  we're not just a platform; we're your dedicated partner in the journey of lifelong learning. Our mission is to empower minds, inspire creativity, and fuel your passion for knowledge. Welcome to a community where learning knows no bounds.</p>
            </div>
          </div>

          <div className='lg:block md:block  lg:w1/2 md:w-1/2 hidden'>
            <img src={Banner} alt="" className=' ' />
          </div>
        </div>

      </div>
    </>
  )
}
