import React from 'react'
import PropTypes from 'prop-types'

const HeaderButtons = ({ onSolve, onRestart }) => (
  <div className="buttons-container">
    <Button text="Solve" onClick={onSolve} />
    <Button text="Restart" onClick={onRestart} />
  </div>
)

const FooterButtons = ({ visability, onImport, onGenerate, onExport }) => (
  <div className={visability ? 'buttons-container' : 'hidden'}>
    <Button text="Import" onClick={onImport} />
    <Button text="Generate" onClick={onGenerate} />
    <Button text="Export" onClick={onExport} />
  </div>
)

const Button = ({ text, onClick }) => (
  <button className="button" onClick={onClick}>
    {text}
  </button>
)

HeaderButtons.propTypes = {
  onSolve: PropTypes.func,
  onRestart: PropTypes.func
}

FooterButtons.propTypes = {
  visability: PropTypes.bool,
  onImport: PropTypes.func,
  onGenerate: PropTypes.func,
  onExport: PropTypes.func
}

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func
}

export { HeaderButtons, FooterButtons }
