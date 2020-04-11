import React from 'react';

const RadioFieldset = (props) => (
    <fieldset className={`radio-${props.name}`}>
        <legend>
            {props.questionMark && <span className="questionMark">?</span>}
            {props.title}
        </legend>
        {props.values.map(value => 
            <span key={value}>
                <input 
                    disabled={props.disabled && "disabled"}
                    type="radio"
                    name={props.name}
                    id={props.formatID(value)}
                    value={value}
                    checked={props.stateToCheck === value}
                    onChange={event => props.onChange(event)} />
                <label htmlFor={props.formatID(value)}>
                    {props.name === "boardSize" ?
                        `${value}x${value}` :
                        `${value[0].toUpperCase()}${value.slice(1)}`}
                </label>
            </span>
        )}
    </fieldset>
)

export default RadioFieldset;