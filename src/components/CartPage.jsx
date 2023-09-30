import useCartContext from "../CartContext";

const CartPage = () => {
const {cartitems} = useCartContext();
return(
    <div>
        <div className="container"></div>
    </div>
)
}
export default CartPage;
