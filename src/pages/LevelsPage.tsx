import styles from "../styles/LevelsPage.module.scss";
import { useNavigate } from "react-router-dom";
import { useAudio } from "../hooks/AudioContext.tsx";
import levelSelect from "../assets/audio/music/LevelSelect.opus";
import playLevel from "../assets/audio/sounds/PlayLevel.opus";
import { playSound } from "../common/functions.ts";
import { ELevel } from "../common/enums.ts";

export default function LevelsPage() {
  const navigate = useNavigate();

  const { playAudio } = useAudio();

  const selectLevel = (link: string) => {
    playSound(playLevel, 0.3);
    navigate(link);
  };

  const levelsClear = [];

  for (let i = 0; i < 5; ++i) {
    levelsClear.push(localStorage.getItem(`level_${i.toString()}_cleared`));
  }

  playAudio(levelSelect);

  return (
    <div className={styles.LevelsPage}>
      <div className={styles.levelsBG}></div>
      <div className={styles.levelsWrapper}>
        <div
          className={`${styles.level} ${styles.levelIntro} ${styles.animDelay1} ${styles.level1} ${levelsClear[ELevel.Eight] ? "" : styles.uncleared}`}
          onClick={() => {
            selectLevel("/puzzles/firstSteps");
          }}
        >
          01
        </div>
        <div
          className={`${styles.level} ${styles.levelIntro} ${styles.animDelay2} ${styles.level2} ${styles.special} ${levelsClear[ELevel.Sun - 1] ? "" : styles.locked} ${levelsClear[ELevel.Sun] ? "" : styles.uncleared}`}
          onClick={() => {
            selectLevel("/puzzles/somethingSpecial");
          }}
        >
          02
        </div>
        <div
          className={`${styles.level} ${styles.levelIntro} ${styles.animDelay3} ${styles.level3} ${levelsClear[ELevel.Chamomile - 1] ? "" : styles.locked} ${levelsClear[ELevel.Chamomile] ? "" : styles.uncleared}`}
          onClick={() => {
            selectLevel("/puzzles/secondSteps");
          }}
        >
          03
        </div>
        <div
          className={`${styles.level} ${styles.levelIntro} ${styles.animDelay4} ${styles.level4} ${styles.special} ${levelsClear[ELevel.Snowflake - 1] ? "" : styles.locked} ${levelsClear[ELevel.Snowflake] ? "" : styles.uncleared}`}
          onClick={() => {
            selectLevel("/puzzles/somethingEvenMoreSpecial");
          }}
        >
          04
        </div>
        <div
          className={`${styles.level} ${styles.levelIntro} ${styles.animDelay5} ${styles.level5} ${levelsClear[ELevel.Coffee - 1] ? "" : styles.locked} ${levelsClear[ELevel.Coffee] ? "" : styles.uncleared}`}
          onClick={() => {
            selectLevel("/puzzles/iAmLost");
          }}
        >
          05
        </div>
      </div>
    </div>
  );
}
