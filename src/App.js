import React from 'react';
import './App.css';
import Calculator from './components/Calculator';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles'
import { createStore } from 'redux'
import { Provider, useSelector } from 'react-redux'
import reducer from './reducers/calculatorReducer'
const store = createStore(reducer)

// All the following keys are optional, as default values are provided.
const newTheme = createMuiTheme({
  palette: {
    primary: { main: '#81C784' },
    secondary: { main: '#455A64' }
  }
});

function App() {
  return (
    <Provider store={store}>
    <ThemeProvider theme={newTheme}>
      <div className="App">
        <Calculator></Calculator>
      </div>
    </ThemeProvider>
    </Provider>
  );
}

export default App;
