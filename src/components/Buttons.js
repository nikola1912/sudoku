import React from 'react';

const HeaderButtons = (props) => (
    <div className="buttons-container">
        <button
            className="button"
            onClick={props.onSolve}>
            Solve
        </button>
        <button
            className="button"
            onClick={props.onRestart}>
            Restart
        </button>
    </div>
)

const FooterButtons = (props) => (
    <div className={props.visability ? "buttons-container" : "hidden"}>
         <button
            className="button"
            onClick={props.onImport}>
            Import
        </button>
        <button
            className="button"
            onClick={props.onGenerate}>
            Generate
        </button>
        <button
            className="button"
            onClick={props.onExport}>
            Export
        </button>
    </div>
)

export { HeaderButtons, FooterButtons };