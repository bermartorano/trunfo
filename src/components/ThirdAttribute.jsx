import React, { Component } from 'react';

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
          name="thirdAttribute"
          value={ cardAttr3 }
          onChange={ onInputChange }
        />
      </label>
    );
  }
}

export default ThirdAttribute;
