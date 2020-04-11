import React from 'react';
import '../styles/Form.css';
import RadioFieldset from './RadioFieldset.js';

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
        console.log(this.state);
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
                    <RadioFieldset 
                        name={"boardSize"}
                        title={"Board Size:"}
                        formatID={value => `generate${value}`}
                        values={["9", "16"]}
                        stateToCheck={this.state.boardSize} 
                        onChange={event => this.handleFormChange(event)} />

                    <RadioFieldset 
                        name={"difficulty"}
                        title={"Difficulty:"}
                        formatID={value => value}
                        values={["easy", "medium", "hard"]}
                        stateToCheck={this.state.difficulty} 
                        onChange={event => this.handleFormChange(event)} />
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