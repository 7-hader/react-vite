/**
 * Calculates the total price of an order
 * @param {Array} products cardProduct: Array of Objects
 * @returns {Number} Total price
 */
export const totalPrice = (products) => {
    return products.reduce((sum, product) => sum + product.price, 0)
    // let sum = 0
    // products.forEach(product => sum += product.price)
    // return sum
}