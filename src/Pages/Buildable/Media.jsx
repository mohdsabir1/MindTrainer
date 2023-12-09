import React from 'react'

function CardFooter() {
    const x=[
{
    heading:"Media Production",
   
    p1:"We translate your wisdom and insight into a rich, engaging online educational format that is tailor made to meet the needs of your stakeholders and learners.",
    p2:"We have the learning content and video production capacity to deliver exceptional quality at accessible pricing.",
    p3:"Graphic design and illustration. Learning design tools. Film and animation. Script writing and editorial services. Our team has all the skills and resources that your project needs.",
    p4:"We get results because we take the time to understand your learners and their preferences, and we create with you, according to how people actually learn.",
    card:"Online learning is not the same as in-classroom. Using our educational experience we combine the best of both the science and art of educational delivery. We design and produce transformational online-learning, presenting your content in a way that engages your learners, empowering them with new knowledge and skills, equipping and inspiring them to make real change happen in their own lives."
},
     
    ]
    return (
        
        <>
        {x.map((CardFooter,index) => (
        <div key={index} className='bg-white  lg:w-3/6 float-right lg:m-3 lg:mt-20 lg:p-10  p-2 border-l-2 '>
           <h1 className='text-4xl lg:text-start md:text-start text-center mt-8 lg:mt-4 text-textcolor '>{CardFooter.heading}</h1> 
           <h5 className='mt-6'>{CardFooter.h2}</h5>
           <p className='mt-6'>{CardFooter.p1}</p>
           <p className='mt-6'>{CardFooter.p2}</p>
           <p className='mt-6'>{CardFooter.p3}</p>
           <p className='mt-6'>{CardFooter.p4}</p>
          
      <p className='mt-6'>{CardFooter.card}</p>
    
           </div>
           ))}
        </> 
   
    )
}

export default CardFooter
