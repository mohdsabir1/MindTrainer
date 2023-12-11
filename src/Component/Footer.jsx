
'use client';

import { Footer } from 'flowbite-react';
import {  BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';


export const Foot = () =>{
  return (
    <Footer container className='bg-bgcolor'>
      <div className="w-full ">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <NavLink to='/' >
            <div className=' lg:w-fit w-fit h-fit mb-8'>
           <p className= 'text-4xl font-semibold text-white'>Mind</p>
           <p className='text-textcolor ml-4 font-semibold text-4xl'>trainer</p>
          </div>
            </NavLink>
         
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title className='text-white text-2xl font-semibold' title="about" />
              <Footer.LinkGroup col>
                <NavLink to='/'>
                <li className='text-white text-lg cursor-pointer hover:text-textcolor'>Mind Trainer</li>
                </NavLink>
             <NavLink to='/blog'><li className='text-white text-lg cursor-pointer hover:text-textcolor'>Blog</li></NavLink>
                
                
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" className='text-white text-2xl font-semibold' />
              <Footer.LinkGroup col>
              <li className='text-white text-lg cursor-pointer hover:text-textcolor'>GitHub</li>
                
              </Footer.LinkGroup>
            </div>
        
          </div>
        </div>
        <Footer.Divider />
        <div className='text-center'>   <div className="w-full sm:flex sm:items-center text sm:justify-between">
          <Footer.Copyright href="#" by="Mind Trainer" year={2022} className='text-white' />
          <div className='lg:text-start md:text-start text-center  w-fit lg:mx-0 md:mx-0 mx-auto'>
          <div className="mt-4 flex space-x-10 sm:mt-0 sm:justify-center text-white">
            <Footer.Icon href="#" className='text-white hover:text-textcolor' icon={BsFacebook} />
            <Footer.Icon href="#" className='text-white hover:text-textcolor' icon={BsInstagram} />
            <Footer.Icon href="#" className='text-white hover:text-textcolor' icon={BsTwitter} />
            <Footer.Icon href="#" className='text-white hover:text-textcolor' icon={BsGithub} />
           
          </div>
          </div>
          
        </div></div>
       
      </div>
    </Footer>
  );
}
