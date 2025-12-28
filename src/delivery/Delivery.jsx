import './style.css';
import { data } from './deliveryData';


function Delivery() {
    return (
        <div className="container">
            <h2 className="mainTitle">Доставка</h2>
            <p className="mainText">У нас самые приятные условия доставки!</p>

            <div className="deliveryParent">
                {data.map((item, index) => (
                    <div key={index} className="deliveryElement">
                        <img src={item.image} alt="a delivery img" width="100" />
                        <h2 className="deliveryTitle">{item.title}</h2>
                        <p className="deliveryText">{item.desc}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Delivery;