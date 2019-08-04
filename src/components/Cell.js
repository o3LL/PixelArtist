import React from 'react';

// Constants
import { COLORS } from '../constants';

// Redux
import { connect } from "react-redux";

class Cell extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            x: props.x,
            y: props.y,
            clicked: false,
            color: props.color,
        };

        this.clickCell = this.clickCell.bind(this); 
    }

    render() {
        let id = 'cell' + this.state.x + '-' + this.state.y;
        return <td 
            key={id} 
            id={id} 
            onClick={this.clickCell}
            onContextMenu={this.clickCell}
            style={{
                backgroundColor: this.state.color
            }}></td>
    }

    clickCell(event) {
        let selectedColor = 'white'; // Maybe replace by transparent
        let isRemove = false;

        if (event.nativeEvent.which === 1) {
            // If rightclick
            selectedColor = this.props.selectedColor || COLORS[0];
        } else if (event.nativeEvent.which === 3) {
            // If leftclick
            event.preventDefault();
            isRemove = true;
        }

        this.setState({
            clicked: true,
            color: selectedColor
        });

        // Saving current art in localStorage
        let latestArt = JSON.parse(localStorage.getItem('art_matrix')) || [];
        let result = latestArt.filter(cells => !(cells.x === this.props.x && cells.y === this.props.y));
        
        if(!isRemove) {
            result.push({
                x: this.props.x,
                y: this.props.y,
                color: selectedColor,
            });
        }

        localStorage.setItem('art_matrix', JSON.stringify(result));
    }
}

const mapStateToProps = state => ({
    selectedColor: state.selectedColor
});

export default connect(mapStateToProps)(Cell);