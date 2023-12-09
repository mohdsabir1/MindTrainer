import React from 'react';

const Newsletter = () => {
  return (
    <div className=" lg:mt-0 md:mt-0 mt-5 w-full h-60 bg-bgcolor mb-14  ">
      <div className='text-center  md:py-2 uppercase text-white '>
        <h1 className='lg:text-3xl lg:py-5 lg:font-semibold md:text-3xl py-3'>Subscribe to get latest Updates</h1>
        <p className=' lg:text-xl md:text-sm lg:mt-0 md:mt-2 md:mb-4 mb-4 text-sm   '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, facere?</p>
      </div>
    <div className="text-center w-96 h-12 mx-auto rounded-full ">
      <form className=" lg:text-center subscription lg:w-[500px] w-[350px] h-full  relative">
          <div>
          <input 
          className=" lg:mt-5 w-full h-full  border-none outline-none px-8 py-3 rounded-full"
          type="email"
          placeholder="Subscribe@.com"
        />
          </div>
          <div className=' pt-4'>
        <button className=" lg:mt-6 lg:py-2 absolute top-0 right-0 w-fit h-fit mt-1 py-2   mr-2 rounded-full outline-none px-8 cursor-pointer bg-textcolor text-white ">
          <span className=" flex justify-center ">Subscribe</span>
        </button>
        </div>
      </form>
    </div>
  </div>
  );
};

export default Newsletter;
