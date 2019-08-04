import React from 'react';

// Components
import Cell from './Cell';

// Redux
import { connect } from "react-redux";

class Matrice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            size: this.props.size,
        };
    }

    render() {
        let html = this.generatePlaceHolder(this.state.size);
        return <table><tbody>{html}</tbody></table>;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.size !== this.props.size) {
            this.setState({
                size: this.props.size
            });
            this.render();
        }
    }

    generatePlaceHolder(size) {
        let rows = [];

        for (let x = 0; x < size.x; x++) {
            let rowID = `row${x}`
            let cell = []

            for (let y = 0; y < size.y; y++) {
                let color = 'white';
                
                this.props.art.forEach(savedCell => {
                    if(x === savedCell.x && y === savedCell.y) {
                        color = savedCell.color;
                    }
                });

                cell.push(<Cell key={'cell' + x + '-' + y} x={x} y={y} color={color}/>)
            }

            rows.push(<tr key={rowID} id={rowID}>{cell}</tr>)
        }

        return rows.reverse();
    }

}

const mapStateToProps = state => ({
    size: state.size,
    art: state.art
});

export default connect(mapStateToProps)(Matrice);