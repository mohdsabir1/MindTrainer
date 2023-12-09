import React from 'react'

function Applications() {
    const x=[
{
    heading:"Custom Coding & Applications",
    h2:"Online-Learning Strategies that Start with You.",
    p1:"Learnbase is helping organizations pioneer learning that is directly embedded in workplace applications. We strategize, design and custom build these applications from the ground up. While our modular WordPress sites can help you deploy a site cheaply and efficiently, our fully custom solutions enable us to give you full control over every aspect of initial development and future emerging requirements. ",
    p2:"With expertise in Drupal, React, Lumen and Angular, we can help visualize solutions to match requirements and provide options to match your budget",
},
       
    ]
    return (
        
        <>
        {x.map((CardFooter,index) => (
        <div key={index} className='bg-white p-2 lg:w-3/6 float-right lg:m-3 lg:mt-20 lg:p-10  border-l-2 '>
           <h1 className='text-4xl text-center lg:text-start md:text-start mt-8 lg:mt-4 text-textcolor '>{CardFooter.heading}</h1> 
           <h5 className='mt-6 font-semibold'>{CardFooter.h2}</h5>
           <p className='mt-6'>{CardFooter.p1}</p>
           <p className='mt-6'>{CardFooter.p2}</p>
          
          
           </div>
           ))}
        </> 
   
    )
}

export default Applications
