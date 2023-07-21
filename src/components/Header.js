import React from 'react';
import logo from '../assets/img/logo.png'
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header className='py-6 mb-12 border-b'>
      <div className='container mx-auto flex justify-between items-center '>
      <Link to='/'>
        <img src={logo} alt="" />
      </Link>

      <div className='flex items-center gap-6'>
        <Link to ='' className='hover:text-green-400 transition'>
          Log in
        </Link>

        <Link to='' className='bg-green-300 hover:bg-green-500  px-4 py-2 rounded-lg transition'>
          Sign up
        </Link>
      </div>
    </div>
    </header>
  )
};

export default Header;
