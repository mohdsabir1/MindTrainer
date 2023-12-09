import React from 'react'
import { Accordion } from 'flowbite-react';
// import { FaCaretDown } from "react-icons/fa6";
function Faq() {
    return (
        <>
        <div className=' lg:w-9/12 bg-[#f7f7f7] mb-14 text-black rounded-lg border-2'>
          <Accordion>
      <Accordion.Panel>
        
        <Accordion.Title className=' text-[#2d2d2d]'>Quick to launch your lessons</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400 w-1/2">
          Getting sophisticated lessons up online quickly is a breeze with The Learnbase Video Lesson Maker.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
          And, if you plan to create multiple lessons within a course sequence you can save time by creating theming and functionality presets with The Learnbase Video Lesson Maker add-ons.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className='text-[#2d2d2d]'>Simple to customise and brand your lessons</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          Lessons colours and formats can be customised. Choose your brand colours and select your choice of lesson formats.
          </p>
         

          </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className='text-[#2d2d2d]'>Use with or without a Learning Management System (LMS)</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          You can easily embed a Learnbase Video Lesson on any page, post or custom content type on your WordPress site using a shortcode.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
          And for those that have an LMS, the good news is that Video Lesson Maker is designed to enhance the learning capabilities of any WordPress LMS such as Learndash. The lessons can be placed by shortcode in any lesson, or topic of an LMS, or can be used independently of an LMS for simpler courses.
          </p>
          </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className='text-[#2d2d2d]'>Monetizing your lessons is a breeze</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          To monetize your lessons, you can either use a Learning Management System to create a course that is made to be purchased OR use a Membership Plugin and offer course pages only to paid members. Your Learning Management System should also integrate with a purchase/subscription shopping cart like Woo Commerce.
          </p>
          
          </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className='text-[#2d2d2d]'>Interactive workbook/video combo gives learners time to pause, and space to reflect</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          You can start and stop your video at times of your choosing, and invite your learners to work through your customised material presented within their personal workbook.
          </p>
         
          </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className='text-[#2d2d2d]'>Single page lessons to help learners maintain focus</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          Because your learners personal workbook lives just below your video your learners can switch seamlessly between interacting with your video and their workbook, enabling them to refer back to earlier notes, explore supporting content, answer questions or jot down notes and thoughts as they watch.
          </p>
         
          </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className='text-[#2d2d2d]'>Maintain learner engagement with personalised feedback</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          Using the Learnbase Video Lesson Maker add-ons enables you to invite learners to submit workbook content, and provide personalised feedback.  For larger organisations there’s even the option of controlling exactly who sees submissions from specific lessons
          </p>
          
          </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className='text-[#2d2d2d]'>Cost effective</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          All your text overlays can be added to your video in the Learnbase Video Lesson Maker’s Studio, so you can save the money and time going back and forth with a third party editor 
          </p>
          <p className="text-gray-500 dark:text-gray-400">
          Your video doesn’t have to be a high-production-value epic!  It can be as simple as an iphone video of you talking to camera
          </p>
          </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className='text-[#2d2d2d]'>Keeps the load light on your server</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          The Learnbase Video Lesson Maker is designed to work seamlessly with Vimeo, so Vimeo does the heavy lifting on the video delivery, not your server!
          </p>
          
          

        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className='text-[#2d2d2d]'>Works on mobile devices</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          Learnbase Video Lessons prompt users to switch to horizontal view for a better mobile experience. So, your learners can check in with lessons on mobile, although we do recommend that you encourage your learners to use larger devices to benefit from the more immersive and participatory learning approach.
          </p>
          
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
    <p className="mb-2 text-gray-500 dark:text-gray-400 p-8">Haven’t produced your video lesson yet? Learnbase can help you develop your learning strategy, and design and produce an online learning video that will make the most of Video Lesson Maker’s unique, experiential online educational approach.</p>
    </div>
           
        </>
    )
}

export default Faq
