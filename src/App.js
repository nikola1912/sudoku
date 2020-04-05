import React from 'react';
import './styles/App.css';

import Board from './components/Board.js';
import { HeaderButtons, FooterButtons } from './components/Buttons.js';
import { ImportForm, ExportForm } from './components/Forms.js';

function arrayInRange(start, end) {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
}

class App extends React.Component {
    state = {
        boardSize: 9,
        board: arrayInRange(0, 80),
        /* board: [
            null, 3, null, null, null, null, null, 5, null,
            null, null, 8, null, 9, 1, 3, null, null,
            6, null, null, 4, null, null, 7, null, null,
            null, null, 3, 8, 1, null, null, null, null,
            null, null, 6, null, null, null, 2, null, null,
            null, null, null, null, 3, 4, 8, null, null,
            null, null, 1, null, null, 8, null, null, 9,
            null, null, 4, 1, 2, null, 6, null, null,
            null, 6, null, null, null, null, null, 4, null
          ], */
          buttonsVisability: false,
          importVisability: true,
          exportVisability: false,
          testMode: true
    };

    handleSubmit(importData) {
        console.log(importData);
    }

    handleCancel() {
        this.setState({
            importVisability: false,
            exportVisability: false,
            buttonsVisability: true
        })
    }

    handleImport() {
        this.setState({
            buttonsVisability: false,
            importVisability: true
        })
    }

    handleExport() {
        this.setState({
            buttonsVisability: false,
            exportVisability: true
        })
    }

    render() {
        return (
            <div className="game">
                <div className="game-buttons">
                    <HeaderButtons
                        onSolve={() => this.handleSolve()}
                        onGenerate={() => this.handleGenerate()}
                        onReset={() => this.handleReset()}
                    />
                </div>
                <div className="game-board">
                    <Board 
                        board={this.state.board}
                        boardSize={this.state.boardSize}
                        testMode={this.state.testMode}
                    />
                </div>
                <div className="import-export-container">
                    <FooterButtons
                        onImport={() => this.handleImport()}
                        onExport={() => this.handleExport()}
                        visability={this.state.buttonsVisability}
                    />
                    <ImportForm
                        onSubmit={this.handleSubmit}
                        onCancel={() => this.handleCancel()}
                        visability={this.state.importVisability} />
                    <ExportForm
                        onCancel={() => this.handleCancel()}
                        visability={this.state.exportVisability} />
                </div>
            </div>
        );
    }
}

export default App;