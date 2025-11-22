// src/App.js

import React from 'react';
import './App.css'; 

// Importação dos componentes
import AdicionarTarefa from './AdicionarTarefa';
import Filtros from './Filtros';
import ListaDeTarefas from './ListaDeTarefas'; 

function App() {
  return (
    // Container principal da aplicação
    <div className="container"> 
      <h1>Gerenciador de Tarefas</h1>
      
      <div className="painel-card">
        <h2 className="painel-titulo">Adicionar Nova Tarefa</h2>
        <AdicionarTarefa />
      </div>

      <div className="painel-card">
        <h2 className="painel-titulo">Minhas Tarefas</h2>
        
        
        <Filtros /> 
        
        
        <ListaDeTarefas /> 
      </div>
      
    </div>
  );
}

export default App;