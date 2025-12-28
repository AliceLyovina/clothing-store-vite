import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../redux/cartSlice";
import ChangeQuantity from "./ChangeQuantity";

const CatalogItem = ({item}) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    return (
        <div className="clothesElement">
            <img src={item.image} alt="an item" className="clothesImg" />
            <h4>{item.name}</h4>
            <p className="clothesDesc">{item.desc}</p>
            <h3>{item.price} ₽</h3>
            <div className="catalogBtns">
                <ChangeQuantity quantity={quantity} setQuantity={setQuantity} />
                <button className="catalogBtnCart" onClick={() => {dispatch(addItemToCart({item, quantity}))}}>В КОРЗИНУ</button>
            </div>
        </div>
    )
}

export default CatalogItem;