import React, { Component } from 'react';

class SecondAttribute extends Component {
  render() {
    return (
      <label htmlFor="second-att">
        Segundo Atributo:
        <input
          type="number"
          id="second-att"
          data-testid="attr2-input"
          name="segundoAtributo"
        />
      </label>
    );
  }
}

export default SecondAttribute;
