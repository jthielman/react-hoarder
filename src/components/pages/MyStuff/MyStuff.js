import React from 'react';
import { Link } from 'react-router-dom';

import './MyStuff.scss';

class MyStuff extends React.Component {
  render() {
    const stuffId = '12345';
    return (
      <div className='MyStuff'>
        <h1>My Stuff</h1>
        <Link className='btn btn-warning' to={`/stuff/${stuffId}/edit`}>Edit</Link>
        <Link className='btn btn-primary' to={`/stuff/${stuffId}`}>Single</Link>
      </div>
    );
  }
}

export default MyStuff;
