

import './App.css'
import Grid from './components/Grid';
import { ContextProvider } from './contexts/Context';



function App() {
  return (

    <ContextProvider >


      <Grid />
    </ContextProvider>

  );
}

export default App
