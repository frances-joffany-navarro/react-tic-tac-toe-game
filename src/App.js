const { useState } = require("react");
function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>{value}</button>
  );
}
export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleSquareClick() {
    setSquares("X");
  }
  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={handleSquareClick} />
        <Square value={squares[1]} onSquareClick={handleSquareClick} />
        <Square value={squares[2]} onSquareClick={handleSquareClick} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={handleSquareClick} />
        <Square value={squares[4]} onSquareClick={handleSquareClick} />
        <Square value={squares[5]} onSquareClick={handleSquareClick} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={handleSquareClick} />
        <Square value={squares[7]} onSquareClick={handleSquareClick} />
        <Square value={squares[8]} onSquareClick={handleSquareClick} />
      </div>
    </>
  );





}