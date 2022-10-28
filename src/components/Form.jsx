import React, { Component } from 'react';
import CardNameInput from './CardNameInput';
import CardDescriptionInput from './CardDescriptionInput';
import FirstAttribute from './FirstAttribute';
import SecondAttribute from './SecondAttribute';
import ThirdAttribute from './ThirdAttribute';
import ImagemInput from './ImagemInput';
import RaridyInput from './RaridyInput';
import SuperTrunfoOrNot from './SuperTrunfoOrNot';

class Form extends Component {
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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <section>
        <h2>Form</h2>
        <form>
          <CardNameInput cardName={ cardName } onInputChange={ onInputChange } />
          <CardDescriptionInput
            onInputChange={ onInputChange }
            cardDescription={ cardDescription }
          />
          <FirstAttribute cardAttr1={ cardAttr1 } onInputChange={ onInputChange } />
          <SecondAttribute cardAttr2={ cardAttr2 } onInputChange={ onInputChange } />
          <ThirdAttribute cardAttr3={ cardAttr3 } onInputChange={ onInputChange } />
          <ImagemInput cardImage={ cardImage } onInputChange={ onInputChange } />
          <RaridyInput cardRare={ cardRare } onInputChange={ onInputChange } />
          <SuperTrunfoOrNot cardTrunfo={ cardTrunfo } onInputChange={ onInputChange } />
          <button
            disabled={ isSaveButtonDisabled }
            type="button"
            data-testid="save-button"
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </form>
      </section>
    );
  }
}

export default Form;
