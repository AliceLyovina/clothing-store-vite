import { useState } from "react";
import { data } from "./slidesData";
import './style.css';

function Slides() {
    const [person, setPerson] = useState(0);
    const {image} = data[person];

    const prevPerson = () => {
        setPerson(person => {
            person --;
            if (person < 0) {
                return data.length - 1;
            }
            return person;
        });
    }

    const nextPerson = () => {
        setPerson(person => {
            person ++;
            if (person > data.length - 1) {
                person = 0;
            }
            return person;
        });
    }

    return (
        <div className="container">
            <div className="titleText">
                <h2 className="mainTitle">Наши покупатели</h2>
                <p className="mainText">Счастливые обладатели наших изделий</p>
                <p className="mainText">У нас есть всё для любых случаев!</p>
            </div>

            <div className="sldGeneral">
                    <div className="sldSecond">
                        <button onClick={() => prevPerson()} className="sldBtn sldMoveOne">🢔</button>
                        <img src={image} alt="a person" className="sldImg" />
                        <button onClick={() => nextPerson()} className="sldBtn sldMoveTwo">🢖</button>
                    </div>
            </div>
        </div>
    )
}

export default Slides;