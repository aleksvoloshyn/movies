import axios from 'axios'

const options = {
  method: 'GET',
  url: 'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random',
  headers: {
    accept: 'application/json',
    'X-RapidAPI-Key': 'bd02d9568bmsh9b50ea6328b2c64p197ec8jsn41596ed3972f',
    'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com',
  },
}

const getSomeJokes = () => {
  return axios
    .request(options)
    .then(function (response) {
      return response.data
    })
    .catch(function (error) {
      console.error(error)
    })
}

export default getSomeJokes
