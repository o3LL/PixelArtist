import React from 'react';
import { connect } from "react-redux";
import { updateSize } from "../actions";

class SizePicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            x: this.props.x,
            y: this.props.y,
        };
    }

    componentDidUpdate() {
        if (this.props.x !== this.state.x || this.props.y !== this.state.y) {
            this.setState({
                x: this.props.x,
                y: this.props.y
            });
            this.render();
        }
    }

    render() {
        return <div>
            <label>Set X 
                <input 
                    type="number" 
                    id="input-x"
                    min="2" 
                    value={this.state.x} 
                    onChange={this.changeSize.bind(this)}
                />
            </label>
            <label>Set y
                <input 
                    type="number" 
                    id="input-y" 
                    min="2" 
                    value={this.state.y} 
                    onChange={this.changeSize.bind(this)}
                />
            </label> 
        </div>;
    }

    changeSize(event) {
        let size = {};
        let point = event.target.id.replace('input-','');
        size[point] = parseInt(event.target.value, 10);
        let newSizes = Object.assign(this.state, size);

        this.setState({
            ...newSizes
        });
        
        localStorage.setItem('art_size', JSON.stringify(newSizes));
        this.props.updateSize(newSizes);
    }
}

const mapStateToProps = state => ({
    x: state.size.x,
    y: state.size.y
});
  
const mapDispatchToProps = dispatch => ({
    updateSize: (payload) => dispatch(updateSize(payload)),
});
  
export default connect(mapStateToProps, mapDispatchToProps)(SizePicker);