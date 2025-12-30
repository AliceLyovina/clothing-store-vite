import './style.css';
import SectionItem from './SectionItem';
import { sectionsArray } from './sectionsData';

function Sections() {
    return (
        <div className="container">
            <div className="titleText">
                <h2 className="mainTitle">Разделы</h2>
                <p className="mainText">Выберите интересующий вас раздел</p>
            </div>

            <div className="menuParent">
                {sectionsArray.map((item, index) => (
                    <SectionItem key={index} item={item} />
                ))}
            </div>

        </div>
    )
}

export default Sections;