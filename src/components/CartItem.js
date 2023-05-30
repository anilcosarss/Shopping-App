import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io'
import { CartContext } from '../contexts/CartContext';

const CartItem = ({ item }) => {
  const {removeFromCart,increaseAmount,decreaseAmount}  = useContext(CartContext)

  // destructring
  const { id, title, image, price, amount } = item;
  return (
    <>
      <div className=''>
        
          <div className='flex w-full min-h-[150px] flex items-center gap-x-4 border-b' >
            <Link to={`/product/${id}`}>
              <img className='max-w-[70px]' alt='#' src={image} />
            </Link>
            <div className='flex w-full flex-col gap-y-2'>
              <div className='flex justify-between mb-2'>
                <Link to={`/product/${id}`} className='text-sm uppercase font-medium
               max-w-[240px] text-primary hover:underline'>
                  {title}
                </Link>
                <div onClick={() => removeFromCart(id)} className='text-xl cursor-pointer'>
                  <IoMdClose className='text-gray-500 hover:text-red-500 transition' />
                </div>
              </div>
              <div className='flex gap-x-5 h-[36px]'>
                <div className='flex flex-1 max-w-[100px] 
                items-center h-full border text-primary font-medium'>
                  <div onClick={() => decreaseAmount(id)} className=' flex-1 border-r flex justify-center items-center cursor-pointer'>
                    <IoMdRemove />
                  </div>
                  <div className='h-full border-x  flex justify-center items-center px-3'>
                    {amount}
                  </div>
                  <div onClick={()=> increaseAmount(id)} className='flex-1 h-full flex justify-center items-center cursor-pointer'>
                    <IoMdAdd />
                  </div>
                </div>
                <div className='flex'>
                  <div className='flex-1 flex justify-around items-center'>$ {price}</div>
                  
                </div>
                <div className='flex-1 flex justify-end items-center text-primary font-medium'>
                    {`$ ${parseFloat(price*amount).toFixed(2)}`}</div>


              </div>
            </div>



          </div>
        


      </div>
    </>
  );
};

export default CartItem;
