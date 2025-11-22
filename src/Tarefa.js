// src/Tarefa.js

import React, { useContext } from 'react';
import { GerenciadorContext } from './GerenciadorContext'; 

function Tarefa({ tarefa }) {
  const { dispatch } = useContext(GerenciadorContext);

  const marcarOuDesmarcar = () => {
    // Uso o dispatch para avisar o Reducer que essa tarefa mudou de status
    dispatch({ type: 'MUDAR_STATUS', payload: tarefa.id });
  };

  const cliqueParaRemover = () => {
    // Uso o dispatch para pedir para remover essa tarefa (passo o ID)
    dispatch({ type: 'REMOVER_TAREFA', payload: tarefa.id });
  };

  // Renderiza a linha (<tr>) da tabela. Mais fácil de alinhar assim
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