import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import OrderCard from '../OrderCard'
import { totalPrice } from '../../Utils'
import './styles.css'

const CheckputSideMenu = () => {
    const context = useContext(ShoppingCartContext)

    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id != id)
        context.setCartProducts(filteredProducts)
    }

    return (
        <aside 
            className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden' } checkout-site-menu flex-col fixed right-0 border 
            border-black rounded-lg bg-white w-[360px] h-[calc(100vh-68px)]`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
                    class="w-6 h-6 cursor-pointer"
                    onClick={() => context.closeCheckoutSideMenu()}>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>

                </div>
            </div>
            <div className='overflow-y-auto px-6'>
            {
                context.cartProducts.map(product => (
                    <OrderCard 
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        imageUrl={product.images?.[0]}
                        price={product.price}
                        handleDelete={handleDelete}
                    />
                ))
            }
            </div>
            <div className='px-6'>
                <p className='flex justify-between items-center'>
                    <span className='font-light'>Total:</span>
                    <span className='font-medium text-2xl'>${totalPrice(context.cartProducts)}</span>
                </p>
            </div>
        </aside>
    )
}

export default CheckputSideMenu