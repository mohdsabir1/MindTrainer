import React from 'react'
import { Card1 } from './Cards/Card1'

export const IntegralLearning = () => {
  return (
    <>
    <div className='bg-bgcolor'>
        <div className='lg:w-fit lg:ml-20 lg:py-14 md:py-14 '>
            <h1 className='lg:text-5xl lg:px-5 lg:py-1 lg:w-fit lg:ml-0 md:w-fit md:px-5 md:text-4xl md:ml-14  w-fit ml-10 px-2 py-1 text-3xl rounded-lg text-white bg-textcolor'>Integral Learning</h1>
            <p className= ' lg:text-2xl lg:mt-4 md:mt-2 lg:ml-0 md:text-xl md:ml-14 ml-10 text-sm mt-4 pb-8 text-white text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, consequatur?</p>
        </div>
    </div>
    <Card1 />
    </>
  )
}
