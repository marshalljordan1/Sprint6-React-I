import Scene from "./components/scene/Scene";
import React, { useState } from "react";
import sentences from "./sentences.js";
import { Welcome } from "./components/Welcome.jsx";
import { NextPrevButtons, ButtonContainer } from "./components/Styled";

function App() {
  const [welcome, setWelcome] = useState(true);

  const click = () => {
    setWelcome(false);
  };

  const [position, setPosition] = useState(0);
  const clickNext = () => {
    setPosition(position === sentences.length - 1 ? 0 : position + 1);
  };
  const clickPrev = () => {
    setPosition(position === 0 ? sentences.length - 1 : position - 1);
  };

  return welcome === true ? (
    <Welcome next={click} />
  ) : (
    <>
      <ButtonContainer>
        <NextPrevButtons onClick={clickPrev}>Previous</NextPrevButtons>
        <NextPrevButtons onClick={clickNext}>Next</NextPrevButtons>
      </ButtonContainer>
      {sentences.map((obj) => (
        <Scene
          key={obj.id}
          line={obj.line}
          isHighlighted={position === obj.id}
        />
      ))}
    </>
  );
}

export default App;
