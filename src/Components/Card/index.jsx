import React from 'react'

function Card() {
    return (
      <div className='bg-white w-56 h-60 rounded-lg cursor-pointer'>
        <figure className='relative w-full h-4/5 mb-2'>
          <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs px-3 py-0.5 m-2'>
            Electronics
        </span>
          <img className='w-full h-full rounded-lg object-cover' 
            src='https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='headphones' 
        />
          <div className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full p-1 m-2'>
            +
          </div>
        </figure>
        <p className='flex justify-between'>
          <span className='text-sm font-light'>
            Headphones
            </span>
          <span className='text-lg font-medium'>
            $300
            </span>
        </p>
      </div>
    )
  }
  
  export default Card