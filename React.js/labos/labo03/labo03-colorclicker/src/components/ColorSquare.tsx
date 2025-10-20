interface ColorSquareProps {
    color: string;
    size: number;
}

const ColorSquare = (props: ColorSquareProps) => {

    const handleClick = () => {
        alert(props.color)
    }

    return(
        <div style={
            {width: props.size, height: props.size, backgroundColor: props.color, display: "inline-block"}
        } onClick={handleClick}></div>
    )
}

export default ColorSquare