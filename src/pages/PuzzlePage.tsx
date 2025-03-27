import { BlockData, Coordinate, MouseData, PicrossData } from "../common/types";
import {
  KeyboardEvent,
  MouseEvent,
  RefObject,
  useRef,
  useState,
  WheelEvent,
} from "react";
import {
  clamp,
  coordinateDif,
  playSound,
  rotateObject,
} from "../common/functions.ts";
import Picross from "../components/Picross.tsx";
import styles from "../styles/Picross.module.scss";
import { EAxis, ENumberType, ETool } from "../common/enums.ts";
import playLevel from "../assets/audio/sounds/PlayLevel.opus";
import VictoryFanfare from "../assets/audio/sounds/Victory.opus";
import blockDestroyed from "../assets/audio/sounds/BlockDeleting.opus";
import error from "../assets/audio/sounds/Error.opus";
import notAllowed from "../assets/audio/sounds/NotAllowed.opus";
import brushClear from "../assets/audio/sounds/BrushClear.opus";
import brushPaint from "../assets/audio/sounds/BrushPaint.opus";
import { useAudio } from "../hooks/AudioContext.tsx";
import { ELevel } from "../common/enums.ts";
import { isNaN } from "mathjs";
import { Levels } from "../common/levels.ts";
import Tools from "../components/Tools.tsx";
import brushSound from "../assets/audio/sounds/Brush.opus";
import hammerSound from "../assets/audio/sounds/Hammer.opus";
import FlyingRoses from "../components/FlyingRoses.tsx";
import Applause from "../assets/audio/sounds/Applause.opus";
import { useNavigate } from "react-router-dom";
import {
  BGs,
  BGSpecialTracks,
  BGTracks,
  intros,
  specials,
  themeColors,
  themeFontColors,
  victoryTitles,
  victoryTracks,
  victoryTracksTimes,
} from "../common/constants.ts";

const equalCoordinates = (coordinate1: Coordinate, coordinate2: Coordinate) => {
  return (
    coordinate1.x === coordinate2.x &&
    coordinate1.y === coordinate2.y &&
    coordinate1.z === coordinate2.z
  );
};

const fadeOutAudio = (audio: HTMLAudioElement) => {
  if (audio.volume !== 0) {
    audio.volume = clamp(audio.volume - 0.01, 0, 1);
    setTimeout(fadeOutAudio, 10, audio);
    return;
  }
  audio.pause();
};

const fadeInAudio = (audio: HTMLAudioElement) => {
  if (audio.volume !== 1) {
    audio.volume = clamp(audio.volume + 0.01, 0, 1);
    setTimeout(fadeInAudio, 10, audio);
  }
};

interface PuzzlePageProps {
  level: ELevel;
}

export default function PuzzlePage({ level }: PuzzlePageProps) {
  const navigate = useNavigate();

  const { playAudio, setVolume, playDoubleAudio } = useAudio();

  const picross: RefObject<PicrossData> = useRef({
    rotation: { x: -10, y: 30, z: 0 },
    offset: { x: 0, y: 0, z: 0 },
    transition: true,
    blockWidth: 50,
    blocks: [],
    totalBlocksToDelete: 0,
    firedFanfare: false,
    progress: 0,
  });

  const mouse: RefObject<MouseData> = useRef({
    isHolding: false,
    clientX: 0,
    clientY: 0,
    chosenTool: ETool.Hammer,
    chosenColor: "fff",
    allowedToDrag: false,
    numberType: ENumberType.normal,
    isOverBlock: false,
    isSelectingBlocks: false,
    mouseLeaveTimeout: undefined,
  });

  const puzzleStarted = useRef(false);

  if (!puzzleStarted.current) {
    puzzleStarted.current = true;

    picross.current = structuredClone(Levels[level]);
    picross.current.blocks = [];

    let blocksCount = 0;

    for (let i = 0; i < Levels[level].blocks.length; i++) {
      let overwrote = false;

      for (let j = 0; j < picross.current.blocks.length; j++) {
        if (
          equalCoordinates(
            Levels[level].blocks[i].coordinate,
            picross.current.blocks[j].coordinate,
          )
        ) {
          overwrote = true;

          if (picross.current.blocks[j].cannotBeDeleted) {
            picross.current.blocks[j] = structuredClone(
              Levels[level].blocks[i],
            );
            picross.current.blocks[j].cannotBeDeleted = true;
          } else {
            picross.current.blocks[j] = structuredClone(
              Levels[level].blocks[i],
            );
          }
          break;
        }
      }

      if (!overwrote) {
        picross.current.blocks.push(structuredClone(Levels[level].blocks[i]));
        if (
          picross.current.blocks[picross.current.blocks.length - 1].isColored
        ) {
          picross.current.blocks[
            picross.current.blocks.length - 1
          ].cannotBeDeleted = true;
          picross.current.blocks[picross.current.blocks.length - 1].isColored =
            false;
        } else {
          ++blocksCount;
        }
      }
    }

    picross.current.totalBlocksToDelete = blocksCount;

    setTimeout(() => {
      mouse.current.allowedToDrag = true;

      if (specials[level]) {
        playDoubleAudio(BGSpecialTracks[level], BGTracks[level]);
      } else {
        playAudio(BGTracks[level]);
      }
    }, 1000);
  }

  if (!picross.current.firedFanfare && picross.current.progress === 1) {
    picross.current.firedFanfare = true;
    mouse.current.allowedToDrag = false;

    setTimeout(() => {
      picross.current.rotation = {
        x: 360 + Levels[level].rotation.x,
        y: 360 + Levels[level].rotation.y,
        z: 360 + Levels[level].rotation.z,
      };
      picross.current.blockWidth = Levels[level].blockWidth;
      update();
    }, 10);

    playAudio("");
    setTimeout(() => playSound(VictoryFanfare), 1000);
    setTimeout(() => {
      playAudio(victoryTracks[level], victoryTracksTimes[level]);

      setTimeout(() => playSound(Applause, 0.6), 1000);

      setTimeout(() => {
        picross.current.revealed = true;
        // mouse.current.allowedToDrag = true;
        update();
      }, 1000);
    }, 9500);
  }

  const rotationSpeed = 0.01;

  const [_, setFrame] = useState(0);

  function update() {
    setFrame((frame) => frame + 1);

    let blocksLeft = 0;

    picross.current.blocks.forEach((block: BlockData) => {
      if (!block.cannotBeDeleted) ++blocksLeft;
    });

    picross.current.progress =
      1 -
      blocksLeft /
        (picross.current.totalBlocksToDelete
          ? picross.current.totalBlocksToDelete
          : 1);
  }

  const doActionWithBlocks = () => {
    for (let i = 0; i < picross.current.blocks.length; ++i) {
      if (picross.current.blocks[i].selectedForAction) {
        if (mouse.current.chosenTool === ETool.Hammer) {
          if (!tryToDeleteBlock(picross.current.blocks[i])) {
            picross.current.blocks[i].selectedForAction = false;
          } else {
            i--;
          }
        } else {
          colorBlock(picross.current.blocks[i]);
          picross.current.blocks[i].selectedForAction = false;
        }
      }
    }
    update();
  };

  const deleteBlockById = (id: number) => {
    picross.current.blocks.forEach((block, index) => {
      if (block.id === id) {
        picross.current.blocks.splice(index, 1);
      }
    });

    if (specials[level]) {
      setVolume(picross.current.progress ? picross.current.progress : 0);
    }

    update();
  };

  const deleteBlock = (block: BlockData) => {
    block.isDestroyed = true;
    playSound(blockDestroyed);
    setTimeout(deleteBlockById, 250, block.id);
  };

  const endTriedDeleting = (id: number) => {
    picross.current.blocks.forEach((block, index) => {
      if (block.id === id) {
        picross.current.blocks[index].triedDeleting = false;
      }
    });
    update();
  };

  const tryToDeleteBlock = (block: BlockData) => {
    if (!block.isColored && !block.cannotBeDeleted && !block.isDestroyed) {
      deleteBlock(block);
      return true;
    }

    if (!block.isColored && block.cannotBeDeleted) {
      block.triedDeleting = true;
      playSound(error);
      setTimeout(endTriedDeleting, 250, block.id);
    } else if (block.isColored) {
      playSound(notAllowed);
    }
    return false;
  };

  const colorBlock = (block: BlockData) => {
    block.isColored = !block.isColored;

    if (block.isColored) {
      playSound(brushPaint);
    } else {
      playSound(brushClear);
    }
  };

  const handleMouseOver = (_: MouseEvent<HTMLDivElement>, blockId: number) => {
    if (!mouse.current.isHolding) mouse.current.allowedToDrag = false;

    if (mouse.current.isSelectingBlocks) {
      picross.current.blocks.forEach((block: BlockData) => {
        if (block.id === blockId) block.selectedForAction = true;
      });
      update();
    }

    mouse.current.isOverBlock = true;
    clearTimeout(mouse.current.mouseLeaveTimeout);
  };

  const handleMouseLeave = (_: MouseEvent<HTMLDivElement>) => {
    mouse.current.isOverBlock = false;

    mouse.current.mouseLeaveTimeout = setTimeout(() => {
      mouse.current.allowedToDrag = true;
      if (mouse.current.isSelectingBlocks) {
        mouse.current.isSelectingBlocks = false;
        picross.current.blocks.forEach((block: BlockData) => {
          block.selectedForAction = false;
        });
      }
      update();
    }, 10);
  };

  const handleMouseDownOnBlock = (
    event: MouseEvent<HTMLDivElement>,
    _: number,
  ) => {
    if (event.button === 2) {
      return;
    }

    mouse.current.isSelectingBlocks = true;

    update();
  };

  const handleMouseDown = (event: MouseEvent<HTMLDivElement>) => {
    if (mouse.current.allowedToDrag && event.button !== 2) {
      mouse.current.isHolding = true;
      mouse.current.clientX = event.clientX;
      mouse.current.clientY = event.clientY;
    }
  };

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (mouse.current.isHolding && mouse.current.allowedToDrag) {
      const deltaY = event.clientY - mouse.current.clientY;
      const deltaX = event.clientX - mouse.current.clientX;

      picross.current.rotation = rotateObject(
        picross.current.rotation,
        deltaX,
        deltaY,
        rotationSpeed,
      );

      mouse.current.clientX = event.clientX;
      mouse.current.clientY = event.clientY;

      update();
    }
  };

  const handleMouseUp = (_: MouseEvent<HTMLDivElement>) => {
    mouse.current.isHolding = false;

    if (mouse.current.isSelectingBlocks) {
      mouse.current.isSelectingBlocks = false;
      doActionWithBlocks();
    }
  };

  const handleContextMenu = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();

    switch (mouse.current.chosenTool) {
      case ETool.Brush:
        mouse.current.chosenTool = ETool.Hammer;
        playSound(hammerSound);
        break;
      case ETool.Hammer:
        mouse.current.chosenTool = ETool.Brush;
        playSound(brushSound);
        break;
    }

    update();
  };

  const handleMouseWheel = (event: WheelEvent<HTMLDivElement>) => {
    event.preventDefault();

    if (!mouse.current.allowedToDrag) return;

    let zoomDelta = 6;

    if (event.deltaY > 1) {
      zoomDelta *= -1;
    }

    picross.current.blockWidth = clamp(
      picross.current.blockWidth + zoomDelta,
      20,
      100,
    );

    update();
  };

  const setNumber = (axis: EAxis, coordinate: Coordinate, number: number) => {
    switch (axis) {
      case EAxis.XAxis:
        picross.current.blocks.forEach((block) => {
          if (
            block.coordinate.y === coordinate.y &&
            block.coordinate.z === coordinate.z
          ) {
            block.numbers = {
              ...block.numbers,
              x: {
                number: number,
                type: mouse.current.numberType,
              },
            };
          }
        });
        break;
      case EAxis.YAxis:
        picross.current.blocks.forEach((block) => {
          if (
            block.coordinate.x === coordinate.x &&
            block.coordinate.z === coordinate.z
          ) {
            block.numbers = {
              ...block.numbers,
              y: {
                number: number,
                type: mouse.current.numberType,
              },
            };
          }
        });
        break;
      case EAxis.ZAxis:
        picross.current.blocks.forEach((block) => {
          if (
            block.coordinate.y === coordinate.y &&
            block.coordinate.x === coordinate.x
          ) {
            block.numbers = {
              ...block.numbers,
              z: {
                number: number,
                type: mouse.current.numberType,
              },
            };
          }
        });
        break;
    }
  };

  const handlePlaneClick = (
    event: MouseEvent<HTMLDivElement>,
    blockId: number,
    blockCoordinate: Coordinate,
  ) => {
    event.preventDefault();

    if (event.button === 0) {
      return;
    }

    switch (mouse.current.chosenTool) {
      case ETool.Block:
        picross.current.blocks.push({
          id: picross.current.blocks[picross.current.blocks.length - 1].id + 1,
          coordinate: blockCoordinate,
          isDestroyed: false,
          isColored: false,
          revealedColor: "#46c7ff",
        });
        break;
      case ETool.Hammer:
        picross.current.blocks.forEach((block) => {
          if (block.id === blockId) tryToDeleteBlock(block);
        });
        break;
      case ETool.Brush:
        picross.current.blocks.forEach((block) => {
          if (block.id === blockId) colorBlock(block);
        });
        break;
      case ETool.Numbers:
        let blockInCase: BlockData | null = null;

        for (const block of picross.current.blocks) {
          if (block.id === blockId) {
            blockInCase = block;
            break;
          }
        }

        if (blockInCase !== null) {
          const coordinateDelta = coordinateDif(
            blockInCase.coordinate,
            blockCoordinate,
          );

          if (coordinateDelta.x != 0) {
            setNumber(EAxis.XAxis, blockCoordinate, selectedNumber.current);
          } else if (coordinateDelta.y != 0) {
            setNumber(EAxis.YAxis, blockCoordinate, selectedNumber.current);
          } else if (coordinateDelta.z != 0) {
            setNumber(EAxis.ZAxis, blockCoordinate, selectedNumber.current);
          }
        }
        break;
      case ETool.Color:
        picross.current.blocks.forEach((block) => {
          if (block.id === blockId) {
            block.revealedColor = "#e6ff00";

            if (block.isColored) {
              playSound(brushPaint);
            } else {
              playSound(brushClear);
            }
          }
        });
        break;
    }

    update();
  };

  const selectedNumber = useRef(0);

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (!isNaN(Number(event.key))) {
      selectedNumber.current = Number(event.key);
    }

    playSound(hammerSound);
  };

  const stylesheet = `:root { --level-theme-color: ${themeColors[level]}; --level-theme-font-color: ${themeFontColors[level]}; ${specials[level] ? `--progress: ${0.1 + (picross.current.progress ? picross.current.progress : 0) * 0.9}` : ""} }`;

  return (
    <>
      <style>{stylesheet}</style>
      <div
        className={`${styles.PicrossWrapper} ${BGs[level]} ${picross.current.firedFanfare && !picross.current.revealed ? styles.revealing : picross.current.revealed ? styles.revealed : ""}`}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onContextMenu={handleContextMenu}
        onWheel={handleMouseWheel}
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        <div
          className={`${styles.levelVictory} ${picross.current.revealed ? "" : styles.hidden}`}
        >
          <div className={styles.puzzleSolved}>Puzzle solved!</div>
          <div className={styles.title}>"{victoryTitles[level]}"</div>
          <div
            className={styles.nextPuzzle}
            onClick={() => {
              localStorage.setItem(`level_${level}_cleared`, "true");
              playSound(playLevel);
              // navigate(`/puzzles/${levelLinks[level + 1]}`);
              navigate(`/puzzles`);
            }}
          >
            Continue
          </div>
        </div>
        <div className={styles.levelIntro}>
          <div className={styles.levelNumber}>Puzzle {level + 1}</div>
          <div className={styles.levelName}>"{intros[level]}"</div>
        </div>
        <Picross
          data={picross.current}
          onPlaneClick={handlePlaneClick}
          mouseOver={handleMouseOver}
          mouseLeave={handleMouseLeave}
          mouseDown={handleMouseDownOnBlock}
        />
        <Tools
          selectedToolRef={mouse}
          currentTool={mouse.current.chosenTool}
          hidden={picross.current.firedFanfare as boolean}
        />{" "}
        {picross.current.revealed ? <FlyingRoses /> : null}
      </div>
    </>
  );
}
