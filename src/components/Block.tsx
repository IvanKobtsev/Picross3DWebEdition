import styles from "../styles/Picross.module.scss";
import { BlockData, Coordinate } from "../types";
import * as React from "react";
import { coordinateSum } from "../static.ts";

interface BlockProps {
  blockData: BlockData;
  onPlaneClick: (
    event: React.MouseEvent<HTMLDivElement>,
    id: number,
    coordinate: Coordinate,
  ) => void;
  width: number;
  mouseLeave: ((event: React.MouseEvent<HTMLDivElement>) => void) | undefined;
  mouseOver: (_: React.MouseEvent<HTMLDivElement>, blockId: number) => void;
  mouseDown: (_: React.MouseEvent<HTMLDivElement>, blockId: number) => void;
}

export default function Block({
  blockData,
  onPlaneClick,
  width,
  mouseOver,
  mouseLeave,
  mouseDown,
}: BlockProps) {
  let stylesheet = `#Block_${blockData.id} { --revealing-color: ${blockData.revealedColor}; transform: translateX(${blockData.coordinate.x * width}px) translateY(${blockData.coordinate.y * width}px) translateZ(${blockData.coordinate.z * width}px) }`;

  function planeClicked(
    event: React.MouseEvent<HTMLDivElement>,
    deltaCoordinate: Coordinate,
  ) {
    onPlaneClick(
      event,
      blockData.id,
      coordinateSum(blockData.coordinate, deltaCoordinate),
    );
  }

  let destroyedStyle = "",
    triedDeletingStyle = "";

  if (blockData.isDestroyed) {
    destroyedStyle = styles.destroyed;
  }

  if (blockData.triedDeleting) {
    triedDeletingStyle = styles.triedDeleting;
  }

  const numberTypesStyles = [
    styles.normal,
    styles.roundNumber,
    styles.squareNumber,
  ];

  return (
    <div
      id={`Block_${blockData.id}`}
      onMouseOver={(event) => mouseOver(event, blockData.id)}
      onMouseLeave={mouseLeave}
      onMouseDown={(event) => mouseDown(event, blockData.id)}
      className={`${styles.Block} ${blockData.isColored ? styles.colored : ""} ${blockData.selectedForAction ? styles.selectedForAction : ""}`}
    >
      <style>{stylesheet}</style>
      <div
        className={`${styles.Plane} ${styles.front} ${destroyedStyle} ${triedDeletingStyle} ${blockData.numbers && blockData.numbers.z !== undefined ? numberTypesStyles[blockData.numbers.z.type] : ""}`}
        onClick={(event) => planeClicked(event, { x: 0, y: 0, z: 1 })}
      >
        {blockData.numbers && blockData.numbers.z !== undefined
          ? blockData.numbers.z.number
          : ""}
      </div>
      <div
        className={`${styles.Plane} ${styles.back} ${destroyedStyle} ${triedDeletingStyle} ${blockData.numbers && blockData.numbers.z !== undefined ? numberTypesStyles[blockData.numbers.z.type] : ""}`}
        onClick={(event) => planeClicked(event, { x: 0, y: 0, z: -1 })}
      >
        {blockData.numbers && blockData.numbers.z !== undefined
          ? blockData.numbers.z.number
          : ""}
      </div>
      <div
        className={`${styles.Plane} ${styles.top} ${destroyedStyle} ${triedDeletingStyle} ${blockData.numbers && blockData.numbers.y !== undefined ? numberTypesStyles[blockData.numbers.y.type] : ""}`}
        onClick={(event) => planeClicked(event, { x: 0, y: -1, z: 0 })}
      >
        {blockData.numbers && blockData.numbers.y !== undefined
          ? blockData.numbers.y.number
          : ""}
      </div>
      <div
        className={`${styles.Plane} ${styles.bottom} ${destroyedStyle} ${triedDeletingStyle} ${blockData.numbers && blockData.numbers.y !== undefined ? numberTypesStyles[blockData.numbers.y.type] : ""}`}
        onClick={(event) => planeClicked(event, { x: 0, y: 1, z: 0 })}
      >
        {blockData.numbers && blockData.numbers.y !== undefined
          ? blockData.numbers.y.number
          : ""}
      </div>
      <div
        className={`${styles.Plane} ${styles.left} ${destroyedStyle} ${triedDeletingStyle} ${blockData.numbers && blockData.numbers.x !== undefined ? numberTypesStyles[blockData.numbers.x.type] : ""}`}
        onClick={(event) => planeClicked(event, { x: -1, y: 0, z: 0 })}
      >
        {blockData.numbers && blockData.numbers.x !== undefined
          ? blockData.numbers.x.number
          : ""}
      </div>
      <div
        className={`${styles.Plane} ${styles.right} ${destroyedStyle} ${triedDeletingStyle} ${blockData.numbers && blockData.numbers.x !== undefined ? numberTypesStyles[blockData.numbers.x.type] : ""}`}
        onClick={(event) => planeClicked(event, { x: 1, y: 0, z: 0 })}
      >
        {blockData.numbers && blockData.numbers.x !== undefined
          ? blockData.numbers.x.number
          : ""}
      </div>
    </div>
  );
}
