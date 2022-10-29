import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SuperTrunfoOrNot extends Component {
  render() {
    const { cardTrunfo, onInputChange } = this.props;

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
}

export default SuperTrunfoOrNot;

SuperTrunfoOrNot.propTypes = {
  cardTrunfo: PropTypes.string,
  onInputChange: PropTypes.func,
};

SuperTrunfoOrNot.defaultProps = {
  cardTrunfo: '',
  onInputChange: () => console.log('oi'),
};
