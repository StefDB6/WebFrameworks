
import ColorSquare from "./ColorSquare";
import { useContext } from "react";
import { SquareActiveContext } from "../Providers/SquareActiveProvider";

const ColorSquareArray = () => {

    const {activeArray, selectedColor, toggle} = useContext(SquareActiveContext);
    const deleteSelected = () => {
        if(selectedColor != undefined) {
            console.log("removing " + selectedColor.hex)
            toggle(selectedColor)
        }
    }

    return(

        <div>
            <button onClick={() => deleteSelected()}>delete</button>
            {
                Array.from(
                    {length:activeArray.length}, 
                    (_, i) => <ColorSquare size={100} color={activeArray[i]} text={activeArray[i].hex} selected={selectedColor == activeArray[i]}/>
                )
            }
        </div>
    )
}

export default ColorSquareArray