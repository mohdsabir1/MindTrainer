import React from 'react'

function Engagement() {
    const x=[
{
    heading:"Engagement Strategy",
    h2:"Project Stakeholder Alignment & Engagement.",
    p1:"An output of our strategic Discovery Process is your Product Story. The Product Story contextualises and clarifies the challenge, opportunity and vision for your product.  Not only is your Product Story a key input to our product development process, it also becomes a useful tool to engage and align your project team, and a communications framework to support your product marketing initiatives.  Furthermore, we can equip and support you to use your Product Story to engage and excite your broader network of product stakeholders and users. ",
    p2:"Learner Engagement.",
    p3:"Are your clients feeling connected to your work?",
    p4:"Too often, people think that if they build an online course, the audience will come. If the course is good, the audience will return. But the fact is that it’s engagement that matters most of all.  Using proven marketing and ‘selling’ techniques combining story, language, messaging and pace we help you to build and maintain a loyal community of learners.",
   
},
     
    ]
    return (
        
        <>
        {x.map((CardFooter,index) => (
        <div key={index} className='bg-white p-2 lg:w-3/6 float-right lg:m-3 lg:mt-20 lg:p-10  border-l-2 '>
           <h1 className='text-4xl b lg:text-start md:text-start text-center mt-8 lg:mt-4 text-textcolor '>{CardFooter.heading}</h1> 
           <h5 className='mt-6 font-semibold'>{CardFooter.h2}</h5>
           <p className='mt-6'>{CardFooter.p1}</p>
           <h5 className='mt-6 font-semibold'>{CardFooter.p2}</h5>
           <h5  className='mt-6 font-semibold'>{CardFooter.p3}</h5>
           <p className='mt-6'>{CardFooter.p4}</p>
          
           </div>
           ))}
        </> 
   
    )
}

export default Engagement
