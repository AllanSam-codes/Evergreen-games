import React, { useState } from "react";
import "./styles.css";

const gameDB = {
  Sports: [
    { name: " Hockey", rating: "9/10" },
    { name: "Basketball ", rating: "9.5/10" },
    { name: " Tennis ", rating: "8/10" }
  ],
  Action: [
    { name: " Grand Theft Auto: Vice City", rating: "9.5/10" },
    { name: "God of War - II ", rating: "8.8/10" },
    { name: " Spider-Man ", rating: "8/10" }
  ],
  Racing: [
    { name: " Forza Horizon 5", rating: "8/10" },
    { name: "Need For Speed:Most Wantd ", rating: "9.5/10" },
    { name: " Burnout Revengen ", rating: "7.5/10" }
  ]
};
// console.log(gameDB);

export default function App() {
  const [list, setList] = useState("Racing");
  function listClickHandler(list) {
    setList(list);
  }

  return (
    <div className="App">
      <h1> 🕹️️Gaming</h1>
      <p>Checkout my favorite Games. Please select one from below 👇</p>
      <div>
        {Object.keys(gameDB).map(function (list) {
          return (
            <button>
              <span key={list} onClick={() => listClickHandler(list)}>
                {""}
                {list}
              </span>
            </button>
          );
        })}
      </div>
      <hr />

      <div className="container">
        <ul>
          {gameDB[list].map(function (game) {
            return (
              <li className="section" key={game.name}>
                {""}
                <div>{game.name}</div>
                <div>{game.rating}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
