import React, { useState } from 'react'
import PropTypes from 'prop-types'

import '../styles/Form.css'
import RadioFieldset from './RadioFieldset.jsx'
import arrayToMatrix from '../util/arrayToMatrix.js'

const ImportForm = ({ onSubmit, onCancel, visability }) => {
  const [boardSize, setBoardSize] = useState('9')
  const [inputMode, setInputMode] = useState('')
  const [inputCode, setInputCode] = useState('')
  const [showErrorMessage, setShowErrorMessage] = useState(false)
  const [validInputs, setValidInputs] = useState([
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9'
  ])

  const handleInputModeChange = inputMode => setInputMode(inputMode)
  const handleInputCodeChange = inputCode => setInputCode(inputCode)
  const hideErrorMessage = () => setShowErrorMessage(false)
  const handleBoardSizeChange = boardSize => {
    const possibleBoardSizes = {
      '9': ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
      '16': [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        'A',
        'B',
        'C',
        'D',
        'E',
        'F'
      ]
    }
    setValidInputs(possibleBoardSizes[boardSize])
    setBoardSize(boardSize)
  }

  const validateForm = () => {
    const requiredCodeLength = parseInt(boardSize) ** 2
    return inputCode.length === requiredCodeLength
  }

  const formatInputCode = inputCode =>
    inputCode.map(value =>
      validInputs.includes(value.toUpperCase()) ? value.toUpperCase() : ' '
    )

  const handleFormSubmit = event => {
    event.preventDefault()
    if (validateForm()) {
      handleFormCancel()
      onSubmit({
        board: arrayToMatrix(formatInputCode(Array.from(inputCode)), boardSize),
        boardSize: Number(boardSize),
        inputMode: inputMode
      })
    } else setShowErrorMessage(true)
  }

  const handleFormCancel = () => {
    setBoardSize('9')
    setInputMode('')
    setInputCode('')
    setShowErrorMessage(false)
    onCancel()
  }

  return (
    <form
      noValidate
      onChange={() => hideErrorMessage()}
      onSubmit={event => handleFormSubmit(event)}
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
          disabled={true}
          questionMark={true}
          name={'inputMode'}
          title={'Input Mode:'}
          formatID={value => value}
          values={['row', 'square']}
          stateToCheck={inputMode}
          onChange={event => handleInputModeChange(event.target.value)}
        />
      </div>

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
        <ErrorMessage
          className={`error-message ${
            showErrorMessage ? 'show-error-message' : ''
          }`}
          inputValid={() => validateForm()}
          requiredCodeLength={boardSize ** 2}
        />
      </div>

      <input type="submit" value="Submit" className="button" />
      <input
        type="button"
        value="Cancel"
        className="button"
        onClick={() => handleFormCancel()}
      />
    </form>
  )
}

const ErrorMessage = ({ className, inputValid, requiredCodeLength }) => (
  <span className={className}>
    {inputValid
      ? `Input code doesn't contain ${requiredCodeLength} values`
      : ''}
  </span>
)

ImportForm.propTypes = {
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func,
  visability: PropTypes.bool
}

ErrorMessage.propTypes = {
  className: PropTypes.string,
  inputValid: PropTypes.bool,
  requiredCodeLength: PropTypes.number
}

export default ImportForm
