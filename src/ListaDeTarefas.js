// src/ListaDeTarefas.js

import React, { useContext } from 'react';
import { GerenciadorContext } from './GerenciadorContext'; 
import Tarefa from './Tarefa'; // Importa o componente de linha

function ListaDeTarefas() {
  const { state } = useContext(GerenciadorContext);
  // Defino a lógica de filtragem com base no estado 'filtro'
  const minhasTarefasVisiveis = state.tarefas.filter(tarefa => {
    if (state.filtro === 'CONCLUIDAS') {
      return tarefa.finalizada; // Exibe só as finalizadas
    }
    if (state.filtro === 'PENDENTES') {
      return !tarefa.finalizada; // Exibe só as pendentes
    }
    return true; 
  });

  return (
    <div className="lista-container">
      {minhasTarefasVisiveis.length === 0 ? (
        <p>Nenhuma tarefa encontrada no momento.</p>
      ) : (
        // Uso TABLE para facilitar o alinhamento das colunas (Tarefa, Prioridade, Ações)
        <table className="tabela-tarefas">
            <thead>
                <tr>
                    <th>Tarefa</th> 
                    <th>Prioridade</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
              {/* Mapeio a lista filtrada para renderizar o componente Tarefa para cada item */}
                {minhasTarefasVisiveis.map(t => (
                    <Tarefa key={t.id} tarefa={t} /> 
                ))}
            </tbody>
        </table>
      )}
    </div>
  );
}

export default ListaDeTarefas;