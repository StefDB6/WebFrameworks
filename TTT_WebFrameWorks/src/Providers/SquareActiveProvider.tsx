import type { HexColor } from "rainbow-colors-array-ts";
import { createContext, useState, type ReactNode } from "react";

interface ISquareActiveProvider {
    activeArray: HexColor[]
    select: (color : HexColor) => void;
    selectedColor : HexColor | undefined;
    toggle: (color : HexColor) => void;
}

export const SquareActiveContext = createContext<ISquareActiveProvider>(
    {activeArray: [], selectedColor: undefined, select: (color:HexColor) => {}, toggle: (color : HexColor) => {}}
);

const SquareActiveProvider  = ({children}: {children: ReactNode}) => {
    const [activeArray, setActiveArray] = useState<HexColor[]>([]);
    const [selectedColor, setSelectedColor] = useState<HexColor>();

    const toggle = (color : HexColor) => {
        if(activeArray.find(p => p == color) == null) {
            setActiveArray(activeArray => [...activeArray, color])
        } else {
            remove(color);
        }
    }

    // removal code doesnt work, not sure why, would also fire on just clicking an active square which is wrong.
    // 
    const remove = (color : HexColor) => {
        console.log("here")
        const arrayCopy = activeArray;
        console.log(arrayCopy.map((color) => color.hex))
        arrayCopy.filter((el) => el.hex != color.hex)
        console.log(arrayCopy.map((color) => color.hex))
        setActiveArray(arrayCopy)
    }

    const select = (color : HexColor) => {
        setSelectedColor(color)
    }

    return (
        <SquareActiveContext.Provider value={{ activeArray: activeArray, selectedColor: selectedColor, select : select, toggle: toggle }}>
            {children}
        </SquareActiveContext.Provider>
    )
}

export default SquareActiveProvider;