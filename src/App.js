import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
    isSaveButtonDisabled: false,
  };

  onInputChange = ({ target }) => {
    const { name, type, checked } = target;
    const value = type === 'checkbox' ? checked : target.value;

    this.setState({
      [name]: value,
    }, () => {
      const {
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
      } = this.state;

      const attributeValidation = (param) => {
        const lengthUperLimit = 91;
        const lengthBottonLimit = -1;
        const result = param > lengthBottonLimit && param < lengthUperLimit;
        return result;
      };

      const sumLimit = 211;
      const cardNameValidation = cardName.length > 0;
      const cardImageValidation = cardImage.length > 0;
      const cardDescriptionValidation = cardDescription.length > 0;
      const cardAttr1Validation = attributeValidation(cardAttr1);
      const cardAttr2Validation = attributeValidation(cardAttr2);
      const cardAttr3Validation = attributeValidation(cardAttr3);
      const cardAttr1Num = parseInt(cardAttr1, 10);
      const cardAttr2Num = parseInt(cardAttr2, 10);
      const cardAttr3Num = parseInt(cardAttr3, 10);
      const attrSumValidation = cardAttr1Num + cardAttr2Num + cardAttr3Num < sumLimit;

      const validationVector = [
        cardNameValidation,
        cardImageValidation,
        cardDescriptionValidation,
        cardAttr1Validation,
        cardAttr2Validation,
        cardAttr3Validation,
        attrSumValidation,
      ];

      const inputValidation = validationVector.every((v) => v === true);
      this.setState({
        isSaveButtonDisabled: inputValidation,
      });
    });
  };

  onSaveButtonClick = () => console.log('função ativada!');

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
    } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ false }
          isSaveButtonDisabled={ !isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
