import ActiveSquareArray from "../Components/ActiveSquareArray";
import ColorSquareArray from "../Components/ColorSquareArray";
import SquareActiveProvider from "../Providers/SquareActiveProvider";


const Oefening1 = () => {

    return (
        <>
            <SquareActiveProvider>
                <ActiveSquareArray/>
                <ColorSquareArray amount={50}/>
            </SquareActiveProvider>
        </>
    )
}

export default Oefening1;