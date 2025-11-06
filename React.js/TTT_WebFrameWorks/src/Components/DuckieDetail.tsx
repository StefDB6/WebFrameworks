import { NavLink } from "react-router-dom";
import type { Duckie } from "../types";

interface DuckieDetailProps {
    duckie : Duckie;
}

const DuckieDetail = (props: DuckieDetailProps) => {

    return(
        <>
            <NavLink to="/oefening2">
                <button>Back to duckies</button>  
            </NavLink>

            <div>
                <h1>Name: {props.duckie.name}</h1>
                <p>Id: {props.duckie.id}</p>
                <p>Type: {props.duckie.type}</p>
                <p>Description: {props.duckie.description}</p>
                <p>price: €{props.duckie.price}</p>
                <p>Color Palette: </p>
                <ul>
                {Array.from({length:props.duckie.colorPalette.length}, (_, i) => <li>{props.duckie.colorPalette[i]}</li>)}
                </ul>
                <p>Material Blend: {props.duckie.materialBlend}</p>
                <p>Accessories: </p>
                <ul>
                {Array.from({length:props.duckie.accessories.length}, (_, i) => <li>{props.duckie.accessories[i]}</li>)}
                </ul>
                <p>Mood: {props.duckie.mood}</p>
                <p>Water Behaviour: {props.duckie.waterBehavior}</p>
                <p>Sound Profile: {props.duckie.soundProfile}</p>
                <p>Signature Move: {props.duckie.signatureMove}</p>
                <img src={props.duckie.id} alt={props.duckie.name}/>

            </div>
        </>
    )
}

export default DuckieDetail;