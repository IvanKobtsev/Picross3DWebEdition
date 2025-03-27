import { ENumberType, ETool } from "./enums.ts";

export type PicrossData = {
  rotation: Coordinate;
  offset: Coordinate;
  transition: boolean;
  blockWidth: number;
  blocks: BlockData[];
  totalBlocksToDelete?: number;
  firedFanfare?: boolean;
  progress?: number;
  revealed?: boolean;
};

export type Coordinate = {
  x: number;
  y: number;
  z: number;
};

export type Coordinate2D = {
  x: number;
  y: number;
};

export type MouseData = {
  isHolding: boolean;
  clientX: number;
  clientY: number;
  chosenTool: ETool;
  chosenColor: string;
  allowedToDrag: boolean;
  numberType: ENumberType;
  isOverBlock: boolean;
  isSelectingBlocks: boolean;
  mouseLeaveTimeout: number | undefined;
};

export type PlaneNumber = {
  number: number;
  type: ENumberType;
};

export type PlaneNumbers = {
  x?: PlaneNumber;
  y?: PlaneNumber;
  z?: PlaneNumber;
};

export type BlockData = {
  id: number;
  coordinate: Coordinate;
  isDestroyed?: boolean;
  isColored: boolean;
  revealedColor: string;
  numbers?: PlaneNumbers;
  cannotBeDeleted?: boolean;
  triedDeleting?: boolean;
  selectedForAction?: boolean;
};

export type BlockPosition = {
  coordinate: Coordinate;
  rotation: Coordinate;
};

export type PlainData = {
  coordinate: Coordinate;
  rotation: Coordinate;
  face: string;
};
