import React, { Component } from 'react';

class CardDescriptionInput extends Component {
  render() {
    const { cardDescription, onInputChange } = this.props;

    return (
      <label htmlFor="card-description">
        Descrição da carta
        <input
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
