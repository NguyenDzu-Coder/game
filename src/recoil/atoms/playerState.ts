import { atom } from "recoil";
import { PlayerState, GameTypeState } from "../../types/game";

const playerState = atom<PlayerState>({
  key: GameTypeState.PLAYER_STATE,
  default: {
    playerName: "",
    playerTiming: 0,
  },
});

export default playerState;
