interface ColorSquareProps {
    color: string;
    size: number;
}

const ColorSquare = (props: ColorSquareProps) => {

    const handleClick = () => {
        alert(props.color)
    }

    return(
        <div onClick={handleClick} style={{width: props.size, height: props.size, backgroundColor: props.color, display: "inline-block"}}></div>
    )
}

export default ColorSquare