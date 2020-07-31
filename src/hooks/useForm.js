import { useState } from 'react';


const useForm = (valoresIniciais) => {
    const [values, setValues] = useState(valoresIniciais);
  
    const setValue = (chave, valor) => {
      setValues({
        ...values,
        [chave]: valor, // nome: 'valor'
      });
    }
    const handleOnChange = (infosDoEvento) => {
      setValue(
        infosDoEvento.target.getAttribute('name'),
        infosDoEvento.target.value
      );
    }
    const clearForm = () => {
      setValues(valoresIniciais);
    }
  
    return {
      values,
      handleOnChange,
      clearForm
    };
  }

  export default useForm;