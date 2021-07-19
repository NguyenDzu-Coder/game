import { useRecoilValue, useSetRecoilState } from "recoil";
import gameState from "../recoil/atoms/gameState";
import gameOverlayState from "../recoil/atoms/gameOverlayState";
import { useEffect } from "react";
import gameSoundState from "../recoil/atoms/gameSoundState";
import { GameMode } from "../types/game";
import gameTimingState from "../recoil/atoms/gameTimingState";

export default function useGameOverlayEngine(mode: GameMode) {
  const { connectingLinePoints } = useRecoilValue(gameOverlayState);
  const { matrix, row, col, status } = useRecoilValue(gameState);
  const { playRisingPopSound, playGlugSound } = useRecoilValue(gameSoundState);
  const setGameTiming = useSetRecoilState(gameTimingState);

  useEffect(() => {
    if (connectingLinePoints.length === 1) {
      playGlugSound();
      if (mode === GameMode.SPEED_MODE) {
        setGameTiming((gameTiming) => ({ timing: gameTiming.timing + 5 }));
      }
      if (mode === GameMode.SURVIVAL_MODE) {
        setGameTiming((gameTiming) => ({
          ...gameTiming,
          timing: gameTiming.timing - 5,
        }));
      }
    }
    if (connectingLinePoints.length > 1) {
      playRisingPopSound();
      if (mode === GameMode.SURVIVAL_MODE) {
        setGameTiming((gameTiming) => ({
          ...gameTiming,
          timing: gameTiming.timing + 2,
        }));
      }
    }
  }, [connectingLinePoints]);

  return {
    connectingLinePoints,
    matrix,
    row,
    col,
    status,
  };
}
