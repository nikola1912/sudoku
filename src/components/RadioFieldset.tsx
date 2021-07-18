import { FC, ChangeEvent } from 'react'

interface RadioFieldsetProps {
  name: string
  questionMark?: boolean
  title: string
  values: string[]
  disabled?: boolean
  formatId: (value: string) => string
  stateToCheck: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const RadioFieldset: FC<RadioFieldsetProps> = ({
  name,
  questionMark = false,
  title,
  values,
  disabled = false,
  formatId,
  stateToCheck,
  onChange
}) => (
  <fieldset className={`radio-${name}`}>
    <legend>
      {questionMark && <span className="questionMark">?</span>}
      {title}
    </legend>
    {values.map(value => (
      <span key={value}>
        <input
          // TODO: Test if this is boolean or string
          disabled={disabled}
          type="radio"
          name={name}
          id={formatId(value)}
          value={value}
          checked={stateToCheck === value}
          onChange={event => onChange(event)}
        />
        <label htmlFor={formatId(value)}>
          {name === 'boardSize'
            ? `${value}x${value}`
            : `${value[0].toUpperCase()}${value.slice(1)}`}
        </label>
      </span>
    ))}
  </fieldset>
)

export default RadioFieldset
