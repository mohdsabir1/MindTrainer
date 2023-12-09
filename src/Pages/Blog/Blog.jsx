import React, { useState, useEffect } from 'react';
// import { FilmingCard } from '../Blog/BlogsCard/FilmingCard/FilmingCard';
import { HealthCard } from '../Blog/BlogsCard/HealthCard/HealthCard';
import {FilmingCard} from '../Blog/BlogsCard/FilmingCard/FilmingCard'
import {IntegralCard} from '../Blog/BlogsCard/IntegralCard/IntegralCard'
import {VideoCard} from '../Blog/BlogsCard/VideoCard/VideoCard'
import { Pagination } from 'flowbite-react';
// import { IntegralCard } from './BlogsCard/IntegralLearning/IntegralCard';

export const Blog = () => {
  const [selectOption, setSelectOption] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [content, setContent] = useState(null);
  const itemsPerPage = 1; // Number of items per page

  useEffect(() => {
    setContent(getContent(selectOption, currentPage));
  }, [selectOption, currentPage]);

  const handleSelectChange = (event) => {
    setSelectOption(event.target.value);
    setCurrentPage(1); // Reset page number on option change
  };

  const getContent = (option, page) => {
    switch (option) {
      case 'Filmimg':
       
        return getFilmingContent().slice((page - 1) * itemsPerPage, page * itemsPerPage);
      case 'Health':
       
        return getHealthContent().slice((page - 1) * itemsPerPage, page * itemsPerPage);
      case 'Integral':
       
        return getIntegralContent().slice((page - 1) * itemsPerPage, page * itemsPerPage);
      case 'Video':
       
        return getVideoContent().slice((page - 1) * itemsPerPage, page * itemsPerPage);
     
      default:
        return getAllContent().slice((page - 1) * itemsPerPage, page * itemsPerPage);
    }
  };

  const getAllContent = () => {
    
    return [
      <FilmingCard key="1" />,
      <HealthCard key="2" />,
      <IntegralCard key="3" />,
      <VideoCard key='4'/>,
         
    ];
  };

  const getFilmingContent = () => {
   
    return [
      <FilmingCard key="1" />,
      <FilmingCard key="2" />,

      
    ];
  };

  const getHealthContent = () => {
  
    return [
      <HealthCard key="1" />,
      <HealthCard key="2" />,
  
      
    ];
  };
  const getIntegralContent = () => {
  
    return [
      <IntegralCard key="1" />,
      <IntegralCard key="2" />,
    
      
    ];
  };
  const getVideoContent = () => {
  
    return [
      <VideoCard key="1" />,
      <VideoCard key="2" />,

      
    ];
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  
    window.scrollTo({ top: 10, behavior: 'smooth' });
  };

  return (
    <>
      <div className='bg-bgcolor lg:h-52'>
        <div className='lg:w-fit lg:ml-12 lg:p-14 md:w-fit md:py-10 w-fit py-4 ml-10  '>
          <h1 className='lg:text-5xl lg:px-4 lg:py-1 md:px-5 md:py-2 md:ml-24 md:text-4xl px-3 py-1 rounded-lg bg-textcolor text-white'>Blog</h1>
        </div>
      </div>
      <div className='border-[1px] border-gray-400 lg:mt-4 md:mt-5 mt-5' >
        <div className='lg:ml-[80px] lg:w-96 lg:p-10 text-center md:py-4 md:w-72 md:mx-auto mx-auto p-4 w-52'>
          <select value={selectOption} onChange={handleSelectChange} name="Article" id="" className='lg:w-full md:text-md w-full text-smborder-[1px] border-textcolor'>
            <option value="All Articles" className='text-textcolor md:text-md text-sm'>All Articles</option>
            <option value="Filmimg" className='text-textcolor md:text-md text-sm'>Filmimg</option>
            <option value="Health" className='text-textcolor md:text-md text-sm'>Health</option>
            <option value="Integral" className='text-textcolor md:text-md text-sm'>Integral Learning</option>
            <option value="Video" className='text-textcolor md:text-md text-sm'>Video Lesson Maker</option>
            {/* Add options for other categories if needed... */}
          </select>
        </div>
      </div>
      <div>
        {/* Display content */}
        {content && content.map((item, index) => (
          <div key={index} className='mt-4'>
            {item}
          </div>
        ))}
      </div>
      {/* Pagination */}
      {content && selectOption === 'All Articles' &&  (
        <div className='flex justify-center mt-4'>
          <Pagination className='border-none'
            layout="pagination"
            currentPage={currentPage}
            totalPages={Math.ceil(getAllContent().length / itemsPerPage)}
            onPageChange={handlePageChange}
            
            showIcons
            // This `preventDefault` is hypothetical and depends on your Pagination component
            preventDefault
          />
        </div>
      )}
    </>
  );
};

export default Blog;
