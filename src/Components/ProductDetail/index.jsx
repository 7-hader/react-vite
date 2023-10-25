import './styles.css'
const ProductDetail = () => {
    return (
        <aside className="product-detail flex flex-col fixed right-0 border 
            border-black rounded-lg bg-white w-[360px] h-[calc(100vh-68px)]">
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>

                </div>
            </div>
        </aside>
    )
}

export default ProductDetail