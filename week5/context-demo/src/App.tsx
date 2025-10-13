import { useContext, useState } from "react";
import ThemeProvider, { ThemeContext, type Theme } from "./providers/ThemeProvider";
import PokemonList from "./components/PokemonList";
import RandomPokemon from "./components/RandomPokemon";
import { PokemonContext } from "./providers/PokemonProvider";

const getThemeStyle = (theme: string, color: string) => {
    return { backgroundColor: theme === "dark" ? "black" : "white", padding: 10, border: "10px solid " + color }
}

const ComponentA = () => {
  const {theme} = useContext(ThemeContext)

  return (
    <div style={getThemeStyle(theme, "red")}>
      <ComponentB/>
    </div>
  );
};
const ComponentB = () => {
  const {theme} = useContext(ThemeContext)

  return (
    <div style={getThemeStyle(theme, "green")}>
      <ComponentC/>
    </div>
  );
};
const ComponentC = () => {
  const {theme} = useContext(ThemeContext)

  return (
    <div style={getThemeStyle(theme, "blue")}>
      <ComponentD/>
    </div>
  );
};
const ComponentD = () => {
  const {theme} = useContext(ThemeContext)

  return <p style={{color: theme === "dark" ? "white" : "black"}}>{theme}</p>;
};

const App = () => {
  const {toggle} = useContext(ThemeContext)
  const {reload} = useContext(PokemonContext)
  return (
    <>
      <button onClick={ () => toggle() }>Toggle theme!</button>
      <ComponentA/>

      <div style={{display:"flex"}}>
        <div><PokemonList/></div>
        <div>
        <button onClick={() => reload()} style={{height:'20px'}}>Reload</button>
        <RandomPokemon/>
        </div>
      </div>
    </>
  );
};
export default App;