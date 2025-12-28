function Buttons({typeClothes, chooseClothes, currSection}) {
    return (
        <div>
            <button className="change" onClick={() => chooseClothes(currSection, typeClothes)}>{typeClothes}</button>
        </div>
    )
}

export default Buttons;