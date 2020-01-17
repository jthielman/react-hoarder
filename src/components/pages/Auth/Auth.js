import React from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import 'firebase/auth';

import './Auth.scss';

class Auth extends React.Component {
  static propTypes = {
    authed: PropTypes.bool,
  }

  loginClickEvent = (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }

  render() {
    return (
      <div className="Auth">
        <h1>Auth Page</h1>
        <button className="btn btn-danger" onClick={this.loginClickEvent}>Login with Google</button>
      </div>
    );
  }
}

export default Auth;
