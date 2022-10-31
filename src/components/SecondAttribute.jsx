import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SecondAttribute extends Component {
  render() {
    const { cardAttr2, onInputChange } = this.props;

    return (
      <label htmlFor="second-att">
        Segundo Atributo:
        <input
          name="cardAttr2"
          type="number"
          id="second-att"
          data-testid="attr2-input"
          value={ cardAttr2 }
          onChange={ onInputChange }
        />
      </label>
    );
  }
}

export default SecondAttribute;

SecondAttribute.propTypes = {
  cardAttr2: PropTypes.number,
  onInputChange: PropTypes.func,
};

SecondAttribute.defaultProps = {
  cardAttr2: '',
  onInputChange: () => console.log('oi'),
};
