// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GerenciadorProvider } from './GerenciadorContext' // Importo o Provider que contém o estado global (GerenciadorProvider)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Utilizamos o Provider para disponibilizar o 'contexto' e o estado
        para o componente App e todos os componentes que ele renderiza */}
    <GerenciadorProvider>
      <App />
    </GerenciadorProvider>
  </React.StrictMode>
);

reportWebVitals();