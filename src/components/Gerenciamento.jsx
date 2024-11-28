import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FilmeForm from './FilmeForm';

const Gerenciamento = () => {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    axios.get('http://52.5.108.112:8080/api/filmes')
      .then(response => setFilmes(response.data))
      .catch(error => console.error('Erro ao carregar filmes', error));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://52.5.108.112:8080/api/filmes/${id}`)
      .then(() => {
        setFilmes(filmes.filter(filme => filme.id !== id));
      })
      .catch(error => console.error('Erro ao excluir filme', error));
  };

  return (
    <div>
      <FilmeForm setFilmes={setFilmes} />
      <h3>Lista de Filmes</h3>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Gênero</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {filmes.map(filme => (
            <tr key={filme.id}>
              <td>{filme.titulo}</td>
              <td>{filme.genero}</td>
              <td>
                <button onClick={() => handleDelete(filme.id)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Gerenciamento;
