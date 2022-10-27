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
    return (
      <section>
        <h2>Form</h2>
        <form>
          <CardNameInput />
          <CardDescriptionInput />
          <FirstAttribute />
          <SecondAttribute />
          <ThirdAttribute />
          <ImagemInput />
          <RaridyInput />
          <SuperTrunfoOrNot />
          <button type="button" data-testid="save-button">Salvar</button>
        </form>
      </section>
    );
  }
}

export default Form;
