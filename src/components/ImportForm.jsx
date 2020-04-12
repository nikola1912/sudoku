import React from 'react';
import '../styles/Form.css';
import RadioFieldset from './RadioFieldset.jsx';
import arrayToMatrix from '../util/arrayToMatrix.js';

class ImportForm extends React.Component {
    state = {
        boardSize: "9",
        inputMode: "",
        inputCode: "",
        validInputs: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
        showErrorMessage: false
    }

    handleBoardSizeChange(boardSize) {
        if (boardSize === "9")
            this.setState({validInputs: ["1", "2", "3", "4", "5", "6", "7", "8", "9"]});
        else if (boardSize === "16")
            this.setState({validInputs: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]});
        this.setState({boardSize});
    }

    handleInputModeChange(inputMode) {
        this.setState({inputMode});
    }

    handleInputCodeChange(inputCode) {
        this.setState({inputCode});
    }

    hideErrorMessage() {
        this.setState({showErrorMessage: false});
    }

    validateForm() {
        const requiredCodeLength = parseInt(this.state.boardSize)**2;
        return this.state.inputCode.length === requiredCodeLength;
    }

    formatInputCode(inputCode) {
        return inputCode.map(value => this.state.validInputs.includes(value.toUpperCase()) ? value.toUpperCase() : " ");
    }

    handleFormSubmit(event) {
        event.preventDefault();
        if (this.validateForm()) {
            this.handleFormCancel();
            this.props.onSubmit({
                board: arrayToMatrix(this.formatInputCode(Array.from(this.state.inputCode)), this.state.boardSize),
                boardSize: Number(this.state.boardSize),
                inputMode: this.state.inputMode
            });
        } else this.setState({showErrorMessage: true});
    }
    
    handleFormCancel() {
        this.setState({
            boardSize: "9",
            inputMode: "",
            inputCode: "",
            showErrorMessage: false
        }, () => this.props.onCancel());
    }

    render() {
        return (
            <form noValidate
                onChange={() => this.hideErrorMessage()}
                onSubmit={event => this.handleFormSubmit(event)}
                className={this.props.visability ? "form form-import" : "hidden"}>
                <div className="radio-container">
                    <RadioFieldset 
                        name="boardSize"
                        title={"Board Size:"}
                        formatID={value => `${value}x${value}`}
                        values={["9", "16"]}
                        stateToCheck={this.state.boardSize} 
                        onChange={event => this.handleBoardSizeChange(event.target.value)} />

                    <RadioFieldset
                        disabled={true}
                        questionMark={true}
                        name={"inputMode"}
                        title={"Input Mode:"}
                        formatID={value => value}
                        values={["row", "square"]}
                        stateToCheck={this.state.inputMode} 
                        onChange={event => this.handleInputModeChange(event.target.value)} />
                </div>

                <div className="input-code-container">
                    <label>
                        <span className="questionMark">?</span>
                        Sudoku Code:
                    </label>
                    <input required
                        type="text"
                        name="inputCode"
                        value={this.state.inputCode}
                        onChange={event => this.handleInputCodeChange(event.target.value)} />
                    <ErrorMessage 
                        className={`error-message ${this.state.showErrorMessage ? "show-error-message" : ""}`}
                        inputValid={() => this.validateForm()}
                        requiredCodeLength={this.state.boardSize**2} />
                </div>

                <input
                    type="submit"
                    value="Submit"
                    className="button" />
                <input
                    type="button"
                    value="Cancel"
                    className="button"
                    onClick={() => this.handleFormCancel()} />
            </form>
        )
    }
}

const ErrorMessage = (props) => (
    <span className={props.className}>
        {props.inputValid ?
        `Input code doesn't contain ${props.requiredCodeLength} values` : ""}
    </span>
)

export default ImportForm;