import { NavLink } from "react-router-dom";
import type { Duckie } from "../types";

interface DuckieImageProps {
    size: number;
    duckie : Duckie;
}

const DuckieImage = (props : DuckieImageProps) => {

    const link : string= "/oefening2/" + props.duckie.id
    return(
        <>
        <NavLink to={link}>
            <img src={props.duckie.image} alt={props.duckie.name} style={{width: props.size, height: props.size}}/>
        </NavLink>

        </>
    )
}

export default DuckieImage;