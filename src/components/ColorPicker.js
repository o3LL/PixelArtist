import React from 'react';

// Constants
import { COLORS } from '../constants';

// Redux
import { connect } from "react-redux";
import { updateSelectedColor } from "../actions";

class ColorPicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            colors: COLORS,
        };

        this.changeSelectedColor = this.changeSelectedColor.bind(this);
    }

    render() {
        return <table><tbody><tr>{this.createColors()}</tr></tbody></table>;
    }

    changeSelectedColor(color) {
        this.props.updateSelectedColor(color);
    }

    createColors() {
        let colors = this.state.colors;
        let html = [];

        for (let index = 0; index < colors.length; index++) {
            const color = colors[index];
            html.push( <td key={color} style={{
                backgroundColor: color
            }} onClick={this.changeSelectedColor.bind(this, color)}></td>);
        }

        return html;
    }
}

const mapStateToProps = state => ({
    ...state
});
  
const mapDispatchToProps = dispatch => ({
    updateSelectedColor: (payload) => dispatch(updateSelectedColor(payload)),
});
  
export default connect(mapStateToProps, mapDispatchToProps)(ColorPicker);