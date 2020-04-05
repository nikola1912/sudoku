import React from 'react';
import '../styles/Form.css';

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
            this.setState({showErrorMessage: false});
            this.props.onSubmit({
                board: Array.from(this.state.inputCode),
                boardSize: Number(this.state.boardSize),
                inputMode: this.state.inputMode
            });
        } else this.setState({showErrorMessage: true});
    }
    
    handleFormClear() {
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
                    <fieldset className="radio-size">
                            <legend>Board Size:</legend>
                            <input 
                                type="radio"
                                name="boardSize"
                                id="9x9"
                                value="9"
                                checked={this.state.boardSize === "9"}
                                onChange={event => this.handleFormChange(event)} />
                            <label htmlFor="9x9">9x9</label>
                            <input 
                                type="radio"
                                name="boardSize"
                                id="16x16"
                                value="16"
                                checked={this.state.boardSize === "16"}
                                onChange={event => this.handleFormChange(event)} />
                            <label htmlFor="16x16">16x16</label>
                    </fieldset>

                    <fieldset className="radio-mode">
                        <legend><span className="questionMark">?</span>Input Mode:</legend>
                        <input disabled
                            type="radio"
                            name="inputMode"
                            id="row"
                            value="row"
                            checked={this.state.inputMode === "row"}
                            onChange={event => this.handleFormChange(event)} />
                        <label htmlFor="row">Row</label>
                        <input disabled
                            type="radio"
                            name="inputMode"
                            id="square"
                            value="square"
                            checked={this.state.inputMode === "square"}
                            onChange={event => this.handleFormChange(event)} />
                        <label htmlFor="square">Square</label>
                    </fieldset>
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
                    onClick={() => this.handleFormClear()} />
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