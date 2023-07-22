import React, { useContext } from 'react';
import CountryDropdown from './CountryDropdown'
import PropertyDropdown from './PropertyDropdown'
import PriceRangeDropdown from './PriceRangeDropdown'
import {RiSearch2Line} from 'react-icons/ri'
import { HouseContext } from './HouseContext';
const Search = () => {

  const {handleClick} = useContext(HouseContext)
  
  return (
    <div className='px-[30px] py-6 max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-x-3 relative lg:-top-1 lg:shadow-1 rounded-lg'>
      <CountryDropdown />
      <PropertyDropdown />
      <PriceRangeDropdown /> 
      <button onClick = {()=>handleClick()} className='bg-green-300 hover:bg-green-500 transition w-full lg:max-w-[162px] h-10 rounded-lg flex justify-center items-center text-lg'>
        <RiSearch2Line/>
      </button>
    </div>
  )
};

export default Search;
