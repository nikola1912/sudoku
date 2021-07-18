import { FC, useState } from 'react'

import { BoardDifficulty, BoardModel, BoardSize, solveSudoku } from 'modules/sudoku'

import '../../styles/Sudoku.css'
import Board from '../Board'
import Button from '../Button'
import ExportForm from '../ExportForm'
import GenerateForm from '../GenerateForm'
import ImportForm from '../ImportForm'

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

const Sudoku: FC = () => {
  const [boardSize, setBoardSize] = useState<BoardSize>('9')
  const [board, setBoard] = useState<BoardModel>([
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

  const handleImportSubmit = (board: BoardModel, boardSize: BoardSize) => {
    setBoard(board)
    setBoardSize(boardSize)
  }

  const handleGenerateSubmit = (boardSize: BoardSize, difficulty: BoardDifficulty) => {
    console.log(`Board size: ${boardSize} | Difficulty: ${difficulty}`)
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
    setBoard(solveSudoku(board, boardSize))
  }

  const handleRestart = () => {
    // TODO
  }

  return (
    <div className="game">
      <div className="header-container">
        <div className="buttons-container">
          <Button onClick={handleSolve}>Solve</Button>
          <Button onClick={handleRestart}>Restart</Button>
        </div>
      </div>
      <div className="board-container">
        <Board board={board} boardSize={boardSize} />
      </div>
      <div className="footer-container">
        <div className={buttonsVisability ? 'buttons-container' : 'hidden'}>
          <Button onClick={displayImportForm}>Import</Button>
          <Button onClick={displayGenerateForm}>Generate</Button>
          <Button onClick={displayExportForm}>Export</Button>
        </div>
        <ImportForm
          visability={importVisability}
          onSubmit={handleImportSubmit}
          onCancel={handleCancel}
        />
        <GenerateForm
          visability={generateVisability}
          onSubmit={handleGenerateSubmit}
          onCancel={handleCancel}
        />
        <ExportForm visability={exportVisability} onCancel={handleCancel} />
      </div>
    </div>
  )
}

export default Sudoku
