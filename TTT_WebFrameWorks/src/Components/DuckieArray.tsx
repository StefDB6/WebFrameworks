import { useContext } from "react";
import { DuckieContext } from "../Providers/DuckiesProvider";
import Duckie from "./DuckieImage";

const DuckieArray = () => {

    const {duckies} = useContext(DuckieContext)
    return(
        <div>
            {
                Array.from({length:duckies.length}, (_, i) => <Duckie size={100} duckie={duckies[i]}/>)
            }
        </div>
    )
}

export default DuckieArray