import Footer from "./components/Footer";
import Header from "./components/header";
import List from "./components/list";


const App = () => {
  const items:string[] = [
    "item 1",
    "item 2",
    "item 3"
  ]

  return (
    <>
      <Header title={"Labo 2"} subtitle={"Basic components"}/>
      <List items={items}/> 
      <Footer copy={"Stef De Bie"} year={2025}/>
    </>
  );
}

export default App;