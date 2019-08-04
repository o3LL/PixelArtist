import React from 'react';

// Bootstrap
import Button from 'react-bootstrap/Button';

// Redux
import { connect } from "react-redux";
import { resetAll } from "../actions";

class Tools extends React.Component {
    constructor(props) {
        super(props);
        this.reset = this.reset.bind(this);
    }

    render() {
        return <div>
            <Button onClick={this.reset}>Reset</Button>
        </div>;
    }

    reset() {
        this.props.resetAll();
    }
}
  
const mapDispatchToProps = dispatch => ({
    resetAll: (payload) => dispatch(resetAll(payload)),
});
  
export default connect(null, mapDispatchToProps)(Tools);