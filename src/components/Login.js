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
            <div className="box-layout">
                <div className="box-layout__box">
                    <h1>Expensify</h1>
                    <p>It's time to get your expenses under control.</p>
                    <button className="button" onClick={this.props.startLogin}>Login with Google</button>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {startLogin: () => dispatch(startLogin())};
    
};

export default connect(undefined, mapDispatchToProps)(Login);