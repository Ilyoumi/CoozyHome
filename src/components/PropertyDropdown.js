
import React, {useState, useContext} from 'react';
import {RiHome5Line, RiArrowDownSLine, RiArrowUpLine} from 'react-icons/ri'
import {Menu} from '@headlessui/react'
import {HouseContext} from './HouseContext'

const PropertyDropdown = () => {
  const {property, setProperty, properties} = useContext(HouseContext)
  console.log(property)
  const[isOpen, setIsOpen] = useState(false)
  return (
    <Menu as='div' className='dropdown relative'>
      <Menu.Button onClick={()=> setIsOpen(!isOpen)} className='dropdown-btn w-full text-left'>
        <RiHome5Line className='dropdown-icon-primary'/>
        <div>
          <div className='text-[15px] font-medium leading-tight'> {property}</div>
          <div className='text-[13px]'>Select your property </div>
          </div>
          {
            isOpen? (
              <RiArrowUpLine className='dropdown-icon-secondary'/>
            ) : (
              <RiArrowDownSLine className='dropdown-icon-secondary'/>
            )
          }
        
      </Menu.Button>
      <Menu.Items className='dropdown-menu'>
          {properties.map((property, index) => {
            return (
              <Menu.Item onClick={()=>setProperty(property)} className='cursor-pointer hover:text-green-500 transition' as='li' key={index}>
              {property}
            </Menu.Item>
            )
          })}

      </Menu.Items>
    </Menu>
  )
};

export default PropertyDropdown;
