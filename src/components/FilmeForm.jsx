import React, { useState } from 'react';
import axios from 'axios';

const FilmeForm = ({ setFilmes }) => {
  const [formData, setFormData] = useState({
    titulo: '',
    genero: '',
    duracao: '',
    descricao: '',
    dataLancamento: '',
    imagem: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/api/filmes', formData)
      .then(response => {
        setFilmes(prevFilmes => [...prevFilmes, response.data]);
        setFormData({
          titulo: '',
          genero: '',
          duracao: '',
          descricao: '',
          dataLancamento: '',
          imagem: ''
        });
      })
      .catch(error => console.error('Erro ao criar filme', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="titulo" value={formData.titulo} onChange={handleChange} placeholder="Título" required />
      <input type="text" name="genero" value={formData.genero} onChange={handleChange} placeholder="Gênero" required />
      <input type="number" name="duracao" value={formData.duracao} onChange={handleChange} placeholder="Duração (min)" required />
      <textarea name="descricao" value={formData.descricao} onChange={handleChange} placeholder="Descrição" required />
      <input type="date" name="dataLancamento" value={formData.dataLancamento} onChange={handleChange} required />
      <input type="text" name="imagem" value={formData.imagem} onChange={handleChange} placeholder="Nome da Imagem" required />
      <button type="submit">Criar Filme</button>
    </form>
  );
};

export default FilmeForm;
