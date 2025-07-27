import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { PersonInfo } from "./components/PersonInfo";
import { Form } from "./components/Form";

const initialPeople = [
  {
    id: crypto.randomUUID(),
    name: "Filip",
    phone: 123456789,
    city: "Kraków",
  },
  {
    id: crypto.randomUUID(),
    name: "Kacper",
    phone: 123123123,
    city: "Częstochowa",
  },
  { id: crypto.randomUUID(), name: "Karol", phone: 1000111222 },
];

function App() {
  const [isFormShown, setIsFormShown] = useState(false);
  const [people, setPeople] = useState(initialPeople);
  const handleShowFormClick = () => setIsFormShown(true);

  const addPerson = (data) => {
    const newPeople = [...people, data];
    setPeople(newPeople);
    setIsFormShown(false);

    //person.push(data);
    //console.log(data);
    //odbiera dane z Form jako obiekt i je wyswietla
  };

  return (
    <>
      <h1>Lista kontaktów</h1>
      {isFormShown ? (
        <Form onAddPerson={addPerson} />
      ) : (
        //
        <button onClick={handleShowFormClick}>Dodaj</button>
      )}
      <ul>
        {people.map((person) => (
          <PersonInfo
            key={person.id}
            name={person.name}
            phone={person.phone}
            city={person.city}
          ></PersonInfo>
        ))}
      </ul>
      <button>Napis</button>
    </>
  );
}

export default App;
