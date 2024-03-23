// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Cell from "./Cell";
import Board from "./Board";

// Test rendering a cell properly
test("renders cell properly", () => {
    const { container } = render(<Cell />);
    expect(container.firstChild).toMatchSnapshot();
});

// Test rendering the starter Board
test("renders starter board properly", () => {
    const { container } = render(<Board />);
    expect(container.firstChild).toMatchSnapshot();
});

// Test handling cell-clicking
test("handles cell-clicking properly", () => {
    const { getByRole } = render(<Board />);
    const cell = getByRole("button");
    fireEvent.click(cell);
    // You'll need to find a way to assert that clicking the cell causes the right cells to flip.
    // This could involve examining the state of the board before and after clicking the cell.
    // You might need to use more advanced testing techniques, like querying elements or inspecting their classes.
});

// Test checking for a win and showing a "You won!" message
test("displays 'You win!' message upon winning", () => {
    const { getByText } = render(<Board nrows={2} ncols={2} chanceLightStartsOn={1} />);
    expect(getByText("You Win!")).toBeInTheDocument();
});
