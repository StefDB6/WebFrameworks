import type { HexColor } from "rainbow-colors-array-ts";
import { useContext, useState } from "react";
import { SquareActiveContext } from "../Providers/SquareActiveProvider";

interface ColorSquareProps {
    color: HexColor;
    size: number;
    text: string;
    selected : boolean;
}

const ColorSquare = (props: ColorSquareProps) => {
    const {toggle, select} =  useContext(SquareActiveContext)
    const handleClick = () => {
        toggle(props.color)
        if(props.text.length > 0) {
            select(props.color)
        }
    }

    const borderStyle : string = props.selected ? "1px solid black" : "";
    return(
        <div style={
            {width: props.size, height: props.size, background: props.color.hex, display: "inline-block", border: borderStyle}
        } onClick={() => handleClick()}>
            <p>{props.text}</p>
        </div>
    )
}

export default ColorSquare