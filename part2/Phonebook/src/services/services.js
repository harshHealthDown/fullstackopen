import axios from 'axios'

const url = 'http://localhost:3001/persons'

export const getAll = () => {
    return axios.get(url)
            .then(response=>response.data)
}

export const create = (newObject) => {
    return axios.post(url,newObject)
        .then(response=>response.data)
}

export const delPerson = (id) => {
    return axios.delete(`http://localhost:3001/persons/${id}`)
        .then(response=>response.data)
}

export const update = (id,newObject) => {
    return axios.put(`http://localhost:3001/persons/${id}`,newObject)
        .then(response=>response.data)
}