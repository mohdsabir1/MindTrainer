import React from 'react'
import Wall from '../../../assets/Integral/walle.jpg'
import Wall1 from '../../../assets/Integral/walle2.webp'
import Wall2 from '../../../assets/Integral/walle3.webp'
export const Card1 = () => {


    const Cards = [
        {
            img: Wall,
            heaing: 'This is Heading',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nisi totam, vel, distinctio asperiores illo id laborum praesentium libero, aut quo dolores ab inventore quam delectus. Eum quam sed aut possimus tempore nisi rem voluptatum at. Maxime tenetur similique facere quasi, nihil maiores. Suscipit, cum totam voluptates provident reiciendis harum? Eius asperiores expedita quasi!.',
        },
        {
            img: Wall1,
            heaing: 'This is Heading',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nisi totam, vel, distinctio asperiores illo id laborum praesentium libero, aut quo dolores ab inventore quam delectus. Eum quam sed aut possimus tempore nisi rem voluptatum at. Maxime tenetur similique facere quasi, nihil maiores. Suscipit, cum totam voluptates provident reiciendis harum? Eius asperiores expedita quasi!.',
        },
        {
            img: Wall2,
            heaing: 'This is Heading',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nisi totam, vel, distinctio asperiores illo id laborum praesentium libero, aut quo dolores ab inventore quam delectus. Eum quam sed aut possimus tempore nisi rem voluptatum at. Maxime tenetur similique facere quasi, nihil maiores. Suscipit, cum totam voluptates provident reiciendis harum? Eius asperiores expedita quasi!.',
        },
        {
            img: Wall,
            heaing: 'This is Heading',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nisi totam, vel, distinctio asperiores illo id laborum praesentium libero, aut quo dolores ab inventore quam delectus. Eum quam sed aut possimus tempore nisi rem voluptatum at. Maxime tenetur similique facere quasi, nihil maiores. Suscipit, cum totam voluptates provident reiciendis harum? Eius asperiores expedita quasi!.',
        },
        {
        img: Wall1,
        heaing: 'This is Heading',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nisi totam, vel, distinctio asperiores illo id laborum praesentium libero, aut quo dolores ab inventore quam delectus. Eum quam sed aut possimus tempore nisi rem voluptatum at. Maxime tenetur similique facere quasi, nihil maiores. Suscipit, cum totam voluptates provident reiciendis harum? Eius asperiores expedita quasi!.',
         },
         {
          img: Wall2,
          heaing: 'This is Heading',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nisi totam, vel, distinctio asperiores illo id laborum praesentium libero, aut quo dolores ab inventore quam delectus. Eum quam sed aut possimus tempore nisi rem voluptatum at. Maxime tenetur similique facere quasi, nihil maiores. Suscipit, cum totam voluptates provident reiciendis harum? Eius asperiores expedita quasi!.',
        },
    ];

    return (
        <> 
        <div className='lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 md:py-8  rounded-lg lg:p-10 text-justify p-8 '>
        {Cards.map((card, index) => (
                
                <div key={index} className="lg:flex  lg:w-96 lg:h-fit md:h-fit md:mx-auto md:mb-10 rounded-lg md:w-96  border-[1px]  lg:mb-10 lg:mt-8 mb-8">
                    <div className='rounded-lg bg-[#eff2f7]'>
                        <img className='lg:w-fit lg:h-[320px] md:h-[220px] md:w-96 rounded-se-lg  rounded-t-lg' src={card.img} alt={`Carousel ${index + 1}`} />
                        <h2 className='lg:p-2 lg:mb-4 lg:mt-4 text-3xl lg:text-center lg:font-medium md:text-center md:mt-2 text-center mt-3 tracking-tight text-textcolor'>{card.heaing}</h2>
                        <h5 className="lg:p-5 md:p-5 p-4">
                            {card.text}
                        </h5>
                        <div className='lg:w-fit lg:mx-auto lg:mb-5 md:w-fit md:mx-auto md:py-1 md:px-1 w-fit mx-auto py-1 px-2 border-[2px] rounded-lg hover:bg-textcolor hover:text-white border-textcolor'>
                            <button className='lg:p-2 lg:font-semibold text-textcolor hover:text-white '>Read More</button>
                        </div>
    
                    </div>
    
                </div>
            ))}
        </div>
       
        </>
    )
}
