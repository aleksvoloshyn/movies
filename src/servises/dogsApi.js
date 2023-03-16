import axios from 'axios'

const getDogsApi = (url) => {
  return axios.get(url).then((response) => response.data.message)
}

const getSuBreedApi = (breed) => {
  return axios
    .get(`https://dog.ceo/api/breed/${breed}/list`)
    .then((response) => response.data.message)
}
const getBreedImg = (breed) => {
  return axios
    .get(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then((response) => response.data.message)
}

export { getDogsApi, getSuBreedApi, getBreedImg }
