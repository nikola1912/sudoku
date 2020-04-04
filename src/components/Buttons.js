import React from 'react';

class Buttons extends React.Component {
    render() {
        return (
            <div className="buttons-container">
                <button
                    className="button"
                    onClick={this.props.onImport}>
                    Import
                </button>
                <button
                    className="button"
                    onClick={this.props.onSolve}>
                    Solve
                </button>
                <button
                    className="button"
                    onClick={this.props.onGenerate}>
                    Generate
                </button>
                <button
                    className="button"
                    onClick={this.props.onRestart}>
                    Restart
                </button>
            </div>
        )
    }
}

export default Buttons;