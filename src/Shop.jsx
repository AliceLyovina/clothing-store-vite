import './App.css';
import Slides from './slides/Slides';
import Sections from './sections/Sections';
import mainPhoto from './assets/main.avif';

function Shop() {
    return (
        <div>
            <div className="container">
                <div className="titleText">
                    <h1>SHOP-SHOP</h1>
                    <p className="mainText">Добро пожаловать в наш уютный уголок.</p>
                    <p className="mainText">Тут Вы всегда сможете найти себе что-то по душе!</p>
                </div>

                <div className="mainImgCont">
                    <img className="mainImg" src={mainPhoto} alt="main"></img>
                </div>
            </div>

            <Sections />

            <div>
                <Slides />
            </div>
        </div>
    )
}

export default Shop;