import React, { useContext } from 'react';
import { GerenciadorContext } from './GerenciadorContext'; 

function Filtros() {
    const { state, dispatch } = useContext(GerenciadorContext);

    // Função que envia para o reducer o tipo de filtro clicado
    const mudarFiltro = (filtro) => {
        dispatch({ type: 'MUDAR_VISUALIZACAO', payload: filtro }); 
    };

    return (
        <div className="filtros">
            <button 
                className={state.filtro === 'TODAS' ? 'selecionado' : ''} 
                onClick={() => mudarFiltro('TODAS')}
            >
                Todas
            </button>
            <button 
                className={state.filtro === 'PENDENTES' ? 'selecionado' : ''} 
                onClick={() => mudarFiltro('PENDENTES')}
            >
                Pendentes
            </button>
            <button 
                className={state.filtro === 'CONCLUIDAS' ? 'selecionado' : ''} 
                onClick={() => mudarFiltro('CONCLUIDAS')}
            >
                Concluídas
            </button>
        </div>
    );
}

export default Filtros;