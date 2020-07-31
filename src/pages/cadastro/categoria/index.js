import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PageDefault from "../../../components/PageDefault";
import FormField from "../../../components/FormField";
import Button from "../../../components/Button";
import useForm from "../../../hooks/useForm";

const CadastroCategoria = () => {

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000000',
  }

  const { handleOnChange, values, clearForm } = useForm(valoresIniciais);
  
  const[categorias, setCategorias] = useState([]);

  useEffect(() => {
    const URL_TOP = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://alanovaesflix.herokuapp.com/categorias';

      fetch(URL_TOP)
      .then(async (serverResponse) => {
        const resposta = await serverResponse.json();
        setCategorias([
          ...resposta,
        ]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>
     
      <form onSubmit={function handleSubmit(infoEvento) {
        infoEvento.preventDefault();
        setCategorias([
          ...categorias,
          values
        ]);

        clearForm();

      }}>

        <FormField 
        label="Nome da Categoria"
        name="nome"
        value={values.nome}
        onChange={handleOnChange}
        />

        <FormField 
        label="Descrição"
        type="textarea"
        name="descricao"
        value={values.descricao}
        onChange={handleOnChange}
        />

        <FormField 
        label="Cor"
        type="color"
        name="cor"
        value={values.cor}
        onChange={handleOnChange}
        />

        <Button>Cadastrar</Button>
      </form>
      
      {categorias.length === 0 && (
        <div>
          Carregando...
        </div>
      )}

      <ul>
        {categorias.map((categoria) => {
          return(
            <li key={`${categoria.titulo}`}>
              {categoria.titulo}
            </li>
          )
        })}
      </ul>

      <Link to="/">Ir para home</Link>{" "}
    </PageDefault>
  );
};

export default CadastroCategoria;
