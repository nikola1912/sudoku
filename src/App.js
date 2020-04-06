import React from 'react';
import './styles/App.css';

import Board from './components/Board.js';
import { HeaderButtons, FooterButtons } from './components/Buttons.js';
import ImportForm from './components/ImportForm.js';
import ExportForm from './components/ExportForm.js';
import GenerateForm from './components/GenerateForm.js';

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
          importVisability: false,
          generateVisability: true,
          exportVisability: false,
          testMode: true
    };

    handleGenerateSubmit(generateData) {
        console.log(generateData);
    }

    handleImportSubmit(importData) {
        this.setState(importData);
    }

    handleCancel() {
        this.setState({
            importVisability: false,
            generateVisability: false,
            exportVisability: false,
            buttonsVisability: true
        });
    }
    
    handleImport() {
        this.setState({
            buttonsVisability: false,
            importVisability: true
        });
    }
    
    handleGenerate() {
        this.setState({
            buttonsVisability: false,
            generateVisability: true
        });
    }

    handleExport() {
        this.setState({
            buttonsVisability: false,
            exportVisability: true
        });
    }

    render() {
        return (
            <div className="game">
                <div className="game-buttons">
                    <HeaderButtons
                        onSolve={() => this.handleSolve()}
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
                        onGenerate={() => this.handleGenerate()}
                        visability={this.state.buttonsVisability} />
                    <ImportForm
                        onSubmit={(importData) => this.handleImportSubmit(importData)}
                        onCancel={() => this.handleCancel()}
                        visability={this.state.importVisability} />
                    <GenerateForm 
                        onSubmit={(generateData) => this.handleGenerateSubmit(generateData)}
                        onCancel={() => this.handleCancel()}
                        visability={this.state.generateVisability} />
                    <ExportForm
                        onCancel={() => this.handleCancel()}
                        visability={this.state.exportVisability} />
                </div>
            </div>
        );
    }
}

export default App;