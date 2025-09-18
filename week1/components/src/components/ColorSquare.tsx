import "./ColorSquare.css"

interface ColorSquareProps {
  color? : string;
  size? : number;
}

const ColorSquare = ({size = 100, color = "red"}: ColorSquareProps) => {
  return (
    <div style={{width:size, height:size, backgroundColor: color}}></div>
  )
}

export default ColorSquare