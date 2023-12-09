import React from 'react'

function CardFooter() {
    const x=[
{
    heading:"Learning Sites",
    
    p1:"Don’t risk your great content on bad delivery systems. Let us help you to take advantage of the power of WordPress to rapidly deploy a learning platform tailored to your needs.",
    p2:"Whether you need a simple learning site, a full-on, multi-organizational social-learning hub, or a combined learning and business solution, we can customize your WordPress site and deliver the functionality you need to meet your online-education and business objectives.",
    p3:"Don’t have a WordPress site yet? We can help you with that too",
    p4:"Benefit from Learnbase’s Expert Learning Functionality Curation",
    p5:"With such a wealth of options at your fingertips, selecting the right WordPress components and understanding how they’ll function together can be challenging. We’ve been using WordPress to develop online-learning solutions since 2013, and we’ve learnt a lot! We know what to avoid, and what works well. Based on our experience we’ve curated a selection of WordPress components that provide a broad range of functionality, and work seamlessly together. We call this our Core Stack.",
    p6:"Learnbase’s Core Stack",
    p7:"We can customise your site from our Core Stack, and be your guide in the broader market of WordPress components to find fit-for-purpose functionality for your site.  Click below to find out more about our Core Stack components…"
},
      
    ]
    return (
        
        <>
        {x.map((CardFooter,index) => (
        <div key={index} className='bg-white p-2  lg:w-3/6 float-right lg:m-3 lg:mt-20 lg:p-10  border-l-2 '>
           <h1 className='text-4xl lg:text-start md:text-start text-center mt-8 lg:mt-4 text-textcolor '>{CardFooter.heading}</h1> 
         
           <p className='mt-6'>{CardFooter.p1}</p>
           <p className='mt-6'>{CardFooter.p2}</p>
           <p className='mt-6'>{CardFooter.p3}</p>
           <h5 className='mt-6 font-semibold'>{CardFooter.p4}</h5>
           <p className='mt-6'>{CardFooter.p5}</p>
           <h5 className='mt-6 font-semibold'>{CardFooter.p6}</h5>
           <p className='mt-6'>{CardFooter.p7}</p>
           </div>
           ))}
        </> 
   
    )
}

export default CardFooter
