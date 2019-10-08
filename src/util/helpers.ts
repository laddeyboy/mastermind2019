import { COLOR_PALETTE } from "./constants";

function setColorSequence() {
  const sequence = [];
  for (let i = 0; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * COLOR_PALETTE.length);
    sequence.push(COLOR_PALETTE[randomIndex]);
  }
  return sequence;
}

export const setupGameLogic = () => {
  const winningSequence = setColorSequence();
  return winningSequence;
};
