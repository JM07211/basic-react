
import Greeting from './components/Greeting';
import Button from './components/Button';
import Counter from './components/Counter';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';


function App() {
  //logic


  //view
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

