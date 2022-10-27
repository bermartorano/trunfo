import React, { Component } from 'react';

class ThirdAttribute extends Component {
  render() {
    return (
      <label htmlFor="third-att">
        Terceiro Atributo:
        <input
          type="number"
          id="third-att"
          data-testid="attr3-input"
          name="thirdAttribute"
        />
      </label>
    );
  }
}

export default ThirdAttribute;
