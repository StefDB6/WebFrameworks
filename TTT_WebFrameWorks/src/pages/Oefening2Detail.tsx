import { useContext } from "react";
import DuckieDetail from "../Components/DuckieDetail";
import DuckiesProvider, { DuckieContext } from "../Providers/DuckiesProvider";
import { useParams } from "react-router-dom";
import type { Duckie } from "../types";


const Oefening2Detail = () => {

    // The duckies array here is empty, i think it has to do with me not triggering it explicitely, but i dont have time to figure it out
    // my findDuckie function should work and the DuckieDetail.tsx Page too
    const {duckies} = useContext(DuckieContext)

    const findDuckie = () : Duckie => {
        const params = useParams()
        console.log(duckies)
        const duckie : Duckie | undefined = duckies.find((duckie) => duckie.id == params.id);
        if(duckie == undefined) {
          throw new Error("Did not find duckie, is your link correct?");
        }
        return duckie;
    }


    return (
        <>
            <DuckiesProvider>
                <DuckieDetail duckie={findDuckie()}/>
            </DuckiesProvider>
        </>
    )
}

export default Oefening2Detail;