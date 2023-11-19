import { createContext, useEffect, useState } from 'react'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {
    // Get products
    const [items, setItems] = useState(null)
    const [filteredItems, setFilteredItems] = useState(null)
    const [searchByTitle, setSearchByTitle] = useState(null)
    const [searchByCategory, setSearchByCategory] = useState(null)
    
    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
        .then(response => response.json())
        .then(data => setItems(data))
    }, [])
    
    const filterItemsByTitle = (items, searchByTitle) => {
        return items?.filter(
            item => item.title.toLowerCase()
                    .includes(searchByTitle.toLowerCase())
        )
    }

    const filterItemsByCategory = (items, searchByCategory) => {
        return items?.filter(
            item => item.category.name.toLowerCase()
                    .includes(searchByCategory.toLowerCase())
        )
    }

    const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
        if (searchType === 'BY_TITLE') {
            return filterItemsByTitle(items, searchByTitle)
        }
        if (searchType === 'BY_CATEGORY') {
            return filterItemsByCategory(items, searchByCategory)
        }
        if (searchType === 'BY_CATEGORY_AND_TITLE') {
            return filterItemsByCategory(items, searchByCategory)
                    .filterItemsByTitle(items, searchByTitle)
        }
        if (!searchType) {
            return items
        }
    }

    useEffect(() => {        
        if (searchByTitle && searchByCategory) 
        setFilteredItems(filterBy('BY_CATEGORY_AND_TITLE', items, searchByTitle, searchByCategory))

        if (searchByTitle && !searchByCategory)
        setFilteredItems(filterBy('BY_TITLE', items, searchByTitle, searchByCategory))

        if (!searchByTitle && searchByCategory)
        setFilteredItems(filterBy('BY_CATEGORY', items, searchByTitle, searchByCategory))

        if (!searchByTitle && !searchByCategory)
        setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory))

    }, [items, searchByTitle, searchByCategory])

    console.log('Filter: ', filteredItems);

    // Shopping Cart - Increment quantity
    const [count, setCount] = useState(0)

    // Product Detail - Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    // Checkout Side Menu - Open/Close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

    // Product Detail - Show product
    const [productToShow, setProductToShow] = useState({})

    // Shopping Cart - Add products to cart
    const [cartProducts, setCartProducts] = useState([])

    // Shopping Cart - Order
    const [order, setOrder] = useState([])

    return (
        <ShoppingCartContext.Provider value={{
            items,
            setItems,
            filteredItems,
            searchByTitle,
            setSearchByTitle,
            searchByCategory,
            setSearchByCategory,
            count,
            setCount,
            isProductDetailOpen,
            openProductDetail,
            closeProductDetail,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            order,
            setOrder
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}