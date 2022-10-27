import React, { Component } from 'react';

class SuperTrunfoOrNot extends Component {
  render() {
    return (
      <label htmlFor="super-trunfo">
        Super Trunfo
        <input
          type="checkbox"
          name="superTrunfo"
          id="super-trunfo"
          data-testid="trunfo-input"
        />
      </label>
    );
  }
}

export default SuperTrunfoOrNot;
