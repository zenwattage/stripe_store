import { createContext, useState } from 'react';
import { productsArray } from '../productsStore';

export const CartContext = createContext({
    items: [],
    getProductQuantity: () => { },
    addOneToCart: () => { },
    removeOneFromCart: () => { },
    deleteFromCart: () => { },
    getTotalCost: () => { },
});


export function CartProvider({ children }) {
    //make state specific to the cart
    const [cartProducts, setCartProducts] = useState([]);

    // [{ id:1, quantity:2 }, { id:2, quantity:1 }]

    function getProductQuantity(id) {

        const quantity = cartProducts.find(product => product.id === id)?.quantity;

        if (quantity === undefined) {
            return 0;
        }
    }

    function addOneToCart(id) {
        const quantity = getProductQuantity(id);

        if (quantity === 0) { //product is not in cart
            setCartProducts(
                [
                    ...cartProducts,
                    {
                        id: id,
                        quantity: 1
                    }
                ]
            )

        } else {
            setCartProducts(
                cartProducts.map(
                    product =>
                        product.id === id //if condition
                            ? {
                                ...product, quantity: product.quantity + 1 //if statement is false
                            } : product //if statement is true
                )

            )       //product is in cart
        }
    }

    function removeOneFromCart(id) {
        const quantity = getProductQuantity(id);
        if (quantity == 1) {
            deleteFromCart(id)
        } else {
            setCartProducts(
                cartProducts.map(
                    product =>
                        product.id === id //if condition
                            ? {
                                ...product, quantity: product.quantity + 1 //if statement is false
                            } : product //if statement is true
                )
            )
        }
    }


    function deleteFromCart(id) {
        setCartProducts(
            //[] if an ojbect meets condition, add the object to the array
            //[product1, product2, product3]
            cartProducts =>
                cartProducts.filter(currentProduct => {
                    return currentProduct.id !== id;
                })
        )
    }



    const contextValue = {
        items: [],
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost
    }

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}

//CODE DOWN HERE


// Context (car, addToCart, removeCart)
// Provide -> gives your React app access to all things in your context

