import React from 'react'
import PropTypes from 'prop-types'

const HeaderButtons = ({ onSolve, onRestart }) => (
  <div className="buttons-container">
    <button className="button" onClick={onSolve}>
      Solve
    </button>
    <button className="button" onClick={onRestart}>
      Restart
    </button>
  </div>
)

const FooterButtons = ({ visability, onImport, onGenerate, onExport }) => (
  <div className={visability ? 'buttons-container' : 'hidden'}>
    <button className="button" onClick={onImport}>
      Import
    </button>
    <button className="button" onClick={onGenerate}>
      Generate
    </button>
    <button className="button" onClick={onExport}>
      Export
    </button>
  </div>
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

export { HeaderButtons, FooterButtons }
