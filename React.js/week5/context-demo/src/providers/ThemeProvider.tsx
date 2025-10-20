    import { createContext, useState, type ReactNode } from "react";

    export type Theme = "dark" | "light";

    interface IThemeContext {
        theme : Theme
        toggle: () => void
    }

    export const ThemeContext = createContext<IThemeContext>({theme : "light", toggle: () => {}});

    const ThemeProvider = ({children}: {children : ReactNode}) => {
    const [theme, setTheme] = useState<Theme>("light");

    const toggle = () => {
        setTheme(theme => theme === "dark" ? "light" : "dark")
    }
    
    return(
        <ThemeContext.Provider value={{theme : theme, toggle : toggle}}>
            {children}
        </ThemeContext.Provider>
    )
    }

    export default ThemeProvider;