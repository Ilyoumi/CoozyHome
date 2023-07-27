import React, {useContext}from 'react';
import { HouseContext  } from './HouseContext';
import House from './House'
import { Link } from 'react-router-dom';
import {ImSpinner2} from 'react-icons/im'
const HouseList = () => {
  const {houses, loading} = useContext(HouseContext)
  

  if(houses.length < 1){
    return <div>Sorry, nothing found</div>
  }
  return (
    <section className='mb-20 '>
      <div className="container mx-auto">
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-10'>
          {houses.map((house, index) => {
            return (
              <Link  to={`/property/${house.id}`} key={index}>
                <House  house={house}/>
              </Link>
    )
          })}
        </div>
      </div>
    </section>
  )
};

export default HouseList;
