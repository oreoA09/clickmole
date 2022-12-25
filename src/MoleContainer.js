import React, { useState } from "react";
import Mole from "./Mole";
import EmptySlot from "./EmptySlot";
import bashSound from "./bash.mp3";
import bellSound from "./bell.mp3";

function MoleContainer(props) {
  let [displayMole, setDisplayMole] = useState(false);

  const bashAudio = new Audio(bashSound);
  const bellAudio = new Audio(bellSound);

  const moleClicked = () => {
    props.setScore(props.score + 1);
    setDisplayMole(false);
    bashAudio.play();

    if (props.score === 10) {
      props.setLevel(props.level + 1);
      bellAudio.play();
    } else if (props.score === 20) {
      props.setLevel(props.level + 1);
      bellAudio.play();
    } else if (props.score === 30) {
      props.setLevel(props.level + 1);
      bellAudio.play();
      alert("You Are Awesome!! \n Start New Game?");
      props.setScore(0);
      props.setLevel(0);
    }
  };

  return (
    <div style={{ display: "inline-block" }}>
      {displayMole ? (
        <Mole setDisplayMole={setDisplayMole} moleClicked={moleClicked} />
      ) : (
        <EmptySlot setDisplayMole={setDisplayMole} />
      )}
    </div>
  );
}

export default MoleContainer;
