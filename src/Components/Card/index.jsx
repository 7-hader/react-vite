import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'

const Card = ({ data }) => {
    const context = useContext(ShoppingCartContext)

    const showProduct = (productDetail) => {
      context.openProductDetail()
      context.setProductToShow(productDetail)
      context.closeCheckoutSideMenu()
    }

    const addProductsToCart = (event, productData) => {
      event.stopPropagation()
      context.setCartProducts([...context.cartProducts, productData])
      context.openCheckoutSideMenu()
      context.closeProductDetail()
    }
    
    const renderIcon = (id) => {
      const isInCart = context.cartProducts.filter(product => product.id === id).length > 0
      
      if(isInCart) {
        return (
          <div 
            className='absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full p-1 m-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-white w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
        )
      }
      else {
        return (
          <div 
            className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full p-1 m-2'
            onClick={(event) => addProductsToCart(event, data)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </div>
        )
      }
    }
    
    return (
      <div 
        className='bg-white w-56 h-60 rounded-lg cursor-pointer'
        onClick={() => showProduct(data)}>
        <figure className='relative w-full h-4/5 mb-2'>
          <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs px-3 py-0.5 m-2'>
            { data.category.name }
        </span>
          <img className='w-full h-full rounded-lg object-cover' 
            src={ data.images[0] } alt={ data.title } 
        />
          {renderIcon(data.id)}
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