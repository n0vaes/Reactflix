import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND_TOP}/categorias`;

const getAll = () => {
    return fetch(`${URL_CATEGORIES}`)
      .then(async (serverResponse) => {
        if (serverResponse.ok) {
          const resposta = await serverResponse.json();
          return resposta;
        }
  
        throw new Error('Não foi possível pegar os dados :(');
      });
  }
  

const getAllWithVideos = () => {
    return fetch(`${URL_CATEGORIES}?_embed=videos`)
        .then(async (serverResponse) => {
           
           if (serverResponse.ok) {
               const resposta = await serverResponse.json();
               return resposta;
           }
           throw new Error('Não foi possível pegar os dados!');
    }); 
}

export default {
    getAllWithVideos,
    getAll
};