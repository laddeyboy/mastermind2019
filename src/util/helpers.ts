function setColorSequence() {
  const colorPalette = ["blue", "red", "gold", "black", "green", "brown"];
  const sequence = [];
  for (let i = 0; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * colorPalette.length);
    console.log("ind", randomIndex);
    sequence.push(colorPalette[randomIndex]);
  }
  return sequence;
}

export const setupGameLogic = () => {
  const winningSequence = setColorSequence();
  console.log("what is winning sequence?", winningSequence);
  return winningSequence;
};
