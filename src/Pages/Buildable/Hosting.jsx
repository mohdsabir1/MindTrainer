import React from 'react'

function CardFooter() {
    const x=[
{
    heading:"Hosting & Optimisation",
   
    p1:"As the architect of your solution, and with a focus solely on learning sites, we’re best positioned to deliver worry-free hosting and optimization. We set you up on secure and rapidly scalable Canadian servers and provide monthly maintenance, updates, backups and performance checks to ensure your site stays happy, healthy, speedy and safe",
    p2:"We monitor your site so that we can gradually scale the server’s power as your learner and visitor community increases (and can also make sure you have plenty of capacity for those special course and product launch days)",
    p3:"Our support team is fast, friendly and responsive.",
   
},
       
    ]
    return (
        
        <>
        {x.map((CardFooter,index) => (
        <div key={index}className='bg-white p-2 lg:w-3/6 float-right lg:m-3 lg:mt-20 lg:p-10  border-l-2 '>
           <h1 className='text-4xl lg:text-start md:text-start text-center mt-8 lg:mt-4 text-textcolor '>{CardFooter.heading}</h1> 
           <h5 className='mt-6'>{CardFooter.h2}</h5>
           <p className='mt-6'>{CardFooter.p1}</p>
           <p className='mt-6'>{CardFooter.p2}</p>
           <p className='mt-6'>{CardFooter.p3}</p>
          
           </div>
           ))}
        </> 
   
    )
}

export default CardFooter
