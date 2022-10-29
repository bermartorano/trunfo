import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CardDescriptionInput extends Component {
  render() {
    const { cardDescription, onInputChange } = this.props;

    return (
      <label htmlFor="card-description">
        Descrição da carta
        <input
          name="cardDescription"
          type="textarea"
          data-testid="description-input"
          id="card-description"
          placeholder="Descrição da carta"
          value={ cardDescription }
          onChange={ onInputChange }
        />
      </label>
    );
  }
}

export default CardDescriptionInput;

CardDescriptionInput.propTypes = {
  cardDescription: PropTypes.string,
  onInputChange: PropTypes.func,
};

CardDescriptionInput.defaultProps = {
  cardDescription: '',
  onInputChange: () => console.log('oi'),
};
