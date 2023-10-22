import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'

const Card = ({ data }) => {
    const context = useContext(ShoppingCartContext)
    
    return (
      <div className='bg-white w-56 h-60 rounded-lg cursor-pointer'>
        <figure className='relative w-full h-4/5 mb-2'>
          <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs px-3 py-0.5 m-2'>
            { data.category.name }
        </span>
          <img className='w-full h-full rounded-lg object-cover' 
            src={ data.images[0] } alt={ data.title } 
        />
          <div 
            className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full p-1 m-2'
            onClick={() => context.setCount(context.count + 1)}>
            +
          </div>
        </figure>
        <p className='flex justify-between'>
          <span className='text-sm font-light'>
          { data.title }
            </span>
          <span className='text-lg font-medium'>
            ${ data.price }
            </span>
        </p>
      </div>
    )
  }
  
  export default Card