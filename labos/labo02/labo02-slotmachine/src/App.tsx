import "./App.css"
import SlotMachine from "./components/SlotMachine"

const App = () => {
    return (
        <>
            <h1>Labo 1 : Slots</h1>

            <SlotMachine slots={4}/>
        </>
    );
}

export default App;