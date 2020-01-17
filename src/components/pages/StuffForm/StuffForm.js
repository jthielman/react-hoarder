import React from 'react';

import './StuffForm.scss';

class StuffForm extends React.Component {
  componentDidMount() {
    if (this.props.path === '/stuff/new') {
      console.log('new stuff page');
    } else {
      console.log('edit stuff page');
    }
  }

  render() {
    return (
      <div className='StuffForm'>
        <h1>Form</h1>
      </div>
    );
  }
}

export default StuffForm;
