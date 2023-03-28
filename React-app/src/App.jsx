import Scene from "./components/scene/Scene";
import sentences from "./sentences.js";
import "./App.css";

function App() {
  return (
    <>
      {sentences.map((obj) => (
        <Scene key={obj.id} line={obj.line} />
      ))}
    </>
  );
}

export default App;
