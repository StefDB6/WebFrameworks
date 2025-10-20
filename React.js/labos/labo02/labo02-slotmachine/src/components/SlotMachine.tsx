import Slot from "./Slot"


interface SlotMachineProps {
    slots: number
}

const CreateSlots = (slots: number) => {
    const slotArray : any[] = [];
    for (let i = 0; i < slots; i++) {
        slotArray[i] = <Slot value={Math.floor(Math.random() * 5)}/>
    }
    return slotArray
}

const SlotMachine = (props: SlotMachineProps) => {

    const hasWon : boolean = false;

    return(
        <>
            {hasWon ? <p>YOU WON!</p> : <p>You lost.</p>}
            {CreateSlots(props.slots)}
        </>
    )
}

export default SlotMachine