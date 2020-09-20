// Higher Order Component (HOC)
// Reuse code
// Render hijacking
// prop manipulation
// Abstract state

import React from "react";
import ReactDOM from "react-dom";

function Info(props) {
  return (
    <div>
      <h1>Fuck ya'll</h1>
      <p>the info is {props.info}</p>
    </div>
  );
}

function withAdminWarning(WrappedComponent) {
  return function (props) {
    return (
      <div>
        {props.isAdmin && <p>This is private info please don't share</p>}
        <WrappedComponent {...props} />
      </div>
    );
  };
}

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isLoggedIn ? (
        <WrappedComponent {...props} />
      ) : (
        <p>Login first son</p>
      )}
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

//ReactDOM.render(<AdminInfo isAdmin={true} info="passing it down son"/>, document.getElementById("app"));
ReactDOM.render(
  <AuthInfo isLoggedIn={false} info="damn" />,
  document.getElementById("app")
);
