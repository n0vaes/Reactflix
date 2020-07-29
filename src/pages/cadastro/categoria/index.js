import React, {useState} from "react";
import { Link } from "react-router-dom";
import PageDefault from "../../../components/PageDefault";
import FormField from "../../../components/FormField";

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

        <div>
          <label>
            Descrição:
            <textarea 
            type="text" 
            value={values.descricao}
            name="descricao"
            onChange={handleOnChange}
            />
          </label>
        </div>

{/*         <FormField 
        label="Descrição"
        type="textarea"
        name="descricao"
        value={values.descricao}
        onChange={handleOnChange}
        /> */}

        <FormField 
        label="Cor"
        type="color"
        name="cor"
        value={values.cor}
        onChange={handleOnChange}
        />

        <button>Cadastrar</button>
      </form>
      
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
