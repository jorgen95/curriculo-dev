// src/AdicionarTarefa.js

import React, { useState, useContext } from 'react';
import { GerenciadorContext } from './GerenciadorContext'; 

function AdicionarTarefa() {
  // Estado local para os inputs (descrição e prioridade)
  const [textoNovaTarefa, mudarTextoNovo] = useState(''); 
  const [prioridadeSelecionada, setPrioridade] = useState('Media'); 
  const { dispatch } = useContext(GerenciadorContext);

  const quandoClicarAdicionar = (e) => { 
    e.preventDefault(); 
    if (!textoNovaTarefa.trim()) return; 

    // Dispara a ação para adicionar a tarefa ao estado global
    dispatch({ 
      type: 'ADICIONAR_TAREFA', 
      payload: { 
        descricao: textoNovaTarefa,
        prioridade: prioridadeSelecionada
      }
    });
    
    mudarTextoNovo(''); // Limpa o campo de input
  };

  return (
    <form onSubmit={quandoClicarAdicionar} className="adicionar-form">
      <input
        type="text"
        placeholder="Digite uma nova tarefa"
        value={textoNovaTarefa}
        onChange={(e) => mudarTextoNovo(e.target.value)} 
      />
      <select 
        value={prioridadeSelecionada} 
        onChange={(e) => setPrioridade(e.target.value)}
        className="select-prioridade"
      >
        <option value="Alta">Alta</option>
        <option value="Media">Media</option>
        <option value="Baixa">Baixa</option>
      </select>
      <button type="submit">Adicionar Tarefa</button>
    </form>
  );
}

export default AdicionarTarefa;