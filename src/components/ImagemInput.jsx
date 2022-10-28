import React, { Component } from 'react';

class ImagemInput extends Component {
  render() {
    const { cardImage, onInputChange } = this.props;

    return (
      <label htmlFor="input-img">
        <input
          name="cardImage"
          type="text"
          id="input-img"
          data-testid="image-input"
          placeholder="Caminho para a imagem"
          value={ cardImage }
          onChange={ onInputChange }
        />
      </label>
    );
  }
}

export default ImagemInput;
