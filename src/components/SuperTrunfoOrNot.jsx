import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SuperTrunfoOrNot extends Component {
  render() {
    const { cardTrunfo, onInputChange, hasTrunfo } = this.props;

    if (!hasTrunfo) {
      return (
        <label htmlFor="super-trunfo">
          Super Trunfo
          <input
            type="checkbox"
            name="cardTrunfo"
            id="super-trunfo"
            data-testid="trunfo-input"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
        </label>
      );
    }

    return (<p>Você já tem um Super Trunfo em seu baralho</p>);
  }
}

export default SuperTrunfoOrNot;

SuperTrunfoOrNot.propTypes = {
  cardTrunfo: PropTypes.bool,
  onInputChange: PropTypes.func,
  hasTrunfo: PropTypes.bool,
};

SuperTrunfoOrNot.defaultProps = {
  cardTrunfo: '',
  hasTrunfo: false,
  onInputChange: () => console.log('oi'),
};
