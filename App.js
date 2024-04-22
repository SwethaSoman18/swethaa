import logo from './logo.svg';
import './App.css';

import Secnd from './components/Secnd';
import { Route, Routes } from 'react-router-dom';
import First from './components/First';
import Third from './components/Third';
import Fou from './components/Fou';
import Fivee from './components/Fivee';

function App() {
  return (
    <div className="App">
      <Secnd/>
      <Routes>
        <Route path='/'element={<First/>}/>
        <Route path='/s'element={<Third/>}/>
        <Route path='/z'element={<Fivee/>}/>
      </Routes>
    </div>
  );
}

export default App;
