# ChessCom

A real-time multiplayer chess game built with Node.js, Express, and Socket.IO. Play chess online with friends using drag-and-drop piece movement and live game synchronization.

## Features

- **Real-time Multiplayer**: Play chess against another player with live move synchronization
- **Drag-and-Drop Interface**: Intuitive drag-and-drop piece movement
- **Spectator Mode**: Multiple spectators can watch ongoing games
- **Move Validation**: Uses chess.js for accurate chess move validation
- **Responsive Design**: Works seamlessly on different screen sizes

## Tech Stack

- **Backend**: Node.js, Express.js
- **Real-time Communication**: Socket.IO
- **Chess Logic**: chess.js
- **Frontend**: EJS templating, Vanilla JavaScript
- **Styling**: CSS

## Installation

1. Clone the repository:

```bash
git clone https://github.com/xOAviOx/chesscom.git
cd chesscom
```

2. Install dependencies:

```bash
npm install
```

3. Start the server:

```bash
npm start
```

or for development with auto-reload:

```bash
nodemon app.js
```

4. Open your browser and navigate to:

```
http://localhost:3000
```

## How to Play

1. **First Player**: Opens the application and connects as White
2. **Second Player**: Opens the application and connects as Black
3. **Drag Pieces**: Click and drag pieces to move them (only valid moves allowed)
4. **Spectators**: Additional players connect as spectators and can watch the game
5. **Turn-Based**: Players alternate turns based on standard chess rules

## Project Structure

```
chesscom/
├── app.js                 # Main Express server and Socket.IO logic
├── package.json           # Project dependencies
├── public/
│   ├── css/              # Stylesheets
│   └── js/
│       └── chessGame.js  # Frontend game logic
└── views/
    └── index.ejs         # Main game view
```

## Dependencies

- **express**: Web framework for Node.js
- **socket.io**: Real-time bidirectional communication
- **chess.js**: Chess game logic and move validation
- **ejs**: Templating engine

## Game Rules

- Standard chess rules apply
- White moves first
- Players can only move their own pieces
- Invalid moves are rejected by the system
- Spectators can view but not participate in the game

## Contributing

Feel free to fork the repository and submit pull requests for improvements or bug fixes.

## License

ISC

## Author

xOAviOx
