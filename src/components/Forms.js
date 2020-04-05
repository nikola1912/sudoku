import React from 'react';

class ImportForm extends React.Component {
    state = {
        boardSize: "9",
        inputMode: "",
        inputCode: ""
    }

    handleBoardSizeChange(event) {
        this.setState({boardSize: event.target.value});
    }

    handleInputModeChange(event) {
        this.setState({inputMode: event.target.value});
    }

    handleInputCodeChange(event) {
        this.setState({inputCode: event.target.value});
    }

    handleFormSubmit(event) {
        event.preventDefault();
        this.props.onSubmit({...this.state});
    }

    render() {
        return (
            <form 
                onSubmit={event => this.handleFormSubmit(event)}
                className={`${this.props.visability ? "form form-import" : "hidden"}`}>
                <div className="radio-container">
                    <fieldset className="radio-size">
                            <legend>Board Size:</legend>
                            <input 
                                type="radio"
                                id="9x9"
                                value="9"
                                checked={this.state.boardSize === "9"}
                                onChange={event => this.handleBoardSizeChange(event)} />
                            <label htmlFor="9x9">9x9</label>
                            <input 
                                type="radio"
                                id="16x16"
                                value="16"
                                checked={this.state.boardSize === "16"}
                                onChange={event => this.handleBoardSizeChange(event)} />
                            <label htmlFor="16x16">16x16</label>
                    </fieldset>

                    <fieldset className="radio-mode">
                        <legend><span className="questionMark">?</span>Input Mode:</legend>
                        <input disabled
                            type="radio"
                            id="row"
                            value="row"
                            checked={this.state.inputMode === "row"}
                            onChange={event => this.handleInputModeChange(event)} />
                        <label htmlFor="row">Row</label>
                        <input disabled
                            type="radio"
                            id="square"
                            value="square"
                            checked={this.state.inputMode === "square"}
                            onChange={event => this.handleInputModeChange(event)} />
                        <label htmlFor="square">Square</label>
                    </fieldset>
                </div>

                <div className="input-code-container">
                    <label htmlFor="input-code">
                        <span className="questionMark">?</span>
                        Sudoku Code:
                    </label>
                    <input required
                        type="text"
                        id="input-code"
                        value={this.state.inputCode}
                        onChange={event => this.handleInputCodeChange(event)} />
                </div>

                <input
                    type="submit"
                    value="Submit"
                    className="button" />
                <input
                    type="button"
                    value="Cancel"
                    className="button"
                    onClick={this.props.onCancel} />
            </form>
        )
    }
}

class ExportForm extends React.Component {

    render() {
        return (
            <div className={`${this.props.visability ? "form form-export" : "hidden"}`}>
                <button
                    className="button"
                    onClick={this.props.onCancel}>Cancel</button>
            </div>
        )
    }
}

export { ImportForm, ExportForm };