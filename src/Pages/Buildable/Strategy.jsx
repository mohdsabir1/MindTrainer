import React from 'react'

function CardFooter() {
    const x=[
{
    heading:"Learning Strategy and Product Vision",
    h2:"Online-Learning Strategies that Start with You.",
    p1:"We begin with curiosity, empathy, and an enthused Discovery Process to focus and streamline your product development, saving you time and money. ",
    p2:"Through this process we clarify the core challenge driving your product development, explore the product chance and articulate your product vision.  Aligned around this understanding, we use The Learnbase Learning Framework to challenge development presumptions and visualize opportunities that may not otherwise have been considered.  ",
    p3:"As specialists, we understand the need to focus on doing what comes best to you. So, you bring your subject matter expertise, and we’ll bring our signature blend of learning and technical insight. Together we’ll create compelling online learning that will really engage your learners, and help them apply new knowledge, skills and self-understanding to make a real difference in their lives and communities.",
    p4:"And, on a macro level, we have significant experience helping direct the educational strategies of organizations through in-depth research and delivery of evidence-based insight.",
    card:"Learnbase exceeded our expectations. We did not start with a clear picture of what the end product would look like, Learnbase helped us create and plan and adapt throughout the process and the end result was excellent."
},
       
    ]
    return (
        
        <>
        {x.map((CardFooter,index) => (
        <div key={index} className='bg-white p-2 lg:w-3/6 float-right lg:m-3 lg:mt-20 lg:p-10  border-l-2'>
           <h1 className='text-4xl text-center lg:text-start md:text-start mt-8 lg:mt-4 text-textcolor '>{CardFooter.heading}</h1> 
           <h5 className='mt-6 font-semibold'>{CardFooter.h2}</h5>
           <p className='mt-6'>{CardFooter.p1}</p>
           <p className='mt-6'>{CardFooter.p2}</p>
           <p className='mt-6'>{CardFooter.p3}</p>
           <p className='mt-6'>{CardFooter.p4}</p>
           <div className='card rounded-xl border-2  border-x-textcolor border-y-textcolor p-16 mt-6 '>
      <p className=' gap-6'>{CardFooter.card}</p>
    </div>
           </div>
           ))}
        </> 
   
    )
}

export default CardFooter
