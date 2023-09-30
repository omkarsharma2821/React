import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cartitems, setCartItems] = useState([]);
    const addItemToCart = (item) => {
        setCartItems([...cartitems, item])
    }
    return <CartContext.Provider value={{cartitems, setCartItems, addItemToCart}}>
        {children}
        </CartContext.Provider>
};

const useCartContext = () => useContext(CartContext);
export default useCartContext;