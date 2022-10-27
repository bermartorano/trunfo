import React, { Component } from 'react';

class CardNameInput extends Component {
  render() {
    return (
      <label htmlFor="card-name">
        Nome da carta
        <input
          type="text"
          data-testid="name-input"
          id="card-name"
          placeholder="Nome da carta"
        />
      </label>
    );
  }
}

export default CardNameInput;
