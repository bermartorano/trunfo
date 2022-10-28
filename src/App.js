import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  onInputChange = () => console.log('função disparada!');

  onSaveButtonClick = () => console.log('função ativada!');

  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName="Nome da Carta"
          cardDescription=""
          cardAttr1=""
          cardAttr2=""
          cardAttr3=""
          cardImage=""
          cardRare=""
          cardTrunfo={ false }
          hasTrunfo={ false }
          isSaveButtonDisabled={ false }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName=""
          cardDescription=""
          cardAttr1=""
          cardAttr2=""
          cardAttr3=""
          cardImage=""
          cardRare=""
          cardTrunfo={ false }
        />
      </div>
    );
  }
}

export default App;
