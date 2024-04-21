import { useState } from "react";
import InputComponent from "../components/input";
import OutputComponent from "../components/output";

const Home = () => {
  const [array, setArray] = useState([]);

  function handleInsert() {
    let val = parseInt(prompt("Insert: "));
    setArray([...array, val]);
  }

  function handleDelete() {
    let val = parseInt(prompt("Delete: "));
    let arrayCopy = array.slice();
    let index = arrayCopy.indexOf(val);
    console.log(index);
    if (index !== -1) {
      arrayCopy.splice(index, 1);
    }
    setArray(arrayCopy)
  }
  console.log(array);
  return (
    <main className="main-container">
      <OutputComponent array={array} />
      <InputComponent
        onInsert={() => handleInsert()}
        onDelete={() => handleDelete()}
      />
    </main>
  );
};

export default Home;
