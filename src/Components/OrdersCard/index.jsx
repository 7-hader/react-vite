const OrdersCard = props => {
    const { totalProducts, totalPrice } = props

    return (
        <div className="w-80 flex justify-between items-center border border-black rounded-lg p-4 mb-3">
            <div className="w-full flex justify-between">
                <p className="flex flex-col">
                    <span className="font-light">01.02.23</span>
                    <span className="font-light">{totalProducts} articles</span>
                </p>
                <p className="flex items-center gap-2">                    
                    <span className="font-medium text-2xl">${totalPrice}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </p>
            </div>
        </div>
    )
}

export default OrdersCard