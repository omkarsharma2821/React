import { createContext, useContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cartitems, setCartItems] = useState([]);
    const addItemTOCart = (item) => {
        setCartItems([...cartitems, item])
    }
    return <CartContext.Provider>{children}
        </CartContext.Provider>
};

const useCartContext = () => useContext(CartContext);
export default useCartContext;