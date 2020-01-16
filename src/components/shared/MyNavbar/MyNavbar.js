import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import firebase from 'firebase/app';
import 'firebase/auth';

class MyNavbar extends React.Component {
  static propTypes = {
    authed: PropTypes.bool,
  }

  render() {
    const { authed } = this.props;
    const buildNavbar = () => {
      if (authed) {
        return (
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <Link className='nav-link' to='/'>Home</Link>
            </li>
          </ul>
        );
      }
      return (<ul className='navbar-nav ml-auto'></ul>);
    };

    return (
      <div className='MyNavbar'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="nav-brand" to="/">Hoarder</Link>
            { buildNavbar() }
        </nav>
      </div>
    );
  }
}

export default MyNavbar;
