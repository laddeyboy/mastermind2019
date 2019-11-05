import { COLOR_PALETTE } from "./constants";

function setColorSequence() {
  const sequence = [];
  for (let i = 0; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * COLOR_PALETTE.length);
    sequence.push(COLOR_PALETTE[randomIndex]);
  }
  return sequence;
}

export const createWinningSequence = () => {
  const winningSequence = setColorSequence();
  return winningSequence;
};

export const setupGameBoard = (userAttempts: number) => {
  const gameBoard: { [key: string]: Array<string> } = {};
  for (let i = 0; i < userAttempts; i++) {
    gameBoard[`row${i}`] = [];
  }
  return gameBoard;
};
