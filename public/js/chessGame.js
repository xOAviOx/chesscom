const socket = io();
const chess = new Chess();

const boardElement = document.querySelector(".chessboard");

let draggedPiece = null;
let sourceSquare = null;
let playerRole = null;

function renderBoard() {
  const board = chess.board();
  boardElement.innerHTML = "";

  board.forEach((row, rowIndex) => {
    row.forEach((square, colIndex) => {
      const squareElement = document.createElement("div");
      squareElement.classList.add(
        "square",
        (rowIndex + colIndex) % 2 === 0 ? "light" : "dark"
      );

      squareElement.dataset.row = rowIndex;
      squareElement.dataset.col = colIndex;

      if (square) {
        const pieceElement = document.createElement("div");
        pieceElement.classList.add(
          "piece",
          square.color === "w" ? "white" : "black"
        );

        pieceElement.textContent = getPieceUnicode(square);
        pieceElement.draggable = playerRole === square.color;

        pieceElement.addEventListener("dragstart", () => {
          draggedPiece = pieceElement;
          sourceSquare = { row: rowIndex, col: colIndex };
        });

        pieceElement.addEventListener("dragend", () => {
          draggedPiece = null;
          sourceSquare = null;
        });

        squareElement.appendChild(pieceElement);
      }

      squareElement.addEventListener("dragover", (e) => {
        e.preventDefault();
      });

      squareElement.addEventListener("drop", (e) => {
        e.preventDefault();
        if (!draggedPiece || !sourceSquare) return;

        const targetSquare = {
          row: Number(squareElement.dataset.row),
          col: Number(squareElement.dataset.col),
        };

        handleMove(sourceSquare, targetSquare);
      });

      boardElement.appendChild(squareElement);
    });
  });
}

function handleMove(from, to) {
  const move = {
    from: `${String.fromCharCode(97 + from.col)}${8 - from.row}`,
    to: `${String.fromCharCode(97 + to.col)}${8 - to.row}`,
    promotion: "q",
  };

  socket.emit("move", move);
}

function getPieceUnicode(piece) {
  const pieces = {
    wp: "♙",
    wr: "♖",
    wn: "♘",
    wb: "♗",
    wq: "♕",
    wk: "♔",
    bp: "♟",
    br: "♜",
    bn: "♞",
    bb: "♝",
    bq: "♛",
    bk: "♚",
  };

  return pieces[piece.color + piece.type];
}

socket.on("playerRole", (role) => {
  playerRole = role; // "w" or "b"
  renderBoard();
});

socket.on("spectatorRole", () => {
  playerRole = null;
  renderBoard();
});

socket.on("boardState", (fen) => {
  chess.load(fen);
  renderBoard();
});

socket.on("move", (move) => {
  chess.move(move);
  renderBoard();
});

renderBoard();
