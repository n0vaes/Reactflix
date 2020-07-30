import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PageDefault from "../../../components/PageDefault";
import FormField from "../../../components/FormField";
import Button from "../../../components/Button";

const CadastroCategoria = () => {

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000000',
  }

  const[categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);
  
  

  const setValue = (chave, valor) => {
    setValues({
      ...values,
      [chave]: valor, // nome: 'valor'
    })
  }
  function handleOnChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value
    );
  }

  useEffect(() => {
    const URL_CAT = 'http://localhost:8080/categorias';

    fetch(URL_CAT)
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

        setValues(valoresIniciais);

      }}>

        <FormField 
        label="Nome da Categoria"
        type="text"
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
        {categorias.map((categoria, indice) => {
          return(
            <li key={`${categoria}${indice}`}>
              {categoria.nome}
            </li>
          )
        })}
      </ul>

      <Link to="/">Ir para home</Link>{" "}
    </PageDefault>
  );
};

export default CadastroCategoria;
