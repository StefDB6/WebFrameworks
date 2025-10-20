import "./App.css"

interface Student {
  id    : number;
  name  : string;
  age   : number;
}
const App = () => {
  const numbers : number[] = [
    5,
    2,
    8,
    4,
    5,
    2,
    5,
    1,
    6,
    9,
    7
  ]

  const students : Student[] = [
    {
      id:   1,
      name: "Jef",
      age:  19
    },
    {
      id:   2,
      name: "Jan",
      age:  22
    },
    {
      id:   3,
      name: "Rojis",
      age:  20
    },
    {
      id:   4,
      name: "Andie",
      age:  18
    },
    {
      id:   5,
      name: "Senne",
      age:  25  
    },
    
  ]

    return (
        <>
            <h1>Labo 1 : Lists</h1>
            <h3>Getallenlijst:</h3>
            <ul>
              {numbers.map((number, index) => <li key={index}>{number}</li>)}
            </ul>

            <h3>Studentenlijst:</h3>
            <ol>
              {students.map((student) => <li key={student.id}>{student.name}</li>)}
            </ol>

            <h3>Studenten met J:</h3>
            <ol>
              {students .filter(student => student.name.toLowerCase().includes("j") ? student : null)
                        .map(student => <li key={student.id}>{student.name}</li>)}
            </ol> 

            <h3>Studenten Options:</h3>
            <select name="" id="">
              {students.map((student) => <option key={student.id}>{student.name}</option>)}
            </select>

            <h3>Studenten Table:</h3>
            <table>
              <thead>
                <th>Name</th>
                <th>Age</th>
              </thead>
              {students.map((student) => (
                <tr key={student.id}>
                  <td>{student.name}</td>
                  <td>{student.age}</td>
                </tr>
              ))}
            </table>
        </>
    );
}

export default App;