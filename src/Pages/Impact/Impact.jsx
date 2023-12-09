import React from 'react'
import {ImpactCards} from './ImpactCards/ImpactCards'
export const Impact = () => {
  return (
    <>
       <div className='bg-bgcolor'>
        <div className='lg:w-fit lg:ml-20 lg:py-14 md:w-fit md:py-14 py-8'>
            <h1 className='lg:text-5xl lg:px-5 lg:py-1 lg:w-fit md:w-fit md:text-3xl md:py-1 md:px-2 md:ml-14 ml-14 mb-4 px-2 py-1 text-2xl w-fit rounded-lg text-white bg-textcolor'>Impact</h1>
            <p className= ' lg:text-2xl lg:mt-4 md:ml-14 ml-14 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, consequatur?</p>
        </div>
    </div>
    <ImpactCards />
   

    </>
  )
}
