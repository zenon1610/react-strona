import React, { StrictMode } from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

//const element = React.createElement("a", { href: "" }, "Google"); //Pierwszy sposob
//const elementInJSX = <a href="">GoogleJSX</a>;
//console.log(elementInJSX);
//console.log(<h1>Hej!</h1>); // => React.createElement("a",{href:"","Hej!"})

// const currentDate = new Date();
// const hours = currentDate.getHours();
// const minutes = currentDate.getMinutes();

// // function Name(props) {
// //   return <a href={props.name}>{props.name}</a>;
// // }

// // function Tel(props) {
// //   return <a href={props.telprops}>{props.telprops}</a>;
// // }

// // function City(props) {
// //   return <a href={props.city}>{props.city}</a>;
// // }

// const element = (
//   <>
//     {/* {hours} : {minutes}
//     {numberContent}
//     <h1>{x}</h1>
//     <h1>{getRandomNumber()}</h1>
//     <h2>
//       {person.name},tel: {phoneNumber}
//     </h2> */}
//     <button>Napis</button>
//   </>
// );

// const numberContent = 13;
// const x = 55;
// const phoneNumber = <a href={person.phone}>{person.phone}</a>;

// function getRandomNumber() {
//   return Math.round(Math.random() * 100);
// }

// console.log(hours, minutes);
