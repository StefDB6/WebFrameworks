import "./App.css"

// const App = () => {

// }

const getGreeting = () => {
  return "Hallo iedereen!"
}

const reactLogo = "./assets/react.svg"
function App() {
  const title : string = "World"
  const random: number = Math.random()

  return (
    <>
      <div className="hello">
        <h1>Hello {title.toUpperCase()}! - world is een const</h1>

        {random > 0.5 ? <p>GEWONNEN! {random}</p> : <p>verloren :( {random}</p>} 
        <p>Hieronder alleen als je wint</p>
        {random > 0.5 && <p>GEWONNEN! {random}</p>} 

        <img src="/vite.svg" alt="vite logo" />
        <img src={reactLogo} alt="react logo" />
        <p>Dit is een function call: {getGreeting()}</p>
      </div>
    </>
  )
}

export default App;