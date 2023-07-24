import React from 'react';
import Image from '../assets/img/house-banner.jpg'
import Search from './Search'
const Banner = () => {
  return (
    <section className='h-full mb-8 xl '>
      <div className='flex lg:flex-row'>
        <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex1 px-4 lg:px-0'>
          <h1 className='text-4xl lg:text-[58px] font-semibold leading-none mb-6'>
            Your <span className='text-green-400'>Dream</span> Home Awaits: Discover Our Spectacular <span className='text-green-400'>House Rentals</span>!
          </h1>
          <p className=' mb-8 mr-8 text-justify'>
          Welcome to our premier house rental website, where your perfect home awaits. We pride ourselves on offering an unmatched selection of top-notch house rentals, meticulously curated to suit your every need. From cozy cottages to luxurious villas, our properties boast exceptional amenities and prime locations, ensuring a seamless and memorable stay. Begin your search today and uncover the key to your dream living space. Your ideal home is just a few clicks away!
          </p>
        </div>
        <div className=' hidden sm:block md:block lg:block justify-end items-end lg:mr-20 lg:pr-12 '>
          <img src={Image} alt="" className='rounded'/>
        </div>
      </div>
      <Search />
    
    </section>

  )
};

export default Banner;
