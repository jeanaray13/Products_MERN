import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './components/Update';

function App() {
  //Enrutamiento principal del programa
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Main/>}/>
          <Route exact path='/:id' element={<Detail/>}/>
          <Route exact path='/:id/edit' element={<Update/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
