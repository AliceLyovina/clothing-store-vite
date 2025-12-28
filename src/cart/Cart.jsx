import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCartItems, getTotalPrice, getTotalQuantity } from "../redux/cartSlice";
import CartItems from "./CartItems";
import iconClearCart from '../assets/icons8-clear-shopping-cart.png';

import './style.css';

const Cart = () => {
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);
    const totalQuantity = useSelector(getTotalQuantity);
    const dispatch = useDispatch();

    return (
        <div>
            <div className="container">
                <h2 className="mainTitle">Ваша корзина:</h2>
                {totalQuantity === 0 && <p>Вы пока не добавили ни одного товара</p>}
                {totalQuantity === 0 &&
                <img alt="sadness" width="80%" src="https://images.unsplash.com/photo-1453227588063-bb302b62f50b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                }

                {totalQuantity > 0 &&
                <div className="cartContainer">
                    <div className="cartItogBlock">
                        <div>
                            <h3 className="cartText">Стоимость заказа: {totalPrice} ₽</h3>
                            <p className="cartText">{totalQuantity} товара(ов)</p>
                        </div>
                        <div className="clearCartBlock" onClick={() => dispatch(clearCart())}>
                            <img src={iconClearCart} alt="an icon clear cart" width="35px" />
                        </div>
                    </div>
                    <hr />

                    {cartItems.map((item, index) => 
                        <CartItems key={index} item={item} />
                    )}
                </div>
                }
            </div>
        </div>
    )
}

export default Cart;