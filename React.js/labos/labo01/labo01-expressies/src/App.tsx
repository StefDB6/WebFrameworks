const add = (a:number, b:number) => {
  return a + b;
}

const multiply = (a:number, b:number) => {
  return a * b;
}

const App = () => {

    const random : number = Math.random();
    const number1: number = Math.floor(Math.random() * 10)
    const number2: number = Math.floor(Math.random() * 10)
    
    return (
        <>
            <h1>Labo 1</h1>

            <p>{random}</p>
            <p>{number1}</p>
            <p>{number2}</p>

            {random > 0.5 ? <p>{number1} * {number2} : {multiply(number1, number2)}</p> : <p>{number1} +   {number2} : {add(number1, number2)}</p>} 
        </>
    );
}

export default App;