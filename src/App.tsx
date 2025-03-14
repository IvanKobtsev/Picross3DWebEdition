import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import TitlePage from "./pages/TitlePage.tsx";
import PuzzlePage from "./pages/PuzzlePage.tsx";
import { ReactNode } from "react";
import { ELevel } from "./enums.ts";
import LevelsPage from "./pages/LevelsPage.tsx";

export default function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageWrapper>
              <TitlePage />
            </PageWrapper>
          }
        />
        <Route
          path="/puzzles"
          element={
            <PageWrapper>
              <LevelsPage />
            </PageWrapper>
          }
        />
        <Route
          path="/puzzles/firstSteps"
          element={
            <PageWrapper>
              <PuzzlePage level={ELevel.Eight} />
            </PageWrapper>
          }
        />
        <Route
          path="/puzzles/somethingSpecial"
          element={
            <PageWrapper>
              <PuzzlePage level={ELevel.Sun} />
            </PageWrapper>
          }
        />
        <Route
          path="/puzzles/theThingYouAdore"
          element={
            <PageWrapper>
              <PuzzlePage level={ELevel.Chamomile} />
            </PageWrapper>
          }
        />
        <Route
          path="/puzzles/somethingEvenMoreSpecial"
          element={
            <PageWrapper>
              <PuzzlePage level={ELevel.Snowflake} />
            </PageWrapper>
          }
        />
        <Route
          path="/puzzles/imlost"
          element={
            <PageWrapper>
              <PuzzlePage level={ELevel.Coffee} />
            </PageWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
