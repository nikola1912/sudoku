import React from 'react';
import './styles/App.css';

import Board from './components/Board.js';
import Buttons from './components/Buttons.js';

class App extends React.Component {
    state = {
        boardSize: 9,
        /* board: Array(81).fill(1), */
        board: [
            null, 3, null, null, null, null, null, 5, null,
            null, null, 8, null, 9, 1, 3, null, null,
            6, null, null, 4, null, null, 7, null, null,
            null, null, 3, 8, 1, null, null, null, null,
            null, null, 6, null, null, null, 2, null, null,
            null, null, null, null, 3, 4, 8, null, null,
            null, null, 1, null, null, 8, null, null, 9,
            null, null, 4, 1, 2, null, 6, null, null,
            null, 6, null, null, null, null, null, 4, null
          ]
    };

    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board board={this.state.board} boardSize={this.state.boardSize} />
                </div>
                <div className="game-buttons">
                    <Buttons />
                </div>
            </div>
        );
    }
}

export default App;