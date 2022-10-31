import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ThirdAttribute extends Component {
  render() {
    const { cardAttr3, onInputChange } = this.props;

    return (
      <label htmlFor="third-att">
        Terceiro Atributo:
        <input
          type="number"
          id="third-att"
          data-testid="attr3-input"
          name="cardAttr3"
          value={ cardAttr3 }
          onChange={ onInputChange }
        />
      </label>
    );
  }
}

export default ThirdAttribute;

ThirdAttribute.propTypes = {
  cardAttr3: PropTypes.string,
  onInputChange: PropTypes.func,
};

ThirdAttribute.defaultProps = {
  cardAttr3: '0',
  onInputChange: () => console.log('oi'),
};
