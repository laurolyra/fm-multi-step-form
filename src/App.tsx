import React from 'react';
import { FormContainer } from './components/FormContainer';
import './App.css';
import { FormInfoProvider } from './context/FormInfoContext';

function App() {
  return (
    <div className="app flex bg-blue-200 items-center">
      <FormInfoProvider>
        <FormContainer />
      </FormInfoProvider>
    </div>
  );
}

export default App;
