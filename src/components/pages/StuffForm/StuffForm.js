import React from 'react';

import './StuffForm.scss';

class StuffForm extends React.Component {
  /* componentDidMount() {
    if (this.props.path === '/stuff/new') {
      console.log('new stuff page');
    } else {
      console.log('edit stuff page');
    }
  } */

  render() {
    return (
      <div className='StuffForm'>
        { this.props.path === '/stuff/new' ? <h1>New Stuff</h1> : <h1>Edit</h1> }
      </div>
    );
  }
}

export default StuffForm;
