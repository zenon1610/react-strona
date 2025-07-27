import { useState } from "react";
import { Tel } from "./Tel";
import "./PersonInfo.css";

export function PersonInfo(props) {
  let stateArray = useState(false);
  let isExpanded = stateArray[0];
  let setIsExpanded = stateArray[1];

  const button = (
    <button
      onClick={() => {
        setIsExpanded(!isExpanded);
      }}
    >
      {isExpanded ? "Ukryj" : "Pokaz"}
    </button>
  );
  return (
    <>
      <li className={isExpanded ? "active" : ""}>
        <h2>{props.name}</h2>
        {button}
        {isExpanded && (
          <>
            <h3>
              Tel: <Tel phone={props.phone}></Tel>
            </h3>
            {props.city && <h3>Miasto: {props.city}</h3>}
          </>
        )}

        {
          // Jeśli props.city == true to wyświetl <h3>Miasto:...</h3> jeśli false, to zwróc undefined pod props.city
        }
        {
          //props.city == undefined ? null : <h3>Miasto: {props.city}</h3>
        }
      </li>
    </>
  );
}
