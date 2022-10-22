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

    // [{ id:, 1 quantity: 2 }]

    function getProductQuantity(id) {

        const quantity = cartProducts.find(product => product.id === id)?.quantity;

        if (quantity === undefined) {
            return 0;
        }
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

