import { Link } from "react-router-dom";

function SectionItem({item}) {
    return (
        <div className="container">
            <Link to={`/${item.section}`} className="menuLink">
                <div className="menuElement">
                    <p className="menuHeading">{item.sectionRu}</p>
                    <img src={item.image} alt="the section" className="menuImg" />
                </div>
            </Link>
        </div>
    )
}

export default SectionItem;