import styles from "../styles/TitlePage.module.scss";
import { Link } from "react-router-dom";
import { useAudio } from "../hooks/AudioContext.tsx";
import titleMusic from "../assets/audio/music/TitleMenu.opus";
import playJingle from "../assets/audio/sounds/Play.opus";
import { playSound } from "../common/functions.ts";

export default function TitlePage() {
  const { playAudio } = useAudio();

  playAudio(titleMusic);

  return (
    <>
      <div className={styles.TitlePage}>
        <div className={styles.TitleBG}></div>
        <div className={styles.Title}>
          <div className={styles.Picross3DTitle}>
            <span className={styles.PicrossTitle}>Picross</span>3D
          </div>
          <div className={styles.ColoredTitle}>Web Edition</div>
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
