import axios from 'axios'

const fetchExapleApi = (url, searchQuery) => {
  return axios
    .get(`${url}search?query=${searchQuery}`)
    .then((response) => response.data.hits)
}

export { fetchExapleApi }
