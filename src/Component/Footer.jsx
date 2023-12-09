import React , {useRef} from 'react'
import {FaPhone, FaEnvelope} from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'

export const Footer = () => {

    return (
        <>
            <div className='lg:w-full lg:mb-4 lg:mt-4 md:w-3/4  md:mx-auto border-5 bg-bgcolor md:flex md:rounded-2xl'>
                <div className=' md:ml-5  md:w-fit md:h-fit mx-auto py-2 '>
                    <div className='lg:w-fit md:w-fit w-fit '>
                    <NavLink to='/'  className='md:text-4xl md:text-left md:mt-2  font-bold text-textcolor   ' style={{}}> Mind
                    <p className='md:text-4xl md:text-left  md:ml-3 ml-2 text-white font-bold '>trainer</p>
                    </NavLink>                   
                    
                    </div>
                   
                    {/* Shows when screen on medium or large */}
                    <div className='lg:mt-14 lg:mb-4 lg:h-fit   text-left '>
                    <p className='lg:block md:block hidden text-white md:mt-7 '>&copy; 2023 Mind Trainer Training Technologies</p>
                    </div>
                </div>
               
                
                    <div className=' md:ml-8 md:py-0 py-2 text-center'>
                        <ul className='md:flex md:p-3'>
                            <li className='text-white md:mr-24 md:font-medium cursor-pointer hover:text-textcolor py-4'>Contact</li>
                            <li className='text-white md:mr-24 md:font-medium cursor-pointer hover:text-textcolor py-4'>Terms  & Policy</li>
                            <li className='text-white md:mr-20 md:font-medium cursor-pointer hover:text-textcolor py-4'>Support</li>
                            
                        </ul>
                    
                    <div className='  md:flex md:w-fit  md:mx-auto md:text-center md:mt-5 md:py-5 md:px-8 flex justify-center py-2 text-center'>
                    <FaPhone className= ' md:mr-1 md:text-xl text-xl  text-white  mt-1 mr-3  hover:text-textcolor' />
                    <p className='md:mr-7 md:text-2xl text-xl text-white mr-14 cursor-pointer hover:text-textcolor '> +110222323</p>
                    <FaEnvelope className= ' md:text-xl text-white md:mr-2  text-xl mt-1 mr-2 hover:text-textcolor' /> 
                    <p className='md:mr-7 md:text-2xl text-xl text-white  cursor-pointer hover:text-textcolor '> info@learnbase.com</p>
                    </div>
                </div>
                 {/* Shows when screen on small  */}
                <div className='py-5 text-center'>
                    <hr />
                    <p className='md:hidden block text-white md:mt-7   md:py-5 py-5'>&copy; 2023 Mind Trainer Training Technologies</p>
                    <hr />
                    </div>
            </div>

        </>
    )
}
