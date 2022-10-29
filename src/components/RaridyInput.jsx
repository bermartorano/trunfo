import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RaridyInput extends Component {
  render() {
    const { cardRare, onInputChange } = this.props;

    return (
      <label htmlFor="raridy-input">
        Raridade
        <select
          name="cardRare"
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

RaridyInput.propTypes = {
  cardRare: PropTypes.string,
  onInputChange: PropTypes.func,
};

RaridyInput.defaultProps = {
  cardRare: '',
  onInputChange: () => console.log('oi'),
};
