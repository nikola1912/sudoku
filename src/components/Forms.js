import React from 'react';

class ImportForm extends React.Component {

    render() {
        return (
            <div className={`${this.props.visability ? "form-import" : "hidden"}`}>
                <button
                    className="button"
                    onClick={this.props.onCancel}>Cancel</button>
            </div>
        )
    }
}

class ExportForm extends React.Component {

    render() {
        return (
            <div className={`${this.props.visability ? "form-export" : "hidden"}`}>
                <button
                    className="button"
                    onClick={this.props.onCancel}>Cancel</button>
            </div>
        )
    }
}

export { ImportForm, ExportForm };