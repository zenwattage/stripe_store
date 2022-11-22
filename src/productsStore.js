//sticker = price_1M75cWKdZRZlhpwvWnVVrorF
//T-shirt = price_1M75dkKdZRZlhpwveDWkiELb
//Shaker Bottle = price_1M75eQKdZRZlhpwvDoIvY6lC
const productsArray = [
    {
        id: "price_1M75cWKdZRZlhpwvWnVVrorF",
        title: "Sticker",
        price: 4.99
    },
    {
        id: "price_1M75dkKdZRZlhpwveDWkiELb",
        title: "T-Shirt",
        price: 25.99
    },
    {
        id: "price_1M75eQKdZRZlhpwvDoIvY6lC",
        title: "Shaker Bottle",
        price: 9.99
    }
]

// get items from array 
function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);

    if (productData === undefined) {
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }

    return productData;
}

export { productsArray, getProductData };