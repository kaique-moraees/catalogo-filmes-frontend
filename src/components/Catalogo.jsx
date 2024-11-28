import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardFilme from './CardFilme';

const Catalogo = () => {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    axios.get('http://52.5.108.112:8080/api/filmes')
      .then(response => setFilmes(response.data))
      .catch(error => console.error('Erro ao carregar filmes', error));
  }, []);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
      {filmes.map(filme => <CardFilme key={filme.id} filme={filme} />)}
    </div>
  );
}

export default Catalogo;
