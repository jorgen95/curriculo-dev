import React, { useContext } from 'react';
import { GerenciadorContext } from './GerenciadorContext'; 
import Tarefa from './Tarefa'; 

function ListaDeTarefas() {
  const { state } = useContext(GerenciadorContext);
  const minhasTarefasVisiveis = state.tarefas.filter(tarefa => {
    if (state.filtro === 'CONCLUIDAS') {
      return tarefa.finalizada; 
    }
    if (state.filtro === 'PENDENTES') {
      return !tarefa.finalizada; 
    }
    return true; 
  });

  return (
    <div className="lista-container">
      {minhasTarefasVisiveis.length === 0 ? (
        <p>Nenhuma tarefa encontrada no momento.</p>
      ) : (
        // Cria a estrutura da tabela
        <table className="tabela-tarefas">
            <thead>
                <tr>
                    <th>Tarefa</th> 
                    <th>Prioridade</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
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