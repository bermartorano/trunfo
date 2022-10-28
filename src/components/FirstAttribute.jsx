import React, { Component } from 'react';

class FirstAttribute extends Component {
  render() {
    const { cardAttr1, onInputChange } = this.props;

    return (
      <label htmlFor="first-att">
        Primeiro Atributo
        <input
          type="number"
          id="first-att"
          data-testid="attr1-input"
          value={ cardAttr1 }
          onChange={ onInputChange }
        />
      </label>
    );
  }
}

export default FirstAttribute;
