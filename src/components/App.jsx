import React, { useState } from 'react'
import '../styles/App.css'

import Board from './Board.jsx'
import ImportForm from './ImportForm.jsx'
import ExportForm from './ExportForm.jsx'
import GenerateForm from './GenerateForm.jsx'
import { HeaderButtons, FooterButtons } from './Buttons.jsx'
import sudokuSolver from '../util/solveSudoku.js'

/* const generateGrid = size => {
  const grid = []
  let index = 0
  for (let i = 0; i < size; i++) {
    const row = []
    for (let j = 0; j < size; j++) {
      row.push(index)
      index++
    }
    grid.push(row)
  }
  return grid
} */

const App = () => {
  const [boardSize, setBoardSize] = useState('9')
  const [board, setBoard] = useState([
    [' ', '3', ' ', ' ', ' ', ' ', ' ', '5', ' '],
    [' ', ' ', '8', ' ', '9', '1', '3', ' ', ' '],
    ['6', ' ', ' ', '4', ' ', ' ', '7', ' ', ' '],
    [' ', ' ', '3', '8', '1', ' ', ' ', ' ', ' '],
    [' ', ' ', '6', ' ', ' ', ' ', '2', ' ', ' '],
    [' ', ' ', ' ', ' ', '3', '4', '8', ' ', ' '],
    [' ', ' ', '1', ' ', ' ', '8', ' ', ' ', '9'],
    [' ', ' ', '4', '1', '2', ' ', '6', ' ', ' '],
    [' ', '6', ' ', ' ', ' ', ' ', ' ', '4', ' ']
  ])
  // const [board, setBoard] = useState(generateGrid(9))
  const [buttonsVisability, setButtonsVisability] = useState(true)
  const [importVisability, setImportVisability] = useState(false)
  const [generateVisability, setGenerateVisability] = useState(false)
  const [exportVisability, setExportVisability] = useState(false)

  const handleImportSubmit = ({ board, boardSize, inputMode }) => {
    setBoard(board)
    setBoardSize(boardSize)
    // setInputMode(inputMode) TODO
  }

  const handleGenerateSubmit = generateData => {
    console.log(generateData)
  }

  const handleCancel = () => {
    setImportVisability(false)
    setGenerateVisability(false)
    setExportVisability(false)
    setButtonsVisability(true)
  }

  const displayImportForm = () => {
    setButtonsVisability(false)
    setImportVisability(true)
  }

  const displayGenerateForm = () => {
    setButtonsVisability(false)
    setGenerateVisability(true)
  }

  const displayExportForm = () => {
    setButtonsVisability(false)
    setExportVisability(true)
  }

  const handleSolve = () => {
    sudokuSolver(board)
  }

  return (
    <div className="game">
      <div className="header-container">
        <HeaderButtons
          onSolve={() => handleSolve()}
          // onReset={() => handleReset()} TODO
        />
      </div>

      <div className="board-container">
        <Board board={board} boardSize={boardSize} />
      </div>

      <div className="footer-container">
        <FooterButtons
          onImport={() => displayImportForm()}
          onExport={() => displayExportForm()}
          onGenerate={() => displayGenerateForm()}
          visability={buttonsVisability}
        />
        <ImportForm
          onSubmit={importData => handleImportSubmit(importData)}
          onCancel={() => handleCancel()}
          visability={importVisability}
        />
        <GenerateForm
          onSubmit={generateData => handleGenerateSubmit(generateData)}
          onCancel={() => handleCancel()}
          visability={generateVisability}
        />
        <ExportForm
          onCancel={() => handleCancel()}
          visability={exportVisability}
        />
      </div>
    </div>
  )
}

export default App
