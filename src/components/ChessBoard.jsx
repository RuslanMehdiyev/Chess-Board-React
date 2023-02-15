import { useState } from "react";

function ChessBoard() {
  const [selectedRow, setSelectedRow] = useState(null);
  const [selectedCol, setSelectedCol] = useState(null);
  const handleBlockClick = (row, col) => {
    setSelectedRow(row);
    setSelectedCol(col);
  };

  const renderBoard = () => {
    const board = [];
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        const isWhite = (row + col) % 2 === 0;
        const isHighlighted =
          selectedRow !== null &&
          (row + col === selectedRow + selectedCol ||
            row - col === selectedRow - selectedCol);

        board.push(
          <div
            key={`${row}-${col}`}
            className={`block ${isWhite ? "white" : "black"}  ${
              isHighlighted ? "highlighted" : ""
            }`}
            onClick={() => handleBlockClick(row, col)}
          />
        );
      }
    }
    return <div className="board">{board}</div>;
  };

  return <div>{renderBoard()}</div>;
}

export default ChessBoard;
