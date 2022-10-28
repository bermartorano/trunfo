import React, { Component } from 'react';

class SecondAttribute extends Component {
  render() {
    const { cardAttr2, onInputChange } = this.props;

    return (
      <label htmlFor="second-att">
        Segundo Atributo:
        <input
          type="number"
          id="second-att"
          data-testid="attr2-input"
          name="segundoAtributo"
          value={ cardAttr2 }
          onChange={ onInputChange }
        />
      </label>
    );
  }
}

export default SecondAttribute;
