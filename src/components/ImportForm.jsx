import React from 'react';
import '../styles/Form.css';
import RadioFieldset from './RadioFieldset.jsx';
import arrayToMatrix from '../util/arrayToMatrix.js';

class ImportForm extends React.Component {
    state = {
        boardSize: "9",
        inputMode: "",
        inputCode: "",
        showErrorMessage: false
    }

    handleBoardSizeChange(boardSize) {
        this.setState({boardSize});
    }

    handleInputModeChange(inputMode) {
        this.setState({inputMode});
    }

    handleInputCodeChange(inputCode) {
        this.setState({inputCode});
    }

    handleFormChange(event) {
        switch (event.target.name) {
            case "boardSize":
                this.handleBoardSizeChange(event.target.value);
                break;
            case "inputMode":
                this.handleInputModeChange(event.target.value);
                break;
            case "inputCode":
                this.handleInputCodeChange(event.target.value);
                break;
            default:
                break;
        }
        this.setState({showErrorMessage: false});
    }

    validateForm() {
        const requiredCodeLength = parseInt(this.state.boardSize)**2;
        return this.state.inputCode.length === requiredCodeLength;
    }

    handleFormSubmit(event) {
        event.preventDefault();
        if (this.validateForm()) {
            this.handleFormCancel();
            this.props.onSubmit({
                board: arrayToMatrix(Array.from(this.state.inputCode), this.state.boardSize),
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
        }, () => this.props.onCancel())
    }

    render() {
        return (
            <form noValidate
                onSubmit={event => this.handleFormSubmit(event)}
                className={this.props.visability ? "form form-import" : "hidden"}>
                <div className="radio-container">
                    <RadioFieldset 
                        name="boardSize"
                        title={"Board Size:"}
                        formatID={value => `${value}x${value}`}
                        values={["9", "16"]}
                        stateToCheck={this.state.boardSize} 
                        onChange={event => this.handleFormChange(event)} />

                    <RadioFieldset
                        disabled={true}
                        questionMark={true}
                        name={"inputMode"}
                        title={"Input Mode:"}
                        formatID={value => value}
                        values={["row", "square"]}
                        stateToCheck={this.state.inputMode} 
                        onChange={event => this.handleFormChange(event)} />
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
                        onChange={event => this.handleFormChange(event)} />
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