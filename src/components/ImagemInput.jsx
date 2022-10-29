import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

ImagemInput.propTypes = {
  cardImage: PropTypes.string,
  onInputChange: PropTypes.func,
};

ImagemInput.defaultProps = {
  cardImage: '',
  onInputChange: () => console.log('oi'),
};
