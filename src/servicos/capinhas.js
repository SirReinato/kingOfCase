import axios from 'axios'

const apiCapinhas = axios.create({baseURL: "https://my-json-server.typicode.com/SirReinato/kingOfCase_Server/capinhas"});

async function getCapinhas() {
    const response = await apiCapinhas.get('/')

    return response.data
}

export {
    getCapinhas
}