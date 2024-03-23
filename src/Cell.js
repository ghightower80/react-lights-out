import React from "react";
import "./Cell.css";

function Cell({ flipCellsAroundMe, isLit = false }) {
  const handleClick = () => {
    flipCellsAroundMe();
  };

  const classes = `Cell ${isLit ? "Cell-lit" : ""}`;

  return (
    <td className={classes} onClick={handleClick} role="button" />
  );
}

export default Cell;
