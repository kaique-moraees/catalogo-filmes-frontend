import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Catalogo from './components/Catalogo';
import Gerenciamento from './components/Gerenciamento';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <h1>Catálogo de Filmes</h1>
        <div className="buttons">
          <button onClick={() => window.location.href = '/catalogo'}>Catálogo</button>
          <button onClick={() => window.location.href = '/gerenciamento'}>Gerenciamento</button>
        </div>

        <Routes>
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/gerenciamento" element={<Gerenciamento />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
