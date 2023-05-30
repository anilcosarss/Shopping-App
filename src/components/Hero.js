import React from 'react';

import WomanImg from '../img/woman_hero.png'
import { Link } from 'react-router-dom';

const Hero = () => {
  return <section className='bg-hero  lg:h-[800px]
  bg-no-repeat bg-cover bg-center py-24 '>

    <div className='container mx-auto flex justify-around items-center'>
      <div className='flex flex-col justify-center font-semibold uppercase'>
        <div className='flex items-center gap-x-2'>
        <div className='w-10 h-[2px] bg-red-500'></div>New Trend

        </div>
        <h1 className='text-[70px] leading-[1.1] font-light mb-4'>AUTUMN SALE STYLISH <br />
          <span className='font-semibold'>WOMENS</span>
        </h1>
        <Link className='uppercase font-semibold border-b-2 border-primary self-start ' to={'/'}>Discover More..</Link>
      </div>
      <div >
        <img className='hidden lg:block' src={WomanImg} />
      </div>

    </div>

  </section>;
};

export default Hero;
