import { ChangeEvent, FC, FormEvent, useState } from 'react'

import '../styles/Form.css'
import { BoardDifficulty, BoardSize } from '../typings'
import RadioFieldset from './RadioFieldset'

interface GenerateFormProps {
  visability: boolean
  onSubmit: (boardSize: BoardSize, difficulty: BoardDifficulty) => void
  onCancel: () => void
}

const GenerateForm: FC<GenerateFormProps> = ({ visability, onSubmit, onCancel }) => {
  const [boardSize, setBoardSize] = useState<BoardSize>('9')
  const [difficulty, setDifficulty] = useState<BoardDifficulty>('easy')

  const handleChangeBoardSize = (event: ChangeEvent<HTMLInputElement>) => {
    const boardSize = event.target.value as BoardSize
    setBoardSize(boardSize)
  }

  const handleChangeDifficulty = (event: ChangeEvent<HTMLInputElement>) => {
    const difficulty = event.target.value as BoardDifficulty
    setDifficulty(difficulty)
  }

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    handleFormCancel()
    onSubmit(boardSize, difficulty)
  }

  const handleFormCancel = () => {
    setBoardSize('9')
    setDifficulty('easy')
    onCancel()
  }

  return (
    <form
      noValidate
      className={visability ? 'form form-generate' : 'hidden'}
      onSubmit={handleFormSubmit}
    >
      <div className="radio-container">
        <RadioFieldset
          name={'boardSize'}
          title={'Board Size:'}
          formatId={(value) => `generate${value}`}
          values={['9', '16']}
          stateToCheck={boardSize}
          onChange={handleChangeBoardSize}
        />
        <RadioFieldset
          name={'difficulty'}
          title={'Difficulty:'}
          formatId={(value) => value}
          values={['easy', 'medium', 'hard']}
          stateToCheck={difficulty}
          onChange={handleChangeDifficulty}
        />
      </div>
      <input type="submit" value="Generate" className="button" />
      <input type="button" value="Cancel" className="button" onClick={handleFormCancel} />
    </form>
  )
}

export default GenerateForm
