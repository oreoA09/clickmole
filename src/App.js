import React, { useState } from "react";
import MoleContainer from "./MoleContainer";
import "./App.css";

function App() {
  let [score, setScore] = useState(0);
  let [level, setLevel] = useState(0);

  const createMoleHill = () => {
    let hills = [];

    for (let i = 0; i < 6; i++) {
      hills.push(<MoleContainer key={i} setScore={setScore} score={score} setLevel={setLevel} level={level}/>);
    }
    return <div>{hills}</div>;
  };



  // console.log(score)

  return (
    <div className="App">
      <h1>Click-a-Mole!</h1>
      <div>
        <h4>Score: <b> {score}</b></h4>
        <h4 className="level">Level: <b> {level}</b></h4>
      </div>
      {createMoleHill()}
    </div>
  );
}

export default App;
