import React from 'react';
import './styles/App.css';

import Board from './components/Board.jsx';
import { HeaderButtons, FooterButtons } from './components/Buttons.jsx';
import ImportForm from './components/ImportForm.jsx';
import ExportForm from './components/ExportForm.jsx';
import GenerateForm from './components/GenerateForm.jsx';

import sudokuSolver from './util/sudokuSolver.js';

function arrayInRange(start, end) {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
}

function generateGrid(size) {
    let grid = []; 
    let index = 0;
    for (let i = 0; i < size; i++) {
        let row = [];
        for (let j = 0; j < size; j++) {
            row.push(index);
            index++;
        }
        grid.push(row);
    }
    return grid;
}

class App extends React.Component {
    state = {
        boardSize: 9,
        /* board: generateGrid(9), */
        /* board: arrayInRange(0, 80), */
        board: [
            [" ", "3", " ", " ", " ", " ", " ", "5", " "],
            [" ", " ", "8", " ", "9", "1", "3", " ", " "],
            ["6", " ", " ", "4", " ", " ", "7", " ", " "],
            [" ", " ", "3", "8", "1", " ", " ", " ", " "],
            [" ", " ", "6", " ", " ", " ", "2", " ", " "],
            [" ", " ", " ", " ", "3", "4", "8", " ", " "],
            [" ", " ", "1", " ", " ", "8", " ", " ", "9"],
            [" ", " ", "4", "1", "2", " ", "6", " ", " "],
            [" ", "6", " ", " ", " ", " ", " ", "4", " "]
        ],
        buttonsVisability: true,
        importVisability: false,
        generateVisability: false,
        exportVisability: false,
        testMode: false
    };
    
    handleImportSubmit(importData) {
        this.setState(importData);
    }

    handleGenerateSubmit(generateData) {
        console.log(generateData);
    }

    handleCancel() {
        this.setState({
            importVisability: false,
            generateVisability: false,
            exportVisability: false,
            buttonsVisability: true
        });
    }
    
    displayImportForm() {
        this.setState({
            buttonsVisability: false,
            importVisability: true
        });
    }
    
    displayGenerateForm() {
        this.setState({
            buttonsVisability: false,
            generateVisability: true
        });
    }

    displayExportForm() {
        this.setState({
            buttonsVisability: false,
            exportVisability: true
        });
    }

    handleSolve() {
        sudokuSolver(this.state.board);
    }

    render() {
        return (
            <div className="game">
                <div className="header-Container">
                    <HeaderButtons
                        onSolve={() => this.handleSolve()}
                        onReset={() => this.handleReset()} />
                </div>

                <div className="board-container">
                    <Board 
                        board={this.state.board}
                        boardSize={this.state.boardSize}
                        testMode={this.state.testMode} />
                </div>

                <div className="footer-container">
                    <FooterButtons
                        onImport={() => this.displayImportForm()}
                        onExport={() => this.displayExportForm()}
                        onGenerate={() => this.displayGenerateForm()}
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