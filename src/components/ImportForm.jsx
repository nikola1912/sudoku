import { useState } from 'react'
import PropTypes from 'prop-types'
import { FiUpload } from 'react-icons/fi'

import '../styles/Form.css'
import RadioFieldset from './RadioFieldset.jsx'
import validateSudoku from '../util/validateSudoku.js'
import formatSudoku from '../util/formatSudoku.js'

const ImportForm = ({ onSubmit, onCancel, visability }) => {
  const [boardSize, setBoardSize] = useState('9')
  const [inputMode, setInputMode] = useState('code')
  const [inputCode, setInputCode] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleInputModeChange = inputMode => {
    setInputCode('')
    setInputMode(inputMode)
  }
  const handleImageUpload = async image => {
    const formData = new FormData()
    formData.append('image', image)
    const response = await fetch('/scanner', { method: 'POST', body: formData })
    const data = await response.json()
    console.log(data)
  }
  const handleInputCodeChange = inputCode => setInputCode(inputCode)
  const handleBoardSizeChange = boardSize => setBoardSize(boardSize)
  const hideErrorMessage = () => setErrorMessage('')

  const handleFormSubmit = event => {
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
      onChange={hideErrorMessage}
      onSubmit={handleFormSubmit}
      className={visability ? 'form form-import' : 'hidden'}
    >
      <div className="radio-container">
        <RadioFieldset
          name="boardSize"
          title={'Board Size:'}
          formatID={value => `${value}x${value}`}
          values={['9', '16']}
          stateToCheck={boardSize}
          onChange={event => handleBoardSizeChange(event.target.value)}
        />

        <RadioFieldset
          questionMark={true}
          name={'inputMode'}
          title={'Input Mode:'}
          formatID={value => value}
          values={['code', 'image']}
          stateToCheck={inputMode}
          onChange={event => handleInputModeChange(event.target.value)}
        />
      </div>

      {inputMode === 'code' && (
        <div className="input-code-container">
          <label>
            <span className="questionMark">?</span>
            Sudoku Code:
          </label>
          <input
            required
            type="text"
            name="inputCode"
            value={inputCode}
            onChange={event => handleInputCodeChange(event.target.value)}
          />
          <span className={'error-message'}>{errorMessage}</span>
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
            hidden="hidden"
            id="image-upload"
            name="inputImage"
            type="file"
            accept="image/*"
            capture="camera"
            onChange={event => handleImageUpload(event.target.files[0])}
          />
          <span className={'error-message'}>{errorMessage}</span>
        </div>
      )}

      <input type="submit" value="Submit" className="button" />
      <input
        type="button"
        value="Cancel"
        className="button"
        onClick={handleFormCancel}
      />
    </form>
  )
}

ImportForm.propTypes = {
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func,
  visability: PropTypes.bool
}

export default ImportForm
