import clsx from "clsx";

function Scene({ line, isHighlighted }) {
  return (
    <div className={clsx("text", isHighlighted && "textHighlight")}>{line}</div>
  );
}

export default Scene;
