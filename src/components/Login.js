import React from 'react';
import { NavLink } from "react-router-dom";

export default class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false
        };
    }

    render() {
        return (
            <div>
                <form>
                    <button>Login</button>
                </form>
            </div>
        )
    }
}