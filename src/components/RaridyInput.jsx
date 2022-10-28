import React, { Component } from 'react';

class RaridyInput extends Component {
  render() {
    const { cardRare, onInputChange } = this.props;

    return (
      <label htmlFor="raridy-input">
        RaridyInput
        <select
          name="raridy"
          id="raridy-input"
          data-testid="rare-input"
          onChange={ onInputChange }
          value={ cardRare }
        >
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito Raro</option>
        </select>
      </label>
    );
  }
}

export default RaridyInput;
