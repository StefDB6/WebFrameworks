import { rainbow } from "rainbow-colors-array-ts";
import ColorSquare from "./ColorSquare";

interface ColorSquareArrayProps {
    amount: number;
}

const ColorSquareArray = (props: ColorSquareArrayProps) => {
    const rainbowArray = rainbow(props.amount);
    return(
        <div>
            {
                Array.from({length:rainbowArray.length}, (_, i) => <ColorSquare size={50} color={rainbowArray[i]} text="" selected={false}/>)
            }
        </div>
    )
}

export default ColorSquareArray