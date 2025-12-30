import { data } from './aboutData';
import './style.css';

function About() {
    return (
        <div className="container">
            <h2 className="mainTitle">О нас</h2>
            <p className="mainText">Немного информации о нашем райском уголке</p>

            <div className="contactParent">
                {data.map((item, index) => (
                    <div className="contactElement" key={index}>
                        <img className="contactImg" src={item.image} alt="the place" />
                        <p>{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default About;