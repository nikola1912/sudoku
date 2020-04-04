import React from 'react';

class Buttons extends React.Component {
    render() {
        return (
            <div className="buttons-container">
                <button className="button">Import</button>
                <button className="button">Solve</button>
                <button className="button">Generate</button>
                <button className="button">Reset</button>
            </div>
        )
    }
}

export default Buttons;