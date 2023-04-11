import Scene from "./components/scene/Scene";
import React, { useState } from "react";
import sentences from "./sentences.js";
import { Welcome } from "./components/Welcome.jsx";
import {
  NextPrevButtons,
  ButtonContainer,
  Container,
} from "./components/Styled";

function App() {
  const [welcome, setWelcome] = useState(true); // define a state variable "welcome" with initial value true using useState hook

  // set the "welcome" state variable to false, which will cause the Welcome
  // component to no longer render when the "Read More" button is clicked
  const click = () => {
    setWelcome(false);
  };

  // defines a state variable "position" with the initial value of 0 using useState hook.
  const [position, setPosition] = useState(0);

  // set the position state variable to 0 if the current value is equal to sentences.length - 1, if not +1.
  const clickNext = () => {
    console.log(sentences.length);
    setPosition(position === sentences.length - 1 ? 0 : position + 1);
  };
  // set the position state variable to sentences.length - 1 if the current value is equal to 0, if not -1.
  const clickPrev = () => {
    setPosition(position === 0 ? sentences.length - 1 : position - 1);
  };

  // if 'welcome' has a value of true, then the component Welcome is rendered. the "next" click handler is passed as a prop.
  return welcome === true ? (
    <Welcome readMore={click} />
  ) : (
    // if welcome is false the story page is loaded
    <Container background={sentences[position].img}>
      <ButtonContainer>
        <NextPrevButtons onClick={clickPrev}>Previous</NextPrevButtons>
        <NextPrevButtons onClick={clickNext}>Next</NextPrevButtons>
      </ButtonContainer>
      {/* maps over each object in the 'sentences' array and renders a Scene component with its corresponding data */}
      {sentences.map((obj) => (
        <Scene
          key={obj.id}
          line={obj.line}
          isHighlighted={position === obj.id}
          img={obj.img}
        />
      ))}
    </Container>
  );
}

export default App;
