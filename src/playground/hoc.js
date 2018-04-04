// Higher Order Component (HOC)
import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            <p>This is private info. Please don't share!</p>
            <WrappedComponent {...props}/>
        </div>
    )

};

const AdminInfo = withAdminWarning(Info);

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {!props.isAuthenticated && <p>Please login</p>}
            {props.isAuthenticated && <WrappedComponent {...props}/>}
        </div>
    )
};

const AuthInfo = requireAuthentication(Info);

//ReactDOM.render(<AdminInfo info="Hello"></AdminInfo>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="Hello"></AuthInfo>, document.getElementById('app'));