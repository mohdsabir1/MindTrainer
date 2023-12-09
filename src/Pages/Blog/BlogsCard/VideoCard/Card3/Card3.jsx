import React from 'react'
import Blog12 from '../../../../../assets/Blog/blog12.webp'

export const Card3 = () => {
    const CardData = [
        {
          img: Blog12,
          title: 'TItle',
          des:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati rerum delectus dolor itaque veritatis odio hic asperiores. Excepturi, quaerat esse!3'
        },
     
      ];
    

  return (
    <div className='p-7 mb-10'>

    {CardData.map((card, index) => (
        <div key={index} className='lg:flex lg:justify-center lg:shadow-none lg:border-none md:border-none lg:p-5  lg:mb-10 md:shadow-none md:flex md:justify-center md:p-2  shadow-xl rounded-md  border-2 '>
            <div className='lg:w-1/2 md:w-full text-center  '>
                <img className='lg:w-[600px] lg:h-[320px] md:w-fit p-5 ' src={card.img} alt="" />
            </div>
            <div className='lg:w-1/2 md:w-full md:p-10'>
                <div className=' lg:w-fit lg:mx-auto text-center lg:mb-0 md:mb-0 mb-4'>
                    <h2 className='lg:w-fit lg:text-textcolor lg:mb-0 md:text-center text-textcolor md:mb-5 md:text-4xl text-3xl font-medium   '>{card.title}</h2>
                </div>
                <div className='lg:p-10 lg:mb-0 md:mb-5 p-4'>
                    <p>{card.des}</p>
                </div>
                <div className='lg:w-fit lg:mx-auto lg:py-0 lg:px-0 lg:mb-5 md:w-fit md:mx-auto md:py-1 md:px-1 w-fit mx-auto mb-5 py-1 px-2 border-[2px] rounded-lg hover:bg-textcolor hover:text-white border-textcolor'>
                    <button className='lg:p-2 lg:font-semibold text-textcolor hover:text-white  '>Read More</button>
                </div>
            </div>
        </div>
    ))}
</div>
  )
}
