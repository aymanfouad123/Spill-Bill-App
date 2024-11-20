import React, { Component } from "react";

class SplitMethod extends Component {
    state = {};

    render() {
        return (
            <React.Fragment>
                <div style={{display: "block", float: "left", width: 130 }}>
                    <div
                        onChange={this.props.onSelect}
                        className="m-2"
                    >
                        <label
                            htmlFor={this.props.method.id}
                            style={{ width: 120, display: "inline-block" }}
                        >
                            {this.props.method.description}
                        </label>
                        <input
                            type="radio"
                            className="form-check-input"
                            name="splitMethod"
                            id={this.props.method.id}
                            style={{ display: "inline-block" }}
                            value={this.props.method.id}
                        />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default SplitMethod;