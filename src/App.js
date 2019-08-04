import React from 'react';

// Bootstrap 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

// Components 
import Matrice from './components/Matrice';
import ColorPicker from './components/ColorPicker';
import SizePicker from './components/SizePicker';
import Tools from './components/Tools';

// Redux
import { Provider } from 'react-redux';
import store from './store';

// Style
import './App.css';

function App() {
  return (
      <Provider store={store}>
        <div className="App">
          <Container>
            <Row>
              <ColorPicker />
            </Row>
            <Row>
              <SizePicker />
            </Row>
          </Container>
          <Matrice />
          <br />
          <Container>
            <Tools />
          </Container>
        </div>
      </Provider>
  );
}

export default App;
