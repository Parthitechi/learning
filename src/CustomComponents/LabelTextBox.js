import React, { Component } from "react";
import { Stxtbox } from '../StyledComponents/StyledCom.js';
class LabelTextBox extends Component {
    render() {
        return (
            <div>
                <label>{this.props.labeltextboxlabel}</label>
                <Stxtbox value={(this.props.labeltextboxtext)} onChange={this.props.handleChange}></Stxtbox>
            </div>
        );
    }
}

export default LabelTextBox;
