import React, { Component } from 'react';

class ImagemInput extends Component {
  render() {
    return (
      <label htmlFor="input-img">
        <input
          name="image"
          type="text"
          id="input-img"
          data-testid="image-input"
          placeholder="Caminho para a imagem"
        />
      </label>
    );
  }
}

export default ImagemInput;
