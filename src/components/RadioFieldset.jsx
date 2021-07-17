import PropTypes from 'prop-types'

const RadioFieldset = ({
  name,
  questionMark,
  title,
  values,
  disabled,
  formatID,
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
          disabled={disabled && 'disabled'}
          type="radio"
          name={name}
          id={formatID(value)}
          value={value}
          checked={stateToCheck === value}
          onChange={event => onChange(event)}
        />
        <label htmlFor={formatID(value)}>
          {name === 'boardSize'
            ? `${value}x${value}`
            : `${value[0].toUpperCase()}${value.slice(1)}`}
        </label>
      </span>
    ))}
  </fieldset>
)

RadioFieldset.propTypes = {
  name: PropTypes.string,
  questionMark: PropTypes.bool,
  title: PropTypes.string,
  values: PropTypes.arrayOf(PropTypes.string),
  disabled: PropTypes.bool,
  formatID: PropTypes.func,
  stateToCheck: PropTypes.string,
  onChange: PropTypes.func
}

export default RadioFieldset
