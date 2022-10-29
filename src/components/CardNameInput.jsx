import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CardNameInput extends Component {
  render() {
    const { cardName, onInputChange } = this.props;

    return (
      <label htmlFor="card-name">
        Nome da carta
        <input
          name="cardName"
          type="text"
          data-testid="name-input"
          id="card-name"
          placeholder="Nome da carta"
          value={ cardName }
          onChange={ onInputChange }
        />
      </label>
    );
  }
}

export default CardNameInput;

CardNameInput.propTypes = {
  cardName: PropTypes.string,
  onInputChange: PropTypes.func,
};

CardNameInput.defaultProps = {
  cardName: '',
  onInputChange: () => console.log('oi'),
};
