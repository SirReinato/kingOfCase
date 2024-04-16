import axios from 'axios'

const apiCapinhas = axios.create({baseURL: "http://localhost:8001/capinha"});

async function getCapinhas() {
    const response = await apiCapinhas.get('/')

    return response.data
}

export {
    getCapinhas
}