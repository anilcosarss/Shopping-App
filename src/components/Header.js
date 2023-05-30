import React, { useContext, useEffect, useState } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import { BsBag } from 'react-icons/bs'
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';
import Logo from '../img/logo.svg'

const Header = () => {
  const [isActive,setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  return <div>
    <header className={`${isActive ? 'bg-white py-6 shadow-md' : 'bg-none py-4'} 
    fixed w-full z-10 transition-all shadow`}>
      <div className='container mx-auto flex items-center 
      justify-between '>
      <Link to={'/'}>
        <div> 
          <img className='w-[40px]' src={Logo} alt=''/>
        </div>
      </Link>
      <div className=''>
        <div className='relative' onClick={() => setIsOpen(!isOpen)}>
          <BsBag className='text-2xl cursor-pointer' />
          <div className='bg-red-500 absolute left-2 -bottom-2 text-[12px] 
         w-[18px] h-[18px] text-white rounded-full flex justify-center items-center'>
            {itemAmount}
          </div>
        </div>

      </div>
      </div>
    


    </header>

  </div>;
};

export default Header;
