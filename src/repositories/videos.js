import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND_TOP}/videos`;

function create(objetoDoVideo) {
  return fetch(`${URL_VIDEOS}?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(objetoDoVideo),
  })
    .then(async (serverResponse) => {
      if (serverResponse.ok) {
        const resposta = await serverResponse.json();
        return resposta;
      }

      throw new Error('Não foi possível cadastrar os dados :(');
    });
}

export default {
  create,
};