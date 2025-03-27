import BGTrack1 from "../assets/audio/music/DuskFalls.opus";
import BGTrack2 from "../assets/audio/music/TheSummerSongBackground.opus";
import BGTrack3 from "../assets/audio/music/DarkWastes.opus";
import BGTrack4 from "../assets/audio/music/ThreeWhiteHorsesBackground.opus";
import BGTrack5 from "../assets/audio/music/CoffeeTalk.opus";
import VictoryTrack1 from "../assets/audio/music/DuskFallsFull.opus";
import VictoryTrack2 from "../assets/audio/music/TheSummerSongFull.opus";
import VictoryTrack3 from "../assets/audio/music/DarkWastesFull.opus";
import VictoryTrack4 from "../assets/audio/music/ThreeWhiteHorsesFull.opus";
import VictoryTrack5 from "../assets/audio/music/CoffeeTalkFull.opus";
import CoffeeExtraTrack1 from "../assets/audio/music/CoffeeTalkExtra1.opus";
import CoffeeExtraTrack2 from "../assets/audio/music/CoffeeTalkExtra2.opus";
import styles from "../styles/Picross.module.scss";

export const themeColors = [
  "#ff4646",
  "#ddff46",
  "#46b8ff",
  "#b4fffa",
  "#ff4646",
];

export const themeFontColors = ["#fff", "#fff", "#fff", "#000", "#000"];

export const specials = [false, true, false, true, false];

export const BGs = [styles.BG1, styles.BG2, styles.BG3, styles.BG4, styles.BG5];

export const BGTracks = [BGTrack1, BGTrack2, BGTrack3, BGTrack4, BGTrack5];

export const BGSpecialTracks = [
  "",
  CoffeeExtraTrack1,
  "",
  CoffeeExtraTrack2,
  "",
];

export const victoryTracks = [
  VictoryTrack1,
  VictoryTrack2,
  VictoryTrack3,
  VictoryTrack4,
  VictoryTrack5,
];

export const victoryTracksTimes = [86.5, 41, 62.8, 157.5, 0];

export const intros = [
  "First Steps",
  "Something Special",
  "Second Steps",
  "Something Even More Special",
  "???",
];

export const victoryTitles = [
  "The Eight",
  "The Sun",
  "Chamomile",
  "Snowflake",
  "Coffee",
];

export const numberTypesStyles = [
  styles.normal,
  styles.roundNumber,
  styles.squareNumber,
];
