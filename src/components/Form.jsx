import { useState } from "react";
import "./Form.css";

export const Form = ({ onAddPerson }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onAddPerson({ name, phone, city });
        //dane z formularza, trafiają z powrotem do App.jsx
        //przez props (properties) - onAddPerson
      }}
    >
      <div>
        <input
          defaultValue={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
          name="name"
          placeholder="Imię"
        />
      </div>
      <div>
        <input
          defaultValue={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
          type="tel"
          name="phone"
          placeholder="Telefon"
        />
      </div>
      <div>
        <input
          defaultValue={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
          type="text"
          name="city"
          placeholder="Miasto"
        />
      </div>
      <button disabled={name.length === 0}>Zapisz</button>
    </form>
  );
};
