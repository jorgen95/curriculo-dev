// src/GerenciadorContext.js

import React, { createContext, useReducer } from 'react';

// Meus comandos para mudar o estado
const MUDAR_VISUALIZACAO = 'MUDAR_VISUALIZACAO'; 
const ADICIONAR_TAREFA = 'ADICIONAR_TAREFA'; 
const REMOVER_TAREFA = 'REMOVER_TAREFA';     
const MUDAR_STATUS = 'MUDAR_STATUS';         // Para marcar/desmarcar o checkbox

// Onde a aplicação começa
const initialState = {
  tarefas: [
    { id: 1, descricao: "Fazer exercícios", finalizada: false, prioridade: 'Alta' },
    { id: 2, descricao: "Estudar React", finalizada: true, prioridade: 'Alta' },
    { id: 3, descricao: "Comprar pão", finalizada: false, prioridade: 'Media' },
  ],
  filtro: 'TODAS', 
};

// Esta é a função que o useReducer usa para atualizar o estado
const reducer = (state, action) => {
  switch (action.type) {
    case ADICIONAR_TAREFA:
      // Crio um novo array de tarefas e jogo a nova no final
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
      // Tenho que passar por todas as tarefas e achar a que tem o ID certo
      return {
        ...state,
        tarefas: state.tarefas.map(t => 
          t.id === action.payload
            ? { ...t, finalizada: !t.finalizada }
            : t
        ),
      };

    case REMOVER_TAREFA:
      // Uso o filter para tirar a tarefa com o ID que foi clicado
        return {
            ...state,
            tarefas: state.tarefas.filter(t => t.id !== action.payload)
        };

    case MUDAR_VISUALIZACAO:
      // Só troco a string do filtro que está no estado
      return {
        ...state,
        filtro: action.payload,
      };

    default:
      return state;
  }
};

// Crio o Contexto (a caixa onde os dados ficam)
export const GerenciadorContext = createContext(initialState);

// O Provider é o que vai embrulhar o App todo e dar acesso ao estado
export const GerenciadorProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GerenciadorContext.Provider value={{ state, dispatch }}>
      {children}
    </GerenciadorContext.Provider>
  );
};