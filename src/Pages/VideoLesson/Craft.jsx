import React from 'react'
import { GoDotFill } from "react-icons/go";
import content from '../../assets/Video/1.jpeg'
function Craft() {
    return (
        <>

            <div className='flex-row  p-8'>
                <img className=' float-right w-96 lg:mr-6' src={content} alt="" />
                <div className='lg:w-1/2'>
                    <h1 className=' text-textcolor text-4xl '>Craft deeper learning with the Video Lesson Maker Studio</h1>
                    <div className='mt-6 '>
                        <p className='lg:text-2xl w-fit flex mx-3 '> <span className=' text-xl mt-2'><GoDotFill /> </span>Design and build lessons the same way you would lead them live</p>
                        <p className='lg:text-2xl w-fit flex mx-3 '> <span className=' text-xl mt-[5px]'><GoDotFill /> </span>Present content and guide learners in in the Video section</p>
                        <p className='lg:text-2xl w-fit flex mx-3 '> <span className=' text-xl mt-[5px]'><GoDotFill /> </span>Invite deeper affective learning in the Workbook section.</p>
                        <p className='lg:text-2xl w-fit flex mx-3 '> <span className=' text-xl mt-[5px]'><GoDotFill /> </span>Set pauses and add overlays, images, colour blocks and embed iframe content directly over the video</p>
                        <p className='lg:text-2xl w-fit flex mx-3 '> <span className=' text-xl mt-[5px]'><GoDotFill /> </span>Set the workbook for downloadable reference of lesson material and learner notes</p>
                        <p className='lg:text-2xl w-fit flex mx-3 '> <span className=' text-xl mt-[5px]'><GoDotFill /> </span>Invite the learners to submit their workbooks to a mentor for in-situ feedback</p>
                    </div>
                </div>
            </div>

            <div className=' bg-textcolor text-white p-5 lg:text-xl lg:flex lg:justify-evenly lg:items-center rounded-xl lg:m-6'>
                <h1 className=' lg:text-2xl text-center'>The Video Lesson Maker in Action:</h1>
                <div className='mt-3 flex -ml-5'>
                    <a href="#_" className="relative inline-block text-lg group lg:ml-5">
                        <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-xl group-hover:text-white">
                            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-xl bg-gray-50"></span>
                            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                            <span className="relative">Demo:Presenter</span>
                        </span>
                        <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-xl group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-xl"></span>
                    </a>
                    <a href="#_" className="relative inline-block text-lg group lg:ml-5">
                        <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-xl group-hover:text-white">
                            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-xl bg-gray-50"></span>
                            <span className="absolute left-0 w-56 h-48 -ml-0 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                            <span className="relative">Demo:Animation</span>
                        </span>
                        <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-xl group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-xl"></span>
                    </a>

                </div>
            </div>
            <div className=' flex-row m-6 lg:p-6  '>
                <div className=' lg:w-3/6  lg:text-xl'>
                    <h1 className='w-fit'>Join the thousands of learners in legal, health, education, technical and vocational programs who have experienced transformational online learning delivered by Video Lesson Maker.</h1>
                </div >
                <div className=' lg:w-3/6 lg:text-xl  lg:float-right   '>
                    <h1 className=' lg:-mt-28'>If you’re an organisation doing educational outreach, and want to learn more about how The Learnbase Video Lesson Maker can help you deliver transformational online-lessons, <span className=' text-textcolor'>connect with us today.</span></h1>
                </div >

            </div>
            <h1 className=' text-center bg-bgcolor text-textcolor p-6 text-3xl  h-fit'>Things we all love about The Learnbase Video Lesson Maker</h1>
            
        </>

    )
}

export default Craft
