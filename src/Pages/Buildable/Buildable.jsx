import React from 'react'
import Image from '../../assets/1.jpg'
import Card from '../Buildable/Card'
import Button from '../Buildable/Button'
import { TbFlower } from "react-icons/tb";

function Buildable() {
  return (
    <>
      <div className='mb-10'>
        <div className=' bg-bgcolor  text-white  lg:pl-24 lg:pt-16 mb-10 '>
          <div className=''> <h1 className='lg:w-fit flex   lg:text-4xl md:text-3xl text-3xl bg-textcolor rounded-lg lg:p-1 font-syne '>Our Buildable Approach:</h1></div>

          <h1 className='lg:text-2xl lg:w-[34%] lg:mt-1 text-xl p-2'>simplifying every aspect of your digital learning delivery</h1>
          <div className='animate-spin1  sticky w-fit h-fit mt-3'>
            <TbFlower className='h-16 w-20' id='flower' />
          </div>
          <p className='lg:w-[32%] mt-3  text-lg'>Learnbase covers every aspect of online-learning, from strategy development and research, to media production, learning site development, custom coding, hosting and optimization and learner engagement strategy.</p>

          {/* <p className='lg:w-[32%] mt-3  text-lg lg:pb-16'>Using our buildable approach you pick and choose the elements you need help with, and wherever your starting base, we’ll meet you there…</p> */}
          <div className=''>
            <img className='lg:block hidden w-[500px]  top-40 absolute right-16 rounded-lg  ' id='none' src={Image} alt="" />
          </div>
          <div className=' flex justify-center mt-4'>
            <Card />
          </div>
        </div>

        <Button />
      </div>


    </>
  )
}

export default Buildable
