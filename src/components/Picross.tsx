import styles from "../styles/Picross.module.scss";
import { Coordinate, PicrossData } from "../types";
import Block from "./Block.tsx";
import * as React from "react";

interface PicrossProps {
  data: PicrossData;
  onPlaneClick: (
    event: React.MouseEvent<HTMLDivElement>,
    id: number,
    coordinate: Coordinate,
  ) => void;
  mouseLeave: (event: React.MouseEvent<HTMLDivElement>) => void;
  mouseOver: (_: React.MouseEvent<HTMLDivElement>, blockId: number) => void;
  mouseDown: (_: React.MouseEvent<HTMLDivElement>, blockId: number) => void;
}

export default function Picross({
  data,
  onPlaneClick,
  mouseOver,
  mouseLeave,
  mouseDown,
}: PicrossProps) {
  const stylesheet = `
  .${styles.Block} { 
    // ${data.transition ? "transition: .2s all;" : ""}
  }
  :root {
    --blocks-width: ${data.blockWidth}px;
  }
  .${styles.Picross} {
    transform: rotateX(${data.rotation.x}deg) rotateY(${data.rotation.y}deg) rotateZ(${data.rotation.z}deg) translateX(${data.offset.x * data.blockWidth}px) translateY(${data.offset.y * data.blockWidth}px) translateZ(${data.offset.z * data.blockWidth}px) ;
  }`;

  return (
    <>
      <style>{stylesheet}</style>
      <div className={`${styles.Picross}`}>
        {" "}
        {data.blocks.map((block) => (
          <Block
            blockData={block}
            onPlaneClick={onPlaneClick}
            width={data.blockWidth}
            key={block.id}
            mouseOver={mouseOver}
            mouseLeave={mouseLeave}
            mouseDown={mouseDown}
          />
        ))}
      </div>
    </>
  );
}
