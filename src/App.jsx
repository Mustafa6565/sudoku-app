

import './App.css'
import Grid from './components/Grid';
import Grid9x9 from './components/Sudoku';
import { ContextProvider } from './contexts/Context';



function App() {
  return (

    <ContextProvider >

      <Grid9x9 />

    </ContextProvider>

  );
}

export default App
