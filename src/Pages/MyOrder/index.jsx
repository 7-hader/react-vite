import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'
import Layout from '../../Components/Layout'
import OrderCard from '../../Components/OrderCard'

function MyOrder() {
  const context = useContext(ShoppingCartContext)
  const currentPath = window.location.pathname
  let currentIndex = currentPath.substring(currentPath.lastIndexOf('/')+1)
  if (currentIndex === 'last') 
    currentIndex = context.order?.length-1

  return (
    <Layout>
      <div className='flex justify-center items-center relative w-80 mb-6'>
        <Link to='/my-orders' className='absolute left-0'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </Link>
        <h1 className='font-medium text-xl'>My Order</h1>
      </div>  
      <div className='flex flex-col w-80'>
      {
        context.order?.[currentIndex]?.products.map(product => (
          <OrderCard 
            key={product.id}
            title={product.title}
            imageUrl={product.images?.[0]}
            price={product.price}
          />
        ))
      }
      </div>
    </Layout>
  )
}

export default MyOrder