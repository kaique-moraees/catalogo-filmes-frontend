import React from 'react';

const CardFilme = ({ filme }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px' }}>
      <img src={`/images/${filme.imagem}`} alt={filme.titulo} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
      <h3>{filme.titulo}</h3>
      <p><strong>Gênero:</strong> {filme.genero}</p>
      <p><strong>Duração:</strong> {filme.duracao} min</p>
      <p><strong>Lançamento:</strong> {filme.dataLancamento}</p>
      <p>{filme.descricao}</p>
    </div>
  );
}

export default CardFilme;
