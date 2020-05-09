import React from "react";
import { Toggle } from "../Toggle/Toggle";

const SectionCard = (props) => {
  const total = props.parts.reduce((a, b) => a + b.score, 0);

  return (
    <div>
      <div>{Math.floor(total)}</div>
      {props.SectionName}
      {props.parts.map((part) => {
        return (
          <div style={{ height: "48px", marginTop: "4px" }}>
            <span>
              <h2 style={{ display: "inline" }}>{part.name}</h2>{" "}
              {part.isComplete ? "done" : "in progress"}
              <Toggle />
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default SectionCard;
