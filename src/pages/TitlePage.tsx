import styles from "../styles/TitlePage.module.scss";
import { MouseEvent, useState } from "react";
import { Coordinate2D } from "../types";
import { Link } from "react-router-dom";
import { useAudio } from "../hooks/AudioContext.tsx";
import titleMusic from "../assets/audio/music/TitleMenu.opus";
import playJingle from "../assets/audio/sounds/Play.opus";
import { playSound } from "../static.ts";
import FallingRosesAnimation from "../components/FallingRoses.tsx";

export default function TitlePage() {
  const { playAudio } = useAudio();

  playAudio(titleMusic);

  const [backgroundOffset, setBackgroundOffset] = useState<Coordinate2D>({
    x: 0,
    y: 0,
  });

  const maxBgOffset = { x: 40, y: 40 };

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    setBackgroundOffset({
      x:
        maxBgOffset.x -
        (event.clientX / window.innerWidth) * maxBgOffset.x -
        maxBgOffset.x / 2,
      y:
        maxBgOffset.y -
        (event.clientY / window.innerHeight) * maxBgOffset.y -
        maxBgOffset.y / 2,
    });
    console.log(backgroundOffset);
  };

  // const stylesheet = `.${styles.TitlePage} { background-position: ${backgroundOffset.x}px ${backgroundOffset.y}px }`;

  const stylesheet = ``;

  return (
    <>
      <style>{stylesheet}</style>
      <FallingRosesAnimation />
      <div className={styles.TitlePage} onMouseMove={handleMouseMove}>
        <div className={styles.TitleBG}></div>
        <div className={styles.Title}>
          <div className={styles.Picross3DTitle}>
            <span className={styles.PicrossTitle}>Picross</span>3D
          </div>
          <div className={styles.ColoredTitle}>Women's Day Edition</div>
        </div>
        <div className={styles.ButtonsWrapper}>
          <Link
            to="/puzzles"
            className={styles.TitlePageButton}
            onClick={() => {
              playSound(playJingle, 0.3);
            }}
          >
            Play
          </Link>
        </div>
      </div>
    </>
  );
}
