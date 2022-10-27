import React, { Component } from 'react';

class CardDescriptionInput extends Component {
  render() {
    return (
      <label htmlFor="card-description">
        Descrição da carta
        <input
          type="textarea"
          data-testid="description-input"
          id="card-description"
          placeholder="Descrição da carta"
        />
      </label>
    );
  }
}

export default CardDescriptionInput;
