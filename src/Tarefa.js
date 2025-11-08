import React, { useContext } from 'react';
import { GerenciadorContext } from './GerenciadorContext'; 

function Tarefa({ tarefa }) {
  const { dispatch } = useContext(GerenciadorContext);

  const marcarOuDesmarcar = () => {
    dispatch({ type: 'MUDAR_STATUS', payload: tarefa.id });
  };

  const cliqueParaRemover = () => {
    dispatch({ type: 'REMOVER_TAREFA', payload: tarefa.id });
  };

  return (
    <tr className={`tarefa-linha ${tarefa.finalizada ? 'finalizada' : ''}`}>
      
      <td className="tarefa-descricao-coluna">
        <input 
          type="checkbox"
          checked={tarefa.finalizada}
          onChange={marcarOuDesmarcar}
        />
        <span className="tarefa-descricao" onClick={marcarOuDesmarcar}>
          {tarefa.descricao}
        </span>
      </td>
      
      <td className="tarefa-prioridade-coluna">
        <span className={`prioridade-tag prioridade-${tarefa.prioridade.toLowerCase()}`}>
          {tarefa.prioridade}
        </span>
      </td>

      <td className="tarefa-acoes-coluna">
        <button className="botao-remover" onClick={cliqueParaRemover}>
          Remover
        </button>
      </td>
    </tr>
  );
}

export default Tarefa;