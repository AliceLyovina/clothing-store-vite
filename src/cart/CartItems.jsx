import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../redux/cartSlice";
import { data } from "../catalog/clothesData";
import iconTrash from '../assets/icons8-trash.png';

const CartItems = ({item}) => {
    const dispatch = useDispatch();
    const cartClothes = data.find(element => element.id === item.itemId);

    return (
        <div className="сontainer">
            <div className="cartItemsContainer">

                <div className="cartImgBlock">
                    <img className="cartImg" src={cartClothes.image} alt="an item" width="70px" />
                </div>

                <div className="cartDesc">
                    <p className="cartText">{cartClothes.name}</p>
                    <div className="cartPrice">
                        <p className="cartText">{item.quantity} шт</p>
                        <p className="cartText">{cartClothes.price * item.quantity} ₽</p>
                        <div onClick={() => dispatch(removeItemFromCart({cartItemId: item.id}))}>
                            <img className="icon" src={iconTrash} alt="an icon trash" />
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default CartItems;