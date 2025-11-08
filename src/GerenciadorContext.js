import React, { createContext, useReducer } from 'react';

// Meus comandos para mudar o estado
const MUDAR_VISUALIZACAO = 'MUDAR_VISUALIZACAO'; 
const ADICIONAR_TAREFA = 'ADICIONAR_TAREFA'; 
const REMOVER_TAREFA = 'REMOVER_TAREFA';     
const MUDAR_STATUS = 'MUDAR_STATUS';         

const initialState = {
  tarefas: [
    { id: 1, descricao: "Fazer exercícios", finalizada: false, prioridade: 'Alta' },
    { id: 2, descricao: "Estudar React", finalizada: true, prioridade: 'Alta' },
    { id: 3, descricao: "Comprar pão", finalizada: false, prioridade: 'Media' },
  ],
  filtro: 'TODAS', 
};

const reducer = (state, action) => {
  switch (action.type) {
    case ADICIONAR_TAREFA: 
      return {
        ...state,
        tarefas: [
          ...state.tarefas,
          { 
            id: Date.now(), 
            descricao: action.payload.descricao, 
            finalizada: false, 
            prioridade: action.payload.prioridade, 
          }
        ],
      };
    
    case MUDAR_STATUS: 
      return {
        ...state,
        tarefas: state.tarefas.map(t => 
          t.id === action.payload
            ? { ...t, finalizada: !t.finalizada }
            : t
        ),
      };

    case REMOVER_TAREFA: 
        return {
            ...state,
            tarefas: state.tarefas.filter(t => t.id !== action.payload)
        };

    case MUDAR_VISUALIZACAO: 
      return {
        ...state,
        filtro: action.payload,
      };

    default:
      return state;
  }
};

export const GerenciadorContext = createContext(initialState);

export const GerenciadorProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GerenciadorContext.Provider value={{ state, dispatch }}>
      {children}
    </GerenciadorContext.Provider>
  );
};