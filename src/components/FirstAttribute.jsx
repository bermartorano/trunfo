import React, { Component } from 'react';

class FirstAttribute extends Component {
  render() {
    return (
      <label htmlFor="first-att">
        Primeiro Atributo
        <input type="number" id="first-att" data-testid="attr1-input" />
      </label>
    );
  }
}

export default FirstAttribute;
