import { createContext, useEffect, useState, type ReactNode } from "react";
import type { Duckie } from "../types";

interface IDuckieContext {
    duckies: Duckie[];
    reload: () => void;
}

export const DuckieContext = createContext<IDuckieContext>({duckies : [], reload: () => {}});

const DuckiesProvider = ({children}: {children : ReactNode}) => {

    const [duckies, setDuckies] = useState<Duckie[]>([])
    const [trigger, setTrigger] = useState<number>(0);
    // Havent implemented showing loading and error on the page, no time
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("")

    useEffect(() => {
        let ignore = false;

        const fetchDuckies = async() => {
            setError("");
            setLoading(true)
            try {
                const response = await fetch("https://raw.githubusercontent.com/similonap/json/refs/heads/master/duckies/duckies.json")
                if(response.ok) {
                    const duckies : Duckie[] = await response.json();
                    if(!ignore) {
                        setDuckies(duckies)
                    } else {
                        setError("Error fetching duckies")
                    }
                }
            } catch (e: any) {
                setError(e.message)
            }

            setLoading(false)
        }
        fetchDuckies();

        return() => {
            ignore = true;
        }
    }, [trigger])

    const reload = () => {
        setTrigger(trigger => trigger + 1)
    }


    return(
        <DuckieContext.Provider value={{duckies : duckies, reload: reload}}>
            {children}
        </DuckieContext.Provider>
    )
}

export default DuckiesProvider;