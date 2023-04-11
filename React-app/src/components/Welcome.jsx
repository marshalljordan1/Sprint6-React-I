import React from "react";
import { StoryTimeButton } from "./Styled";
import welcomeAstronaut from "/Users/jordanmarshall/OneDrive/ITacademy/Sprint6-React/react-app/src/img/welcomeAstronaut.jpg";

export const Welcome = ({ readMore }) => {
  return (
    <div className="body">
      <div className="container">
        <div className="left-container">
          <div>
            <h1 className="title">Go out of this world...</h1>
            <h3 className="info">
              Find out what happens to our hero while he floats in outerspace.
              What will be his fate?
            </h3>
            <StoryTimeButton onClick={readMore}>Read more</StoryTimeButton>
          </div>
        </div>
        <div className="right-container">
          <img className="img" src={welcomeAstronaut}></img>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
