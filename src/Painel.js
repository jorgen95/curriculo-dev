import React from 'react';

function Painel({ titulo, children }) {
  return (
    <div className="painel-card">
      {titulo && <h2 className="painel-titulo">{titulo}</h2>}
      <div className="painel-conteudo">
        {children}
      </div>
    </div>
  );
}

export default Painel;