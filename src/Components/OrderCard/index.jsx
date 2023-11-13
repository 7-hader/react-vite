const OrderCard = props => {
    const { title, imageUrl, price } = props

    return (
        <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2">
                <figure className="w-20 h-20">
                    <img className="w-full h-full rounded-lg object-cover" 
                        src={imageUrl} alt={title} 
                    />
                </figure>
                <p>{title}</p>
            </div>
            <div className="flex items-center gap-2">
                <p>{price}</p>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
                    class="w-6 h-6 cursor-pointer">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>
        </div>
    )
}

export default OrderCard