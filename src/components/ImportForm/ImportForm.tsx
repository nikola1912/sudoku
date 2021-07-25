import { ChangeEvent, FC, FormEvent, useState } from 'react'

import { FiUpload } from 'react-icons/fi'

import {
  BoardImportCode,
  BoardImportMode,
  BoardModel,
  BoardSize,
  formatSudoku,
  validateSudoku
} from '@/modules/sudoku'

import '../../styles/Form.css'
import { RadioFieldset } from '../RadioFieldset'

export interface ImportFormProps {
  visability: boolean
  onSubmit: (board: BoardModel, boardSize: BoardSize) => void
  onCancel: () => void
}

export const ImportForm: FC<ImportFormProps> = ({ visability, onSubmit, onCancel }) => {
  const [boardSize, setBoardSize] = useState<BoardSize>('9')
  const [inputMode, setInputMode] = useState<BoardImportMode>('code')
  const [inputCode, setInputCode] = useState<BoardImportCode>('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleInputModeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputMode = event.target.value as BoardImportMode
    setInputCode('')
    setInputMode(inputMode)
  }

  const handleImageUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const image = (event.target.files as FileList)[0]
    const formData = new FormData()
    formData.append('image', image)
    const response = await fetch('/scanner', { method: 'POST', body: formData })
    const data = await response.json()
    console.log(data)
  }

  const handleInputCodeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputCode = event.target.value as BoardImportCode
    setInputCode(inputCode)
  }

  const handleBoardSizeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const boardSize = event.target.value as BoardSize
    setBoardSize(boardSize)
  }

  const hideErrorMessage = () => {
    setErrorMessage('')
  }

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const board = formatSudoku(inputCode, boardSize)
    const newErrorMessage = validateSudoku(board, boardSize)
    if (!newErrorMessage) {
      handleFormCancel()
      onSubmit(board, boardSize)
    } else setErrorMessage(newErrorMessage)
  }

  const handleFormCancel = () => {
    setBoardSize('9')
    setInputMode('code')
    setInputCode('')
    setErrorMessage('')
    onCancel()
  }

  return (
    <form
      noValidate
      className={visability ? 'form form-import' : 'hidden'}
      onChange={hideErrorMessage}
      onSubmit={handleFormSubmit}
    >
      <div className="radio-container">
        <RadioFieldset
          name="boardSize"
          title="Board Size:"
          formatId={(value) => `${value}x${value}`}
          values={['9', '16']}
          stateToCheck={boardSize}
          onChange={handleBoardSizeChange}
        />
        <RadioFieldset
          questionMark
          name="inputMode"
          title="Input Mode:"
          formatId={(value) => value}
          values={['code', 'image']}
          stateToCheck={inputMode}
          onChange={handleInputModeChange}
        />
      </div>
      {inputMode === 'code' && (
        <div className="input-code-container">
          <label htmlFor="input-code">
            <span className="questionMark">?</span>
            Sudoku Code:
          </label>
          <input
            required
            id="input-code"
            type="text"
            name="inputCode"
            value={inputCode}
            onChange={handleInputCodeChange}
          />
          <span className="error-message">{errorMessage}</span>
        </div>
      )}
      {inputMode === 'image' && (
        <div className="image-upload-container">
          <span className="image-upload-label">
            <span className="questionMark">?</span>Sudoku Scanner:
          </span>
          <label htmlFor="image-upload" className="image-upload-button">
            <FiUpload /> <span>Upload</span>
          </label>
          <input
            hidden
            id="image-upload"
            name="inputImage"
            type="file"
            accept="image/*"
            capture="camera"
            onChange={handleImageUpload}
          />
          <span className="error-message">{errorMessage}</span>
        </div>
      )}
      <input type="submit" value="Submit" className="button" />
      <input type="button" value="Cancel" className="button" onClick={handleFormCancel} />
    </form>
  )
}
