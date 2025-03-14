import styles from "../styles/Tools.module.scss";
import { ETool } from "../enums.ts";
import React, { useState } from "react";
import { MouseData } from "../types";
import brushSound from "../assets/audio/sounds/Brush.opus";
import hammerSound from "../assets/audio/sounds/Hammer.opus";
import { playSound } from "../static.ts";

interface ToolsProps {
  selectedToolRef: React.RefObject<MouseData>;
  currentTool: ETool;
  hidden: boolean;
}

export default function Tools({ selectedToolRef, hidden }: ToolsProps) {
  const [_, setFrame] = useState(0);

  const setTool = (tool: ETool) => {
    selectedToolRef.current.chosenTool = tool;
    setFrame((frame) => frame + 1);

    switch (tool) {
      case ETool.Brush:
        playSound(brushSound);
        break;
      case ETool.Hammer:
        playSound(hammerSound);
        break;
    }
  };

  return (
    <div className={`${styles.Tools} ${hidden ? styles.hidden : ""}`}>
      <div
        className={`${styles.hammerTool} ${selectedToolRef.current.chosenTool === ETool.Hammer ? styles.active : ""}`}
        onClick={() => setTool(ETool.Hammer)}
      ></div>
      <div
        className={`${styles.brushTool} ${selectedToolRef.current.chosenTool === ETool.Brush ? styles.active : ""}`}
        onClick={() => setTool(ETool.Brush)}
      ></div>
    </div>
  );
}
