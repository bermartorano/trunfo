import React, { Component } from 'react';

class SuperTrunfoOrNot extends Component {
  render() {
    const { cardTrunfo, onInputChange } = this.props;

    return (
      <label htmlFor="super-trunfo">
        Super Trunfo
        <input
          type="checkbox"
          name="superTrunfo"
          id="super-trunfo"
          data-testid="trunfo-input"
          checked={ cardTrunfo }
          onChange={ onInputChange }
        />
      </label>
    );
  }
}

export default SuperTrunfoOrNot;
