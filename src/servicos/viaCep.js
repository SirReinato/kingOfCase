import axios from 'axios';


const apiCep = axios.create({ baseURL: 'https://viacep.com.br/ws/' });
async function getCep(cep) {
    const response = await apiCep.get(`/${cep}/json/`);

    return response.data;
}

export { getCep }