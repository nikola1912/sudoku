import React, { useState } from 'react'
import PropTypes from 'prop-types'

import '../styles/Form.css'
import RadioFieldset from './RadioFieldset.jsx'

const GenerateForm = ({ onSubmit, onCancel, visability }) => {
  const [boardSize, setBoardSize] = useState('9')
  const [difficulty, setDifficulty] = useState('easy')

  const handleFormChange = event => {
    const possibleChanges = {
      boardSize: () => setBoardSize(event.target.value),
      difficulty: () => setDifficulty(event.target.value)
    }
    possibleChanges[event.target.name]()
  }

  const handleFormSubmit = event => {
    event.preventDefault()
    console.log(`Board size: ${boardSize} | Difficulty: ${difficulty}`)
    handleFormCancel()
    onSubmit({ boardSize, difficulty })
  }

  const handleFormCancel = () => {
    setBoardSize('9')
    setDifficulty('easy')
    onCancel()
  }

  return (
    <form
      noValidate
      onSubmit={event => handleFormSubmit(event)}
      className={visability ? 'form form-generate' : 'hidden'}
    >
      <div className="radio-container">
        <RadioFieldset
          name={'boardSize'}
          title={'Board Size:'}
          formatID={value => `generate${value}`}
          values={['9', '16']}
          stateToCheck={boardSize}
          onChange={event => handleFormChange(event)}
        />

        <RadioFieldset
          name={'difficulty'}
          title={'Difficulty:'}
          formatID={value => value}
          values={['easy', 'medium', 'hard']}
          stateToCheck={difficulty}
          onChange={event => handleFormChange(event)}
        />
      </div>

      <input type="submit" value="Generate" className="button" />
      <input
        type="button"
        value="Cancel"
        className="button"
        onClick={() => handleFormCancel()}
      />
    </form>
  )
}

GenerateForm.propTypes = {
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func,
  visability: PropTypes.bool
}

export default GenerateForm
