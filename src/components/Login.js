import React from 'react';
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';

import { startLogin } from '../actions/auth';
export class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <button onClick={this.props.startLogin}>Login</button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {startLogin: () => dispatch(startLogin())};
    
};

export default connect(undefined, mapDispatchToProps)(Login);