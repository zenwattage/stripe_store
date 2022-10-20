const productsArray = [
    {
        id: 1,
        title: "Coffee",
        price: 4.99
    },
    {
        id: 2,
        title: "Tea",
        price: 3.99
    },
    {
        id: 3,
        title: "Camera",
        price: 499.99
    },
    {
        id: 4,
        title: "Luke",
        price: 19.99
    },
    {
        id: 5,
        title: "Roslyn",
        price: 19.99
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