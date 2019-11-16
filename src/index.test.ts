import { newBoard, checkVictory } from "./index";

test("create a new board", () => {
  expect(newBoard()).toBe([["", "", ""], ["", "", ""], ["", "", ""]]);
});
