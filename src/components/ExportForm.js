import React from 'react';

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

export default ExportForm;