import React from 'react'
import Personalize from '../..//assets/Home/personlized.jpg'



export const WhyChooseH = () => {
  return (
    <section className="bg-bgcolor lg:mb-14 lg:mt-10  md:mt-5 mt-4 pb-10 pt-10 dark:bg-dark lg:pb-10 lg:pt-[50px] ">
      <div className='text-center lg:mb-14 md:mb-10 mb-6'>
        <h1 className='lg:text-3xl  md:text-2xl text-xl uppercase text-white '>Why choose mind trainer</h1>
      </div>
    <div className=" mx-auto p-2">
      <div className="lg-mx-4 flex flex-wrap">
        <div className="w-full px-4 md:w-1/2 xl:w-1/3 ">
          <div
            className="mb-10 overflow-hidden rounded-lg bg-white "
          >
            <img
              src={Personalize}
              alt="img"
              className="w-full"
            />
            <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
              
              <p
                className="mb-7 text-base leading-relaxed text-body-color dark:text-dark-6"
              >
                Lorem ipsum dolor sit amet pretium consectetur adipiscing
                elit. Lorem consectetur adipiscing elit.
              </p>

              <button
               
                className=" bg-white inline-block rounded-full border  px-7 py-2 text-base font-medium  transition   hover:text-white hover:bg-textcolor  "
              >
                View Details
              </button>
            </div>
          </div>
        </div>
        <div className="w-full px-4 md:w-1/2 xl:w-1/3">
          <div
            className="mb-10 overflow-hidden rounded-lg bg-white shadow-1 duration-300 hover:shadow-3 dark:bg-dark-2 dark:shadow-card dark:hover:shadow-3"
          >
            <img
              src={Personalize}
              alt="img"
              className="w-full"
            />
            <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
              
              <p className="mb-7 text-base leading-relaxed text-body-color">
                Lorem ipsum dolor sit amet pretium consectetur adipiscing
                elit. Lorem consectetur adipiscing elit.
              </p>

              <button
               
               className=" bg-white inline-block rounded-full border  px-7 py-2 text-base font-medium  transition   hover:text-white hover:bg-textcolor  "
             >
               View Details
             </button>
            </div>
          </div>
        </div>
        <div className="w-full px-4 md:w-1/2 xl:w-1/3">
          <div
            className="mb-10 overflow-hidden rounded-lg bg-white shadow-1 duration-300 hover:shadow-3 dark:bg-dark-2 dark:shadow-card dark:hover:shadow-3"
          >
            <img
              src={Personalize}
              alt="img"
              className="w-full"
            />
            <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
             
              <p className="mb-7 text-base leading-relaxed text-body-color">
                Lorem ipsum dolor sit amet pretium consectetur adipiscing
                elit. Lorem consectetur adipiscing elit.
              </p>

              <button
               
               className=" bg-white inline-block rounded-full border  px-7 py-2 text-base font-medium  transition   hover:text-white hover:bg-textcolor  "
             >
               View Details
             </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}





