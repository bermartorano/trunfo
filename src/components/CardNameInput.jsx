import React, { Component } from 'react';

class CardNameInput extends Component {
  render() {
    const { cardName, onInputChange } = this.props;

    return (
      <label htmlFor="card-name">
        Nome da carta
        <input
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
