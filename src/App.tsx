import React from 'react';
import logo from './logo.svg';
import './App.css';
import Fincard from './components/fincard/Fincard';
import Typography from '@material-ui/core/Typography';
function App() {
  return (
    <div className="App">
      <Typography className="fincalcHead" variant="h1" gutterBottom>Fin Calc</Typography>
      <Fincard/>
    </div>
  );
}

export default App;
