import React from 'react';
import '../styles/Form.css';

class GenerateForm extends React.Component {
    state = {
        boardSize: "9",
        difficulty: "easy"
    }

    handleBoardSizeChange(boardSize) {
        this.setState({boardSize});
    }

    handleDifficultyChange(difficulty) {
        this.setState({difficulty});
    }

    handleFormChange(event) {
        switch (event.target.name) {
            case "boardSize":
                this.handleBoardSizeChange(event.target.value);
                break;
            case "difficulty":
                this.handleDifficultyChange(event.target.value);
                break;
            default:
                break;
        }
    }

    handleFormSubmit(event) {
        event.preventDefault();
        this.handleFormCancel();
        this.props.onSubmit(this.state);
    }

    handleFormCancel() {
        this.setState({
            boardSize: "9",
            difficulty: "easy"
        }, () => this.props.onCancel())
    }

    render() {
        return (
            <form noValidate
                onSubmit={event => this.handleFormSubmit(event)}
                className={this.props.visability ? "form form-generate" : "hidden"}>
                <div className="radio-container">
                    <fieldset className="radio-boardSize">
                        <legend>Board Size:</legend>
                        <input 
                            type="radio"
                            name="boardSize"
                            id="generate9"
                            value="9"
                            checked={this.state.boardSize === "9"}
                            onChange={event => this.handleFormChange(event)} />
                        <label htmlFor="generate9">9x9</label>
                        <input 
                            type="radio"
                            name="boardSize"
                            id="generate16"
                            value="16"
                            checked={this.state.boardSize === "16"}
                            onChange={event => this.handleFormChange(event)} />
                        <label htmlFor="generate16">16x16</label>
                    </fieldset>

                    <fieldset className="radio-difficulty">
                        <legend>Difficulty:</legend>
                        <input 
                            type="radio"
                            name="difficulty"
                            id="easy"
                            value="easy"
                            checked={this.state.difficulty === "easy"}
                            onChange={event => this.handleFormChange(event)} />
                        <label htmlFor="easy">Easy</label>
                        <input 
                            type="radio"
                            name="difficulty"
                            id="medium"
                            value="medium"
                            checked={this.state.difficulty === "medium"}
                            onChange={event => this.handleFormChange(event)} />
                        <label htmlFor="medium">Medium</label>
                        <input 
                            type="radio"
                            name="difficulty"
                            id="hard"
                            value="hard"
                            checked={this.state.difficulty === "hard"}
                            onChange={event => this.handleFormChange(event)} />
                        <label htmlFor="hard">Hard</label>
                    </fieldset>
                </div>

                <input
                    type="submit"
                    value="Generate"
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

export default GenerateForm;