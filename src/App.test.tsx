import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { createWinningSequence } from "./util/helpers";
import { COLOR_PALETTE } from "./util/constants";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("should test for valid solution sequence", () => {
  const sequence = createWinningSequence();
  it("should create a solution of length 4", () => {
    expect(sequence).toHaveLength(4);
  });
  it("should create a solution of defined colors", () => {
    for (let color of sequence) {
      expect(COLOR_PALETTE.indexOf(color)).toBeGreaterThanOrEqual(0);
    }
  });
});
