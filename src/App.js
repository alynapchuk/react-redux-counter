import React from 'react';
import CounterApp from './components/CounterApp';

import { Provider } from 'react-redux';
import { store } from './store';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CounterApp />
      </div>
    </Provider>
  );
}

export default App;
